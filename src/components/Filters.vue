<script>
export default {
    data() {
        return {
            search: ''
        }
    }
}

</script>

<template>

    <input 
    type="text" 
    v-model="search"
    placeholder="Filtra per nome"
    >

</template>

<style lang="scss" scoped>

</style>