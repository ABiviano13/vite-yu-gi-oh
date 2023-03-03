<script>
import axios from 'axios'

export default {
    data() {
        return {
            cardsArray: []
            
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

            <ul class="list-cards">
                <li v-for="card in cardsArray">
                    <img class="card_image" :src="card.card_images[0].image_url" alt="">
                    <h3 class="card_name">
                        {{ card.name }}
                    </h3>
                    <div class="card_text">
                        {{ card.archetype }}
                    </div>
                </li>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>
// @use '../style/partials/variables';

.main-content{
    // background-color: $purple;

    .container{
        padding: 85px;
    }   
    .list-cards{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 36px;

        .card_image{
            height: 275px;
        }
    }
}


</style>