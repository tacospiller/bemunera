<template>
  <div class="name-gen card">
    <div class="name-gen-header">
      <div class="title">{{ translate("GenerateRandomName") }}</div>
      <div />
      <input
        type="number"
        v-model="number"
        min="1"
        max="20"
        class="input-number"
      />
      <button @click="generate" class="button">
        {{ translate("Generate") }}
      </button>
      <div />
    </div>
    <div class="names">
      <div v-for="(name, i) in names" :key="i">
        {{ name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { translate } from "@/modules/translate.js";
import { generateRandomNameKor } from "@/modules/random-name-kor";

function generateRandomName(count: number): string[] {
  var names = [];
  for (var i = 0; i < count; i++) {
    names.push(generateRandomNameKor());
  }
  return names;
}

export default {
  data: (): { names: string[]; number: number } => {
    return {
      names: [],
      number: 10,
    };
  },
  methods: {
    generate() {
      this.names = generateRandomName(this.number);
    },
    translate(key: string) {
      return translate(key);
    },
  },
};
</script>
<style lang="scss">
$font-color: #585d86;

div.name-gen {
  color: $font-color;
  font-size: 16px;
}

div.name-gen .name-gen-header {
  display: grid;
  grid-template-columns: auto 30px auto auto 1fr;
  gap: 10px;
  padding-bottom: 15px;
}

div.name-gen .title {
  font-weight: bold;
}

div.name-gen .names {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
