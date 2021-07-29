import { createStore } from "vuex";

import productsModule from "./modules/products/index.js";

const store = createStore({
    modules: {
        products: productsModule,
    },
});

export default store;