<template>
  <div class="content">
    <HeaderComponent />
    <div class="content-body">
      <DifficultyTable />
      <RandomCypherGenerator />
      <RandomNameGenerator />
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RandomCypherGenerator from "@/components/RandomCypherGenerator.vue";
import RandomNameGenerator from "@/components/RandomNameGenerator.vue";
import DifficultyTable from "@/components/DifficultyTable.vue";
</script>
<style lang="scss">
$font-color: #585d86;

div.content {
  height: auto;
  min-height: calc(100vh - 9rem);
  padding-bottom: 4rem;
  background: #fafafa;
}

div.content-body {
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  div.content-body {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1536px) {
  div.content-body {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

div.card {
  padding: 1rem;
  border-radius: 1rem;
  background: #fcfcfc;
  border: 2px solid #dedede;
}
</style>
