import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const PASTAS: MenuCategory[] = [
  {
    slug: "pastas",
    name: "Pasta Dishes",
    tagline: "Home Pastas made with love",
    intro: "Our Pastas is served from 12:00–23:30.",
    imageSrc: "/images/pastas.png",
    subsections: [
      {
        id: "pasta",
        title: "Pasta dishes",
        items: [
          {
            id: "pa-1",
            name: "Chrysanthi's carbonara",
            description: d(
              "Linguine pasta mixed with crispy bacon, marinated chicken breast, onions & parsley all tossed in a creamy parmesan sauce.",
              "Linguine με τραγανό μπέικον, μαριναρισμένο στήθος κοτόπουλου, κρεμμύδια & μαϊντανό σε κρεμώδη σάλτσα παρμεζάνας."
            ),
            price: "€13.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefe355650c92c6dc91789?w=960"
          },
          {
            id: "pa-2",
            name: "Linguine frutti di mare",
            description: d(
              "Mixed seafood with king prawns sautéed in ouzo & white wine with onions, in our homemade cream & tomato sauce served with linguine, dill & parmesan cheese.",
              "Θαλασσινά με βασιλικές γαρίδες σε ούζο & λευκό κρασί, κρεμώδη σάλτσα ντομάτας, linguine, άνηθο & παρμεζάνα."
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af001d83a9e2e9a3cf37ec?w=960"
          },
          {
            id: "pa-3",
            name: "Manzo beef pasta",
            description: d(
              "Strips of beef fillet, wine, onion, mushrooms in a cream sauce with Italian herbs, chives, rucola & parmesan cheese flakes.",
              "Φιλέτο μοσχαριού, κρασί, κρεμμύδι, μανιτάρια σε κρέμα με ιταλικά μυρωδικά, σνιτ, ρόκα & νιφάδες παρμεζάνας."
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/1f38a14e-827f-11ec-90da-5287286ddc83_44.manzo_beef_pasta.jpeg?w=960"
          },
          {
            id: "pa-4",
            name: "Crispy chicken Milanese",
            description: d(
              "Linguine pasta mixed in our homemade tomato sauce with crispy breaded chicken fillets topped with melted parmesan and mozzarella cheese with fresh basil leaves.",
              "Linguine με σπιτική σάλτσα ντομάτας, τραγανό κοτόπουλο, λιωμένη παρμεζάνα & μοτσαρέλα, φρέσκος βασιλικός."
            ),
            price: "€13.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefea896fbe9c58f9827c1?w=960"
          },
          {
            id: "pa-5",
            name: "Vegetarian penne pasta",
            description: d(
              "Penne pasta, homemade tomato sauce, cherry tomatoes, mushrooms, courgettes & baby spinach leaves.",
              "Πέννες, σάλτσα ντομάτας, ντοματίνια, μανιτάρια, κολοκυθάκια & σπανάκι μωρού."
            ),
            price: "€12",
            imageSrc : "https://imageproxy.wolt.com/assets/68af053f96fbe9c58f982948?w=960"
          },
        ],
      },
    ],
  },
];