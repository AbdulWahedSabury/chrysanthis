import { MENU_MORNING_BRUNCH } from "./morning-brunch";
import {MENU_BRUNCH_COCKTAILS} from "./brunch-cocktails"
import { MAINMENU } from "./main-menu";
import { MENU_CATEGORIES_PART_B } from "./categories-part-b";
import { MENU_CATEGORIES_PART_C } from "./categories-part-c";
import { dishImageSrc } from "./helpers";
import type { MenuCategory } from "./types";
import { SANDWICHBURGER } from "./sandwich-burgere";
import { PASTAS } from "./pasta";
import { SALADS } from "./salads";
import { KIDS } from "./kids";
import { DESSERT } from "./dessert";

export type {
  MenuCategory,
  MenuCircleGroup,
  MenuItem,
  MenuSubsection,
  MenuText,
} from "./types";
export { dishImageSrc };

export const MENU_CATEGORIES: MenuCategory[] = [
  ...MENU_MORNING_BRUNCH,
  ...MENU_BRUNCH_COCKTAILS,
  ...MAINMENU,
  ...SANDWICHBURGER,
  ...PASTAS,
  ...SALADS,
  ...KIDS,
  ...DESSERT,
  ...MENU_CATEGORIES_PART_C,
];

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return MENU_CATEGORIES.find((c) => c.slug === slug);
}
