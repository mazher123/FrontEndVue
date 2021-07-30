<template>
  <section>
    <base-card>
      <h2>Product Add</h2>
      <edit-form @save-data="saveData"
      
      
       :title2="this.title"
       :price2="this.price"
       :description2="this.description"
       :image2="this.image"
       
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
    };
  },
  components: {
    EditForm,
  },
  methods: {
    editData() {
      //   this.$store.dispatch('coaches/registerCoach', data);
      //   this.$router.replace('/coaches');
    },
  },
};
</script>
