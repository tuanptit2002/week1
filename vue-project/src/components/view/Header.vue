<template>
<div class="f-1">
  <div class="sign">
    <div class="sign-1">Sign up and get 20% off to your first order. </div>
    <div class="sign-2"> Sign Up Now</div>
  </div>
  <div></div>
</div>
<div class="sidebar">
    <div class="nav">
      <div class="nav2"><img src="../../assets/nav.png" alt=""></div>
      <div class="shop-co">SHOP.CO</div>
      <div class="nav-bar">
        <div class="shop">
          <div>Shop</div>
          <div><img src="../../assets/muiten.png" alt=""></div>
        </div>
        <div class="on-sale">On Sale</div>
        <div class="new-arrivals">New Arrivals</div>
        <div class="brands">Brands</div>
      </div>
      <div class="search">
        <div><button style="border: none"><img src="../../assets/search.png" alt=""></button></div>
        <div class="search-input"><input placeholder="Search for products..."></div>
      </div>

      <div class="user">
        <div class="user-search"><img src="../../assets/search2.png"></div>
        <div><img src="../../assets/cart.png"></div>
        <div><img src="../../assets/user.png"></div>
      </div>
    </div>
</div>
 <div class="title">
   <div class="title-start">
   <div class="title-find">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
   <div class="star-big"><img src="../../assets/startbig.png" alt=""></div>
   </div>
   <div class="star-small">
   <div class="title-browse">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
   <div class="small"><img src="../../assets/startsmall.png" alt=""></div>
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

 </div>
  <div class="title-brand">
    <div class="brands-5">
      <div><img src="../../assets/versace.png" alt=""></div>
      <div><img src="../../assets/zara.png" alt=""></div>
      <div><img src="../../assets/gucci.png" alt=""></div>
      <div><img src="../../assets/prada.png" alt=""></div>
      <div><img src="../../assets/calvin.png" alt=""></div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.f-1{
  width: 100%;
  height: 38px;
  background-color: black;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

}
.sign{
  width: 351px;
  height: 19px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  box-sizing: border-box;
}
.sign div{
  margin-top: 9px;
  font-family: 'Satoshi';
  font-size: 14px;
  line-height: 18.9px;
  color: #FFFFFF;
}
.sign-1{
  font-weight: 400;
}
.sign-2{
  margin-left: 2px;
  font-weight: 500;
}
.sidebar{
  width: 100%;
  height: 98px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav{
  width: 1240px;
  height: 48px;
  gap: 40px;
  opacity: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.shop-co{
  width: 160px;
  height: 22px;
  font-family: Integral CF;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  color: black;
}
.nav-bar{
  display: flex;
  width: 321px;
  height: 22px;
  gap: 24px;
  opacity: 0px;
  box-sizing: border-box;

}
.nav-bar div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;

}
.shop{
  display: flex;
  width: 57px;
  height: 22px;
  gap: 4px;
  opacity: 0px;
  box-sizing: border-box;
}
.on-sale{
  width: 56px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  box-sizing: border-box;
}
.new-arrivals{
  width: 87px;
  height: 22px;
  gap: 0px;
  opacity: 0px;

}
.brands{
  width: 49px;
  height: 22px;
  gap: 0px;
  opacity: 0px;

}
.search{
  width: 577px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background-color: #F0F0F0;
  display: flex;
}
.search input{
  border:none;
  height: 100%;
  padding: 12px 16px 12px 16px;
  width: 500px;
  background-color: #F0F0F0;
  outline: none;
}
.user{
  display: flex;
  width: 62px;
  height: 24px;
  gap: 14px;
  opacity: 0px;

}
.nav2{
  display: none;
}
.user-search{
  display: none;
}
.title{

  width: 100%;
  height: 663px;
  background-image: url("../../assets/backgroundheader.png");

}
.title-start{
  display: flex;
}
.star-big{
  margin-top: 102px;
  margin-left: 580px;
}
.star-small{
  display: flex;
}
.small{
  margin-left: 106px;
}
.title-find{
  margin-top: 102px;
  margin-left: 9.4%;
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
  margin-left: 9.4%;
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
.title-button button{
  margin-left: 9.4%;
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
  margin-left: 9.4%;
  width: 596px;
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
@media (max-width: 46.178em) {
  .f-1{
    width: 100%;
    height: 34px;
    background-color: black;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  .sign{
    width: 301px;
    height: 16px;
    gap: 0px;
    opacity: 0px;
    display: flex;
    box-sizing: border-box;
  }
  .sign div{
    margin-top: 9px;
    font-family: 'Satoshi';
    font-size: 12px;
    line-height: 16.2px;
    color: #FFFFFF;
    box-sizing: border-box;
  }
  .sign-1{
    font-weight: 400;
  }
  .sign-2{
    margin-left: 2px;
    font-weight: 500;
  }
  .nav-bar{
    display: none;
  }
  .nav2{
    display: block;
    margin-left: -80px;
  }
  .search{
    display: none;
  }
  .nav{
    display: flex;
    justify-content: center;
  }
  .user-search{
    margin-left: 44px;
    display: block;
  }
  .shop-co{
    margin-top: -18px;
    margin-left: -20px;
    width: 126px;
    height: 18px;
    font-family: Integral CF;
    font-size: 25.2px;
    font-weight: 700;
    line-height: 30.24px;
    text-align: left;

  }
}
</style>
<script setup>
</script>
