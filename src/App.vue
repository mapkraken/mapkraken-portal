<template>
  <div id="app" class="d-flex justify-content-center align-items-center vh-100">
    <router-view></router-view> <!-- Display the component for the current route -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Optional: You can keep custom styles for the font family and smoothing */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
