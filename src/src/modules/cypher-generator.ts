import { v4 as uuidv4 } from "uuid";
import CypherTemplates from "@/data/cyphers.json";
import CypherExt from "@/data/cypherexterior.json";

export interface Cypher {
  level: number;
  id: string;
  name: string;
  exterior: string;
  effect: string;
  originalText: string | undefined;
}

function pick<T>(array: T[]): T {
  const idx = Math.floor(Math.random() * array.length);
  const item = array[idx];
  return item;
}

function generateExterior(): string {
  return `${pick(CypherExt.colors)} ${pick(CypherExt.shapes)} ${pick(
    CypherExt.material
  )}`;
}

export function generateRandomCypher(
  excludeMachineTrans: boolean,
  number: number
): Cypher[] {
  const templates = excludeMachineTrans
    ? CypherTemplates.filter((x) => !x.machinetranslated)
    : CypherTemplates;
  return Array.from({ length: number }, () => {
    const template = pick(templates);
    const level = Math.floor(Math.random() * 6) + template.defaultLevel;
    return {
      level,
      id: uuidv4(),
      name: template.name,
      exterior: generateExterior(),
      effect: template.effect.replace(/\{level\}/g, level.toString()),
      originalText: template.originalText,
    };
  });
}
