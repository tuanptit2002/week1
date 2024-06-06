<template>
  <div class="cart-body">
    <div class="cart-product">
    <div class="title">YOUR CART</div>
    <div class="cart">
      <div class="products">
      <div class="product" v-for="product in products">
        <products :product = product></products>
      </div>
      </div>
      <order></order>
    </div>
    </div>
  </div>
</template>

<script>
import Order from "@/components/view/cart/order.vue";
import Products from "@/components/view/cart/products.vue";

export default  {
  components: {Products, Order},

  data(){
    return{
      products:[
          {
            img: '../../../assets/shirt-1.png',
            name: 'Gradient Graphic T-shirt',
            size: 'Large',
            color: 'red',
            price: 156
          },
        {
          img: '../../../assets/shirt-1.png',
          name: 'Gradient Graphic T-shirt',
          size: 'Large',
          color: 'red',
          price: 156
        },
        {
          img: '../../../assets/shirt-1.png',
          name: 'Gradient Graphic T-shirt',
          size: 'Large',
          color: 'red',
          price: 156
        },
        {
          img: '../../../assets/shirt-1.png',
          name: 'Gradient Graphic T-shirt',
          size: 'Large',
          color: 'red',
          price: 156
        }
      ]
    }
  }
}
</script>
<style scoped>
.cart-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-product{
  width: 1240px;

}
.title {
  width: 259px;
  height: 48px;
  font-family: Integral CF;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 40px;
}
.products{
  width: 715px;
  height: 508px;
  border-radius: 20px;
  border: 1px ;
  border: 1px solid #0000001A;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: space-around;
}
.products::-webkit-scrollbar {
  display: none;
}
.products {
  scrollbar-width: none; /* Ẩn thanh cuộn theo chiều ngang và dọc */
  -ms-overflow-style: none; /* Ẩn thanh cuộn trong IE và Edge */
}
.product {
  display: flex;
  width: 667px;
  height: 124px;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
.cart {
  display: flex;
  justify-content: space-between;
}

</style>
