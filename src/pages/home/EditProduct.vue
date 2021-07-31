<template>
  <section>
    <base-card>
      <h2>Product Update</h2>
      <edit-form
        :id2="this.product[0].id"
        :title2="this.product[0].title"
        :price2="this.product[0].price"
        :description2="this.product[0].description"
        :image2="this.product[0].image"
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
        console.log("insode update function");
     this.$store.dispatch("products/updateProducts", data);
     this.$router.replace("/products");
    }
  },
};
</script>
