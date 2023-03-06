<script>
import axios from 'axios';
import store from '../store';

import Card from './Card.vue';
import ResultCard from './ResultNumberCard.vue';

import Filters from './Filters.vue';

export default {
    components: {
        Card,
        ResultCard,
        Filters
    },
    data() {
        return {
            store
            
        }

    },
    methods: {
        fechCards() {
            const search = this.store.search
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
                params: {
                    num: 20,
                    offset: 0,
                    fname: search
                }
            })
            .then((res) => {
                console.log(res.data.data)
                this.store.cardsArray = res.data.data
            })
        },
        onSearchFn() {
            this.fechCards()
        }
    },
    created() {
        this.fechCards()
    }
}

</script>

<template>

    <main class="main-content">
        <div class="container-result-filters">
            <ResultCard></ResultCard>
            <Filters @onEnter="onSearchFn()"></Filters>
        </div>
        <div class="container">

            <ul class="list-cards">
                <Card 
                v-for="card in store.cardsArray" 
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

    .container-result-filters{
        background-color: $black;
        padding: 20px;
        color: $white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

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