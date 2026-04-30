import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MAINMENU: MenuCategory[] = [
  {
    slug: "main-menu",
    name: "Main Dishes",
    tagline: "Home cooking made with love",
    intro: "Our Main Menu is served from 12:00–11:30.",
    imageSrc: "https://imageproxy.wolt.com/assets/68af06ee5650c92c6dc919a9?w=1920%201920w",
    subsections: [
      {
            id: "share",
            title: "To share",
            items: [
              {
                id: "sh-1",
                name: "Homemade soup of the day (seasonal)",
                description: d("With crusty bread.", "Με τραγανό ψωμί."),
                price: "€7.50",
                imageSrc : ""
              },
              {
                id: "sh-2",
                name: "Cheesy focaccia garlic bread",
                description: d(
                  "Toasted focaccia with garlic butter & mozzarella.",
                  "Φοκάτσια με βούτυρο σκόρδου & μοτσαρέλα.",
                ),
                price: "€6",
                imageSrc : "https://imageproxy.wolt.com/assets/68af007283a9e2e9a3cf3804?w=1920"

              },
              {
                id: "sh-3",
                name: "Beetroot hummus",
                description: d(
                  "Our homemade beetroot hummus, served with crispy bread.",
                  "Το σπιτικό μας χούμους παντζαριού, με τραγανό ψωμί.",
                ),
                price: "€6",
                imageSrc : "https://imageproxy.wolt.com/assets/68af00b083a9e2e9a3cf381d"
              },
              {
                id: "sh-4",
                name: "BBQ chicken wings (6pcs)",
                description: d(
                  "Coated in our homemade BBQ sauce served with coleslaw.",
                  "Με σπιτική σάλτσα BBQ και coleslaw.",
                ),
                price: "€7.50",
                imageSrc : "https://imageproxy.wolt.com/assets/68aefeea83a9e2e9a3cf3792"
              },
              {
                id: "sh-5",
                name: "Quiche Lorraine",
                description: d(
                  "Homemade pastry base filled with egg, bacon, cheese & onions served with coleslaw.",
                  "Σπιτική τάρτα με αυγό, μπέικον, τυρί & κρεμμύδια, με coleslaw.",
                ),
                price: "€9",
                imageSrc : "https://imageproxy.wolt.com/assets/68af009583a9e2e9a3cf380f"
              },
              {
                id: "sh-6",
                name: "Nachos",
                description: d(
                  "Topped with cheese sauce, cherry tomatoes, coriander & jalapeño peppers served with avocado & tomato salsa.",
                  "Με σάλτσα τυριού, ντοματίνια, κόλιανδρο & jalapeño, με σάλσα αβοκάντο & ντομάτας.",
                ),
                price: "€9",
                imageSrc : "https://imageproxy.wolt.com/assets/68af005196fbe9c58f982833"
              },
              {
                id: "sh-7",
                name: "Mama's homemade chicken liver pâté",
                description: d(
                  "Toasted focaccia bread, chicken liver pâté, served with a jam dip.",
                  "Φοκάτσια, πατέ συκωτιού κοτόπουλου, με μαρμελάδα.",
                ),
                price: "€8.50",
                imageSrc : "https://imageproxy.wolt.com/assets/68af019e83a9e2e9a3cf386e"
              },
              {
                id: "sh-8",
                name: "Italian garlic king prawns",
                description: d(
                  "Pan fried with garlic, white wine & lemon butter sauce topped with fresh parsley & chives, served with toasted focaccia bread & a salad garnish.",
                  "Σοταρισμένες με σκόρδο, λευκό κρασί & βούτυρο λεμονιού, μαϊντανό & σνιτ, με φοκάτσια & σαλάτα.",
                ),
                price: "€10",
                imageSrc : "https://imageproxy.wolt.com/assets/68af049b5650c92c6dc9192e"
              },
              {
                id: "sh-9",
                name: "Halloumi sticks",
                description: d(
                  "In herbed breadcrumbs with a yoghurt & jam dip.",
                  "Με μυρωδικά ψωμί και dip γιαουρτιού & μαρμελάδας.",
                ),
                price: "€6.50",
                imageSrc : "https://imageproxy.wolt.com/assets/68af044c83a9e2e9a3cf3926"
              },
              {
                id: "sh-10",
                name: "Fresh Cypriot hand-cut chips",
                price: "€3.50",
                imageSrc : "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/b06c122e-c847-11eb-9d27-d2e4a66db118_22.chips.jpeg"
              },
              {
                id: "sh-11",
                name: "Sweet potato fries",
                price: "€5.50",
                imageSrc : "https://imageproxy.wolt.com/assets/68af04f85650c92c6dc91946?w=1600"
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
            imageSrc : "https://imageproxy.wolt.com/assets/68af050d5650c92c6dc91951"
          },
          {
            id: "mn-2",
            name: "American baby back ribs",
            description: d(
              "Baby back ribs in our homemade BBQ sauce served with corn on the cob, American coleslaw, dry roasted onions & chips.",
              "Παϊδάκια με σπιτική σάλτσα BBQ, καλαμπόκι, coleslaw, ξερά κρεμμύδια & πατάτες.",
            ),
            price: "€18",
            imageSrc : "https://imageproxy.wolt.com/assets/68aef57e96fbe9c58f982582?w=1920"
          },
          {
            id: "mn-3",
            name: "Beef broccoli stir fry",
            description: d(
              "Beef fillet strips in our homemade Asian sauce, broccoli, baby corn, mushrooms, served with a bowl of house basmati rice topped with sesame seeds.",
              "Λωρίδες μοσχαριού σε ασιατική σάλτσα, μπρόκολο, baby corn, μανιτάρια, με ρύζι basmati & σουσάμι.",
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefe9096fbe9c58f9827af?w=1920"
          },
          {
            id: "mn-4",
            name: "Mediterranean lemon chicken",
            description: d(
              "Grilled marinated chicken thighs served with our house basmati rice, Lebanese pitta, tzatziki & a side salad.",
              "Ψητό μαριναρισμένο μπούτι κοτόπουλου με ρύζι basmati, πίτα Λιβάνου, τζατζίκι & σαλάτα.",
            ),
            price: "€16",
            imageSrc : "https://imageproxy.wolt.com/assets/68af01c25650c92c6dc91872?w=1920"
          },
          {
            id: "mn-5",
            name: "Healthy grilled chicken",
            description: d(
              "Marinated grilled chicken breast fillets served with our house basmati rice & mixed salad.",
              "Μαριναρισμένο στήθος κοτόπουλου με ρύζι basmati & μικτή σαλάτα.",
            ),
            price: "€14",
            imageSrc :"https://imageproxy.wolt.com/assets/68af047483a9e2e9a3cf392f"
          },
          {
            id: "mn-6",
            name: "Chicken katsu curry",
            description: d(
              "Panko chicken fillets with our house basmati rice and our homemade katsu sauce, with a green salad garnish.",
              "Κοτόπουλο πάνκο με ρύζι basmati & σπιτική σάλτσα katsu, με πράσινη σαλάτα.",
            ),
            price: "€15",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefe9096fbe9c58f9827af?w=1920"
          },
          {
            id: "mn-7",
            name: "Vegan katsu curry",
            description: d(
              "Cauliflower florets & vegetables with our house basmati rice & homemade katsu sauce. Served with a side salad.",
              "Κουνουπίδι & λαχανικά με ρύζι basmati & σάλτσα katsu. Με σαλάτα.",
            ),
            price: "€14",
            imageSrc : "https://imageproxy.wolt.com/menu/menu-images/60a378ca0533926985dfe596/9d30999a-c848-11eb-8753-d6a6a3c68fb5_44.vegan_katsu_carry.jpeg"
          },
          {
            id: "mn-8",
            name: "Chicken à la crème",
            description: d(
              "Chicken fillet pieces marinated in a creamy sauce, onions, mushrooms, roasted vegetables. Served with our house basmati rice.",
              "Κοτόπουλο σε κρεμώδη σάλτσα, κρεμμύδια, μανιτάρια, ψητά λαχανικά & ρύζι basmati.",
            ),
            price: "€14.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af068a96fbe9c58f9829da?w=1920"
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
              },
              {
                id: "sa-2",
                name: "Chicken goujon salad",
                description: d(
                  "Panko chicken goujons on a bed of crunchy mixed leaves, grated carrot, feta and pomegranates topped with sesame seeds & our honey mustard dressing.",
                  "Κοτομπουκιές πάνκο, μικτή σαλάτα, καρότο, φέτα, ρόδι, σουσάμι & dressing μέλι-μουστάρδα.",
                ),
                price: "€13",
              },
              {
                id: "sa-3",
                name: "Quinoa & cashew nut salad",
                description: d(
                  "Mixed salad leaves with quinoa, cherry tomatoes, parsley, cucumber, avocado & cashew nuts, topped with sliced apple & a lemon dressing.",
                  "Μικτή σαλάτα με κινόα, ντοματίνια, μαϊντανό, αγγούρι, αβοκάντο, κάσιους, μήλο & dressing λεμονιού.",
                ),
                price: "€12",
                imageSrc : "https://imageproxy.wolt.com/assets/68af01c25650c92c6dc91872?w=1600"
              },
              {
                id: "sa-4",
                name: "Halloumi salad",
                description: d(
                  "Grilled halloumi on a bed of mixed crunchy salad leaves with pomegranate, dried figs, walnuts topped with our honey mustard dressing topped with rucola & balsamic glaze.",
                  "Χαλούμι σχάρας, μικτή σαλάτα, ρόδι, ξερά σύκα, καρύδια, dressing μέλι-μουστάρδα, ρόκα & βαλσάμικο.",
                ),
                price: "€13",
              },
              {
                id: "sa-5",
                name: "Prawn & avocado salad",
                description: d(
                  "Fresh crisp salad leaves mixed with grated carrot, prawns, avocado, cucumber, edamame & sesame seeds in our new Asian dressing.",
                  "Φρέσκα φύλλα με καρότο, γαρίδες, αβοκάντο, αγγούρι, edamame, σουσάμι & ασιατικό dressing.",
                ),
                price: "€15.50",
              },
              {
                id: "sa-6",
                name: "Oven baked salmon salad",
                description: d(
                  "With mixed lettuce, cherry tomato, cucumber, quinoa, baked salmon, fresh dill topped with our honey mustard dressing & sesame seeds.",
                  "Μικτή σαλάτα, ντοματίνια, αγγούρι, κινόα, ψητός σολομός, άνηθο, dressing μέλι-μουστάρδα & σουσάμι.",
                ),
                price: "€16",
              },
              {
                id: "sa-7",
                name: "Pasta salad*",
                description: d(
                  "Tricolore pasta mixed with mixed lettuce, sundried tomatoes, olives, avocado, grated carrots & topped with marinated grilled chicken dressed in a pesto sauce.",
                  "Ζυμαρικά tricolore με σαλάτα, λιαστές ντομάτες, ελιές, αβοκάντο, καρότο & μαριναρισμένο κοτόπουλο με πέστο.",
                ),
                price: "€13",
              },
            ],
          },
    ],
  },
];
