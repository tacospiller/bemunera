<template>
  <div class="header">
    <div class="logo-wrapper">
      <div />
      <img src="@/assets/snake.svg" class="logo" />
      <div />
    </div>
    <div class="title">
      <div />
      <div class="text">
        {{ translate("Title") }}
      </div>
      <div />
    </div>
    <ThemeSelect />
  </div>
</template>
<script lang="ts" setup>
import { translate } from "@/modules/translate.js";
import ThemeSelect from "./ThemeSelect.vue";
</script>
<style lang="scss">
div.header {
  background: hsl(var(--p));
  padding: 5px;
  vertical-align: middle;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1rem;
}

div.logo-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  padding-left: 10px;
}

div.header .title {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  padding-left: 10px;
}

div.header .title .text {
  font-family: "HeirofLightBold";
  font-size: 24px;
  color: hsl(var(--pc) / 1);
}

img.logo {
  width: 50px;
}
</style>
