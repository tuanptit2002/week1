<template>
  <div class="comment">
    <div class="body">
      <div class="content">
        <div class="rating">
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
        <div class="cmt">
          <div class="name-check">
            <div class="cmt-name">{{cmt.name}}</div>
            <div><img src="../../assets/check.png" alt=""></div>
          </div>
          <div class="cmt-title">{{cmt.title}}</div>
        </div>
      </div>
      <div class="icon"><img src="../../assets/dots.png" alt=""></div>
    </div>
    <div class="date">{{cmt.date}}</div>
  </div>
</template>
<script>
export default {
  props:['cmt']
}
</script>

<style scoped>
.comment{
  width: 610px;
  height: 241.58px;
  border-radius: 20px;
  border: 1px solid #0000001A;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.body {
  display: flex;
  width: 546px;
  height: 139.58px;
  display: flex;
}
.date{
  width: 546px;
  height: 22px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.content{
  width: 522px;
  height: 139.58px;
  display: flex;
  flex-direction: column;
}
.rating{
  width: 127px;
  height: 22.58px;
}
.cmt{
  width: 522px;
  height: 102px;
  gap: 12px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.name-check{
  width: 146px;
  height: 24px;
  display: flex;
}
.cmt-title{
  width: 522px;
  height: 66px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
</style>
