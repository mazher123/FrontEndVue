export default {
    registerCoach(state, payload) {
        state.product.push(payload);
    },
    setProduct(state, payload) {
        console.log("inside mutation set product");
        state.product = payload;
    },

    setEditProduct(state, payload) {
        state.editProduct = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};