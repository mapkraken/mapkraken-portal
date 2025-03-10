<template>
  <div class="home-page">
      <el-row justify="center">
    <el-col :span="12" >
      <MapKrakenBranding />
      <SocialIcons msg="Welcome to Your Vuetify App" />
      <router-link to="/examples">
        <button>Examples</button>  <!-- This button will navigate to the About page -->
      </router-link>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import { ElRow, ElCol } from 'element-plus'
import MapKrakenBranding from '@/components/MapKrakenBranding.vue';
import SocialIcons from '@/components/SocialIcons.vue';
export default {
  name: 'HomePage',
  components: {
    'el-row': ElRow,
    'el-col': ElCol,
    MapKrakenBranding,  // Register the components
    SocialIcons
  }
}

</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}
</style>
