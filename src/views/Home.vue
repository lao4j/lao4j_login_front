<template>
  <div class="home">
    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/login/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>
