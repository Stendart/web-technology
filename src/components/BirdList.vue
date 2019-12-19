<template>

<v-container>
    <v-container v-for="bird in birds" :key="bird.id">
        <v-card
                class="mx-auto"
                max-width="70%"
                outlined
                color="#F0FFF0"
                elevation="6"
        >
            <v-list-item
                    three-line>
                <v-list-item-content>
                    <div class="overline mb-4">Попугай</div>
                    <v-list-item-title class="headline mb-1">{{ bird.name }}</v-list-item-title>
                    <v-list-item-title class="headline mb-1">{{ bird.prise }} руб</v-list-item-title>
                    <v-list-item-subtitle>{{ bird.description}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                        tile
                        size="30%"
                        color="grey"

                >
                    <v-img :src=bird.src></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
                <v-btn @click="addGood({name: bird.name, prise: bird.prise})">В корзину</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</v-container>




</template>

<script>
    import store from '../store'
    export default {
        name: "Banner",
        data: () => ({

            birds: store.getters.getBirdsList,

        }),

        methods: {
            addGood(good) {
                store.commit('addGood', good);
                console.log(this.getGoodList());
            },

            getGoodList(){
                return store.getters.getGoodList
            }
        }
    }
</script>

<style scoped>

</style>