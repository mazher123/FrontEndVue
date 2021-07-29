<template>
  <section>
    <div class="controls"></div>

    <ul v-if="hasProducts">
      <product-item
        v-for="product in allProducts"
        :id ="product.id"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :description="product.description"
        :image="product.image"
      >
      </product-item>
    </ul>
    <h3 v-else>
      No products found
    </h3>
  </section>
</template>

<script>
import ProductItem from "../../components/product/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  computed: {
    allProducts() {
      console.log("Fsdf");
      return this.$store.getters.products;
    },
    hasProducts() {
      console.log("Fsdf");
      return this.$store.getters.hasproducts;
    },
  },
};
</script>
