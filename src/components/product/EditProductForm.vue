<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title"> Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !price.isValid }">
      <label for="price"> price</label>
      <input
        type="number"
        id="price"
        v-model.trim="price.val"
        @blur="clearValidity('price')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description"> Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      >
      </textarea>
    </div>

    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="title"> Image</label>
      <input
        type="file"
        accept="image/*"
        id="image"
        @change="onFileChange($event)"
      />
    </div>
    <base-button> Save </base-button>
  </form>
</template>

<script>
export default {
  emits: ["edit-data"],
  props: ["title2", "description2", "price2", "image2"],
  data() {
    return{
      title: {
        val: this.$props.title2,
        isValid: true,
      },

      description: {
        val: this.$props.description2,
        isValid: true,
      },
      price: {
        val: this.$props.price2,
        isValid: true,
      },
      image: {
        val: null,
        isValid: true,
      },

      formIsValid: true,
    };
  },
  methods: {
    onFileChange(event) {
      this.image.val = event.target.files[0];
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.title.val === "") {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        title: this.title.val,
        description: this.description.val,
        price: this.price.val,
        image: this.image.val,
      };

      this.$emit("edit-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  height: 20px;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
