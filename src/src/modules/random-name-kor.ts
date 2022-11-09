import * as Hangul from "hangul-js";

const CONSONANTS = {
    "ㄱ": ["ㅇ", "ㄹ", "ㄴ", "ㄷ", "ㅁ", "ㅌ", "ㅎ"],
    "ㄴ": ["ㅇ", "ㄹ", "ㄷ", "ㅁ", "ㅂ", "ㅅ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"],
    "ㄷ": ["ㅇ", "ㄱ", "ㄴ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅈ"],
    "ㄹ": ["ㄱ", "ㄴ", "ㄷ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"],
    "ㅁ": ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅂ", "ㅅ", "ㅇ", "ㅋ", "ㅌ", "ㅍ"],
    "ㅂ": ["ㄴ", "ㄹ", "ㅁ", "ㅅ"],
    "ㅅ": ["ㄱ", "ㄴ", "ㄹ", "ㅁ", "ㅇ", "ㅋ", "ㅌ", "ㅎ"],
    "ㅇ": ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"],
    "ㅈ": ["ㄱ", "ㄴ", "ㄹ", "ㅁ", "ㅇ"],
    "ㅊ": ["ㄴ", "ㄹ", "ㅁ", "ㅇ", "ㄱ", "ㄷ"],
    "ㅋ": ["ㄴ", "ㄹ", "ㅁ", "ㅇ", "ㄷ", "ㅂ"],
    "ㅌ": ["ㄴ", "ㄹ", "ㅁ", "ㅇ", "ㄱ", "ㅂ"],
    "ㅍ": ["ㄴ", "ㄹ", "ㅁ", "ㅇ", "ㄱ", "ㄷ"],
    "ㅎ": ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"]
};

const VOWELS = {
    "ㅏ": ["ㅓ", "ㅗ", "ㅜ", "ㅔ", "ㅣ"],
    "ㅓ": ["ㅗ", "ㅜ", "ㅣ", "ㅔ"],
    "ㅗ": ["ㅜ", "ㅏ", "ㅓ", "ㅔ"],
    "ㅜ": ["ㅗ", "ㅏ", "ㅔ"],
    "ㅣ": ["ㅏ", "ㅗ", "ㅔ"],
    "ㅔ": ["ㅣ", "ㅏ", "ㅓ", "ㅗ", "ㅜ"]
};

const LOWER_CONSONANTS = ["ㄴ", "ㄹ", "ㅁ"];

interface Syllable {
    consonant: string;
    vowel: string;
    lowerConsonant: string | null;
}

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomAssembly(count: number): string[] {
    let syllables: Syllable[] = [];
    syllables.push({
        consonant: pick(Object.keys(CONSONANTS)),
        vowel: pick(Object.keys(VOWELS)),
        lowerConsonant: Math.random() > 0.7 ? pick(LOWER_CONSONANTS) : null,
    });

    for (var i = 1; i < count; i++) {
        syllables.push({
            consonant: pick(CONSONANTS[syllables[i - 1].consonant]),
            vowel: pick(VOWELS[syllables[i - 1].vowel]),
            lowerConsonant: Math.random() > 0.7 ? pick(LOWER_CONSONANTS) : null
        });
    }

    let arr = [];
    for (var i = 0; i < syllables.length; i++) {
        arr.push(syllables[i].consonant, syllables[i].vowel);
        if (syllables[i].lowerConsonant) {
            arr.push(syllables[i].lowerConsonant);
        }
    }

    return arr;
}

export function generateRandomNameKor(): string {
    var syllablesCount = Math.floor(Math.random() * 3) + 2;
    var syllables = randomAssembly(syllablesCount);
    return Hangul.assemble(syllables);
}
