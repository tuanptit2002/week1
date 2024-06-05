<template>
  <div class="products">
    <div class="product" v-for="product in products">
      <product :product = product></product>
    </div>
    <div class="line"></div>
    <div class="footer-product">
      <button class="previous">
        <div class="arrow"><img src="../../../assets/arrow-left.png"></div>
        <div class="title-previous">Previous</div>
      </button>
      <div class="pagination">
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
      </div>
      <button class="next">
        <div class="title-next">Next</div>
        <div class="arrow"><img src="../../../assets/arrow-right.png" alt=""></div>
      </button>
    </div>
  </div>

</template>
<script >
import Product from "@/components/layout/product.vue";
import {useProductStore} from "@/store/modules/products/product.js";
export  default  {
  components:{Product},
  setup(){
    const products = useProductStore().getAllProducts;

    return {
      products: products
    }
  }
}
</script>

<style scoped>
.products {
  width: 925px;
  height: 1550px;
  //border: 1px solid #0000001A;
  display: flex;
  //justify-content: space-evenly ;
  flex-wrap: wrap;
}
.product {
  margin: 5px;
}
.line {
  width: 100%;
  border: 1px solid #0000001A;
  height: 1px;
}
.footer-product {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.previous{
  display: flex;
  width: 110px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #0000001A;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-evenly;
}
.arrow {
  width: 20px;
  height: 20px;
}
.arrow img {
  width: 20px;
  height: 20px;
}
.title-previous {
  width: 54px;
  height: 20px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: black;
}
.next {
  width: 86px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  border: 1px solid #0000001A;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-evenly;
}
.title-next {
  width: 30px;
  height: 20px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: black;
}
.pagination {
  display: inline-block;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}
.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>
