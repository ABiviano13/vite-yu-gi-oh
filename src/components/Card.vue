<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}

</script>

<template>

    <li class="card">
        <img class="card_image" :src="image" alt="">
        <div class="card_description">
            <h3 class="card_name">
                {{ name }}
            </h3>
            <div class="card_text">
                {{ text }}
            </div>
        </div>
    </li>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.card{
    background-color: purple;

    .card_image{
        height: 275px;
    }

    .card_description{
        padding: 30px 0;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;

        .card_text{
            padding-top: 35px;
        }
    }

}

</style>