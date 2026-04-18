import type { MenuItem } from "./types";

export function dishImageSrc(item: Pick<MenuItem, "id" | "imageSrc">): string {
  return item.imageSrc ?? `https://picsum.photos/seed/tktc-${item.id}/800/600`;
}
