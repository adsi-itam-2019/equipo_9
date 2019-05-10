import * as firebase from 'firebase'

export default function ({ redirect, store }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      return redirect('/login')
    } else {
      store.commit('SET_USER', user)
    }
  })
}