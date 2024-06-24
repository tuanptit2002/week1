<template>
  <div class="f-1">
    <div class="sign">
      <div class="sign-1">Sign up and get 20% off to your first order.</div>
      <div class="sign-2"> Sign Up Now</div>
    </div>
    <div></div>
  </div>
  <div class="sidebar">
    <div class="nav">
      <div class="nav2"><img src="../../assets/nav.png" alt=""></div>
      <RouterLink class="shop-co" to="/">SHOP.CO</RouterLink>
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
        <div>
          <button style="border: none"><img src="../../assets/search.png" alt=""></button>
        </div>
        <div class="search-input"><input placeholder="Search for products..."></div>
      </div>

      <div class="user">
        <div class="user-search"><img src="../../assets/search2.png"></div>
        <RouterLink to="/cart"><img src="../../assets/cart.png"><div class="totalProduct">{{totalProduct}}</div></RouterLink>
        <RouterLink to="/login"><img src="../../assets/user.png"></RouterLink>
      </div>
    </div>
  </div>

</template>

<script>
import {useCartStore} from "@/store/modules/carts/cart.js";
export default {
  computed: {
    totalProduct() {
      return useCartStore().getCountProduct;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.f-1 {
  width: 100%;
  height: 38px;
  background-color: black;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

}

.sign {
  width: 351px;
  height: 19px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  box-sizing: border-box;
}

.sign div {
  margin-top: 9px;
  font-family: 'Satoshi';
  font-size: 14px;
  line-height: 18.9px;
  color: #FFFFFF;
}

.sign-1 {
  font-weight: 400;
}

.sign-2 {
  margin-left: 2px;
  font-weight: 500;
}

.sidebar {
  width: 100%;
  height: 98px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  width: 1240px;
  height: 48px;
  gap: 40px;
  opacity: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.shop-co {
  text-decoration: none;
  width: 160px;
  height: 22px;
  font-family: Integral CF;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  color: black;
}

.nav-bar {
  display: flex;
  width: 321px;
  height: 22px;
  gap: 24px;
  opacity: 0px;
  box-sizing: border-box;

}

.nav-bar div {
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;

}

.shop {
  display: flex;
  width: 57px;
  height: 22px;
  gap: 4px;
  opacity: 0px;
  box-sizing: border-box;
}

.on-sale {
  width: 56px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  box-sizing: border-box;
}

.new-arrivals {
  width: 87px;
  height: 22px;
  gap: 0px;
  opacity: 0px;

}

.brands {
  width: 49px;
  height: 22px;
  gap: 0px;
  opacity: 0px;

}

.search {
  width: 577px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background-color: #F0F0F0;
  display: flex;
}

.search input {
  border: none;
  height: 100%;
  padding: 12px 16px 12px 16px;
  width: 500px;
  background-color: #F0F0F0;
  outline: none;
}

.user {
  display: flex;
  width: 62px;
  height: 24px;
  gap: 14px;
  opacity: 0px;

}

.nav2 {
  display: none;
}

.user-search {
  display: none;
}




.title-button button {
  margin-bottom: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
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
a {
  display: flex;
  text-decoration: none;
}
.totalProduct{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 60%;
  background-color: red;
  width: 20px;
  height: 18px;
  color: #FFFFFF;
}
@media (max-width: 46.178em) {
  .f-1 {
    width: 100%;
    height: 34px;
    background-color: black;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .sign {
    width: 301px;
    height: 16px;
    gap: 0px;
    opacity: 0px;
    display: flex;
    box-sizing: border-box;
  }

  .sign div {
    margin-top: 9px;
    font-family: 'Satoshi';
    font-size: 12px;
    line-height: 16.2px;
    color: #FFFFFF;
    box-sizing: border-box;
  }

  .sign-1 {
    font-weight: 400;
  }

  .sign-2 {
    margin-left: 2px;
    font-weight: 500;
  }

  .nav-bar {
    display: none;
  }

  .nav2 {
    display: block;
    margin-left: -80px;
  }

  .search {
    display: none;
  }

  .nav {
    display: flex;
    justify-content: center;
  }

  .user-search {
    margin-left: 44px;
    display: block;
  }

  .shop-co {
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

  .title {
    width: 100%;
    height: 853px;
    gap: 0px;
    opacity: 0px;
    background-color: #F2F0F1;
    background-image: none;
  }

  .title-start {
    width: 323px;
    height: 93px;
    left: 16px;
    gap: 0px;
    opacity: 0px;

  }

  .title-find {
    margin-top: 40px;
    width: 323px;
    height: 93px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 36px;
    font-weight: 700;
    line-height: 34px;
    text-align: left;
    color: black;
    box-sizing: border-box;
    margin-left: 8px;
  }

  .star-big {
    display: none;
  }

  .star-small {
    width: 366px;
    height: 50px;
    margin-top: 30px;
    left: 16px;
    gap: 0px;
  }

  .title-browse {
    margin-top: 25px;
    margin-left: 8px;
    width: 100%;
    height: 100%;
    left: 16px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #00000099;
  }

  .small {
    display: none;
  }


  .title-button button {
    margin-top: 60px;
    width: 358px;
    height: 52px;
    gap: 12px;
    border-radius: 62px;
    opacity: 0px;
    margin-left: 0%;
    margin-bottom: 20px;
  }

  .title-parameter {
    display: none;
  }

  .brands-product {
    display: flex;
    justify-content: space-between;
    width: 278px;
    height: 52px;
    gap: 0px;
    opacity: 0px;
  }

  .parameter-brands {
    width: 106px;
    height: 48px;
    gap: 0px;
    opacity: 0px;
  }

  .brands-200 {
    width: 64px;
    height: 32px;
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.4px;
    text-align: left;
  }

  .brand {
    width: 106px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  .parameter-product {
    width: 117px;
    height: 48px;
    gap: 0px;
    opacity: 0px;
  }

  .product-2000 {
    width: 88px;
    height: 32px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.4px;
    text-align: left;
  }

  .product {
    width: 117px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;

  }

  .parameter-customers {
    width: 103px;
    height: 48px;
    gap: 0px;
    opacity: 0px;
  }

  .customer-30 {
    width: 103px;
    height: 32px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.4px;
    text-align: left;
  }

  .customer {
    width: 95px;
    height: 22px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;

  }

  .title-parameter-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-2 {
    margin-top: 0px;
    display: flex;
  }

  .brands-5 {
    display: none;
  }

  .title-brand {
    width: 100%;
    height: 146px;
  }

  .brands-5-2 {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    opacity: 0px;
    align-items: center;

  }

  .three-img {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .two-img {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

