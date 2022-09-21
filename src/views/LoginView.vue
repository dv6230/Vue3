<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 80vh">
    <form class="col-md-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">帳號</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
        <!--        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密碼</label>
        <input type="password" class="form-control" id="exampleInputPassword1" required>
      </div>
      <!--      <div class="mb-3 form-check">-->
      <!--        <input type="checkbox" class="form-check-input" id="exampleCheck1">-->
      <!--        <label class="form-check-label" for="exampleCheck1">Check me out</label>-->
      <!--      </div>-->
      <div class="d-flex justify-content-center mt-2">
        <button type="submit" class="btn btn-primary col-6 ">送出</button>
      </div>
    </form>
  </div>
</template>

<script>

// use async function
// takes promise and returns a promise
// import { asyncLoading } from 'vuejs-loading-plugin'

export default {
  name: "LoginView",
  created() {
    // set loading state manually in components
    this.$loading(true)
    this.$loading(false)
  }
}
</script>

<style scoped>

</style>