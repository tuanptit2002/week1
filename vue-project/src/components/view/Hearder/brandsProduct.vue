<template>
  <div class="title">
    <div class="title-start">
      <div class="title-find">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
      <div class="star-big"><img src="../../../assets/startbig.png" alt=""></div>
    </div>
    <div class="star-small">
      <div class="title-browse">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
      <div class="small"><img src="../../../assets/startsmall.png" alt=""></div>
    </div>
    <div class="title-button"><button>Shop Now</button></div>
    <div class="title-parameter">
      <div class="parameter-brands">
        <div class="brands-200">200+</div>
        <div class="brand">International Brands</div>
      </div>
      <div class="parameter-product">
        <div class="product-2000">2,000+</div>
        <div class="product">High-Quality Products</div>
      </div>
      <div class="parameter-customers">
        <div class="customer-30">30,000+</div>
        <div class="customer">Happy Customers</div>
      </div>
    </div>


    <div class="title-parameter-2">
      <div class="brands-product">
        <div class="parameter-brands">
          <div class="brands-200">200+</div>
          <div class="brand">International Brands</div>
        </div>
        <div class="parameter-product">
          <div class="product-2000">2,000+</div>
          <div class="product">High-Quality Products</div>
        </div>
      </div>
      <div class="parameter-customers">
        <div class="customer-30">30,000+</div>
        <div class="customer">Happy Customers</div>
      </div>
    </div>

    <div class="image-2"><img src="../../../assets/background2.png" alt=""></div>
  </div>
  <div class="title-brand">
    <div class="brands-5">
      <div><img src="../../../assets/versace.png" alt=""></div>
      <div><img src="../../../assets/zara.png" alt=""></div>
      <div><img src="../../../assets/gucci.png" alt=""></div>
      <div><img src="../../../assets/prada.png" alt=""></div>
      <div><img src="../../../assets/calvin.png" alt=""></div>
    </div>
    <div class="brands-5-2">
      <div class="three-img">
        <div><img src="../../../assets/versace2.png" alt=""></div>
        <div><img src="../../../assets/zara2.png" alt=""></div>
        <div><img src="../../../assets/gucci2.png" alt=""></div>
      </div>
      <div class="two-img">
        <div><img src="../../../assets/prada2.png" alt=""></div>
        <div><img src="../../../assets/calvin2.png" alt=""></div>
      </div>
    </div>

  </div>
</template>
<style scoped>
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 663px;
  background-image: url("../../../assets/backgroundheader.png");
  background-size: cover;
  background-repeat: no-repeat; /* Không lặp lại ảnh */
  background-position: center;
}
.title-start{
  width: 1240px;
  display: flex;
  justify-content: space-between;


}
.star-small{
  width: 1240px;
  display: flex;
}
.small{
  margin-left: 106px;
}
.title-find{

  margin-bottom: 33px;
  width: 577px;
  height: 173px;
  font-family: Integral CF;
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  text-align: left;
  color: black;

}
.title-browse{
  margin-bottom: 33px;
  width: 545px;
  height: 33px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.title-button{
  width: 1240px;
  display: flex;
}
.title-button button{
  margin-bottom: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  width:210px;
  height: 52px;
  padding: 16px 54px 16px 54px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background: black;
  color: #FFFFFF;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
}
.title-parameter{

  width: 1240px;
  height: 74px;
  gap: 32px;
  opacity: 0px;
  display: flex;
}
.parameter-brands{
  width:141px;
  height: 74px;
  gap: 0px;
  opacity: 0px;
}
.parameter-product{
  width: 156px;
  height: 74px;
  gap: 0px;
  opacity: 0px;
}
.parameter-customers{
  width: 171px;
  height: 74px;
  gap: 0px;
  opacity: 0px;
}
.brands-200{
  width: 107px;
  height: 54px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  color: black;
}
.brand{
  width: 141px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color:  #00000099;
}
.product-2000{
  width: 146px;
  height: 54px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  color: black;
}
.product{
  width: 156px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.customer-30{
  width: 171px;
  height: 54px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  color: black;
}
.customer{
  width: 126px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;

}

.title-brand{
  width: 100%;
  height: 122px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brands-5{
  width: 1240px;
  display: flex;
  justify-content: space-between;
}
.title-parameter-2{
  display: none;
}
.brands-5-2{
  display: none;
}
.image-2{
  display: none;
}
</style>
