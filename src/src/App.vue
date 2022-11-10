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
@font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
    format("woff");
  font-weight: 700;
  font-style: normal;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: "Pretendard", sans-serif;
}
</style>
