<template>
  <div class="nav-product">
    <RouterLink class="product" to="">Product Details</RouterLink>
    <RouterLink class="rating" to="/review-rating">Rating & Reviews</RouterLink>
    <RouterLink class="faq" to="">FAQs</RouterLink>
  </div>
  <div class="line"></div>
  <router-view></router-view>
</template>
<style scoped>
.nav-product {
  margin-top: 60px;
  width: 1240px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.nav-product RouterLink {
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099 !important;

}
.product{
  text-decoration: none;
  width: 133px;
  height: 14px;
}
.rating{
  text-decoration: none;
  width: 154px;
  height: 14px;
}
.faq{
  text-decoration: none;
  width: 47px;
  height: 14px;
}

.line{
  width: 1240px ;
  border: 1px solid #0000001A
}
a {
  color: #00000099 !important;
}
</style>
<script setup>
</script>
