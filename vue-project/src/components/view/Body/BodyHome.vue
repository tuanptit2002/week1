<template>
  <div class="body">
    <brands-product></brands-product>
    <div class="title-new">NEW ARRIVALS</div>
    <div class="products" >
      <button @click="()=>{setClickDetail(product._id)}" class="product" v-for="product in dataProduct">
        <product :product = 'product'></product>
      </button>
    </div>
    <div class="button-view"><button>View All</button></div>
    <div class="line"></div>


    <div class="title-new">TOP SELLING</div>
    <div class="products">
      <button @click="setClickDetail" class="product" v-for="product in dataProduct">
        <product :product = product></product>
      </button>
    </div>
    <div class="button-view"><button>View All</button></div>


    <div class="dress-style">
      <div class="title-style">BROWSE BY DRESS STYLE</div>
      <div class="casual-formal">
        <button class="casual" @click = setClickProduct><img src="../../../assets/carsual.png"></button>
        <div class="formal"><img src="../../../assets/formal.png" alt=""></div>
      </div>
      <div class="party-gym">
        <div class="casual"><img src="../../../assets/party.png"></div>
        <div class="formal"><img src="../../../assets/gym.png" alt=""></div>
      </div>
    </div>

    <div class="dress-style-2">
      <div class="title-style">BROWSE BY DRESS STYLE</div>
      <button class="casual2" @click = setClickProduct><img src="../../../assets/carsual2.png"></button>
      <div class="formal2"><img src="../../../assets/formal2.png" alt=""></div>
      <div class="casual2"><img src="../../../assets/party2.png"></div>
      <div class="formal2"><img src="../../../assets/gym2.png" alt=""></div>
    </div>


    <div class="customer">
      <div class="customer-title">OUR HAPPY CUSTOMERS</div>
      <div class="arrow">
        <div class="arrow-left"><img src="../../../assets/arrow-left.png" alt=""></div>
        <div><img src="../../../assets/arrow-right.png" alt=""></div>
      </div>
    </div>
    <div class="comment">
      <div class="cmt" v-for="cmt in cmts">
        <comment-product :cmt = cmt></comment-product>
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
  font-family: 'Integral CF', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  text-align: center;
  color: black;
  margin-top: 90px;
  margin-bottom: 62px;
}
.products{
  scrollbar-width: none; /* Ẩn thanh cuộn theo chiều ngang và dọc */
  -ms-overflow-style: none;
}
.products{
  width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;

}
 .product{
  margin-right: 20px;
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
    height: 1000%;
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
import Product from "@/components/layout/product.vue";
import CommentProduct from "@/components/layout/commentProduct.vue";
import BrandsProduct from "@/components/view/Hearder/brandsProduct.vue";
import {useProductStore} from "@/store/modules/products/product.js";
export  default {
  components: {BrandsProduct, CommentProduct, Product},
  created() {
    useProductStore().getProducts();

  },
  computed:{
    dataProduct() {
      let result = useProductStore().getAllProducts
      return result;
    },
  },

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
      products:[]
    }
  },
  methods: {
    setClickDetail(data){
      console.log("id ne: ", data)
      this.$router.push('/detail').catch(err => {

      });
    },
    setClickProduct(){
      this.$router.push('/products').catch(err => {
        console.error(err);
      });
      console.error(this.$router);
    }
  }
}
</script>
