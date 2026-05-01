import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const SALADS: MenuCategory[] = [
  {
    slug: "salads",
    name: "Salads",
    tagline: "Salads made with love",
    intro: "Our Salads is served from 12:00–11:30.",
    imageSrc: "/images/salads.png",
    subsections: [
          {
            id: "salads",
            title: "Freshly made salads",
            items: [
              {
                id: "sa-1",
                name: "Chrysanthi's special salad",
                description: d(
                  "Marinated chicken strips, crunchy salad leaves, baby rocket, cherry tomatoes, avocado, crispy bacon, croutons, grilled halloumi with our honey-mustard dressing.",
                  "Μαριναρισμένο κοτόπουλο, φύλλα σαλάτας, ρόκα, ντοματίνια, αβοκάντο, μπέικον, κρουτόν, χαλούμι σχάρας & dressing μέλι-μουστάρδα.",
                ),
                price: "€13.50",
                imageSrc : "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/c45c26c0-8278-11ec-9149-8a8f06cc5d79_31.chrysanthis_special_salad.jpeg?w=960"
              },
              {
                id: "sa-2",
                name: "Chicken goujon salad",
                description: d(
                  "Panko chicken goujons on a bed of crunchy mixed leaves, grated carrot, feta and pomegranates topped with sesame seeds & our honey mustard dressing.",
                  "Κοτομπουκιές πάνκο, μικτή σαλάτα, καρότο, φέτα, ρόδι, σουσάμι & dressing μέλι-μουστάρδα.",
                ),
                price: "€13",
                imageSrc : "https://imageproxy.wolt.com/assets/68aefe7583a9e2e9a3cf3777?w=960"
              },
              {
                id: "sa-3",
                name: "Quinoa & cashew nut salad",
                description: d(
                  "Mixed salad leaves with quinoa, cherry tomatoes, parsley, cucumber, avocado & cashew nuts, topped with sliced apple & a lemon dressing.",
                  "Μικτή σαλάτα με κινόα, ντοματίνια, μαϊντανό, αγγούρι, αβοκάντο, κάσιους, μήλο & dressing λεμονιού.",
                ),
                price: "€12",
                imageSrc : "https://imageproxy.wolt.com/assets/68af04b95650c92c6dc91937?w=960"
              },
              {
                id: "sa-4",
                name: "Halloumi salad",
                description: d(
                  "Grilled halloumi on a bed of mixed crunchy salad leaves with pomegranate, dried figs, walnuts topped with our honey mustard dressing topped with rucola & balsamic glaze.",
                  "Χαλούμι σχάρας, μικτή σαλάτα, ρόδι, ξερά σύκα, καρύδια, dressing μέλι-μουστάρδα, ρόκα & βαλσάμικο.",
                ),
                price: "€13",
                imageSrc : "https://imageproxy.wolt.com/assets/68af016d83a9e2e9a3cf3857?w=960"
              },
              {
                id: "sa-5",
                name: "Prawn & avocado salad",
                description: d(
                  "Fresh crisp salad leaves mixed with grated carrot, prawns, avocado, cucumber, edamame & sesame seeds in our new Asian dressing.",
                  "Φρέσκα φύλλα με καρότο, γαρίδες, αβοκάντο, αγγούρι, edamame, σουσάμι & ασιατικό dressing.",
                ),
                price: "€15.50",
                imageSrc : "https://imageproxy.wolt.com/assets/68af023f96fbe9c58f982889?w=1600"
              },
              {
                id: "sa-6",
                name: "Oven baked salmon salad",
                description: d(
                  "With mixed lettuce, cherry tomato, cucumber, quinoa, baked salmon, fresh dill topped with our honey mustard dressing & sesame seeds.",
                  "Μικτή σαλάτα, ντοματίνια, αγγούρι, κινόα, ψητός σολομός, άνηθο, dressing μέλι-μουστάρδα & σουσάμι.",
                ),
                price: "€16",
                imageSrc : "https://imageproxy.wolt.com/assets/68af063983a9e2e9a3cf3982?w=960"
              },
              {
                id: "sa-7",
                name: "Pasta salad*",
                description: d(
                  "Tricolore pasta mixed with mixed lettuce, sundried tomatoes, olives, avocado, grated carrots & topped with marinated grilled chicken dressed in a pesto sauce.",
                  "Ζυμαρικά tricolore με σαλάτα, λιαστές ντομάτες, ελιές, αβοκάντο, καρότο & μαριναρισμένο κοτόπουλο με πέστο.",
                ),
                price: "€13",
                imageSrc : "https://imageproxy.wolt.com/assets/6699314dde1e96729097aac1?w=960"
              },
            ],
          },
    ],
  },
];
