<template>
  <div class="body">
    <form class="login" @submit.prevent="submitLogin">
      <div class="title-login"><h3>Đăng Nhập</h3></div>
      <div class="signup">
        <div>
          <h8>Trở thành hội viên của Shop Co</h8>
        </div>
        <RouterLink to="">Đăng ký ngay</RouterLink>
      </div>
      <div class="email">
        <div><h4>Tên tài khoản hoặc địa chỉ email</h4></div>
        <div><input type="text" v-model="formData.email"></div>
      </div>
      <div class="password">
        <div><h4>Mật khẩu</h4></div>
        <div><input type="password" v-model="formData.password"></div>
      </div>
      <div class="mind-reset">
        <div class="mind">
          <input type="checkbox">
          <div><h4>Ghi nhớ mật khẩu</h4></div>
        </div>
        <router-link>
          <h7>Quên mật khẩu?</h7>
        </router-link>
      </div>
      <div class="submit">
        <div class="btn-signup">
          <button type="submit"><h5>ĐĂNG NHẬP</h5></button>
        </div>
        <div>Hoặc</div>
        <div class="login-google">
          <button type="button" @click="sendLink"><img src="../../../assets/google.png" alt=""
                                         style="width: 30px; border-radius: 10px">
            <div class="title-google">Login with google</div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {useUserStore} from "@/store/modules/users/user.js";

export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    sendLink() {
      useUserStore().loginGoogle();
    },
     submitLogin() {
      console.log("vao day")
     useUserStore().login(this.formData).then((data) =>{
        console.log(data)
      });

    }
  }
}

</script>
<style scoped>
.body {
  width: 100%;
  height: 600px;
  background-image: url('../../../assets/backgroundheader.png');
  background-size: cover; /* Adjust the background size */
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 500px;
  height: 456px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
}

.title-login {
  width: 420px;
  height: 30px;
}

.signup {
  width: 420px;
  height: 20px;
  display: flex;
}

.email {
  width: 420px;
  height: 60px;
}

.email input {
  width: 100%;
  padding: 20px;
  height: 40px;
  border: 1px solid #0000001A;
  border-radius: 10px;
  outline: none;
}

.password {
  width: 420px;
  height: 60px;
}

.password input {
  width: 100%;
  padding: 20px;
  height: 40px;
  border: 1px solid #0000001A;
  border-radius: 10px;
  outline: none;
}

.mind-reset {
  width: 420px;
  height: 20px;
  display: flex;
  justify-content: space-between;
}

.mind {
  width: 160px;
  display: flex;
  justify-content: space-between;
}

.mind router-link {
  width: 120px;
}

.submit {
  height: 120px;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn-signup {
  width: 420px;
  height: 40px;
}

.btn-signup button {
  height: 100%;
  background-color: red;
  width: 130px;
  border-radius: 10px;
  color: #FFFFFF;
}

.login-google {
  width: 100%;
  height: 30px;
}

.login-google button {
  width: 200px;
  display: flex;
  align-items: center;
  border: 1px solid blue;
  border-radius: 10px;
}

.title-google {
  width: 170px;
  background-color: blue;
  height: 30px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 9px 9px 0;
}

.signup a {
  margin-left: 10px;
  color: blue;
  text-decoration: none
}

a {
  color: black;
  text-decoration: none
}
</style>
