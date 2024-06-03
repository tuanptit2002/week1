<template>
  <div class="products">
    <div class="product" v-for="product in products">
      <product :product = product></product>
    </div>
  </div>
  <div class="line">

  </div>
</template>
<script >
import Product from "@/components/layout/product.vue";

export  default  {
  components:{Product},
  data(){
    return {
      products:[
        {
          img:'../../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:4.5,
          price:120
        },
        {
          img:'../../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:3.5,
          price:120
        },
        {
          img:'../../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:4.5,
          price:120
        },
      ]
    }
  }
}
</script>

<style scoped>
.products {
  width: 925px;
  height: 1550px;
  border: 1px solid #0000001A;
  display: flex;
  justify-content: space-evenly ;
}
.product{
  margin-top: 20px;
}

</style>
