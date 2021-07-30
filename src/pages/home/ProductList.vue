<template>
  <section>

    <base-card>

    <div class="controls">
       <base-button link  to="/add-product"> Add Product </base-button>
    </div>
    <h2>Products</h2>

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

    </base-card>
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
      return this.$store.getters['products/products'];
     
    },
    hasProducts() {
      console.log("Fsdf");
      return this.$store.getters['products/hasproducts'];
    },
  },
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
