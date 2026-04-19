import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MENU_CATEGORIES_PART_A: MenuCategory[] = [
  {
    slug: "morning",
    name: "Morning & brunch",
    tagline: "Home cooking made with love",
    intro: "Our Morning & Brunch Menu is served from 08:00–13:00.",
    imageSrc: "/images/breakfast.png",
    subsections: [
      {
        id: "breakfast",
        title: "Breakfast",
        items: [
          {
            id: "bf-1",
            name: "The Cypriot",
            description: d(
              "Toasted brioche bun, grilled lountza (smoked pork), Cyprus sausage (Loukaniko), fried eggs, grilled tomatoes & halloumi with a green Cypriot dressing.",
              "Το αγαπημένο Κυπριακό παραδοσιακό λουκάνικο, χαλλούμι και λούντζα στη σχάρα, τηγανιτά αυγά και φρέσκες ντομάτες στη σχάρα. Συνοδεύεται μαζί με ψωμάκι μπριός.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af00d883a9e2e9a3cf3828?w=1920"
          },
          {
            id: "bf-2",
            name: "Full English",
            description: d(
              "Homemade English sausage patties, back bacon, fried eggs, grilled tomatoes, grilled mushrooms & baked beans served with toast.",
              "Τα διάσημα πλέον σπιτικά μας μπιφτεκάκια φτιαγμένα από λουκάνικο, μαζί με μπέικον, τηγανιτά αυγά, φασόλια ντομάτες και μανιτάρια ψημένα στη σχάρα. Σερβίρεται τοστ.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af00c983a9e2e9a3cf3823?w=1920"
          },
          {
            id: "bf-3",
            name: "The Healthy One",
            description: d(
              "Grilled halloumi, avocado dip, grilled mushrooms, grilled tomatoes, poached eggs and wilted spinach, all served with a multigrain roll.",
              "Περιλαμβάνει χαλλούμι, μους από αβοκάντο, μανιτάρια και ντομάτες στη σχάρα, ελιές καθώς και αυγά ποσέ. Σερβίρεται τοστ.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aefdce96fbe9c58f982778?w=1920"
          },
        ],
      },
      {
        id: "brunchers",
        title: "Good morning brunches",
        items: [
          {
            id: "br-1",
            name: "Brunch Lovers",
            description: d(
              "Toasted bagel, avocado cream cheese, streaky bacon, poached eggs, grilled halloumi, pomegranate & a salad garnish.",
              "Bagel με κρέμα από αβοκάντο και τυρί, τραγανό μπέικον, αυγά ποσέ, χαλλούμι σχάρας και ρόδι.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af055896fbe9c58f982956?w=1920"
          },
          {
            id: "br-2",
            name: "Hello New York",
            description: d(
              "Toasted focaccia bread topped with our homemade tomato marinara, melted mozzarella cheese, homemade sausage patties, crispy bacon & mushrooms, topped with green garnish.",
              "Focaccia, επικαλυμμένη με σπιτική σάλτσα ντομάτας, τριμμένη μοτσαρέλα, σπιτικά λουκάνικα, τραγανό μπέικον, μανιτάρια ψημένα στη σχάρα και πρασινάδα εποχής.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af045f83a9e2e9a3cf392e?w=1920"
          },
          {
            id: "br-3",
            name: "Benedict Vogue",
            description: d(
              "Toasted brioche bun, spinach, smoked salmon or bacon & poached eggs, topped with our homemade hollandaise sauce.",
              "Αυγά ποσέ με σπανάκι, καπνιστό σολομό ή μπέικον πάνω σε brioche ψωμάκι. Τα συνοδεύει η σπιτική μας σάλτσα ολαντέζ.",
            ),
            price: "€11",
            imageSrc : "https://imageproxy.wolt.com/assets/68aeff9b83a9e2e9a3cf37c6?w=1920"
          },
          {
            id: "br-4",
            name: "Pastrami Bagel",
            description: d(
              "Premium quality pastrami in a freshly baked bagel with cream cheese, lettuce, tomato, gherkins & mustard on the side.",
              "Άριστης ποιότητας παστράμι μέσα σε φρεσκοψημένο ψωμάκι bagel με κρεμώδες τυρί, μαρούλι, ντομάτα, αγγουράκι τουρσί και μουστάρδα στο πλάι.",
            ),
            price: "€10",
            imageSrc : "https://imageproxy.wolt.com/assets/68aeff9b83a9e2e9a3cf37c6?w=1920"
          },
          {
            id: "br-5",
            name: "Quiche Lorraine",
            description: d(
              "Homemade pastry base filled with egg, bacon, cheese & onions, served with coleslaw.",
              "Σπιτική τάρτα με γέμιση από αυγό, μπέικον, τυρί και κρεμμύδια, σερβίρεται σαλάτα coleslaw.",
            ),
            price: "€9",
            imageSrc : "https://imageproxy.wolt.com/assets/68af009283a9e2e9a3cf380c?w=1920"
          },
          {
            id: "br-6",
            name: "Mama's Homemade Chicken Liver Paté",
            description: d(
              "Toasted focaccia bread, chicken liver paté, served with jam dip.",
              "Συκώτι πατέ της μαμάς, από κοτόπουλο με φρεσκοψημένο ψωμί Focaccia και μαρμελάδα.",
            ),
            price: "€8.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af019b83a9e2e9a3cf386d?w=1920"
          },
          {
            id: "br-7",
            name: "Chrysanthi's Vegan Brunch — Two Way",
            description: d(
              "Freshly baked multigrain roll, spread with our homemade beetroot hummus dip and avocado spread topped with grilled mushrooms, cherry tomatoes, pomegranate and rucola.",
              "Δύο φέτες ψωμί ολικής αλέσεως. Η μια επικαλυμμένη σπιτικό μας χούμους με παντζάρι και η άλλη με λιωμένο αβοκάντο. Συνοδεύονται με μανιτάρια στη σχάρα, ντοματίνια, ρόδι και ρόκα.",
            ),
            price: "€8.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aeff0183a9e2e9a3cf37a1?w=1920"
          },
          {
            id: "br-8",
            name: "Healthy Yoghurt",
            description: d(
              "Greek yoghurt, honey, walnuts & granola, pomegranate & seasonal fruits.",
              "Ελληνικό γιαούρτι συνοδευμένο με φρούτα εποχής, γκρανόλα, ξηρούς καρπούς και φυσικά υγιεινό και νόστιμο μέλι.",
            ),
            price: "€7",
            imageSrc : "https://imageproxy.wolt.com/assets/68af05f783a9e2e9a3cf3974?w=1920"
          },
          {
            id: "br-9",
            name: "Omelette with 3 fillings",
            description: d(
              "Choose your favourite fillings: bacon, lountza (smoked pork), halloumi, cheddar cheese, sweet corn, mushrooms, red onions, feta cheese, sundried tomatoes, parsley, olives served with toast & a salad garnish.",
              "Διαλέξτε τ' αγαπημένα σας υλικά: μπέικον, λούντζα (καπνιστό χοιρινό), χαλούμι, τυρί τσένταρ, γλυκό καλαμπόκι, μανιτάρια, κόκκινα κρεμμύδια, φέτα, λιαστές ντομάτες, μαϊντανός, ελιές. Σερβίρεται με σαλάτα και τοστ.",
            ),
            note: d(
              "Smoked salmon (+€3.50) · Chorizo (+€1.50).",
              "Καπνιστός σολομός (+€3.50) · Chorizo (+€1.50).",
            ),
            price: "€10",
            imageSrc : "https://imageproxy.wolt.com/assets/68af01dc5650c92c6dc9187b?w=970"
          },
        ],
      },
      {
        id: "pancakes",
        title: "pancakes",
        items: [
          {
            id: "pk-1",
            name: "Banoffee Pancakes",
            description: d(
              "Layers of homemade butterscotch sauce between our fluffy pancakes topped with bananas, crushed biscuit, berries & vanilla ice cream.",
              "Η πλούσια γεύση του ξεκινάει από τη σπιτική μας σάλτσα butterscotch ανάμεσα στ' αφράτα pancakes που εμπλουτίζονται με φρέσκες μπανάνες, θρυμματισμένο μπισκότο, μούρα και με απολαυστικό παγωτό βανίλια.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aef55796fbe9c58f982579?w=960"
          },
          {
            id: "pk-2",
            name: "Cookie Crumble Pancakes",
            description: d(
              "Our homemade cookies crumbled onto our fluffy pancakes topped with Nutella & white chocolate, vanilla ice cream & chocolate pearls.",
              "Ο απόλυτος πειρασμός με κομματάκια από τα σπιτικά μας μπισκότα, Nutella & λευκή σοκολάτα, παγωτό βανίλια & πέρλες σοκολάτας.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aeffe85650c92c6dc917ff?w=970"
          },
          {
            id: "pk-3",
            name: "Lotus Crunch Pancakes",
            description: d(
              "Layers of white chocolate & Biscoff spread, between our fluffy American pancakes topped with vanilla ice cream & a crunchy white chocolate bar.",
              "Στρώσεις λευκής σοκολάτας και μπισκότου ανάμεσα στ' αφράτα pancakes με βανίλια παγωτό και από πάνω τραγανή λευκή σοκολάτα.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68aef4e396fbe9c58f982559?w=970"
          },
          {
            id: "pk-4",
            name: "Pistachio Nest Pancakes",
            description: d(
              "Pistachio cream with a hint of mastiha between our fluffy pancakes topped with crunchy kataifi, topped with vanilla ice cream.",
              "Κρέμα φιστικιού με μαστίχα ανάμεσα στις ανάμεσα στ' αφράτα pancakes με τραγανό καταΐφι και από πάνω με παγωτό βανίλια και φιστίκια.",
            ),
            price: "€10",
            imageSrc : "https://imageproxy.wolt.com/assets/68af022596fbe9c58f982885?w=970"
          },
          {
            id: "pk-5",
            name: "Crispy Bacon Classic*",
            description: d(
              "With layers of crispy bacon topped with maple syrup on a tower of our homemade pancakes finished with a fried egg & pomegranates.",
              "Με σιρόπι από σφένδαμο (maple), λαχταριστά κομμάτια από τραγανιστό μπέικον, τηγανητό αυγό και ρόδι.",
            ),
            price: "€9.50",
            imageSrc : "https://imageproxy.wolt.com/assets/68af066296fbe9c58f9829d4?w=1920"
          },
        ],
      },
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
  {
    slug: "main-day",
    name: "Main menu",
    tagline: "Served daily from 12:00",
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
          },
          {
            id: "sh-2",
            name: "Cheesy focaccia garlic bread",
            description: d(
              "Toasted focaccia with garlic butter & mozzarella.",
              "Φοκάτσια με βούτυρο σκόρδου & μοτσαρέλα.",
            ),
            price: "€6",
          },
          {
            id: "sh-3",
            name: "Beetroot hummus",
            description: d(
              "Our homemade beetroot hummus, served with crispy bread.",
              "Το σπιτικό μας χούμους παντζαριού, με τραγανό ψωμί.",
            ),
            price: "€6",
          },
          {
            id: "sh-4",
            name: "BBQ chicken wings (6pcs)",
            description: d(
              "Coated in our homemade BBQ sauce served with coleslaw.",
              "Με σπιτική σάλτσα BBQ και coleslaw.",
            ),
            price: "€7.50",
          },
          {
            id: "sh-5",
            name: "Quiche Lorraine",
            description: d(
              "Homemade pastry base filled with egg, bacon, cheese & onions served with coleslaw.",
              "Σπιτική τάρτα με αυγό, μπέικον, τυρί & κρεμμύδια, με coleslaw.",
            ),
            price: "€9",
          },
          {
            id: "sh-6",
            name: "Nachos",
            description: d(
              "Topped with cheese sauce, cherry tomatoes, coriander & jalapeño peppers served with avocado & tomato salsa.",
              "Με σάλτσα τυριού, ντοματίνια, κόλιανδρο & jalapeño, με σάλσα αβοκάντο & ντομάτας.",
            ),
            price: "€9",
          },
          {
            id: "sh-7",
            name: "Mama's homemade chicken liver pâté",
            description: d(
              "Toasted focaccia bread, chicken liver pâté, served with a jam dip.",
              "Φοκάτσια, πατέ συκωτιού κοτόπουλου, με μαρμελάδα.",
            ),
            price: "€8.50",
          },
          {
            id: "sh-8",
            name: "Italian garlic king prawns",
            description: d(
              "Pan fried with garlic, white wine & lemon butter sauce topped with fresh parsley & chives, served with toasted focaccia bread & a salad garnish.",
              "Σοταρισμένες με σκόρδο, λευκό κρασί & βούτυρο λεμονιού, μαϊντανό & σνιτ, με φοκάτσια & σαλάτα.",
            ),
            price: "€10",
          },
          {
            id: "sh-9",
            name: "Halloumi sticks",
            description: d(
              "In herbed breadcrumbs with a yoghurt & jam dip.",
              "Με μυρωδικά ψωμί και dip γιαουρτιού & μαρμελάδας.",
            ),
            price: "€6.50",
          },
          {
            id: "sh-10",
            name: "Fresh Cypriot hand-cut chips",
            price: "€3.50",
          },
          {
            id: "sh-11",
            name: "Sweet potato fries",
            price: "€5.50",
          },
        ],
      },
      {
        id: "sandwiches",
        title: "Freshly made sandwiches",
        items: [
          {
            id: "sw-1",
            name: "Chrysanthi's Supreme",
            description: d(
              "Oven baked baguette with our homemade tomato sauce, mozzarella cheese, chorizo, chicken strips, rucola, sprinkled with pesto sauce. Served with sweet potato fries.",
              "Μπαγκέτα με σπιτική σάλτσα ντομάτας, μοτσαρέλα, chorizo, κοτόπουλο, ρόκα & πέστο. Με γλυκοπατάτες.",
            ),
            price: "€13",
          },
          {
            id: "sw-2",
            name: "House club",
            description: d(
              "Triple decker club sandwich with bacon, fried egg, chicken breast, double cheese, lettuce, tomato, house mayo & served with chips.",
              "Τριώροφο club με μπέικον, αυγό, στήθος κοτόπουλου, διπλό τυρί, μαρούλι, ντομάτα, μαγιονέζα & πατάτες.",
            ),
            price: "€13",
          },
          {
            id: "sw-3",
            name: "Steak sandwich",
            description: d(
              "Strips of beef fillet cooked with grilled red onions, mushrooms & a wine cream sauce on an oven baked baguette with melted mozzarella cheese. Served with a salad garnish & chips.",
              "Φιλέτο μοσχαριού με κόκκινα κρεμμύδια, μανιτάρια & κρέμα κρασιού σε μπαγκέτα με μοτσαρέλα. Με σαλάτα & πατάτες.",
            ),
            price: "€14.50",
          },
          {
            id: "sw-4",
            name: "Homemade falafel",
            description: d(
              "Falafels on a Lebanese flat bread with a salad garnish, chopped tomato, onion, parsley and cucumber, coriander tahini dressing & our homemade beetroot hummus dip.",
              "Φαλάφελ σε αραβική πίτα με σαλάτα, ντομάτα, κρεμμύδι, μαϊντανό, αγγούρι, ταχίνι κόλιανδρου & χούμους παντζαριού.",
            ),
            price: "€9.50",
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
