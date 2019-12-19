<template>
  <v-app id="t">

    <app-bar :showCart="showCart" :showMain="showMainPage"></app-bar>

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

        <!-- Птицы -->
        <v-container v-if="showBird">
            <v-navigation-drawer fixed app mini-variant>
                <v-btn height="100%" min-width="5%" @click="showMainPage">
                    Назад
                </v-btn>
            </v-navigation-drawer>

            <bird-list typeGood="bird"></bird-list>
        </v-container>

        <!-- Игрушки -->
        <v-container v-if="showToys">
            <v-navigation-drawer fixed app mini-variant>
                <v-btn height="100%" min-width="5%" @click="showMainPage">
                    Назад
                </v-btn>
            </v-navigation-drawer>
            <bird-list typeGood="toys"></bird-list>
        </v-container>

        <!-- Еда -->
        <v-container v-if="showFeed">
            <v-navigation-drawer fixed app mini-variant>
                <v-btn height="100%" min-width="5%" @click="showMainPage">
                    Назад
                </v-btn>
            </v-navigation-drawer>

            <bird-list typeGood="feed"></bird-list>
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
    showCard: false,
    showToys: false,
    showFeed: false,

  }),
    methods: {
        showMainPage() {
            this.showMain = true;
            this.showBird = false;
            this.showCard = false;
            this.showToys = false;
            this.showFeed = false;
        },
        showBirdList() {
            this.showMain = false;
            this.showCard = false;
            this.showToys = false;
            this.showBird = true;
            this.showFeed = false;
        },

        showFeedList() {
            this.showFeed = true;
            this.showToys = false;
            this.showMain = false;
            this.showCard = false;
            this.showBird = false;
        },
        showToysList() {
            this.showToys = true;
            this.showMain = false;
            this.showCard = false;
            this.showBird = false;
            this.showFeed = false;
        },
        showCart() {
            this.showMain = false;
            this.showCard = true;
            this.showBird = false;
            this.showToys = false;
            this.showFeed = false;
        },
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