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
        <li v-for="cypher in cyphers" :key="cypher.id" class="cypher-list">
          {{ cypher.level }}{{ translate("Level") }} {{ cypher.name }} -
          {{ cypher.effect }}
        </li>
      </ul>
      <button type="button" class="btn btn-secondary btn-sm" @click="copy">
        복사하기
      </button>
    </output>
  </div>
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
import CypherTemplates from "@/data/cyphers.json";
import { translate } from "@/modules/translate.js";
import { ref } from "vue";

interface Cypher {
  level: number;
  id: string;
  name: string;
  effect: string;
}

function generateRandomCypher(number: number): Cypher[] {
  return Array.from({ length: number }, () => {
    const idx = Math.floor(Math.random() * CypherTemplates.length);
    const template = CypherTemplates[idx];
    const level = Math.floor(Math.random() * 6) + template.defaultLevel;
    return {
      level,
      id: uuidv4(),
      name: template.name,
      effect: template.effect.replace(/\{level\}/g, level.toString()),
    };
  });
}

const cyphers = ref([] as Cypher[]);
const number = ref(10);

function generate() {
  cyphers.value = generateRandomCypher(number.value);
}

generate();

function copy() {
  const cyphersAsText = cyphers.value
    .map(({ level, name, effect }) => {
      return `${level}${translate("Level")} ${name} - ${effect}`;
    })
    .join("\n");
  navigator.clipboard.writeText(cyphersAsText);
  alert("복사되었습니다!");
}
</script>

<style lang="scss">
$font-color: #585d86;

div.cypher-gen {
  color: $font-color;
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
