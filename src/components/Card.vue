<template>
    <v-card
            class="mx-auto"
            max-width="400"
    >
        <v-img
                class="white--text align-end"
                height="100%"
                :src="imgSrc"
        >


            <!--<v-card-title>Top 10 Australian beaches</v-card-title>-->
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    @click="clickfn()"
                    color="orange"
                    text
            >
                Открыть
            </v-btn>


        </v-card-actions>
    </v-card>
</template>

<script>
    import store from '../store'

    export default {
        name: "Card",
        props: ['imgSrc', 'clickfn'],
        methods: {
            showCardShop() {
                console.log(store.getters.getKeyCard);
            }
        }
    }
</script>

<style scoped>

</style>