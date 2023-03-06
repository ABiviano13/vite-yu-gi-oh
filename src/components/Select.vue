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

    <div class="container-select">
        <select 
        id="select-card"
        v-model="store.selectResult"
        @change="$emit('onChangeOption')"
        >
            <option value="">
                10
            </option>
            <option value="">
                20
            </option>
            <option value="">
                30
            </option>
            <option value="">
                40
            </option>
            <option value="">
                50
            </option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

#select-card{
    border: 0;
    border-radius: 10px;
    padding: 10px;
    color: $purple;
    margin: 10px;
}

</style>