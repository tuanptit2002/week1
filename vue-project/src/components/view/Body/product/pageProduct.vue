<template>
  <div class="page-product">
    <header-page-product></header-page-product>
    <nav-product></nav-product>
    <div class="title">YOU MIGHT ALSO LIKE</div>
    <div class="products">
    <div v-for="product in products" >
        <product :product = product></product>
    </div>
    </div>
  </div>
</template>

<script>
import headerPageProduct from "@/components/view/Body/product/headerPageProduct.vue";
import NavProduct from "@/components/view/Body/product/navProduct.vue";
import Product from "@/components/layout/product.vue";
import {useProductStore} from "@/store/modules/products/product.js";
export default  {
  components:{Product, NavProduct, headerPageProduct},
  data(){
    return {
       products: useProductStore().getAllProducts.slice(0,4)
    }
  }
}
</script>
<style scoped>
.page-product {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-top: 50px;
  width: 579px;
  height: 58px;
  font-family: 'Integral CF' ,sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
  color: #000000;
  margin-bottom: 50px;
}
.products {
  width: 1240px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
