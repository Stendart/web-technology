<template>

        <v-app-bar
                app
                color="#009624"
                dark
                hide-on-scroll

        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />

                <p class="font-weight-bold">BIRDerland</p>
            </div>

            <v-spacer></v-spacer>

            <v-btn
                    @click="showBasket()"
                    target="_blank"
                    text
            >
                <span class="mr-2">Корзина</span>
                <v-img src="../../public/static/shopping_car.png"></v-img>
            </v-btn>
        </v-app-bar>

</template>

<script>
    export default {
        name: "AppBar",
        props:['clickfn'],
        methods: {
            showBasket() {
                this.clickfn();
            }
        }
    }
</script>

<style scoped>

</style>