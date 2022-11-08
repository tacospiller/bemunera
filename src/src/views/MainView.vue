<template>
  <div>
    <RandomCypherGenerator />
    <DifficultyTable />
  </div>
</template>

<script lang="ts">
import RandomCypherGenerator from '@/components/RandomCypherGenerator.vue';
import RandomNameGenerator from '@/components/RandomNameGenerator.vue';
import DifficultyTable from '@/components/DifficultyTable.vue';

export default {
  components: { RandomCypherGenerator, RandomNameGenerator, DifficultyTable },
};
</script>
