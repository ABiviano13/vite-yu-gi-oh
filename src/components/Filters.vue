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

    <input 
    class="input-filter"
    type="text" 
    v-model="store.search"
    placeholder="Filtra per nome"
    >

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.input-filter{
    border: 0;
    border-radius: 10px;
    padding: 10px;
    color: $purple;
}

input[placeholder]::-webkit-input-placeholder{
      color: $purple;
}

</style>