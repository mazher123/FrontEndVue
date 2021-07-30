export default {
    products(state) {
        //console.log("am here");

        return state.product;
    },
    singleProduct(state) {
        console.log("inside getters");

        return state.editProduct;
    },

    hasproducts(state) {
        return state.product && state.product.length > 0;
    },

    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    },
};