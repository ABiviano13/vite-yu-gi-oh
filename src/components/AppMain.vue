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
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0')
            // .then((res) => {

            // })
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
                    personaggio
                </li>
            </ul>

        </div>
    </main>

</template>

<style lang="scss" scoped>

</style>