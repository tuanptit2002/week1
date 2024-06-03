<template>
  <div class="body-product">
    <div class="body">
    <nav-bar></nav-bar>
    <body-product></body-product>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import Product from "@/components/layout/product.vue";
import NavBar from "@/components/view/Body/NavBar.vue";
import BodyProduct from "@/components/view/Body/BodyProduct.vue";
export default defineComponent({
  components: {Product,NavBar, BodyProduct}
})
</script>
<style scoped>
.body-product {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  width: 1240px;
  display: flex;
  justify-content: space-between;
}



</style>
