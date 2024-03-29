import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from 'firebase'

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
        toys: [
        {
            name: 'Лесенка',
            prise: 100,
            src: '../static/ladder.jpg',
            description: 'Это игрушка'
        },
        {
            name: 'Качеля',
            prise: 50,
            src: '../static/swing.jpg'
        },

    ],
      feeds: [
        {
            name: 'Корм Виткрафт',
            prise: 70,
            src: '../static/vitcraft.jpg',
            description: 'Это корм'
        },
        {
            name: 'Корм Попугайчик',
            prise: 50,
            src: '../static/priroda.jpg'
        },

    ],
    goods: [

    ],

    orderInfo: {

    }
  },
  getters: {
    /*getKeyCard: state => {
      return state.keyCard;
    },*/

    getBirdsList: state => {
        return state.birds;
    },
      getToysList: state => {
        return state.toys;
    },
      getFeedList: state => {
        return state.feeds;
    },

     getGoodList: state => {
         return state.goods;
     },
     getOrderList: state => {
         return state.orderInfo;
     },

  },
  mutations: {
    addGood(state, good) {
        state.goods.push(good);
    },

    addOrder(state, order) {
        state.orderInfo.name = order.name;
        state.orderInfo.phoneNum = order.phoneNum;
        state.orderInfo.postIndex = order.postIndex;
        state.orderInfo.str = order.str;
        state.orderInfo.homeNum = order.homeNum;
        state.orderInfo.fletNum = order.fletNum;

        state.orderInfo.goods = state.goods;
    }
  },
  actions: {
      async addToDB({commit}, order) {
          try {
              const orderInf = {
                  name: order.name,
                  phoneNum: order.phoneNum,
                  postIndex: order.postIndex,
                  str: order.str,
                  homeNum: order.homeNum,
                  fletNum: order.fletNum,

                  goods: this.getters.getGoodList,
              };
              console.log(orderInf);
              const resFB = await fb.database().ref('orderInfo').push(orderInf);
                console.log(resFB);
          } catch (error) {
              throw error;
          }
      },

      async fetchData({commit}) {
          try{
              const dbVal = await fb.database().ref('orderInfo').once('value');
              const dbRes = dbVal.val();
              console.log(dbRes);

          }
           catch (error) {
              throw error;
          }
      }
  },
  modules: {
  }
})
