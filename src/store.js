import { reactive } from 'vue';

const store = reactive ({
    cardsArray: [],
    search: '',
    selectResult: ''
});

export default store;