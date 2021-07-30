<template>
  <section>
 
    <base-card>
      <h2>Product Add</h2>
      <product-form @save-data="saveData"></product-form>
    </base-card>
  </section>
</template>

<script>
import ProductForm from "../../components/product/ProductForm.vue";

export default {
  components: {
    ProductForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("products/registerProducts", data);
      this.$router.replace("/products");
    },
  },
};
</script>
