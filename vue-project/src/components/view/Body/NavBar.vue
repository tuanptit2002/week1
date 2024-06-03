<template>
  <div class="nav-bar">

    <div class="title">
      <div class="title-filter">Filters</div>
      <div style="height: 24px; width: 24px"><img src="../../../assets/iconFilter.png" alt=""></div>
    </div>
    <div class="line"></div>
    <div class="title-products">
      <div class="title-product">
        <div>T-shirts</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-product">
        <div>Shorts</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-product">
        <div>Shirts</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-product">
        <div>Hoodie</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-product">
        <div >Jeans</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
    </div>
    <div class="line"></div>
    <div class="filter-price">
      <div class="title">
        <div>Price</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>

      <div class="slider-container">
        <input
            type="range"
            min="0"
            max="300"
            v-model="lowerValue"
            class="slider"
            @input="updateTrack('lower')"
        />
        <input
            type="range"
            min="0"
            max="300"
            v-model="upperValue"
            class="slider"
            @input="updateTrack('upper')"
        />
        <div class="range-track" :style="trackStyle"></div>
        <div class="slider-values">
          <span>{{ formattedLowerValue }}</span>
          <span>{{ formattedUpperValue }}</span>
        </div>
      </div>
      </div>

    <div class="line"></div>
    <div class="filter-color">
      <div class="title">
        <div>Colors</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-color">
        <div class="line-color">
          <div style="background-color: #00C12B; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #F50606; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #F5DD06; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #F57906; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #06CAF5; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
        </div>
        <div class="line-color">
          <div style="background-color: #063AF5; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #7D06F5; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #F506A4; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #FFFFFF; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
          <div style="background-color: #000000; border-radius:50%; width: 37px; height: 37px; border: 2px solid #00000033"></div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="filter-size">
      <div class="title">
        <div>Size</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-sizes"></div>
    </div>
    <div class="line"></div>
    <div class="filter-dress-style">
      <div class="title">
        <div>Dress Style</div>
        <div><img src="../../../assets/arrow.png" alt=""></div>
      </div>
      <div class="title-styles">
        <div class="title-product">
          <div>Casual</div>
          <div><img src="../../../assets/arrow.png" alt=""></div>
        </div>
        <div class="title-product">
          <div>Formal</div>
          <div><img src="../../../assets/arrow.png" alt=""></div>
        </div>
        <div class="title-product">
          <div>Party</div>
          <div><img src="../../../assets/arrow.png" alt=""></div>
        </div>
        <div class="title-product">
          <div>Gym</div>
          <div><img src="../../../assets/arrow.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="btn-filter">
      <div class="btn">
        <button>Apply Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lowerValue: 50,
      upperValue: 200,
    };
  },
  computed: {
    trackStyle() {
      const lowerPercent = (this.lowerValue / 300) * 100;
      const upperPercent = (this.upperValue / 300) * 100;
      return {
        left: `${lowerPercent}%`,
        right: `${100 - upperPercent}%`,
      };
    },
    formattedLowerValue() {
      return `$${this.lowerValue}`;
    },
    formattedUpperValue() {
      return `$${this.upperValue}`;
    },
  },
  methods: {
    updateTrack(slider) {
      if (slider === 'lower' && this.lowerValue >= this.upperValue) {
        this.lowerValue = this.upperValue - 1;
      } else if (slider === 'upper' && this.upperValue <= this.lowerValue) {
        this.upperValue = this.lowerValue + 1;
      }
    },
  },
};
</script>


<style scoped>
.nav-bar{
  width: 295px;
  height: 1220px;
  border: 1px solid #0000001A;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.title{
  display: flex;
  width: 247px;
  height: 27px;
  justify-content: space-between;
}
.title-filter{
  width: 57px;
  height: 27px;
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: black;
}
.line{
  width: 247px;
  border: 1px solid #0000001A;
}
.title-products{
  width: 247px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-product{
  display: flex;
  justify-content: space-between;
  width: 247px;
  height: 16px;
}
.title-product div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  color:  #00000099;
}
.title div {
  font-family: Satoshi;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: black;
}
.filter-price{
  width: 247px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.filter-color{
  width: 247px;
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.filter-size{
  width: 247px;
  height: 274px;
}
.filter-dress-style{
  width: 247px;
  height: 171px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-styles {
  width: 247px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.title-color{
  width: 247px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.line-color {
  display: flex;
  justify-content: space-between;
}
.slider-container{
  position: relative;
  width: 247px;
  height: 43px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  position: absolute;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 2;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  position: relative;
  z-index: 2;
}

.range-track {
  position: absolute;
  height: 5px;
  background: black;
  z-index: 1;
  pointer-events: none;
}

.slider-values {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.slider-values span {
  font-size: 16px;
  color: black;
}
.btn-filter{
  width: 247px;
  height: 48px;
}
.btn{
    width: 100%;
    height: 100%;
    border-radius: 62px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn button {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  align-items: center;

}
</style>
