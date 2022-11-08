<template>
    <div class="cypher-gen">
        <div>
        <input type="number" v-model="number" />
        <button @click="generate">생성</button>
        </div>
        <div>
            <div v-for="cypher in cyphers" :key="cypher.id"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { v4 as uuidv4 } from "uuid";

interface Cypher {
    level: number;
    id: string;
    name: string;
    use: string;
    description: string;
};

function generateRandomCypher(number: number): Cypher[] {
    var cyphers = [];

    for (var i = 0; i < number; i++) {
        cyphers.push({
            level: Math.random() % 8,
            id: uuidv4(),
            name: "",
            use: "",
            description: ""
        });
    }

    return cyphers;
};

export default {
    data: (): { cyphers: Cypher[], number: number } => {
        return {
            cyphers: [],
            number: 1
        };
    },
    methods: {
        generate() {
            this.cyphers = generateRandomCypher(this.number);
        }
    }
};
</script>
<style lang="scss">
div.cypher-gen {
    border: 1px solid black;
}
</style>