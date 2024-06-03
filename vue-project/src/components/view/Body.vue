<template>
  <body-home></body-home>
<!--  <body-products></body-products>-->

</template>

<style scoped>

</style>
<script>
import Product from "@/components/layout/product.vue";
import CommentProduct from "@/components/layout/commentProduct.vue";
import BodyHome from "@/components/view/Body/BodyHome.vue";
import BodyProducts from "@/components/view/Body/BodyProducts.vue";
export  default {
  components: {CommentProduct, Product, BodyHome, BodyProducts},

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
