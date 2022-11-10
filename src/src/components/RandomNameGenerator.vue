<template>
  <div class="name-gen card">
    <form id="name-gen-form" @submit.prevent="generate">
      <label class="text-lg font-bold" for="name-count-input">
        {{ translate("GenerateRandomName") }}
      </label>
      <input
        id="name-count-input"
        name="count"
        type="number"
        v-model="number"
        min="1"
        max="20"
        class="input input-sm w-16"
      />
      <button class="btn btn-primary btn-sm" type="submit">
        {{ translate("Generate") }}
      </button>
    </form>
    <output form="name-gen-form" for="생성된 이름들">
      <ul class="names">
        <li v-for="(name, i) in names" :key="i">
          {{ name }}
        </li>
      </ul>
    </output>
  </div>
</template>
<script lang="ts" setup>
import { translate } from "@/modules/translate.js";
import { generateRandomNameKor } from "@/modules/random-name-kor";
import { ref } from "vue";

function generateRandomName(count: number): string[] {
  // length 만큼 callback 함수를 실행해서 배열을 생성
  return Array.from({ length: count }, () => generateRandomNameKor());
}

const names = ref([] as string[]);
const number = ref(10);

function generate() {
  names.value = generateRandomName(number.value);
}

generate();
</script>

<style lang="scss">
div.name-gen {
  color: hsl(var(--bc));
  font-size: 16px;
}

div.name-gen #name-gen-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
}

div.name-gen .names {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
