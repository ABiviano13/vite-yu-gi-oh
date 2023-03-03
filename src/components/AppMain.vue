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
                <li v-for="card in cardsArray" class="card">
                    <img class="card_image" :src="card.card_images[0].image_url" alt="">
                    <div class="card_description">
                        <h3 class="card_name">
                            {{ card.name }}
                        </h3>
                        <div class="card_text">
                            {{ card.archetype }}
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>
// @use '../style/partials/variables';

.main-content{
    background-color: purple;

    .container{
        padding: 85px;
        background-color: white;

        .list-cards{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 36px;

            .card{
                background-color: purple;

                .card_image{
                    height: 275px;
                }

                .card_description{
                    padding: 30px 0;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .card_text{
                        padding-top: 35px;
                    }
                }

            }
        }
    }   
}


</style>