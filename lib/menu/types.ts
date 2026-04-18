/** English + Greek lines as on the printed menu (for dish copy). */
export type MenuText = {
  en: string;
  el?: string;
};

export type MenuItem = {
  id: string;
  /** Title — English as on the menu. */
  name: string;
  description?: MenuText;
  price?: string;
  imageSrc?: string;
  note?: MenuText;
};

/** Optional paper-style “circle” option rows (e.g. gin menu tonic & garnish). */
export type MenuCircleGroup = {
  id: string;
  title: string;
  /** Short labels shown under each circle. */
  options: string[];
};

/** Section / category headings — English only on the site (Greek omitted). */
export type MenuSubsection = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  /** Renders below the section intro, before item rows. */
  circleGroups?: MenuCircleGroup[];
};

export type MenuCategory = {
  slug: string;
  name: string;
  tagline: string;
  intro?: string;
  imageSrc: string;
  subsections: MenuSubsection[];
};
