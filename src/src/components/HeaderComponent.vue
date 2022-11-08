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
    <div />
    <div class="twitter">
      <div />
      <div><a href="https://twitter.com/dogitbem">Twitter@dogitbem</a></div>
    </div>
  </div>
</template>
<script lang="ts">
import { translate } from "@/modules/translate.js";

export default {
  methods: {
    translate(key: string) {
      return translate(key);
    },
  },
};
</script>
<style lang="scss">
div.header {
  background: #2a6268;
  padding: 5px;
  vertical-align: middle;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
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
  color: #ffffff;
}

div.header .twitter {
  display: grid;
  grid-template-rows: 1fr auto;
}

div.header .twitter a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  text-decoration: none;
}

img.logo {
  width: 50px;
}
</style>
