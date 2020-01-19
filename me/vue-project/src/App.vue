<template>
  <div id="app">
    <AboutMe name="Ferran Maylinch" />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'

export default {
  name: 'app',
  components: {
    AboutMe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
