import firebase from 'firebase/app';

export const state = () => ({
	propiedades: []
})

export const mutations = {

	SET_PROPERTIES (state, propiedades) {
		state.propiedades = propiedades
	}

}

export const actions = {

	createUser ({}, user) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(newUser => {
          firebase.firestore().collection('users').add({
            email: user.email, 
						nombre: user.nombre,
						apellidos: user.apellidos,
						fecha_nacimiento: user.fecha_nacimiento,
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

	addProperty ({}, property) {
		return new Promise((resolve, reject) => {
      firebase.firestore().collection('propiedades').add(property)
        .then(docRef => resolve('Propiedad agregada: ', docRef))
        .catch((err) => reject(err))
    })
	},

	fetchProperties ({ commit }) {
		firebase.firestore().collection('asistencias').onSnapshot(snap => {
      let propiedades = []
      snap.forEach(elem => {
        propiedades.push({
					...elem.data(),
					id: elem.id
				})
      })
      commit('SET_PROPERTIES', propiedades)
    })
	}
}

export const getters = {

}
  