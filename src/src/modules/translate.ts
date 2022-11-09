import UIString from "@/data/ui.json";

export function translate(key: string): string {
  const uiStr = UIString as any;
  return uiStr[key] ?? key;
}
