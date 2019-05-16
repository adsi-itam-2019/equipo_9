import * as firebase from 'firebase'
export const strict = false
export const state = () => ({
	propiedades: [
    { title: 'Casa no.98', address: 'Guerrero no. 12', price:'$1,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'1' },
    { title: 'Casa no.2', address: 'Guerrero no. 24', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'2' },
    { title: 'Casa no.43', address: 'Guerrero no. 321', price:'$3,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'3' },
    { title: 'Casa no.19', address: 'Guerrero no. 465', price:'$4,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'4' },
    { title: 'Casa no.11', address: 'Guerrero no. 532', price:'$5,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'5' },
    { title: 'Casa no.13', address: 'Guerrero no. 632', price:'$6,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'6' },
    { title: 'Casa no.2', address: 'Guerrero no. 62', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'7' },
    { title: 'Casa no.6', address: 'Guerrero no. 24', price:'$8,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'8' },
    { title: 'Casa no.5', address: 'Guerrero no. 4', price:'$9,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'9' },
    { title: 'Casa no.32', address: 'Guerrero no. 243', price:'$1,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'10' },
    { title: 'Casa no.1', address: 'Guerrero no. 98', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'11' },
    { title: 'Casa no.21', address: 'Guerrero no. 65', price:'$4,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'12' },
    { title: 'Casa no.56', address: 'Guerrero no. 432', price:'$5,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'13' },
    { title: 'Casa no.78', address: 'Guerrero no. 643', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'14' },
    { title: 'Casa no.9', address: 'Guerrero no. 987', price:'$6,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'15' },
    { title: 'Casa no.35', address: 'Guerrero no. 912', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'16' },
    { title: 'Casa no.90', address: 'Guerrero no. 513', price:'$8,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'17' },
    { title: 'Casa no.75', address: 'Guerrero no. 892', price:'$2,000', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id:'18' }
  ],
  user: null
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


	editProperty ({}, property) {
		//let key
		//let imageUrl
		/*let newProperty = {
      id: property.id,
      imgUrl: property.img
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
		}*/
    let up = {}
    
    up['/propiedades/'+property.id] = property;
    return new Promise((resolve, reject) => {
      firebase.database().ref().update(up)})
      //.catch((err) => reject(err));
		/*
    return new Promise((resolve, reject) => {
      firebase.firestore().ref().update(up)
        .then(docRef => {
					//key = docRef.id
					//const filename = property.image.name
					//const ext = filename.slice(filename.lastIndexOf('.'))
					//return firebase.storage().ref().child('casas/' + key + '.' + ext).put(property.image)
  
          }).then(fileData => {
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
    */
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
