export default {

    products(state) {
        console.log("am here");
        return state.product;
    },

    hasproducts(state) {
        return state.product && state.product.length > 0;
    }
};