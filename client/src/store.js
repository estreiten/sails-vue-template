import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:1337/api'

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    test: () => {
      return new Promise((resolve, reject) => {
        Vue.http
          .get('test')
          .then(resp => {
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
