<template>
  <div class="order-summary">
    <div class="order">
      <div class="order-title">Order Summary</div>
    </div>
    <div class="description-total">
      <div class="subtotal">
        <div class="title-subtotal">Subtotal</div>
        <div class="subtotal-price">$565</div>
      </div>
      <div class="discount">
        <div class="title-discount">Discount (-20%)</div>
        <div class="discount-price">-$113</div>
      </div>
      <div class="delivery">
        <div class="title-delivery">Delivery Fee</div>
        <div class="delivery-price">$15</div>
      </div>
      <div class="line"></div>
      <div class="total">
        <div class="title-total">Total</div>
        <div class="total-price ">$467</div>
      </div>
    </div>
    <div class="code-apply">
      <div class="code">
        <img src="../../../assets/code.png" alt="">
        <input placeholder="Add promo code">
      </div>
      <div class="btn-apply"><button>Apply</button></div>
    </div>
    <div class="btn-checkout"><button>Go to Checkout <img src="../../../assets/arrow-right.png"></button></div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.order-summary {
  width: 505px;
  height: 458px;
  border-radius: 20px ;
  border: 1px ;
  border: 1px solid #0000001A;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.order {
  width: 457px;
}
.order-title {
  width: 179px;
  height: 32px;
  font-family: Satoshi;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
  color: black;
}
.description-total {
  width: 457px;
  height: 193px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subtotal {
  width: 457px;
  height: 27px;
  gap: 0px;
  display: flex;
  justify-content: space-between;
}
.title-subtotal{
  width: 72px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #00000099;
}
.subtotal-price {
  width: 49px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: right;
  color: black;
}
.discount {
  width: 457px;
  height: 27px;
  display: flex;
  justify-content: space-between;
}
.title-discount {
  width: 143px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #00000099;
}
.discount-price {
  width: 48px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: right;
  color: red;
}
.delivery {
  width: 457px;
  height: 27px;
  display: flex;
  justify-content: space-between;
}
.title-delivery {
  width: 107px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #00000099;
}
.delivery-price {
  width: 32px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: right;
  color: black;
}
.line {
  width: 100%;
  border: 1px solid #0000001A;
}
.total {
  width: 457px;
  height: 32px;
  display: flex;
  justify-content: space-between;
}
.title-total {
  width: 42px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #000000;
}
.total-price {
  width: 56px;
  height: 32px;
  font-family: Satoshi;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: right;
  color: black;
}
.code-apply {
  width: 457px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.code{
  width: 326px;
  height: 48px;
  border-radius: 62px ;
  background-color: #F0F0F0;
  display: flex;
  align-items: center;
}
.code img{
  height: 24px;
  width: 24px;
  margin-left: 20px;
  margin-right: 20px;
}
.code input {
  width: 260px;
  height: 100%;

}
input:focus {
  outline: none;
}
.btn-apply {
  width: 119px;
  height: 48px;
  border-radius: 62px;
  background-color: #000000;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-apply button {
  width: 100%;
  height: 100%;

}
.btn-checkout {
  width: 457px;
  height: 60px;
  border-radius: 62px;
  background-color: #000000;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-checkout img{
  width: 24px;
  height: 24px;
  margin-left: 10px;
}
.btn-checkout button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
