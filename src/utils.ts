import { VARIANTS } from ".";

export function variantToClass(variant: VARIANTS): string {
  return variant ? `__${variant.toLowerCase()}` : "";
}
