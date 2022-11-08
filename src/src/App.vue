<template>
  <MainView />
</template>
<script lang="ts">
import MainView from "./views/MainView.vue";
export default {
  components: { MainView },
};
</script>
<style lang="scss">
@font-face {
  font-family: "HeirofLightBold";
  src: url("@/assets/HeirofLightBold.ttf") format("truetype");
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
