import * as firebase from 'firebase'
export const strict = false
export const state = () => ({
	propiedades: [],
  user: ''
})

export const mutations = {

  SET_USER (state, payload) {
    state.user = payload
  },

	SET_PROPERTIES (state, propiedades) {
		state.propiedades = propiedades
	}

}

export const actions = {

	createUser ({}, user) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
        .then(newUser => {
          firebase.firestore().collection('users').add({
            email: user.email,
						nombre: user.nombre,
						apellidos: user.apellidos,
            authId: newUser.user.uid
          })
					.then(res => {
						resolve(res)
					})
					.catch(err => {
						reject(err)
					})
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },

  login ({}, user) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
        .then(resp => {
          resolve(resp)
        })
        .catch(function(error) {
          console.log(error)
          reject(error)
        })
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },

	addMensaje({}, mensaje){
		let msg = {
			idP: mensaje.idP,
			nombre: mensaje.nombre,
			apellido: mensaje.apellido,
			mail: mensaje.mail,
			genero: mensaje.genero,
			msg:  mensaje.msg
		}
		return new Promise((resolve, reject) => {
			firebase.firestore().collection('mensajes').add(msg)
				.then(resp => {
          resolve(resp)
        })
				.catch((err) => reject(err))
		})
	},

	addProperty ({}, property) {
		let key
		let imageUrl
		let newProperty = {
			uid : property.uid,
			titulo: property.titulo,
			calle: property.calle,
			numero: property.numero,
			numInt: property.numInt,
			colonia: property.colonia,
			delegacion: property.delegacion,
			servicios: property.servicios,
      descripcion : property.descripcion,
      precio: property.precio
		}
		return new Promise((resolve, reject) => {
      firebase.firestore().collection('propiedades').add(newProperty)
        .then(docRef => {
					key = docRef.id
					const filename = property.image.name
					const ext = filename.slice(filename.lastIndexOf('.'))
					return firebase.storage().ref().child('casas/' + key + '.' + ext).put(property.image)
					.then(fileData => {
						let imgRef = fileData.metadata.fullPath
						return firebase.storage().ref().child(imgRef).getDownloadURL().then(function(imgUrl){
							return firebase.firestore().collection('propiedades').doc(key).update({
								imgUrl : imgUrl
							}).then(
								resolve('Propiedad agregada: ', docRef)
							)
						})
					})
				})
        .catch((err) => reject(err))
    })
	},

	delProperty({},property){

		let idP = property.id
		return new Promise((resolve, reject) => {
			firebase.firestore().collection('propiedades').doc(idP).delete()
				.then(docRef => {
					resolve("Propiedad eliminada", docRef)
				})
				.catch((err) => reject(err))
		})
	},


	editProperty ({}, property) {
		let key
		let imageUrl
		let updated = {
			titulo: property.titulo,
			calle: property.calle,
			numero: property.numero,
			numInt: property.numInt,
			colonia: property.colonia,
			delegacion: property.delegacion,
			servicios: property.servicios,
      descripcion : property.descripcion,
      precio: property.precio
    }
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('propiedades').doc(property.id).update(updated)
        .then(() => {
          resolve()
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
	},

	fetchProperties ({ commit }) {
		firebase.firestore().collection('propiedades').onSnapshot(snap => {
      let propiedades = []
      snap.forEach(elem => {
        propiedades.push({
					...elem.data(),
					id: elem.id
				})
      })
      commit('SET_PROPERTIES', propiedades)
    })
  },

  checkUser ({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('SET_USER', user)
      } else {
        commit('SET_USER', null)
      }
    })
  }
}

export const getters = {

  getPropiedades (state) {
    return state.propiedades
  },

  getUser (state) {
    return state.user
  },

  //getUserId (state) {
    //return state.user.uid;
  //},

  getPropiedadById: (state) => (id) => {
    return state.propiedades.find(elem => {
      return elem.id === id
    })
  },

  getPropiedadesByUserId: (state) => (uid) => {
    return state.propiedades.filter(elem => {
      return elem.uid === uid
    })
  },
}
