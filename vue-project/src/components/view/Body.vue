<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
<script>
import Product from "@/components/layout/product.vue";
import CommentProduct from "@/components/layout/commentProduct.vue";
import BodyHome from "@/components/view/Body/BodyHome.vue";
import BodyProducts from "@/components/view/Body/BodyProducts.vue";
import PageProduct from "@/components/view/Body/product/pageProduct.vue";

export default {
  components: {PageProduct, CommentProduct, Product, BodyHome, BodyProducts},

  data() {
    return {

    }
  }
}
</script>
