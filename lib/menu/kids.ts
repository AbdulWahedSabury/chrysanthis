import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const KIDS: MenuCategory[] = [
  {
    slug: "kids",
    name: "For the little ones",
    tagline: "",
    intro: "Our kids menu is served from 12:00–23:30.",
    imageSrc: "/images/sandwichburger.png",
    subsections: [
      {
        id: "kids",
        title: "For the little ones",
        items: [
          {
            id: "ki-1",
            name: "Chicken goujons & chips",
            price: "€8",
          },
          {
            id: "ki-2",
            name: "Tricolore pasta in our tomato sauce",
            price: "€7",
          },
          {
            id: "ki-3",
            name: "Cheese burger & chips",
            price: "€9",
          },
          {
            id: "ki-4",
            name: "Toasty with halloumi & lountza",
            price: "€7",
          },
          {
            id: "ki-5",
            name: "Kids margarita pizza",
            price: "€6.50",
          },
          {
            id: "ki-6",
            name: "Freshly squeezed orange or apple juice",
            price: "€2.50",
          },
        ],
      },
    ],
  },
];
