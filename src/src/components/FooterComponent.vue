<template>
  <div class="footer">
    <div class="text">
      This product is an independent production and is not affiliated with Monte
      Cook Games, LLC. It is published under the Cypher System Open License,
      found at http://csol.montecookgames.com.
      <br />
      CYPHER SYSTEM and its logo are trademarks of Monte Cook Games, LLC in the
      U.S.A. and other countries. All Monte Cook Games characters and character
      names, and the distinctive likenesses thereof, are trademarks of Monte
      Cook Games, LLC.
    </div>
    <div class="logo">
      <img src="@/assets/cypher-system-logo.png" class="logo-img" />
    </div>
  </div>
</template>
<style lang="scss">
div.footer {
  background: #f0f0f0;
  padding: 10px;
  text-align: right;
  font-size: 12px;
  color: #585d86;
  height: 40px;
  position: relative;
  transform: translateY(-100%);
  display: grid;
  grid-template-columns: auto 40px;
}

img.logo-img {
  width: 40px;
}
</style>
