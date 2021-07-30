<template>
  <section>
    <base-card>
      <div class="controls">
        <base-button link to="/add-product"> Add Product </base-button>
      </div>
      <h2>Products</h2>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="hasProducts">
        <product-item
          v-for="product in allProducts"
          :id="product.id"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :description="product.description"
          :image="product.image"
          @delete-data="deleteData"
          @edit-data="editData"
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

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    allProducts() {
      console.log("Fsdf");
      return this.$store.getters["products/products"];
    },
    hasProducts() {
      console.log("Fsdf");
      return this.$store.getters["products/hasproducts"];
    },
  },

  created() {
    this.loadProducts();
  },
  methods: {
    // setFilters(updatedFilters) {
    //   this.activeFilters = updatedFilters;
    // },
    async loadProducts(refresh = false) {
      console.log("am here");
      this.isLoading = true;
      try {
        await this.$store.dispatch("products/loadProducts", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },

    async deleteData(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("products/deleteProduct", id);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },

    async editData(id) {
      try {
        await this.$store.dispatch("products/editProduct", id);
        this.$router.replace("/products/" + id);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
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
