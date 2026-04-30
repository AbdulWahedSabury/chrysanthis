import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MENU_BRUNCH_COCKTAILS: MenuCategory[] = [
  {
    slug: "brunch-cocktails",
    name: "Brunch Cocktails",
    tagline: "Cocktails made with love",
    intro: "Our Brunch Cocktails Menu is served from 08:00–23:30.",
    imageSrc: "/images/brunch-cocktails.png",
    subsections: [
      {
        id: "brunch-cocktails",
        title: "Brunch cocktails",
        items: [
          {
            id: "bc-1",
            name: "Sunrise Mimosa",
            description: d(
              "The perfect way to enjoy bubbles in the morning! Prosecco, orange & cranberry juice.",
              "Ο καλύτερος τρόπος να ξεκινήσετε την μέρα σας! Prosecco, χυμός πορτοκάλι και κράνμπερι.",
            ),
            price: "€6",
          },
          {
            id: "bc-2",
            name: "Peach Bellini",
            description: d(
              "An authentic Italian Peach Bellini cocktail, made with peach purée and bubbly Prosecco.",
              "Η αυθεντική Ιταλική συνταγή για Peach Bellini! Φρέσκος πουρές από ροδάκινο και prosecco.",
            ),
            price: "€6",
          },
          {
            id: "bc-3",
            name: "Aperol Spritz",
            description: d(
              "Aperol, Prosecco, soda and dried orange.",
              "Το αγαπημένο κοκτέιλ για όλες τις ώρες! Aperol, prosecco, σόδα και αποξηραμένο πορτοκάλι.",
            ),
            price: "€8",
          },
          {
            id: "bc-4",
            name: "Chrysanthi's Spritz",
            description: d(
              "Skinos Mastiha, homemade lemonade, Prosecco, soda and rosemary.",
              "Το ποτό της Χρυσάνθης, σπιτική λεμονάδα, prosecco, σόδα και δεντρολίβανο.",
            ),
            price: "€8",
          },
          {
            id: "bc-5",
            name: "Limoncello Spritz",
            description: d(
              "Limoncello, homemade lemonade, Prosecco and soda.",
              "Limoncello, σπιτική λεμονάδα, prosecco και σόδα.",
            ),
            price: "€8",
          },
        ],
      },
    ],
  },
];
