<template>
  <div class="cypher-gen card">
    <form id="cypher-gen-form" @submit.prevent="generate">
      <label class="text-lg font-bold" for="cypher-count-input">
        {{ translate("GenerateRandomCypher") }}
      </label>
      <input
        id="cypher-count-input"
        type="number"
        name="count"
        v-model="number"
        min="1"
        max="10"
        class="input input-sm w-16"
      />
      <button type="submit" class="btn btn-primary btn-sm">
        {{ translate("Generate") }}
      </button>
    </form>
    <output form="cypher-gen-form" for="생성된 이름들">
      <ul>
        <li
          v-for="cypher in cyphers"
          :key="cypher.id"
          class="cypher-list"
          :title="cypher.originalText"
        >
          {{ toText(cypher) }}
        </li>
      </ul>
      <button type="button" class="btn btn-secondary btn-sm" @click="copy">
        복사하기
      </button>
    </output>
  </div>
</template>
<script lang="ts" setup>
import { translate } from "@/modules/translate.js";
import { ref } from "vue";
import { generateRandomCypher } from "@/modules/cypher-generator";
import type { Cypher } from "@/modules/cypher-generator";

const cyphers = ref([] as Cypher[]);
const number = ref(5);

function generate() {
  cyphers.value = generateRandomCypher(true, number.value);
}

generate();

function toText(cypher: Cypher): string {
  return `${cypher.level}${translate("Level")} ${cypher.exterior} - ${
    cypher.effect
  }`;
}

function copy() {
  const cyphersAsText = cyphers.value
    .map((cypher) => {
      return toText(cypher);
    })
    .join("\n");
  navigator.clipboard.writeText(cyphersAsText);
  alert("복사되었습니다!");
}
</script>

<style lang="scss">
div.cypher-gen {
  color: hsl(var(--bc));
  font-size: 16px;
}

div.cypher-gen #cypher-gen-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

div.cypher-list {
  font-size: 14px;
}
</style>
