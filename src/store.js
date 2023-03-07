import { reactive } from 'vue';

const store = reactive ({
    cardsArray: [],
    search: '',
    selectResult: 10
});

export default store;