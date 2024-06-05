<template>
    <div class="header-product">
      <images-product></images-product>
      <product></product>
    </div>
</template>

<script>
import imagesProduct from "@/components/view/Body/product/imagesProduct.vue";
import product from "@/components/view/Body/product/product.vue";

export default {
components:{product, imagesProduct}
}

</script>
<style scoped>
.header-product {
  width: 1240px;
  display: flex;
  justify-content: space-between;
}
</style>
