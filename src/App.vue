<template>
  <div>
    <navbar-header></navbar-header>
    <!--    <nav>-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </nav>-->
    <router-view/>
  </div>
</template>

<script>
import NavbarHeader from "./components/Navbar.vue"

export default {
  components : {
    NavbarHeader
  }
}
</script>

<style>

</style>
