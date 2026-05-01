import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const DESSERT: MenuCategory[] = [
  {
    slug: "dessert",
    name: "Dessert",
    tagline: "Home Desserts made with love",
    intro: "Our Desserts Menu is served from 08:30–11:30.",
    imageSrc:
      "https://imageproxy.wolt.com/assets/68af06ee5650c92c6dc919a9?w=1920%201920w",
    subsections: [
      {
        id: "desserts",
        title: "Homemade desserts",
        intro: "Come in & see our delicious display of homemade cakes.",
        items: [
          {
            id: "de-1",
            name: "Carrot cake / red velvet cake",
            price: "€6",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af043196fbe9c58f982916?w=960",
          },
          {
            id: "de-2",
            name: "Cheesecakes of the day",
            price: "€5.50",
            imageSrc:
              "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/3e351612-8280-11ec-be88-f6c031c7e2e7_23.lemon_cheesecake.jpeg?w=960",
          },
          {
            id: "de-3",
            name: "Sticky toffee pudding served with ice cream",
            price: "€6.50",
            imageSrc:
              "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/f698356e-827f-11ec-9c6c-9af5993988b8_25.bueno_brownie.jpeg?w=960",
          },
          {
            id: "de-4",
            name: "Apple pie with ice cream",
            price: "€6.50",
            imageSrc:
              "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/e9b817e0-8592-11ec-ae37-12c8f45cb425_5a1d12ee_1568_412a_8891_2a2dabff70bd.jpeg?w=960",
          },
          {
            id: "de-5",
            name: "Brownies Bueno served with ice cream",
            price: "€6",
            imageSrc:
              "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/f698356e-827f-11ec-9c6c-9af5993988b8_25.bueno_brownie.jpeg?w=960",
          },
          {
            id: "de-6",
            name: "Brownies Twix with ice cream",
            price: "€6",
            imageSrc:
              "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/728ce3ac-84e4-11ec-8991-5641dec33f6d_76429681_e33a_4979_bc37_d29b213845ae.jpeg?w=960",
          },
          {
            id: "de-7",
            name: "Ice cream sundae (cookie or Lotus or pistachio)",
            price: "€6.50",
            imageSrc: "",
          },
        ],
      },
    ],
  },
];
