<template>
  <div>
    main page
  </div>
</template>

<script>
export default {
  name: "MainPage",
  created() {
    if (this.$store.state.isLogin === false) {
      alert('尚未登入')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>