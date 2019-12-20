import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: function (h) { return h(App) },
  created() {
      fb.initializeApp({
          apiKey: "AIzaSyC0u-JpdADjdLEpHuwo7leHaD5fZZqN4v0",
          authDomain: "landing-54667.firebaseapp.com",
          databaseURL: "https://landing-54667.firebaseio.com",
          projectId: "landing-54667",
          storageBucket: "landing-54667.appspot.com",
          messagingSenderId: "493410965760",
          appId: "1:493410965760:web:2a379e3744a042ee803be5"
      });

     // var db = firebase.firestore();

      this.$store.dispatch('fetchData');
  },
}).$mount('#app')
