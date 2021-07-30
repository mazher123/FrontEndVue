<template>
  <li>
    <div class="content">
      <div class="product-image">
        <img :src="image" alt="image" style="width:100%" />
      </div>
      <div class="product-content">
        <h4>Title : {{ title }}</h4>
        <h4>Price : {{ price }}</h4>
        <p><b>Description:</b> {{ description }}</p>
      </div>
    </div>

    <div>
      <div class="actions">
        <base-button link mode="outline" @click="productEdit">
          Edit
        </base-button>

        <base-button @click="deleteProduct"> Delete </base-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "price", "description", "image"],
  emits: ["delete-data", "edit-data"],
  computed: {},
  methods: {
    deleteProduct() {
      console.log("inside function");
      this.$emit("delete-data", this.id);
    },
    productEdit() {
       console.log("inside edit function");
      this.$emit("edit-data", this.id);
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

  margin: 20px;
}

.product-content {
  width: 80%;
  text-align: initial;
  margin: 14px;
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
