import { createStore } from "vuex";

import productStore from "./modules/products/index.js";

const store = createStore({
    modules: {
        products: productStore,
    },
});

export default store;