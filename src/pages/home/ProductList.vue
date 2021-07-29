<template>
  <section>
    <div class="controls"></div>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.firstName }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    filteredProducts() {
        console.log("Fsdf");
      return this.$store.getters["products/products"];
    },
  },
};
</script>
