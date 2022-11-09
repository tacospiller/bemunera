<template>
  <div class="difficulty-table card">
    <h2 id="difficulty-table-title" class="text-lg font-bold mb-4">
      {{ translate("DifficultyTable") }}
    </h2>
    <table class="table table-compact" aria-labelledby="difficulty-table-title">
      <thead>
        <tr>
          <th>{{ translate("Difficulty") }}</th>
          <th>{{ translate("DifficultyTitle") }}</th>
          <th>{{ translate("DifficultyRequirement") }}</th>
          <th>{{ translate("DifficultyDesc") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="difficulty in difficulties" :key="difficulty.difficulty">
          <td>
            {{ difficulty.difficulty }}
          </td>
          <td>{{ difficulty.title }}</td>
          <td>{{ difficulty.dice }}</td>
          <td>
            {{ difficulty.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { translate } from "@/modules/translate";
import difficulties from "@/data/difficulty.json";
</script>
<style lang="scss">
table.table tbody :where(th, td) {
  border: 1px solid #d0d0d0;
  padding: 0.5rem 1rem;
}

.table tbody tr:nth-child(even) :where(th, td) {
  background-color: #fcfcfc;
}
</style>
