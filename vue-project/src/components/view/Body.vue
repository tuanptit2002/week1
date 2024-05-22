<template>
  <div class="body">
    <div class="title-new">NEW ARRIVALS</div>
    <div class="products">
      <div class="product" v-for="product in products">
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
      </div>
    </div>
    <div class="button-view"><button>View All</button></div>
    <div class="line"></div>


    <div class="title-new">TOP SELLING</div>
    <div class="products">
      <div class="product" v-for="product in products">
        <div><img src="../../assets/shirt.png" alt=""></div>
        <div class="product-name">{{product.name}}</div>
        <div class="rating">
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
      </div>
    </div>
    <div class="button-view"><button>View All</button></div>


    <div class="dress-style">
        <div class="title-style">BROWSE BY DRESS STYLE</div>
        <div class="casual-formal">
          <div class="casual"><img src="../../assets/carsual.png"></div>
          <div class="formal"><img src="../../assets/formal.png" alt=""></div>
        </div>
      <div class="party-gym">
        <div class="casual"><img src="../../assets/party.png"></div>
        <div class="formal"><img src="../../assets/gym.png" alt=""></div>
      </div>
    </div>

    <div class="dress-style-2">
      <div class="title-style">BROWSE BY DRESS STYLE</div>
        <div class="casual2"><img src="../../assets/carsual2.png"></div>
        <div class="formal2"><img src="../../assets/formal2.png" alt=""></div>
        <div class="casual2"><img src="../../assets/party2.png"></div>
        <div class="formal2"><img src="../../assets/gym2.png" alt=""></div>
    </div>


    <div class="customer">
        <div class="customer-title">OUR HAPPY CUSTOMERS</div>
      <div class="arrow">
      <div class="arrow-left"><img src="../../assets/arrow-left.png" alt=""></div>
      <div><img src="../../assets/arrow-right.png" alt=""></div>
      </div>
    </div>
    <div class="comment">
      <div class="cmt" v-for="cmt in cmts">
        <div>
          <div class="cmt-rating">
            <v-rating
              v-model="cmt.rating"
              active-color="yellow-darken-2"
              :half-increments="true"
              color="white"
              :length="5"
              density="compact"
              readonly
          ></v-rating>
          </div>
          <div class="name-check">
          <div class="cmt-name">{{cmt.name}}</div>
            <div><img src="../../assets/check.png" alt=""></div>
          </div>
          <div class="cmt-title">{{cmt.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body{
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-new{
  width: 403px;
  height: 58px;
  gap: 0px;
  opacity: 0px;
  font-family: Integral CF;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
  color: black;
  margin-top: 90px;
  margin-bottom: 62px;
}
.products{
  width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.text-rating{
  width: 33px;
  height: 19px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.9px;
  text-align: left;
  color: black;
}
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
.button-view{
  width: 218px;
  height: 52px;
  border-radius: 62px;
  border: 1px solid #0000001A;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
  color: black;
}
.line{
  margin-top: 63px;
  width: 1240px;
  border: 1px solid #0000001A;
}
.dress-style{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 1240px;
  height: 866px;
  border-radius: 40px;
  background-color: #F0F0F0;
}
.dress-style-2{
  display: none;
}
.title-style{
  margin-top: 70px;
  width: 687px;
  height: 58px;
  gap: 0px;
  opacity: 0px;
  font-family: Integral CF;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
  color: black;
}
.casual{

  height: 407px;
  height: 289px;
}
.casual-formal{
  margin-top: 68px;
  display: flex;
}
.casual{
  margin-right: 25px ;
}
.party-gym{
  margin-top: 20px;
  display: flex;
}
.customer{
  margin-top: 92px;
  width: 1240px;
  display: flex;
  justify-content: space-between;
}
.customer-title{
  width: 654px;
  height: 58px;
  gap: 0px;
  opacity: 0px;
  font-family: Integral CF;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: left;
  color: black;

}
.arrow{
  margin-top: 30px;
  display: flex;
}
.arrow-left{
  margin-right: 10px;
}
.comment{
  margin-top: 40px;
  width: 1240px;
  display: flex;
  justify-content: space-between;

}
.cmt{
  width: 400px;
  height: 240px;
  padding: 28px 32px 28px 32px;
  gap: 342px;
  border-radius: 20px;
  opacity: 0px;
  border: 1px solid #0000001A
}
.cmt-rating{
  width: 150px;
  height: 22.58px;
  gap: 6.49px;
  opacity: 0px;
}
.name-check{
  margin-top: 10px;
  width: 130px;
  height: 24px;
  gap: 4px;
  opacity: 0px;
  display: flex;
}
.cmt-name{
  width: 100px;
  height: 15px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: black;
}
.cmt-title{
  margin-top: 10px;
  width: 336px;
  height: 88px;
  gap: 0px;
  opacity: 0px;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
@media (max-width: 46.178em) {
  .body{
    width: 100%;
  }
  .title-new{
    width: 269px;
    height: 38px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.4px;
    text-align: center;
    margin-top: 60px;
  }
  .products{
    overflow: hidden;
  }
  .products{
    height: 120%;
    width: 100%;
    overflow-x: scroll;
    gap: 10px;
  }
  .product{
    margin-left: 10px;
  }
  .product img{
    height: 200px;
  }

  .line{
    width: 100%;
  }
  .dress-style{
    display: none;
  }
  .dress-style-2{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    gap: 0px;
    border-radius: 20px;
    opacity: 0px;
    align-items: center;
    background: #F0F0F0;

  }
  .title-style{
    margin-top: 40px;
    width: 246px;
    height: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
    margin-bottom: 10px;
  }
  .customer{
    width: 90%;
    display: flex;
    align-items: center;
  }
  .customer-title{
    width: 286px;
    height: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;

  }

  .comment{
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    overflow: scroll;
    gap: 20px;
    margin-bottom: 150px;
  }
  .button-view{
    width: 90%;
    height: 17%;
  }
}
</style>
<script>
export  default {
  data(){
    return{
      cmts:[
        {
          rating:5,
          name:'Sarah M.',
          title:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"
        },
        {
          rating:5,
          name:'Alex K.',
          title: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”'
        },
        {
          rating: 5,
          name:'James L.',
          title: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”'
        }
      ],
      products:[
        {
          img:'../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:4.5,
          price:120
        },
        {
          img:'../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:3.5,
          price:120
        },
        {
          img:'../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:4.5,
          price:120
        },
        {
          img:'../../assets/shirt.png',
          name:'T-SHIRT WITH TAPE DETAILS',
          rating:4.5,
          price:120
        }
      ]
    }
  }
}
</script>
