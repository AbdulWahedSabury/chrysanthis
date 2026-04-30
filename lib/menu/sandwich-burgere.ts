import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const SANDWICHBURGER: MenuCategory[] = [
  {
    slug: "sandwich-burger",
    name: "Freshly made Sandwiches and Burger",
    tagline: "Home Sandwiches and Burger made with love",
    intro: "Our Sandwiches and Burger is served from 12:00–23:30.",
    imageSrc: "/images/sandwichburger.png",
    subsections: [
          {
            id: "sandwiches",
            title: "Freshly made sandwiches",
            items: [
              {
                id: "sw-2",
                name: "House club",
                description: d(
                  "Triple decker club sandwich...",
                  "Τριώροφο club...",
                ),
                price: "€13",
                imageSrc:
                  "https://imageproxy.wolt.com/assets/68af058796fbe9c58f982963",
              },
              {
                id: "sw-3",
                name: "Steak sandwich",
                description: d(
                  "Strips of beef fillet...",
                  "Φιλέτο μοσχαριού...",
                ),
                price: "€14.50",
                imageSrc:
                  "https://imageproxy.wolt.com/assets/68aefe5c83a9e2e9a3cf376c",
              },
            ],
          },
      {
        id: "burgers",
        title: "Burger lovers",
        intro: "Our burgers are 230 grams, ground to a specific blend using fresh beef and are cooked medium to well unless asked otherwise.",
        items: [
          {
            id: "bu-1",
            name: "Chrysanthi's burger*",
            description: d(
              "Homemade beef burger in a brioche bun with melted cheddar cheese, crispy bacon, lettuce, tomato, sliced gherkins, homemade BBQ sauce & house mayo inside. Topped with dry roasted onions & served with American coleslaw & chips.",
              "Σπιτικό μοσχαρίσιο μπέργκερ σε μπριός με cheddar, μπέικον, μαρούλι, ντομάτα, αγγουράκι τουρσί, BBQ & μαγιονέζα. Με ξερά κρεμμύδια, coleslaw & πατάτες.",
            ),
            price: "€15",
          },
          {
            id: "bu-2",
            name: "Classic cheeseburger",
            description: d(
              "Our 100% beef burger topped with cheddar cheese in a brioche bun with lettuce & tomatoes. Served with chips & coleslaw.",
              "100% μοσχαρίσιο μπέργκερ με cheddar σε μπριός, μαρούλι & ντομάτα. Με πατάτες & coleslaw.",
            ),
            price: "€14",
          },
          {
            id: "bu-3",
            name: "Chicken slaw burger",
            description: d(
              "Chicken fillets in breadcrumbs with melted cheddar cheese in a brioche bun, topped with American coleslaw. Served with a Chicago dip, chips & a salad garnish.",
              "Κοτόπουλο σε τραγανή επικάλυψη με cheddar σε μπριός & coleslaw. Με dip Chicago, πατάτες & σαλάτα.",
            ),
            price: "€14.50",
          },
          {
            id: "bu-4",
            name: "Spicy chicken burger",
            description: d(
              "Chicken fillets in breadcrumbs in a brioche bun with spicy mayo, iceberg lettuce, gherkins and tomato. Served with chips and coleslaw.",
              "Κοτόπουλο σε τραγανή επικάλυψη με πικάντικη μαγιονέζα, μαρούλι iceberg, αγγουράκι & ντομάτα. Με πατάτες & coleslaw.",
            ),
            price: "€14.50",
          },
          {
            id: "bu-5",
            name: "Vegetarian burger",
            description: d(
              "Vegetarian burger on a toasted focaccia bread with an avocado spread, lettuce, tomato & dry roasted onions. Served with sweet potato fries & a salad garnish.",
              "Χορτοφαγικό μπέργκερ σε ψητή φοκάτσια με αβοκάντο, μαρούλι, ντομάτα & ξερά κρεμμύδια. Με γλυκοπατάτες & σαλάτα.",
            ),
            price: "€13.50",
          },
        ],
      },
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
      {
        id: "desserts",
        title: "Homemade desserts",
        intro: "Come in & see our delicious display of homemade cakes.",
        items: [
          {
            id: "de-1",
            name: "Carrot cake / red velvet cake",
            price: "€6",
          },
          {
            id: "de-2",
            name: "Cheesecakes of the day",
            price: "€5.50",
          },
          {
            id: "de-3",
            name: "Sticky toffee pudding served with ice cream",
            price: "€6.50",
          },
          {
            id: "de-4",
            name: "Apple pie with ice cream",
            price: "€6.50",
          },
          {
            id: "de-5",
            name: "Brownies of the day served with ice cream",
            price: "€6",
          },
          {
            id: "de-6",
            name: "Ice cream sundae (cookie or Lotus or pistachio)",
            price: "€6.50",
          },
        ],
      },
    ],
  },
];
