<template>
    <v-simple-table id="cart" align="center">
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in goods" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.prise }}</td>
                <td width="25px"> <v-btn> <v-img src="../../public/static/delete.png"> </v-img>Удалить</v-btn></td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    import store from '../store'

    export default {
        name: "Cart",
        data () {
            return {
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                    },
                ],
                goods: store.getters.getGoodList
            }
        },
    }
</script>

<style scoped>
#cart{
    width: 70%;
}
</style>