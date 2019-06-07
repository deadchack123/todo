// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

const VueFire = require('vuefire')
import * as firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
 projectId: 'todolist-2e247', 
 databaseURL: 'https://todolist-2e247.firebaseio.com'
})

export const db = firebase.firestore()

  


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    this.$store.dispatch("addCollection");
  }
})
