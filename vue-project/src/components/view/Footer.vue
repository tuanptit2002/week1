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
  flex-direction: column;
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
@media (max-width: 46.178em) {
  .footer{
    height: 846px;
  }
  .contact{
    margin-top: -750px;
    width: 90%;
    height: 293px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

  }
  .contact-title{
    margin-top: 40px;
    width: 90%;
    height: 105px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    text-align: left;
    margin-left: 0px;
  }
  .submit-contact{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
  }
  .message-contact{
    width: 311px;
    height: 42px;
    display: flex;
  }
  .contact-button{
    width: 311px;
    height: 42px;
  }
  .footer2{
    width: 100%;
    height: 846px;
    display: flex;
    align-items: center;
  }
  .footer4{
    margin-top: 10px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .footer3{
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
      margin-bottom: 400px;
  }
  .footer5{

    width: 100%;
  }
  .footer6{

    width: 100%;
    align-items: center;

  }
  .shop-co-title{
    width: 144px;
    height: 20px;
    gap: 0px;
    opacity: 0px;
    font-family: Integral CF;
    font-size: 28.85px;
    font-weight: 700;
    line-height: 34.62px;
    text-align: left;

  }
  .shop-title{
    width: 357px;
    height: 40px;
    left: 17px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;


  }
  .footer-shop{
    margin-top: 20px;
    height: 130px;
  }
  .shop-co{
    height: 75px;
  }
  .company{
    width: 121px;
    height: 146px;
    gap: 0px;

  }
  .company-title{
    width: 88px;
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 3px;
    text-align: left;
  }
  .company-des{
    width: 91px;
    height: 112px;
    gap: 0px;
    opacity: 0px;
  }
  .company-des div{
    font-size: 14px;
  }
  .help-title{
    width: 44px;
    height: 18px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 3px;
    text-align: left;
  }
  .help{
    width: 159px;
    height: 146px;
  }
  .help-des{
    width: 121px;
    height: 112px;
    gap: 0px;
    opacity: 0px;

  }
  .help-des div{
    font-size: 14px;
  }
  .faq{
    width: 121px;
    height: 146px;
  }
  .faq-title{
    width: 33px;
    height: 18px;
    gap: 0px;
    opacity: 0px;
    font-size: 14px;
  }
  .faq-des{
    width: 121px;
    height: 112px;
  }
  .faq-des div{
    font-size: 14px;
  }
  .resources{
    width: 159px;
    height: 146px;
  }
  .resources-title{
    width: 107px;
    height: 18px;
    gap: 0px;
    opacity: 0px;
    font-size: 14px;
  }
  .resources-des{
    width: 159px;
    height: 112px;
    gap: 0px;
    opacity: 0px;
  }
  .resources-des div{
    font-size: 14px;
  }
  .footer6-title{
    width: 269px;
    height: 19px;
    gap: 0px;
    opacity: 0px;
    font-family: Satoshi;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: right;

  }
}
</style>
<script setup>
</script>
