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
    type="text" 
    v-model="store.search"
    placeholder="Filtra per nome"
    >

</template>

<style lang="scss" scoped>

</style>