<template>
  <li>
    
    <h4>{{ title }}</h4>
        <h4>{{ description }}</h4>
            <h4>{{ price }}</h4>
                <h4>{{ image }}</h4>
    <div>
      

      <div class="actions">
        <router-link :to="productEdit"> Edit </router-link>
      </div>
    </div>
  </li>
</template>

<script>


export default {
    
    props: ['id','title', 'price' , 'description' ,'image'],
    computed:{
    
        productEdit(){
            return this.$route.path +'/' + this.id;
        }
    }
}
</script>


<style scoped>
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
