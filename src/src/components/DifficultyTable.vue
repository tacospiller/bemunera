<template>
  <div class="difficulty-table card">
    <div class="title">
      {{ translate("DifficultyTable") }}
    </div>
    <table class="table">
      <tr>
        <th>{{ translate("Difficulty") }}</th>
        <th>{{ translate("DifficultyTitle") }}</th>
        <th>{{ translate("DifficultyRequirement") }}</th>
        <th>{{ translate("DifficultyDesc") }}</th>
      </tr>
      <tr v-for="(difficulty, i) in difficulties" :key="difficulty.difficulty">
        <td :class="i % 2 == 0 ? 'colored' : ''">
          {{ difficulty.difficulty }}
        </td>
        <td :class="i % 2 == 0 ? 'colored' : ''">{{ difficulty.title }}</td>
        <td :class="i % 2 == 0 ? 'colored' : ''">{{ difficulty.dice }}</td>
        <td :class="i % 2 == 0 ? 'colored' : ''">
          {{ difficulty.description }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { translate } from "@/modules/translate";
import Difficulties from "@/data/difficulty.json";

export default {
  data: () => {
    return {
      difficulties: Difficulties,
    };
  },
  methods: {
    translate(key: string): string {
      return translate(key);
    },
  },
};
</script>
<style lang="scss">
$font-color: #585d86;

div.difficulty-table {
  color: $font-color;
}

div.difficulty-table .title {
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 10px;
}

table.table {
  border-collapse: collapse;
}

table.table td,
table.table th {
  border: 1px solid #d0d0d0;
  padding: 5px 15px;
  font-size: 14px;
}

table.table td.colored {
  background: #f0f0f0;
}
</style>
