import * as Hangul from "hangul-js";

const HEADS = ["가", "나", "다", "마", "바", "사", "자", "카", "타", "파", "갈ㄹ", "날ㄹ", "말ㄹ", "살ㄹ", "발ㄹ", "잘ㄹ", "칼ㄹ", "탈ㄹ", "팔ㄹ", "할ㄹ", "알ㄹ", "감ㅁ", "암ㅁ", "간ㄴ", "단ㄴ", "반ㄴ", "산ㄴ", "안ㄴ", "간", "단", "반", "산", "탄", "판", "던ㄴ", "번ㄴ", "턴ㄴ", "헌ㄴ", "걸ㄹ", "덜ㄹ", "벌ㄹ", "펄ㄹ", "언ㄴ", "언", "얼ㄹ", "엄ㅁ", "도", "보", "노", "모", "소", "오", "조", "코", "토", "포", "호", "돌ㄹ", "볼ㄹ", "놀ㄹ", "몰ㄹ", "솔ㄹ", "올ㄹ", "졸ㄹ", "콜ㄹ", "톨ㄹ", "폴ㄹ", "누", "두", "무", "부", "수", "추", "쿠", "투", "후", "둘ㄹ", "물ㄹ", "술ㄹ", "쿨ㄹ", "툴ㄹ", "훌ㄹ", "울ㄹ", "글ㄹ", "들ㄹ", "슬ㄹ", "게", "네", "데", "메", "베", "세", "에", "제", "체", "케", "테", "페", "헤", "겔ㄹ", "넬ㄹ", "델ㄹ", "멜ㄹ", "벨ㄹ", "셀ㄹ", "엘ㄹ", "젤ㄹ", "첼ㄹ", "켈ㄹ", "텔ㄹ", "펠ㄹ", "헬ㄹ", "겐ㄴ", "덴ㄴ", "렌ㄴ", "멘ㄴ", "벤ㄴ", "센ㄴ", "엔ㄴ", "젠ㄴ", "첸ㄴ", "켄ㄴ", "텐ㄴ", "펜ㄴ", "헨ㄴ"];
const BODIES = ["", "ㅏ", "ㅣ", "ㅔ", "ㅗ", "ㅜ", "ㅣㄹ", "ㅏㄹ", "ㅗㄹ"];
const TAILS = ["스", "ㅗ스", "ㅜ스", "ㅔ임", "ㅗㄴ", "ㅔ일", "ㅣ안", "ㅔ알", "ㅔ르", "ㅣㅁ", "ㅗㅁ", "ㅣ르", "ㅏ", "ㅣ아", "ㅜㅁ", "ㅏㅁ", "ㅏㄹ", "ㅏㄴ", "ㅣㄴ", "ㅣㄹ", "ㅣㄱ", "ㅣ스", "마", "타", "ㄹ라", "ㄹ로", "ㅔㄹ", "ㅗㄹ"];

const VOWELS = ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ", "ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅢ", "ㅟ", "ㅞ", "ㅙ"];

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomAssembly(): string[] {
    var head = Hangul.disassemble(pick(HEADS));
    var body = Hangul.disassemble(pick(BODIES));
    var tail = Hangul.disassemble(pick(TAILS));
    var syllables = [...head, ...body, ...tail];

    for (var i = 0; i < syllables.length - 1 && i < 15;) {
        if (i > 0 && !VOWELS.includes(syllables[i]) && !VOWELS.includes(syllables[i]) && !VOWELS.includes(syllables[i + 1])) {
            syllables.splice(i, 1);
            continue;
        }
        if (VOWELS.includes(syllables[i]) && VOWELS.includes(syllables[i + 1])) {
            if (syllables[i] === syllables[i + 1]) {
                syllables.splice(i + 1, 1);
                continue;
            } else {
                syllables.splice(i + 1, 0, "ㅇ");
                i += 1;
                continue;
            }
        }
        i += 1;
        continue;
    }

    return syllables;
}

export function generateRandomNameKor(): string {
    var syllables = randomAssembly();
    return Hangul.assemble(syllables);
}
