<script>
import axios from 'axios'

export default {
    data() {
        return {
            cardsArray: ['']
            
        }

    },
    methods: {
        fechCards() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then((res) => {
                console.log(res.data.data)
                this.cardsArray = res.data.data
            })
        }
    },
    created() {
        this.fechCards()
    }
}

</script>

<template>

    <main class="main-content">
        <div class="container">

            <ul>
                <li v-for="card in cardsArray">
                    <img :src="card.card_images[0].image_url" alt="">
                    <h3>
                        {{ card.name }}
                    </h3>
                    {{ card.archetype }}
                </li>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>

</style>