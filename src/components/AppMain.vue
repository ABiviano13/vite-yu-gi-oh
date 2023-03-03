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
                <li v-for="(card, i) in cardsArray" :key="i">
                    <img :src="card.card_images.image_url" alt="">
                    {{ card.name }}
                    {{ card.archetype }}
                </li>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>

</style>