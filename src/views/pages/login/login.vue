<template>
  <div class="login__fon">
    <div class="login">
      <div class="login__title">
        <div class="title__img">
          <img src="@assets/img/logo.svg" alt="logo" height="36" width="36" />
        </div>
        <div class="title__text">Vue</div>
      </div>
      <div class="login__block">
        <div class="block__title">Войти</div>
        <label class="wrong-lable" for="phone" v-if="wrong">{{
          errorMessage
        }}</label>
        <input
          type="phone"
          placeholder="Phone"
          class="block__input phone"
          v-model="phone"
          :class="{
            wrong: wrong,
          }"
          @keypress.enter="enterPage"
          id="phone"
        />
        <input
          type="password"
          placeholder="Введите пароль"
          class="block__input key"
          v-model="password"
          @keypress.enter="enterPage"
          :class="{
            wrong: wrong,
          }"
          id="password"
        />
        <div class="password">
          <ui-checkbox v-model="remember" class="remember"
            >Запомнить меня</ui-checkbox
          >
          <button class="forgot" @click="forgot">Забыли пароль?</button>
        </div>
        <button class="btn-enter" @click="enterPage">Войти</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import { EMPLOYEES } from "@/router/routerNames";
@Options({
  emits: ["goToAdmin"],
})
export default class LoginPageComponent extends Vue {
  Employees = EMPLOYEES;
  error = "Неверный логин или пароль";
  phone = "";
  password = "";
  errorMessage: string = "";
  wrong: boolean = false;
  remember: boolean = false;
  mounted() {}
  enterPage() {
    this.goToAdmin();
  }
  forgot() {
    console.log("forgot password");
  }
  goToAdmin() {
    this.$router.push({ name: this.Employees });
  }
}
</script>
<style scoped>
.wrong-lable {
  margin: 0;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #d25338;
  margin-right: 110px;
  margin-bottom: 10px;
}
.wrong {
  border: 1px solid #d25338 !important;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(210, 83, 56, 0.45);
}
.wrong::placeholder {
  color: #d25338;
}
.login__fon {
  background: #e5e5e5;
  background-size: cover;
  height: 100vh;
}
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title__img {
  margin-right: 9px;
}
.login__title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.title__text {
  font-family: "ProximaNova";
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #043043;
}
.login__block {
  min-height: 303px;
  width: 390px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block__title {
  font-family: "ProximaNova";
  font-size: 20px;
  line-height: 24px;
  color: #162a47;
  padding: 28px 0px 16px 0px;
}
.block__input {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 5px 35px;
  margin-bottom: 10px;
  width: 270px;
  cursor: pointer;
  transition: 0.3s;
}
.phone {
  background: url("~@assets/img/email.png") no-repeat 10px center;
}
.key {
  background: url("~@assets/img/key.png") no-repeat 10px center;
}
.block__input ::placeholder {
  font-size: 14px;
  line-height: 17px;
  color: #586174;
}
.block__input:hover,
.block__input:active,
.block__input:focus {
  border: 1px solid gray;
  outline: none;
}
.btn-enter {
  border: 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  background: linear-gradient(225.28deg, #00fff0 12.52%, #faff00 82.05%);
  padding: 10px 35px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 45px;
}
.btn-enter:hover,
.btn-enter:focus,
.btn-enter:active {
  outline: none;
}
.remember {
  color: #586174;
  font-size: 13px;
  line-height: 16px;
  padding-left: 5px;
  padding-right: 20px;
}
.forgot {
  border: 0;
  border-bottom: 1px solid #062634;
  background: #ffffff;
  color: #062634;
  font-size: 13px;
  line-height: 16px;
  cursor: pointer;
}
.password {
  margin-top: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}
</style>