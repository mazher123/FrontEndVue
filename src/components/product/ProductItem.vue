<template>
  <li>
    <div class="content">
      <div class="product-image">
        <img :src="image" alt="image" style="width:100%" />
      </div>
      <div class="product-content">
        <h4>Name : {{ title }}</h4>
        <h4>Price : {{ price }}</h4>
        <p><b>Description:</b> {{ description }}</p>
      </div>
    </div>

    <div>
      <div class="actions">
        <base-button link mode="outline" :to="productEdit"> Edit </base-button>

        <base-button link :to="productEdit"> Delete </base-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "price", "description", "image"],
  computed: {
    productEdit() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  margin-bottom: 20px;
  border: 3px solid #424242;
}
.product-image {
  width: 20%;
}

.product-content {
  width: 80%;
  text-align: initial;
}
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
