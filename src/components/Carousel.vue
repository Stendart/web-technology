<template>

    <v-carousel light hide-delimiter-background  id="test">
        <v-carousel-item
                v-for="(bird) in birds"
                :key="bird.name"
        >
            <v-sheet
                    height="100%"
                    tile

            >
                <v-row id="test"
                        class="fill-height"
                        align="center"
                        justify="center"

                >

                    <img :src='bird.src' />


                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>

</template>

<script>
    export default {
        name: "Carousel",
        data() {
            return {
                colors: [
                    'primary',
                    'secondary',
                    'yellow darken-2',
                    'red',
                    'orange',
                ],
                birds: [
                    {
                        name: 'Волнистый',
                        prise: 200,
                        src: '../static/volnystyi1.jpg'  //https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild6531-3732-4462-a337-333237636234__1.jpg
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
                ]
            }
        }
    }
</script>

<style scoped>
#test{
    background-color: #00c853;
    box-shadow: 0px 0px 10px rgb(0,0,0);
}
</style>