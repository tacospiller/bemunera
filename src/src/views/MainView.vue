<template>
  <div class="resize-wrapper">
    <div class="content">
      <HeaderComponent />
      <div class="content-body">
        <DifficultyTable />
        <RandomCypherGenerator />
        <RandomNameGenerator />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RandomCypherGenerator from "@/components/RandomCypherGenerator.vue";
import RandomNameGenerator from "@/components/RandomNameGenerator.vue";
import DifficultyTable from "@/components/DifficultyTable.vue";
</script>
<style lang="scss">
div.content {
  height: auto;
  min-height: calc(100vh - 8rem);
  padding-bottom: 4rem;
  background: hsl(var(--b1));
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
    padding-top: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
  background: hsl(var(--b2) / 0.1);
  border: 2px solid hsl(var(--bc) / 0.1);
}
</style>
