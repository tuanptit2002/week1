<template>

  <div><img src="../../assets/shirt.png" alt=""></div>
  <div class="product-name">{{product.name}}</div>
  <div class="rating" >
    <v-rating
        v-model="product.rating"
        active-color="yellow-darken-2"
        :half-increments="true"
        color="white"
        :length="5"
        density="compact"
        readonly
    ></v-rating>
    <p class="text-rating">{{ product.rating }}/5</p>
  </div>
  <div class="product-price">${{product.price}}</div>
</template>
<script>
export default {
    props:['product']
}
</script>

<style>
.product-price{
  width: 55px;
  height: 32px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
  color: black;
}
.product-name{
  width: 225px;
  height: 27px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 18spx;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: black;
}
.rating{
  display: flex;
}
</style>
