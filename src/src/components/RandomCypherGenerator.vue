<template>
  <div class="cypher-gen card">
    <div class="cypher-gen-header">
      <div class="title">{{ translate("GenerateRandomCypher") }}</div>
      <div />
      <input
        type="number"
        v-model="number"
        min="1"
        max="10"
        class="input-number"
      />
      <button @click="generate" class="button">
        {{ translate("Generate") }}
      </button>
      <div />
    </div>
    <div>
      <div v-for="cypher in cyphers" :key="cypher.id" class="cypher-list">
        {{ cypher.level }}{{ translate("Level") }} {{ cypher.name }} -
        {{ cypher.effect }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { v4 as uuidv4 } from "uuid";
import CypherTemplates from "@/data/cyphers.json";
import { translate } from "@/modules/translate.js";

interface Cypher {
  level: number;
  id: string;
  name: string;
  effect: string;
}

function generateRandomCypher(number: number): Cypher[] {
  var cyphers = [];

  for (var i = 0; i < number; i++) {
    var idx = Math.floor(Math.random() * CypherTemplates.length);
    var template = CypherTemplates[idx];
    var level = Math.floor(Math.random() * 6) + template.defaultLevel;
    cyphers.push({
      level: level,
      id: uuidv4(),
      name: template.name,
      effect: template.effect.replace(/\{level\}/g, level.toString()),
    });
  }

  return cyphers;
}

export default {
  data: (): { cyphers: Cypher[]; number: number } => {
    return {
      cyphers: [],
      number: 1,
    };
  },
  methods: {
    generate() {
      this.cyphers = generateRandomCypher(this.number);
    },
    translate(key: string) {
      return translate(key);
    },
  },
};
</script>
<style lang="scss">
$font-color: #585d86;

div.cypher-gen {
  color: $font-color;
  font-size: 16px;
}

div.cypher-gen .cypher-gen-header {
  display: grid;
  grid-template-columns: auto 30px auto auto 1fr;
  gap: 10px;
  padding-bottom: 15px;
}

div.cypher-gen .title {
  font-weight: bold;
}

div.cypher-list {
  font-size: 14px;
}

input.input-number {
  width: 50px;
  border: none;
  border-bottom: 1px solid #585d86;
  background: transparent;
}
button.button {
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  background: #3a8891;
  color: white;
}

button.button:active {
  background: #2a6268;
}
</style>
