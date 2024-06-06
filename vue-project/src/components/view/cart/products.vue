<template>
  <div class="img-product"><img src="../../../assets/shirt-1.png" alt=""></div>
  <div class="description-product">
    <div class="description">
      <div class="parameter">
        <div class="name">{{product.name}}</div>
        <div class="size-color">
          <div class="size">Size: {{product.size}}</div>
          <div class="color">Color: {{product.color}}</div>
        </div>
      </div>
      <div class="price">${{product.price}}</div>
    </div>
    <div class="actions">
      <div class="img-delete"><img src="../../../assets/iconDelete.png" alt=""></div>
      <div class="btn-sub-add">
        <button class="sub"><img src="../../../assets/sub.png" alt=""></button>
        <div class="count">1</div>
        <button class="add"><img src="../../../assets/add.png" alt=""></button>
      </div>
    </div>

  </div>
</template>
<script >
  export default  {
    props:['product']
  }
</script>
<style scoped>
.img-product{
  width: 124px;
  height: 124px;
  border-radius: 8.66px ;
}
.img-product img{
  width: 100%;
  height: 100%;
}
.description-product{
  width: 527px;
  height: 124px;
  display: flex;
  justify-content: space-between;
}
.description{
  width: 227px;
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.actions {
  width: 225px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.parameter {
  width: 227px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price{
  width: 54px;
  height: 32px;
  font-family: Satoshi;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
  color: black;

}
.name{
  width: 227px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: black;
}
.size-color {
  width: 78px;
  height: 42px;
  display: flex;
  flex-direction: column;
}
.size {
  width: 67px;
  height: 19px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.9px;
  text-align: left;
}
.color {
  width: 78px;
  height: 19px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.9px;
  text-align: left;
}
.btn-sub-add {
  display: flex;
  width: 126px;
  height: 44px;
  border-radius: 62px;
  background-color: #F0F0F0;
  align-items: center;
  justify-content: space-around;
}
.btn-sub-add img {
  height: 20px;
  width: 20px;
}
.img-delete,
.btn-sub-add {
  margin-left: auto; /* Đẩy phần tử này về bên phải */
}

</style>

