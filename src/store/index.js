import { createStore } from "vuex";

import productStore from "./modules/products/index.js";
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        products: productStore,
        auth: authModule

    },
});

export default store;