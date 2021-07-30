<template>
  <section>
    <base-card>
      <h2>Product Add </h2>
      <product-form @save-data="saveData"></product-form>
    </base-card>
  </section>
</template>


<script>
import ProductForm from '../../components/product/ProductForm.vue';

export default {
  components: {
    ProductForm,
  },
  methods: {
    saveData() {
    //   this.$store.dispatch('coaches/registerCoach', data);
    //   this.$router.replace('/coaches');
    }
  }
};
</script>