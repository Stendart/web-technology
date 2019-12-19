<template>

    <v-form
            lazy-validation
    >
        <v-text-field
                v-model="name"
                :counter="10"
                label="Имя"
                required

        ></v-text-field>

        <v-text-field
                v-model="phoneNum"
                label="Номер телефона"
                required
        ></v-text-field>
        <v-text-field
                v-model="postIndex"
                label="Индекс"
                required
        ></v-text-field>
        <v-text-field
                v-model="str"
                label="Улица"
                required
        ></v-text-field>
        <v-text-field
                v-model="homeNum"
                label="Дом"
                required
        ></v-text-field>
        <v-text-field
                v-model="fletNum"
                label="Квартира"
                required
        ></v-text-field>



        <v-checkbox

                label="Do you agree?"
                required
        ></v-checkbox>


        <v-btn
                color="error"
                class="mr-4"
                @click="sub"
        >
            Заказать
        </v-btn>

        <!--<v-btn
                color="warning"
                @click="sub"
        >
            Отмена
        </v-btn> -->
    </v-form>

</template>

<script>
    import store from '../store'

    export default {
        name: "FormOrder",

        data: () => ({
            allowSpaces: false,
            match: 'Foobar',
            max: 10,
            model: 'Foobar',
        }),



        methods: {
            sub () {
                const infoUser = {
                    name: this.name,
                    phoneNum: this.phoneNum,
                    postIndex: this.postIndex,
                    str: this.str,
                    homeNum: this.homeNum,
                    fletNum: this.fletNum
                };
                console.log(this.name);
                console.log(this.phoneNum);
                console.log(this.postIndex);
                console.log(this.str);
                console.log(this.homeNum);
                console.log(this.fletNum);

                store.commit('addOrder', infoUser);

                console.log(store.getters.getOrderList)

            },
        },


    }
</script>

<style scoped>

</style>