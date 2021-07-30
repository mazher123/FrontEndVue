<template>
  <section>
    <base-card>
      <h2>Product Add</h2>
      <edit-form
        @save-data="saveData"
        :id2="this.product[0].id"
        :title2="this.product[0].title"
        :price2="this.product[0].price"
        :description2="this.product[0].description"
        :image2="this.image"
        @edit-data="editData"
      ></edit-form>
    </base-card>
  </section>
</template>

<script>
import EditForm from "../../components/product/EditProductForm.vue";

export default {
  data() {
    return {
      title: "ghfgh",
      description: "fgdfgdfgdfg",
      price: "4234",
      image: "gdfgdfgdfgd",
      product:[]
    };
  },
  components: {
    EditForm,

  
  },

  created() {
    this.loadSingleProduct();
  },
  methods: {
    loadSingleProduct() {
         try {
         this.product = this.$store.getters['products/singleProduct']
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },

    editData(data){
        console.log("insode function");
     this.$store.dispatch("products/updateProducts", data);
     this.$router.replace("/products");
    }
  },
};
</script>
