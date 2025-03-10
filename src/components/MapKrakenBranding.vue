<template>
  <div class="branding-container">
    <img class="fit-screen" alt="Vue logo" src="../assets/MapKraken logo_C.jpg">
  </div>
</template>

<script>
export default {
  name: 'MapKrakenBranding',
}
</script>

<style scoped>
.branding-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fit-screen {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>