<template>
 <div class="footer">
   <div class="footer2">
   <div class="contact">
     <div class="contact-title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
     <div class="submit-contact">
       <div class="message-contact">
         <div class="message"><img src="../../assets/message.png" alt=""></div>
         <div class="contact-input"><input placeholder="Enter your email address"></div>
       </div>
       <div class="contact-button"><button>Subscribe to Newsletter</button></div>
     </div>
   </div>
     <div class="footer3">
       <div class="footer-shop">
         <div class="shop-co">
           <div class="shop-co-title">SHOP.CO</div>
           <div class="shop-title">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
         </div>
         <div><img src="../../assets/Social.png" alt=""></div>
       </div>
       <div class="footer4">
         <div class="company">
           <div class="company-title">COMPANY</div>
           <div class="company-des">
           <div>About</div>
           <div>Features</div>
           <div>Works</div>
           <div>Career</div>
           </div>
         </div>
         <div class="help">
           <div class="help-title">HELP</div>
           <div class="help-des">
           <div>Customer Support</div>
           <div>Delivery Details</div>
           <div>Terms & Conditions</div>
           <div>Privacy Policy</div>
           </div>
         </div>
         <div class="faq">
           <div class="faq-title">FAQ</div>
           <div class="faq-des">
           <div>Privacy Policy</div>
           <div>Manage Deliveries</div>
           <div>Orders</div>
           <div>Payments</div>
           </div>
         </div>
         <div class="resources">
           <div class="resources-title">RESOURCES</div>
           <div class="resources-des">
           <div>Free eBooks</div>
           <div>Development Tutorial</div>
           <div>How to - Blog</div>
           <div>Youtube Playlist</div>
           </div>
         </div>
       </div>

     </div>
     <div class="footer5"></div>
     <div class="footer6">
       <div class="footer6-title">Shop.co © 2000-2023, All Rights Reserved</div>
       <div><img src="../../assets/bank.png" alt=""></div>
     </div>
   </div>

 </div>
</template>
<style scoped>
.footer{
  margin-top: 80px;
  width: 100%;
  height: 589px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact{
  margin-top: -450px;
  position: absolute;
  margin-bottom: 40px;
  background-color: black;
  width: 1240px;
  height: 180px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.contact-title{
  width: 551px;
  height: 94px;
  gap: 0px;
  opacity: 0px;
  font-family: Integral CF;
  font-size: 40px;
  font-weight: 700;
  line-height: 45px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 68px;
}
.submit-contact{
  margin-right: 60px;
}
.message-contact{
  background-color: #FFFFFF;
  display: flex;
  width: 349px;
  height: 48px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  align-items: center;


}
.message{
  margin-left: 20px;
}
.contact-button{
  margin-bottom: 20px;
  margin-top: 10px;
  width: 349px;
  height: 46px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-input{
  border: none;
  outline: none;
}
input:focus {
  outline: none;
}
.footer2{

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  position: relative;
  width: 100%;
  height: 499px;
  background-color: #F0F0F0;
}
.footer3{
  margin-top: 50px;
  height: 177px;
  width: 1240px;
  display: flex;
  margin-bottom: 60px;

}
.footer4{
  width: 880px;
  height: 177px;
  display: flex;
  justify-content: space-between;
}
.footer-shop{
  width: 248px;
  height: 177px;
  gap: 35px;
  opacity: 0px;
  margin-right: 100px;

}
.shop-co{
  width: 248px;
  height: 114px;
  gap: 25px;
  opacity: 0px;
  margin-bottom: 30px;
}
.shop-co-title{
  width: 167px;
  height: 23px;
  gap: 0px;
  opacity: 0px;
  font-family: Integral CF;
  font-size: 33.45px;
  font-weight: 700;
  line-height: 40.15px;
  text-align: left;
  color: black;
}
.shop-title{
  margin-top: 30px;
  width: 248px;
  height: 66px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #00000099;
}
.company{
  width: 104px;
  height: 177px;
  gap: 26px;
  opacity: 0px;

}
.help{
  width: 136px;
  height: 177px;
  gap: 26px;
  opacity: 0px;
}
.faq{
  width: 149px;
  height: 177px;
  gap: 26px;
  opacity: 0px;

}
.resources{
  width: 149px;
  height: 177px;
  gap: 26px;
  opacity: 0px;

}
.company-title{
  width: 98px;
  height: 18px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 3px;
  text-align: left;
  color: black;
  margin-bottom: 20px;
}
.company-des{
  width: 104px;
  height: 133px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.help-title{
  width: 49px;
  height: 18px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 3px;
  text-align: left;
  color: black;
  margin-bottom: 20px;
}
.help-des{
  width: 136px;
  height: 133px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.faq-title{
  width: 37px;
  height: 18px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 3px;
  text-align: left;
  color: black;
  margin-bottom: 20px;
}
.faq-des{
  width: 149px;
  height: 133px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.resources-title{
  width: 118px;
  height: 18px;
  gap: 0px;
  opacity: 0px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 3px;
  text-align: left;
  color: black;
  margin-bottom: 20px;
}
.resources-des{
  width: 149px;
  height: 133px;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.resources-des div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #00000099;
}
.faq-des div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #00000099;
}
.help-des div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #00000099;
}
.company-des div{
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #00000099;
}
.footer5{
  margin-top: -20px;
  border: 1px solid #0000001A;
  width: 1240px;
}
.footer6{
  width: 1240px;
  height: 31px;
  display: flex;
  justify-content: space-between;
}
.footer6-title{
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.9px;
  text-align: right;
  color:  #00000099;
  margin-top: 3px;
}
</style>
<script setup>
</script>
