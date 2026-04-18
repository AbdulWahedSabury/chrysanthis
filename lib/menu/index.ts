import { MENU_CATEGORIES_PART_A } from "./categories";
import { MENU_CATEGORIES_PART_B } from "./categories-part-b";
import { MENU_CATEGORIES_PART_C } from "./categories-part-c";
import { dishImageSrc } from "./helpers";
import type { MenuCategory } from "./types";

export type {
  MenuCategory,
  MenuCircleGroup,
  MenuItem,
  MenuSubsection,
  MenuText,
} from "./types";
export { dishImageSrc };

export const MENU_CATEGORIES: MenuCategory[] = [
  ...MENU_CATEGORIES_PART_A,
  ...MENU_CATEGORIES_PART_B,
  ...MENU_CATEGORIES_PART_C,
];

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return MENU_CATEGORIES.find((c) => c.slug === slug);
}
