<template>
  <div class="difficulty-table card">
    <h2 id="difficulty-table-title" class="text-lg font-bold mb-4">
      {{ translate("DifficultyTable") }}
    </h2>
    <table class="table table-compact" aria-labelledby="difficulty-table-title">
      <thead>
        <tr>
          <th>{{ translate("Difficulty") }}</th>
          <th class="hide-mobile">{{ translate("DifficultyTitle") }}</th>
          <th class="hide-mobile">{{ translate("DifficultyRequirement") }}</th>
          <th>{{ translate("DifficultyDesc") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="difficulty in difficulties" :key="difficulty.difficulty">
          <td>
            {{ difficulty.difficulty }}
          </td>
          <td class="hide-mobile">{{ difficulty.title }}</td>
          <td class="hide-mobile">{{ difficulty.dice }}</td>
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
@media (max-width: 1024px) {
  .hide-mobile {
    display: none;
  }
}

.table tbody tr:nth-child(even) :where(th, td) {
  background-color: hsl(var(--b3));
}
</style>
