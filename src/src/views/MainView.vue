<template>
  <div class="view">
    <div class="content">
      <HeaderComponent />
      <div class="content-body">
        <RandomCypherGenerator />
        <DifficultyTable />
        <RandomNameGenerator />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RandomCypherGenerator from "@/components/RandomCypherGenerator.vue";
import RandomNameGenerator from "@/components/RandomNameGenerator.vue";
import DifficultyTable from "@/components/DifficultyTable.vue";

export default {
  components: {
    RandomCypherGenerator,
    RandomNameGenerator,
    DifficultyTable,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style lang="scss">
div.view {
  height: 100vh;
}
div.content {
  height: auto;
  min-height: calc(100% - 60px);
  padding-bottom: 60px;
  background: #fafafa;
}
div.content-body {
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
