<template>
  <div class="branding-container container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <img
          class="fit-screen img-fluid"
          alt="MapKraken Branding"
          src="../assets/MapKraken1.png"
        >
      </div>
    </div>
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
}

.fit-screen {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
