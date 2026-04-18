import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MENU_CATEGORIES_PART_B: MenuCategory[] = [
  {
    slug: "pasta-mains",
    name: "Pasta & main dishes",
    tagline: "From the pass",
    imageSrc: "https://picsum.photos/seed/tktc-pasta/1200/900",
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
              "Linguine με τραγανό μπέικον, μαριναρισμένο στήθος κοτόπουλου, κρεμμύδια & μαϊντανό σε κρεμώδη σάλτσα παρμεζάνας.",
            ),
            price: "€13.50",
          },
          {
            id: "pa-2",
            name: "Linguine frutti di mare",
            description: d(
              "Mixed seafood with king prawns sautéed in ouzo & white wine with onions, in our homemade cream & tomato sauce served with linguine, dill & parmesan cheese.",
              "Θαλασσινά με βασιλικές γαρίδες σε ούζο & λευκό κρασί, κρεμώδη σάλτσα ντομάτας, linguine, άνηθο & παρμεζάνα.",
            ),
            price: "€14.50",
          },
          {
            id: "pa-3",
            name: "Manzo beef pasta",
            description: d(
              "Strips of beef fillet, wine, onion, mushrooms in a cream sauce with Italian herbs, chives, rucola & parmesan cheese flakes.",
              "Φιλέτο μοσχαριού, κρασί, κρεμμύδι, μανιτάρια σε κρέμα με ιταλικά μυρωδικά, σνιτ, ρόκα & νιφάδες παρμεζάνας.",
            ),
            price: "€14.50",
          },
          {
            id: "pa-4",
            name: "Crispy chicken Milanese",
            description: d(
              "Linguine pasta mixed in our homemade tomato sauce with crispy breaded chicken fillets topped with melted parmesan and mozzarella cheese with fresh basil leaves.",
              "Linguine με σπιτική σάλτσα ντομάτας, τραγανό κοτόπουλο, λιωμένη παρμεζάνα & μοτσαρέλα, φρέσκος βασιλικός.",
            ),
            price: "€13.50",
          },
          {
            id: "pa-5",
            name: "Vegetarian penne pasta",
            description: d(
              "Penne pasta, homemade tomato sauce, cherry tomatoes, mushrooms, courgettes & baby spinach leaves.",
              "Πέννες, σάλτσα ντομάτας, ντοματίνια, μανιτάρια, κολοκυθάκια & σπανάκι μωρού.",
            ),
            price: "€12",
          },
        ],
      },
      {
        id: "mains",
        title: "Main dishes",
        items: [
          {
            id: "mn-1",
            name: "Jumbo juicy pork chop (800g)",
            description: d(
              "Marinated & grilled pork chop served with chips, salad & tzatziki.",
              "Μαριναρισμένη & ψητή μπριζόλα με πατάτες, σαλάτα & τζατζίκι.",
            ),
            price: "€17.50",
          },
          {
            id: "mn-2",
            name: "American baby back ribs",
            description: d(
              "Baby back ribs in our homemade BBQ sauce served with corn on the cob, American coleslaw, dry roasted onions & chips.",
              "Παϊδάκια με σπιτική σάλτσα BBQ, καλαμπόκι, coleslaw, ξερά κρεμμύδια & πατάτες.",
            ),
            price: "€18",
          },
          {
            id: "mn-3",
            name: "Beef broccoli stir fry",
            description: d(
              "Beef fillet strips in our homemade Asian sauce, broccoli, baby corn, mushrooms, served with a bowl of house basmati rice topped with sesame seeds.",
              "Λωρίδες μοσχαριού σε ασιατική σάλτσα, μπρόκολο, baby corn, μανιτάρια, με ρύζι basmati & σουσάμι.",
            ),
            price: "€14.50",
          },
          {
            id: "mn-4",
            name: "Mediterranean lemon chicken",
            description: d(
              "Grilled marinated chicken thighs served with our house basmati rice, Lebanese pitta, tzatziki & a side salad.",
              "Ψητό μαριναρισμένο μπούτι κοτόπουλου με ρύζι basmati, πίτα Λιβάνου, τζατζίκι & σαλάτα.",
            ),
            price: "€16",
          },
          {
            id: "mn-5",
            name: "Healthy grilled chicken",
            description: d(
              "Marinated grilled chicken breast fillets served with our house basmati rice & mixed salad.",
              "Μαριναρισμένο στήθος κοτόπουλου με ρύζι basmati & μικτή σαλάτα.",
            ),
            price: "€14",
          },
          {
            id: "mn-6",
            name: "Chicken katsu curry",
            description: d(
              "Panko chicken fillets with our house basmati rice and our homemade katsu sauce, with a green salad garnish.",
              "Κοτόπουλο πάνκο με ρύζι basmati & σπιτική σάλτσα katsu, με πράσινη σαλάτα.",
            ),
            price: "€15",
          },
          {
            id: "mn-7",
            name: "Vegan katsu curry",
            description: d(
              "Cauliflower florets & vegetables with our house basmati rice & homemade katsu sauce. Served with a side salad.",
              "Κουνουπίδι & λαχανικά με ρύζι basmati & σάλτσα katsu. Με σαλάτα.",
            ),
            price: "€14",
          },
          {
            id: "mn-8",
            name: "Chicken à la crème",
            description: d(
              "Chicken fillet pieces marinated in a creamy sauce, onions, mushrooms, roasted vegetables. Served with our house basmati rice.",
              "Κοτόπουλο σε κρεμώδη σάλτσα, κρεμμύδια, μανιτάρια, ψητά λαχανικά & ρύζι basmati.",
            ),
            price: "€14.50",
          },
          {
            id: "mn-9",
            name: "Marinated salmon fillet",
            description: d(
              "Oven baked salmon fillet with fresh dill in a cream and tomato sauce on top of our house basmati rice served with roasted vegetables.",
              "Ψητό φιλέτο σολομού με άνηθο σε κρέμα & ντομάτα πάνω σε ρύζι basmati με ψητά λαχανικά.",
            ),
            price: "€16.50",
          },
        ],
      },
    ],
  },
  {
    slug: "burgers-sweets",
    name: "Burgers, kids & desserts",
    tagline: "Something for everyone",
    imageSrc: "https://picsum.photos/seed/tktc-burger/1200/900",
    subsections: [
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
  {
    slug: "cocktails",
    name: "Cocktail menu",
    tagline: "Signature pours",
    intro: "Our skilled bartenders are constantly refining our bar menu to introduce new drinks and new flavours to our guests. Each of our signature cocktails have been especially created by our mixologists.",
    imageSrc: "https://picsum.photos/seed/tktc-cocktail/1200/900",
    subsections: [
      {
        id: "sig",
        title: "Signature cocktails",
        items: [
          {
            id: "ck-1",
            name: "Rhubarb Fire",
            description: d(
              "Rhubarb & ginger gin, homemade lemonade, topped with chilli.",
              "Τζιν ρubarb & τζίντζερ, σπιτική λεμονάδα, με τσίλι στην κορυφή.",
            ),
            price: "€9.50",
          },
          {
            id: "ck-2",
            name: "Passion Z",
            description: d(
              "Passoã passionfruit liqueur, zivania, and freshly squeezed lemon.",
              "Passoã, ζιβανία & φρεσκοστυμμένο λεμόνι.",
            ),
            price: "€9",
          },
          {
            id: "ck-3",
            name: "Mojito twist",
            description: d(
              "Captain Morgan rum, homemade lemonade, lime, soda and mint leaves.",
              "Captain Morgan, σπιτική λεμονάδα, lime, σόδα & φύλλα μέντας.",
            ),
            price: "€8.50",
          },
          {
            id: "ck-4",
            name: "Chrysanthi's daiquiri",
            description: d(
              "Captain Morgan rum, Skinos mastiha, homemade lemonade and dried lemon.",
              "Captain Morgan, Skinos μαστίχα, σπιτική λεμονάδα & αποξηραμένο λεμόνι.",
            ),
            price: "€8.50",
          },
        ],
      },
      {
        id: "spritz",
        title: "The spritz selections",
        items: [
          {
            id: "sp-1",
            name: "Chrysanthi's spritz",
            description: d(
              "Skinos mastiha, homemade lemonade, Prosecco, soda and rosemary.",
              "Skinos μαστίχα, σπιτική λεμονάδα, Prosecco, σόδα & δεντρολίβανο.",
            ),
            price: "€8",
          },
          {
            id: "sp-2",
            name: "Hugo",
            description: d("Prosecco, elderflower, soda and mint.", "Prosecco, σαμπουκός, σόδα & μέντα."),
            price: "€8",
          },
          {
            id: "sp-3",
            name: "Rosé spritz",
            description: d("Rosé wine, strawberry and pink soda.", "Ροζέ κρασί, φράουλα & ροζ σόδα."),
            price: "€8",
          },
          {
            id: "sp-4",
            name: "Aperol spritz",
            description: d("Aperol, Prosecco, soda and dried orange.", "Aperol, Prosecco, σόδα & αποξηραμένο πορτοκάλι."),
            price: "€8",
          },
          {
            id: "sp-5",
            name: "Campari spritz",
            description: d("Campari, Prosecco, soda and dried orange.", "Campari, Prosecco, σόδα & αποξηραμένο πορτοκάλι."),
            price: "€8",
          },
          {
            id: "sp-6",
            name: "Limoncello spritz",
            description: d(
              "Limoncello, homemade lemonade, prosecco and soda.",
              "Limoncello, σπιτική λεμονάδα, prosecco & σόδα.",
            ),
            price: "€8",
          },
        ],
      },
      {
        id: "classics",
        title: "The classics",
        items: [
          {
            id: "cl-1",
            name: "Old fashioned",
            description: d(
              "Bulleit bourbon, simple syrup, Angostura bitters and dried orange.",
              "Bulleit bourbon, σιρόπι, πικρά Angostura & αποξηραμένο πορτοκάλι.",
            ),
            price: "€9",
          },
          {
            id: "cl-2",
            name: "Classic Negroni",
            description: d(
              "Tanqueray No. Ten gin, Campari, Cinzano sweet vermouth, orange bitters and dried orange.",
              "Tanqueray No. Ten, Campari, Cinzano γλυκό vermouth, πικρά πορτοκαλιού & αποξηραμένο πορτοκάλι.",
            ),
            price: "€9.50",
          },
          {
            id: "cl-3",
            name: "Porn star martini",
            description: d(
              "Served with a shot of prosecco, Smirnoff vodka, Passoã passion fruit liqueur and lemon.",
              "Με shot prosecco, Smirnoff vodka, Passoã passion fruit & λεμόνι.",
            ),
            price: "€9.50",
          },
          {
            id: "cl-4",
            name: "Espresso martini",
            description: d(
              "Double espresso, Belvedere vodka, simple syrup and Kahlúa.",
              "Διπλό espresso, Belvedere vodka, σιρόπι & Kahlúa.",
            ),
            price: "€9.50",
          },
          {
            id: "cl-5",
            name: "Frozen margarita",
            description: d(
              "Jose Cuervo silver tequila, triple sec, lime juice. Strawberry or lemon.",
              "Jose Cuervo silver, triple sec, χυμός lime. Φράουλα ή λεμόνι.",
            ),
            price: "€9.50",
          },
        ],
      },
      {
        id: "na",
        title: "Non alcoholic",
        items: [
          {
            id: "na-1",
            name: "Virgin mojito",
            description: d(
              "Homemade lemonade, mint, limes, soda.",
              "Σπιτική λεμονάδα, μέντα, lime, σόδα.",
            ),
            price: "€6",
          },
          {
            id: "na-2",
            name: "Virgin porn star martini",
            description: d("Passion fruit, lemon, soda.", "Passion fruit, λεμόνι, σόδα."),
            price: "€7.50",
          },
          {
            id: "na-3",
            name: "Chrysanthi's mocktail",
            description: d(
              "Tanqueray 0% non-alcoholic, cucumber and lime topped with Fever-Tree pink grapefruit soda.",
              "Tanqueray 0%, αγγούρι & lime με Fever-Tree pink grapefruit soda.",
            ),
            price: "€7.50",
          },
        ],
      },
    ],
  },
];
