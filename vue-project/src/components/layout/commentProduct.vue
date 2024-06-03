<template>
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
</template>

<script>
export default {
props:['cmt']
}
</script>
<style>
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
</style>
