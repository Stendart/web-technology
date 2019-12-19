import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyCard: 'bird', //bird, feed or toys
    birds: [
        {
            name: 'Волнистый',
            prise: 200,
            src: '../static/volnystyi1.jpg',
            description: 'Это птица'
        },
        {
            name: 'Корелла',
            prise: 600,
            src: '../static/Korella.png'
        },
        {
            name: 'Жако',
            prise: 1200,
            src: '../static/jako.png'
        },
        {
            name: 'Неразлучки',
            prise: 1200,
            src: '../static/nerazluch.gif'
        },
    ],
    goods: [

    ]
  },
  getters: {
    getKeyCard: state => {
      return state.keyCard;
    },

    getBirdsList: state => {
        return state.birds;
    },

     getGoodList: state => {
         return state.goods;
     },

  },
  mutations: {
    addGood(state, good) {
        state.goods.push(good);
    }
  },
  actions: {
  },
  modules: {
  }
})
