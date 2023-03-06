<script>
import store from '../store';

export default {
    data() {
        return {
            search: '',
            store
        }
    }
}

</script>

<template>

    <div class="filters-input">

        <input 
            class="input-filter"
            type="text" 
            @keyup.enter="$emit('onEnter')"
            v-model="store.search"
            placeholder="Filtra per nome"
        >

        <div class="result-input">
            {{ store.search }}
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.filters-input{
    color: $white;

    .input-filter{
        border: 0;
        border-radius: 10px;
        padding: 10px;
        color: $purple;
        margin: 10px;
    }

    .result-input{
        text-decoration: underline;
        text-align: center;
    }
}

input[placeholder]::-webkit-input-placeholder{
      color: $purple;
}

</style>