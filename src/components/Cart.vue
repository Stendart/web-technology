<template>
    <v-container>
        <v-simple-table id="cart" align="center" v-if="!showForm">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in goods" >
                    <td>{{ item.name }}</td>
                    <td>{{ item.prise }}</td>
                    <td width="25px">
                        <v-btn @click="goods.splice(index, 1)">
                            <v-img src="../../public/static/delete.png"> </v-img>Удалить
                        </v-btn>
                    </td>
                </tr>

                </tbody>
                <v-btn  width="100%" color="red" @click="addOrder">Оформить заказ</v-btn>
            </template>
        </v-simple-table>
        <FormOrder v-if="showForm"></FormOrder>
    </v-container>
</template>

<script>
    import store from '../store'
    import FormOrder from './FormOrder'

    export default {
        name: "Cart",

        components: {
            FormOrder,
        },

        data () {
            return {
                showForm: false,
                goods: store.getters.getGoodList
            }
        },
        methods: {


            addOrder() {


                this.showForm = true;
            }
        }
    }
</script>

<style scoped>
#cart{
    width: 70%;
}
</style>