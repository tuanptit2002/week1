<template>
<div class="rating-review">
  <div class="header">
    <div class="reviews">
    <div class="title">All Reviews</div>
    <div class="count">(451)</div>
    </div>
    <div class="btn">
      <div class="icon"><img src="../../../../assets/iconFilter.png " alt=""></div>
      <div class="latest">
        <div class="title-latest">Latest</div>
        <div class="arrow"><img src="../../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="btn-write">Write a Review</div>
    </div>
  </div>
  <div class="cmt-s">
    <div v-for="cmt in comments" class="cmt">
      <comment-product-detail :cmt = cmt ></comment-product-detail>
    </div>

  </div>
  <button class="btn-load">Load More Reviews</button>
</div>

</template>


<script>
import CommentProductDetail from "@/components/layout/commentProductDetail.vue";

export default {
  components: {CommentProductDetail},
  data(){
    return {
      comments: [
        {
          rating: 3.5,
        name: "Samantha D.",
        title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "Posted on August 14, 2023"
        },
        {
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },
        {
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },
        {
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },{
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },{
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },{
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },{
          rating: 3.5,
          name: "Samantha D.",
          title:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "Posted on August 14, 2023"
        },



      ],

    }
  }
}
</script>

<style scoped>
.rating-review {
  width: 1240px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header{
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.reviews{
  width: 166px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  width: 125px;
  height: 32px;
  font-family: Satoshi;
  font-size: 24px;
  font-weight: 700;
  line-height: 32.4px;
  text-align: left;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.count{
  width: 33px;
  height: 11px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.btn{
  width:354px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.icon{
  width: 48px;
  height: 48px;
  border-radius: 62px ;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0F0F0;
;
}
.icon image{
  height: 24px;
  width: 24px;
}
.latest{
  width: 120px;
  height: 48px;
  border-radius: 62px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #F0F0F0;
;
}
.title-latest{
  width: 43px;
  height: 22px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
  color: #000000;
}
.arrow{
  width: 16px;
  height: 16px;
}
.btn-write{
  width: 166px;
  height: 48px;
  border-radius: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0px;
  background-color: #000000;
  color: #FFFFFF;
}
.cmt-s{

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cmt {
  margin-top: 10px;
  margin-bottom: 10px;
}
.btn-load {
  margin-top: 20px;
  width: 230px;
  height: 52px;
  border-radius: 62px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.6px;
  text-align: left;
  color: black;
  border: 1px solid #0000001A;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
