<template>
  <v-app id="t">

    <app-bar :clickfn="showCart"></app-bar>

    <v-content >
        <HelloWorld  v-if="showMain"/>

        <Carousel  v-if="showMain"></Carousel>

        <v-container v-if="showMain" class="test" >
            <v-row justify="space-between">
                <v-col>
                    <Card
                            imgSrc="../static/CardBird.jpg"
                            :clickfn="showBirdList"
                    ></Card>
                </v-col>
                <v-col>
                    <Card
                            imgSrc="../static/CardToys.jpg"
                            :clickfn="showToysList"
                    ></Card>
                </v-col>
                <v-col>
                    <Card
                            imgSrc="../static/Cardfeed.jpg"
                            :clickfn="showFeedList"
                    ></Card>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-if="showBird">
            <v-navigation-drawer fixed app mini-variant>
                <v-btn height="100%" min-width="5%" @click="showMainPage">
                    Назад
                </v-btn>
            </v-navigation-drawer>
            <bird-list></bird-list>
        </v-container>


        <v-flex offset-2 v-if="showCard">
            <cart></cart>
        </v-flex>



    </v-content>


  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import AppBar from './components/AppBar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import BirdList from './components/BirdList';
import Cart from './components/Cart';

export default {
  name: 'App',

  components: {
      BirdList,
    HelloWorld,
    Carousel,
    AppBar,
    Card,
    Cart
  },

  data: () => ({
    showMain: true,
    showBird: false,
    showCard: false

  }),
    methods: {
        showMainPage() {
            this.showMain = true;
            this.showBird = false;
            this.showCard = false;
        },
        showBirdList() {
            this.showMain = false;
            this.showCard = false;
            this.showBird = true;
        },
        showCart() {
            this.showMain = false;
            this.showCard = true;
            this.showBird = false;
        },
        showFeedList() {
            console.log('show feed')
        },
        showToysList() {
            console.log('show toy')
        }
    }
};
</script>
<style scoped>
    .test{

        /*background-color: #00c853;*/

    }
    #t{
        background-color: #5efc82;
    }
</style>