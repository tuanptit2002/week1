<template>
  <div class="images">
    <div class="image-3">
      <div><img src="../../../../assets/shirt-1.png" alt=""></div>
      <div><img src="../../../../assets/shirt-2.png" alt=""></div>
      <div><img src="../../../../assets/shirt-3.png" alt=""></div>
    </div>
    <div class="image-1">
      <img src="../../../../assets/shirt-new-1.png" alt="">
    </div>
  </div>
</template>


<style scoped>
.images {
  height: 530px;
  width: 609px;
  display: flex;
  justify-content: space-between;
}
.image-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img-3 div{
  width: 152px;
  height: 176px;
  border-radius: 20px;
  //border: 1px solid #000000

}
.image-3 img {
  height: 100%;
  width: 100%;
}

</style>

<script >
export default  {

}

</script>
