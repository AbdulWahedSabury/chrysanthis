import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MENU_MORNING_BRUNCH: MenuCategory[] = [
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
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af00d883a9e2e9a3cf3828?w=1920",
          },
          {
            id: "bf-2",
            name: "Full English",
            description: d(
              "Homemade English sausage patties, back bacon, fried eggs, grilled tomatoes, grilled mushrooms & baked beans served with toast.",
              "Τα διάσημα πλέον σπιτικά μας μπιφτεκάκια φτιαγμένα από λουκάνικο, μαζί με μπέικον, τηγανιτά αυγά, φασόλια ντομάτες και μανιτάρια ψημένα στη σχάρα. Σερβίρεται τοστ.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af00c983a9e2e9a3cf3823?w=1920",
          },
          {
            id: "bf-3",
            name: "The Healthy One",
            description: d(
              "Grilled halloumi, avocado dip, grilled mushrooms, grilled tomatoes, poached eggs and wilted spinach, all served with a multigrain roll.",
              "Περιλαμβάνει χαλλούμι, μους από αβοκάντο, μανιτάρια και ντομάτες στη σχάρα, ελιές καθώς και αυγά ποσέ. Σερβίρεται τοστ.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aefdce96fbe9c58f982778?w=1920",
          },
        ],
      },
      {
        id: "brunches",
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
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af055896fbe9c58f982956?w=1920",
          },
          {
            id: "br-2",
            name: "Hello New York",
            description: d(
              "Toasted focaccia bread topped with our homemade tomato marinara, melted mozzarella cheese, homemade sausage patties, crispy bacon & mushrooms, topped with green garnish.",
              "Focaccia, επικαλυμμένη με σπιτική σάλτσα ντομάτας, τριμμένη μοτσαρέλα, σπιτικά λουκάνικα, τραγανό μπέικον, μανιτάρια ψημένα στη σχάρα και πρασινάδα εποχής.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af045f83a9e2e9a3cf392e?w=1920",
          },
          {
            id: "br-3",
            name: "Benedict Vogue",
            description: d(
              "Toasted brioche bun, spinach, smoked salmon or bacon & poached eggs, topped with our homemade hollandaise sauce.",
              "Αυγά ποσέ με σπανάκι, καπνιστό σολομό ή μπέικον πάνω σε brioche ψωμάκι. Τα συνοδεύει η σπιτική μας σάλτσα ολαντέζ.",
            ),
            price: "€11",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aeff9b83a9e2e9a3cf37c6?w=1920",
          },
          {
            id: "br-4",
            name: "Pastrami Bagel",
            description: d(
              "Premium quality pastrami in a freshly baked bagel with cream cheese, lettuce, tomato, gherkins & mustard on the side.",
              "Άριστης ποιότητας παστράμι μέσα σε φρεσκοψημένο ψωμάκι bagel με κρεμώδες τυρί, μαρούλι, ντομάτα, αγγουράκι τουρσί και μουστάρδα στο πλάι.",
            ),
            price: "€10",
            imageSrc:
              "https://imageproxy.wolt.com/assets/69a16d6426716d0c8786521f?w=1920",
          },
          {
            id: "br-5",
            name: "Quiche Lorraine",
            description: d(
              "Homemade pastry base filled with egg, bacon, cheese & onions, served with coleslaw.",
              "Σπιτική τάρτα με γέμιση από αυγό, μπέικον, τυρί και κρεμμύδια, σερβίρεται σαλάτα coleslaw.",
            ),
            price: "€9",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af009283a9e2e9a3cf380c?w=1920",
          },
          {
            id: "br-6",
            name: "Mama's Homemade Chicken Liver Paté",
            description: d(
              "Toasted focaccia bread, chicken liver paté, served with jam dip.",
              "Συκώτι πατέ της μαμάς, από κοτόπουλο με φρεσκοψημένο ψωμί Focaccia και μαρμελάδα.",
            ),
            price: "€8.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af019b83a9e2e9a3cf386d?w=1920",
          },
          {
            id: "br-7",
            name: "Chrysanthi's Vegan Brunch — Two Way",
            description: d(
              "Freshly baked multigrain roll, spread with our homemade beetroot hummus dip and avocado spread topped with grilled mushrooms, cherry tomatoes, pomegranate and rucola.",
              "Δύο φέτες ψωμί ολικής αλέσεως. Η μια επικαλυμμένη σπιτικό μας χούμους με παντζάρι και η άλλη με λιωμένο αβοκάντο. Συνοδεύονται με μανιτάρια στη σχάρα, ντοματίνια, ρόδι και ρόκα.",
            ),
            price: "€8.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aeff0183a9e2e9a3cf37a1?w=1920",
          },
          {
            id: "br-8",
            name: "Healthy Yoghurt",
            description: d(
              "Greek yoghurt, honey, walnuts & granola, pomegranate & seasonal fruits.",
              "Ελληνικό γιαούρτι συνοδευμένο με φρούτα εποχής, γκρανόλα, ξηρούς καρπούς και φυσικά υγιεινό και νόστιμο μέλι.",
            ),
            price: "€7",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af05f783a9e2e9a3cf3974?w=1920",
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
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af01dc5650c92c6dc9187b?w=970",
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
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aef55796fbe9c58f982579?w=960",
          },
          {
            id: "pk-2",
            name: "Cookie Crumble Pancakes",
            description: d(
              "Our homemade cookies crumbled onto our fluffy pancakes topped with Nutella & white chocolate, vanilla ice cream & chocolate pearls.",
              "Ο απόλυτος πειρασμός με κομματάκια από τα σπιτικά μας μπισκότα, Nutella & λευκή σοκολάτα, παγωτό βανίλια & πέρλες σοκολάτας.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aeffe85650c92c6dc917ff?w=970",
          },
          {
            id: "pk-3",
            name: "Lotus Crunch Pancakes",
            description: d(
              "Layers of white chocolate & Biscoff spread, between our fluffy American pancakes topped with vanilla ice cream & a crunchy white chocolate bar.",
              "Στρώσεις λευκής σοκολάτας και μπισκότου ανάμεσα στ' αφράτα pancakes με βανίλια παγωτό και από πάνω τραγανή λευκή σοκολάτα.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68aef4e396fbe9c58f982559?w=970",
          },
          {
            id: "pk-4",
            name: "Pistachio Nest Pancakes",
            description: d(
              "Pistachio cream with a hint of mastiha between our fluffy pancakes topped with crunchy kataifi, topped with vanilla ice cream.",
              "Κρέμα φιστικιού με μαστίχα ανάμεσα στις ανάμεσα στ' αφράτα pancakes με τραγανό καταΐφι και από πάνω με παγωτό βανίλια και φιστίκια.",
            ),
            price: "€10",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af022596fbe9c58f982885?w=970",
          },
          {
            id: "pk-5",
            name: "Crispy Bacon Classic*",
            description: d(
              "With layers of crispy bacon topped with maple syrup on a tower of our homemade pancakes finished with a fried egg & pomegranates.",
              "Με σιρόπι από σφένδαμο (maple), λαχταριστά κομμάτια από τραγανιστό μπέικον, τηγανητό αυγό και ρόδι.",
            ),
            price: "€9.50",
            imageSrc:
              "https://imageproxy.wolt.com/assets/68af066296fbe9c58f9829d4?w=1920",
          },
        ],
      },
    ],
  },
];
