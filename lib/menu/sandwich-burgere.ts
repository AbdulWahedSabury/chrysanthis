import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const SANDWICHBURGER: MenuCategory[] = [
  {
    slug: "sandwich-burger",
    name: "Freshly made Sandwiches and Burgers",
    tagline: "Home Sandwiches and Burger made with love",
    intro: "Our Sandwiches and Burger is served from 12:00–23:30.",
    imageSrc: "/images/sandwichburger.png",
    subsections: [
      {
        id: "sandwiches",
        title: "Freshly made sandwiches",
        items: [
          {
            id: "sw-1",
            name: "Chrysanth’s Supreme",
            description: d(
              "Oven baked baguette with homemade tomato sauce, mozzarella cheese, chorizo, chicken strips, rucola, sprinkled with pesto sauce. Served with sweet potato fries.",
              "Ψημένη μπαγκέτα με σπιτική σάλτσα ντομάτας, τυρί μοτσαρέλα, λουκάνικο chorizo, κοτόπουλο και ρόκα, με σως πέστο. Συνοδεύεται με πατάτες γλυκοπατάτας.",
            ),
            price: "€13",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aefe5c83a9e2e9a3cf376c?w=960",
          },
          {
            id: "sw-2",
            name: "House club",
            description: d(
              "Triple decker club sandwich with bacon, fried egg, chicken breast, double cheese, lettuce, tomato, house mayo & served with chips.",
              "Τριώροφο club sandwich με μπέικον, τηγανητό αυγό, στήθος κοτόπουλο, διπλό τυρί, μαρούλι, ντομάτα και με τη δική μας σπιτική μαγιονέζα. Το πιάτο σερβίρεται με τηγανιτές πατάτες.",
            ),
            price: "€13",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af058796fbe9c58f982963",
          },
          {
            id: "sw-3",
            name: "Steak sandwich",
            description: d(
              "Strips of beef fillet cooked with grilled red onions, mushrooms & a wine cream sauce on an oven baked baguette with melted mozzarella cheese. Served with a salad garnish & chips.",
              "Λωρίδες φιλέτου βοδινού, καβουρδισμένα κρεμμύδια και μανιτάρια, μέσα σε κρεμώδη σάλτσα από κρασί και σερβιρισμένο σε ψωμί panini με τυρί μοτσαρέλα. Συνοδεύεται με σαλάτα και πατάτες.",
            ),
            price: "€14.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af04cf5650c92c6dc9193f?w=960",
          },
          {
            id: "sw-4",
            name: "Homemade Falafel",
            description: d(
              "Falafels on a Lebanese flat bread with a salad garnish, chopped tomato, onion, parsley and cucumber, coriander tahini dressing & our homemade beetroot hummus dip.",
              "Φαλάφελ σε λιβανέζικη πίτα με σαλάτα, ντομάτα, κρεμμύδι, μαϊντανό και αγγούρι, σως ταχίνι με κόλιανδρο και σπιτικό χούμους παντζαριού.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af000383a9e2e9a3cf37e5?w=960",
          },
        ],
      },
      {
        id: "burgers",
        title: "Burger lovers",
        intro:
          "Our burgers are 230 grams, ground to a specific blend using fresh beef and are cooked medium to well unless asked otherwise.",
        items: [
          {
            id: "bu-1",
            name: "Chrysanthi's burger",
            description: d(
              "Homemade beef burger in a brioche bun with melted cheddar cheese, crispy bacon, lettuce, tomato, sliced gherkins, homemade BBQ sauce & house mayo inside. Topped with dry roasted onions & served with American coleslaw & chips.",
              "Σπιτικό μοσχαρίσιο μπέργκερ σε μπριός με cheddar, μπέικον, μαρούλι, ντομάτα, αγγουράκι τουρσί, BBQ & μαγιονέζα. Με ξερά κρεμμύδια, coleslaw & πατάτες.",
            ),
            price: "€15",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefe135650c92c6dc91780?w=960"
          },
          {
            id: "bu-2",
            name: "Classic cheeseburger",
            description: d(
              "Our 100% beef burger topped with cheddar cheese in a brioche bun with lettuce & tomatoes. Served with chips & coleslaw.",
              "100% μοσχαρίσιο μπέργκερ με cheddar σε μπριός, μαρούλι & ντομάτα. Με πατάτες & coleslaw.",
            ),
            price: "€14",
            imageSrc : "https://imageproxy.wolt.com/assets/68aeff5d96fbe9c58f9827ed?w=960"
          },
          {
            id: "bu-3",
            name: "Chicken slaw burger",
            description: d(
              "Chicken fillets in breadcrumbs with melted cheddar cheese in a brioche bun, topped with American coleslaw. Served with a Chicago dip, chips & a salad garnish.",
              "Κοτόπουλο σε τραγανή επικάλυψη με cheddar σε μπριός & coleslaw. Με dip Chicago, πατάτες & σαλάτα.",
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefec796fbe9c58f9827ca?w=960"
          },
          {
            id: "bu-4",
            name: "Spicy chicken burger",
            description: d(
              "Chicken fillets in breadcrumbs in a brioche bun with spicy mayo, iceberg lettuce, gherkins and tomato. Served with chips and coleslaw.",
              "Κοτόπουλο σε τραγανή επικάλυψη με πικάντικη μαγιονέζα, μαρούλι iceberg, αγγουράκι & ντομάτα. Με πατάτες & coleslaw.",
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af04e45650c92c6dc91942?w=960"
          },
          {
            id: "bu-5",
            name: "Vegetarian burger",
            description: d(
              "Vegetarian burger on a toasted focaccia bread with an avocado spread, lettuce, tomato & dry roasted onions. Served with sweet potato fries & a salad garnish.",
              "Χορτοφαγικό μπέργκερ σε ψητή φοκάτσια με αβοκάντο, μαρούλι, ντομάτα & ξερά κρεμμύδια. Με γλυκοπατάτες & σαλάτα.",
            ),
            price: "€13.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af053396fbe9c58f982943?w=960"
          },
        ],
      },
    ],
  },
];
