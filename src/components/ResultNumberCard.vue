<script>
import store from '../store';

export default {
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <h4>
        Found {{ store.cardsArray.length }} cards
    </h4>

</template>


