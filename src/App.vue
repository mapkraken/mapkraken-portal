<template>
  <el-row justify="center">
    <el-col :span="12" >
      <MapKrakenBranding />
      <SocialIcons msg="Welcome to Your Vuetify App" />
    </el-col>
  </el-row>
</template>

<script>
import { ElRow, ElCol } from 'element-plus'

import SocialIcons from './components/SocialIcons.vue'

import MapKrakenBranding from './components/MapKrakenBranding.vue'

export default {
  name: 'App',
  components: {
    'el-row': ElRow,
    'el-col': ElCol,
    MapKrakenBranding,
    SocialIcons
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh; /* Take full viewport height */
}
.center-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
