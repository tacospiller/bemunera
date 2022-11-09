<template>
    <div class="name-gen card">
        <div class="name-gen-header">
            <div class="title">{{ translate("GenerateRandomName") }}</div>
            <div />
            <button @click="generate" class="button">
                {{ translate("Generate") }}
            </button>
            <div />
        </div>
        <div>
            {{ name }}
        </div>
    </div>
</template>
<script lang="ts">
import { translate } from "@/modules/translate.js";
import { generateRandomNameKor } from "@/modules/random-name-kor";

function generateRandomName(): string {
    return generateRandomNameKor();
}

export default {
    data: (): { name: string | null; } => {
        return {
            name: null
        };
    },
    methods: {
        generate() {
            this.name = generateRandomName();
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
</style>
