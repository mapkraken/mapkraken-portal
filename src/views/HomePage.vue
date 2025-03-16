<template>
  <div class="home-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <MapKrakenBranding />
          <SocialIcons msg="Welcome to Your BootstrapVue App" />
          <router-link to="/portfolio">
            <button class="btn">Portfolio</button> <!-- Bootstrap-styled button -->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapKrakenBranding from '@/components/MapKrakenBranding.vue';
import SocialIcons from '@/components/SocialIcons.vue';

export default {
  name: 'HomePage',
  components: {
    MapKrakenBranding,
    SocialIcons
  }
}
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}
</style>
