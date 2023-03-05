<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
    components: {
        Card
    },
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
                <Card 
                v-for="card in cardsArray" 
                :image="card.card_images[0].image_url"
                :name="card.name"
                :text="card.archetype"
                ></Card>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main-content{
    background-color: $purple;

    .container{
        padding: 85px;
        background-color: $white;

        .list-cards{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 36px;
        }
    }   
}


</style>