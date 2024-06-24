<template>
  <div class="detail-product">
    <div class="name-product">One Life Graphic T-shirt</div>
    <div>
      <div class="rating" >
        <v-rating
            v-model="rating"
            active-color="yellow-darken-2"
            :half-increments="true"
            color="white"
            :length="5"
            density="compact"
            readonly
        ></v-rating>
        <p class="text-rating">{{ rating }}/5</p>
      </div>
    </div>
    <div class="price">
      <div class="prices">
        <div class="price-1">$260</div>
        <div class="price-2">$300</div>
      </div>
      <div class="sale">-40%</div>
    </div>
    <div class="description">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</div>
    <div class="line"></div>
    <div class="title-color">Select Colors</div>
    <div class="colors">
      <div class="color-1"></div>
      <div class="color-2"></div>
      <div class="color-3"></div>
    </div>
    <div class="line"></div>
    <div class="title-size">Choose Size</div>
    <div class="sizes">
      <div class="small">Small</div>
      <div class="medium">Medium</div>
      <div class="large">Large</div>
      <div class="x-large">X-Large</div>
    </div>
    <div class="line"></div>
    <div class="btn">
      <div class="btn-count">
        <button class="down"><img src="../../../../assets/sub.png" alt=""></button>
        <div class="count">1</div>
        <button class="up"><img src="../../../../assets/add.png"></button>
      </div>
      <div class="btn-add">
        <button class="add" @click="addProduct">Add to Cart</button>
      </div>
    </div>
    
  </div>
</template>
<script>
import {useCartStore} from "@/store/modules/carts/cart.js";
import Swal from "sweetalert2";
export default {
  data: () => ({
    rating: 4.5,
  }),
  methods:{
    addProduct(){
      const product = {
        img: '../../../assets/shirt-1.png',
            name: 'Gradient Graphic T-shirt',
          size: 'Large',
          color: 'red',
          price: 158
      }
      useCartStore().addProduct(product).then(() => {
        console.log(("oke vao roi"))
        Swal.fire({
          title: "Thêm vào giỏ hàng thành công!",
          text: "You clicked the button!",
          icon: "success"
        });
      });


    }
  }
}
</script>
<style scoped>
.detail-product{
  width: 600px;
  height: 530px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name-product {
  width: 600px;
  height: 48px;
  font-family: Integral CF;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: #000000;
}
.rating {
  width: 193px;
  height: 24.71px;

}
.price {
  width: 260px;
  display: flex;
  justify-content: space-between;
}
.prices {
  width: 176px;
  height: 43px;
  display: flex;
  justify-content: space-between;
}
.price-1 {
  width: 81px;
  height: 43px;
  font-family: Satoshi;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.2px;
  text-align: left;
  color: black;
}
.price-2{
  width: 83px;
  height: 43px;
  font-family: Satoshi;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.2px;
  text-align: left;
  color: #0000004D;
}
.sale {
  width: 72px;
  height: 34px;
  border-radius: 62px;
  background-color: #FF33331A;
  color: red;
  align-items: center;
  display: flex;
  justify-content: center;
}
.description {
  width: 590px;
  height: 33px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.line {
  width: 100%;
  border: 1px solid #0000001A
}
.title-color {
  width: 93px;
  height: 11px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  color: #00000099;
}
.colors {
  width: 143px;
  height: 37px;
  display: flex;
  justify-content: space-between;
}
.colors div {
  width: 37px;
  height: 37px;
  border-radius: 50%;
}
.color-1 {
  background-color: #4F4631;
}
.color-2 {
  background-color: #314F4A;
}
.color-3 {
  background-color: #31344F;
}
.title-size {
  width: 87px;
  height: 11px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  color: #00000099;
}
.sizes {
  width: 420px;
  height: 46px;
  display: flex;
  justify-content: space-between;
}
.sizes div {
  height: 46px;
  border-radius: 62px;
  background-color: #F0F0F0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small {
  width: 86px;
}

.medium {
  width: 105px;
}
.large {
  width: 89px;
}
.x-large {
  width: 104px;
}
.btn {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
}
.btn-count{
  display: flex;
  width: 170px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #F0F0F0;
  border-radius: 62px;
  align-items: center;

}
.btn-count img {
  width: 24px;
  height: 24px;
}
.down {
  width: 24px;
  height: 24px;
  font-weight: 18.75px;
  font-height: 2.25px;
}
.btn-add {
  width: 400px;
  height: 52px;
  border-radius: 62px;
  background-color: black;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
}
.add{
  width: 100%;
  height: 100%;
}
</style>
