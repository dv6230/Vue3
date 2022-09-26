<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 80vh">
    <div class="col-md-3">
      <div class="mb-3" style="height: 100px">
        <label for="exampleInputEmail1" class="form-label">帳號</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="account" aria-describedby="emailHelp">
        <div v-if="accountEmpty" class="text-danger p-2">請輸入帳號</div>
        <!--        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
      </div>
      <div class="mb-3" style="height: 100px">
        <label for="exampleInputPassword1" class="form-label">密碼</label>
        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        <div v-if="passwordEmpty" class="text-danger p-2">請輸入密碼</div>
      </div>
      <!--      <div class="mb-3 form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <div class="d-flex justify-content-center mt-2">
        <button type="button" @click="login()" class="btn btn-primary col-6 ">送出</button>
      </div>
    </div>
  </div>
</template>

<script>

import {fetchPostApi} from "@/js/FetchAPI";

export default {
  name: "LoginView",
  created() {

  },
  data() {
    return {
      account: '',
      password: '',
      accountEmpty: false,
      passwordEmpty: false
    }
  },
  methods: {
    async login() {

      this.accountEmpty = false;
      this.passwordEmpty = false

      if (this.account.length <= 0) {
        this.accountEmpty = true
        return;
      } else if (this.password.length <= 0) {
        this.passwordEmpty = true
        return
      }

      this.$loading(true)
      await this.$store.dispatch("LoginUser", {userName: 'hello', userId: 1})
      // await new Promise(resolve => setTimeout(resolve, 250))
      fetchPostApi('test/Test1',
          {

          }
      ).then(result => console.log(result))
      this.$loading(false)
      // this.$router.push('/main')
    }
  }
}
</script>

<style scoped>

</style>