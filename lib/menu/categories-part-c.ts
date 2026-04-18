import type { MenuCategory, MenuText } from "./types";

const d = (en: string, el: string): MenuText => ({ en, el });

export const MENU_CATEGORIES_PART_C: MenuCategory[] = [
  {
    slug: "drinks",
    name: "Drinks menu",
    tagline: "Coffee, tea & more",
    intro: "Blended coffees, homemade lemonades, cold drinks, juices and shakes.",
    imageSrc: "https://picsum.photos/seed/tktc-drinks/1200/900",
    subsections: [
      {
        id: "coffee-hot",
        title: "Hot coffees",
        intro: "100% Arabica beans · UTZ certified. Extras: extra espresso shot €0.50 · decaf €0.50.",
        items: [
          { id: "cf-1", name: "Cappuccino", price: "€3.60" },
          { id: "cf-2", name: "Latte", price: "€3.60" },
          { id: "cf-3", name: "Flat white", price: "€3.50" },
          {
            id: "cf-4",
            name: "Toffee nut latte with cream",
            price: "€4.60",
          },
          { id: "cf-5", name: "Matcha latte", price: "€4.50" },
          { id: "cf-6", name: "Americano", price: "€3.20" },
          { id: "cf-7", name: "Café mocha", price: "€4.50" },
          { id: "cf-8", name: "Hot chocolate", price: "€3.60" },
          {
            id: "cf-9",
            name: "Hot chocolate deluxe",
            price: "€4.60",
          },
          { id: "cf-10", name: "Espresso", price: "€2.40" },
          { id: "cf-11", name: "Double espresso", price: "€3.20" },
          { id: "cf-12", name: "Macchiato", price: "€3" },
          { id: "cf-13", name: "Double macchiato", price: "€3.50" },
          { id: "cf-14", name: "Cyprus coffee single", price: "€2" },
          { id: "cf-15", name: "Cyprus coffee double", price: "€3" },
        ],
      },
      {
        id: "coffee-cold",
        title: "Cold coffees",
        intro: "Add flavour (+€0.50): hazelnut, caramel, vanilla, chocolate, toffee nut.",
        items: [
          { id: "cc-1", name: "Cold brew", price: "€4" },
          { id: "cc-2", name: "Freddo espresso", price: "€3.20" },
          { id: "cc-3", name: "Freddo cappuccino", price: "€3.50" },
          { id: "cc-4", name: "Iced americano", price: "€3.20" },
          { id: "cc-5", name: "Iced latte", price: "€3.60" },
          {
            id: "cc-6",
            name: "Iced caramel latte",
            price: "€4.10",
          },
          { id: "cc-7", name: "Iced flat white", price: "€3.50" },
          {
            id: "cc-8",
            name: "Iced toffee nut latte & cream",
            price: "€4.60",
          },
          { id: "cc-9", name: "Affogato", price: "€4.80" },
          { id: "cc-10", name: "Frappé", price: "€3.20" },
          {
            id: "cc-11",
            name: "Frappé with ice cream",
            price: "€4.50",
          },
        ],
      },
      {
        id: "tea",
        title: "Artisan teas",
        items: [
          {
            id: "te-1",
            name: "Selection of teas (English Breakfast, Earl Grey, Jasmine Pearls, Chamomile, Lemongrass & Ginger, Red Berry, Green tea tips)",
            price: "€3.50",
          },
          { id: "te-2", name: "Matcha tea", price: "€4" },
        ],
      },
      {
        id: "cold-soft",
        title: "Cold drinks, juices & shakes",
        items: [
          {
            id: "so-1",
            name: "Homemade lemonade with fresh mint",
            price: "€4.50",
          },
          {
            id: "so-2",
            name: "Homemade lemonade with ginger",
            price: "€5",
          },
          {
            id: "so-3",
            name: "Fizzy homemade lemonade",
            price: "€5",
          },
          { id: "so-4", name: "Iced tea", price: "€4" },
          { id: "so-5", name: "Fever-Tree", price: "€3.50" },
          {
            id: "so-6",
            name: "Water 0.5L / 1.0L",
            price: "€1.20 / €2.50",
          },
          {
            id: "so-7",
            name: "Perrier 0.5L / 1.0L",
            price: "€3.50 / €5",
          },
          { id: "so-8", name: "Soft drinks", price: "€3.50" },
        ],
      },
      {
        id: "juice",
        title: "Fresh juices",
        items: [
          { id: "ju-1", name: "Fresh orange", price: "€4.20" },
          {
            id: "ju-2",
            name: "Fresh pink grapefruit / apple / carrot",
            price: "€4.50",
          },
          { id: "ju-3", name: "Chrysanthi's juice", price: "€5" },
          { id: "ju-4", name: "Detox", price: "€5" },
          { id: "ju-5", name: "Green detox", price: "€5" },
          { id: "ju-6", name: "Energize", price: "€5" },
          { id: "ju-7", name: "Pick me up", price: "€5" },
          { id: "ju-8", name: "Banana passion", price: "€5.50" },
        ],
      },
      {
        id: "frozen",
        title: "Frozen blends & ice cream shakes",
        items: [
          { id: "fr-1", name: "Frozen cappuccino", price: "€5.50" },
          { id: "fr-2", name: "Frozen mocha", price: "€5.50" },
          { id: "fr-3", name: "Frozen chocolate", price: "€5.50" },
          {
            id: "fr-4",
            name: "Frozen homemade lemonade",
            price: "€5.50",
          },
          {
            id: "fr-5",
            name: "Frozen strawberry granita",
            price: "€5.50",
          },
          {
            id: "fr-6",
            name: "Thick ice cream milkshake",
            price: "€5.50",
          },
          { id: "fr-7", name: "Oreo milkshake", price: "€6.50" },
          {
            id: "fr-8",
            name: "Chocolate cookie milkshake",
            price: "€6.50",
          },
          { id: "fr-9", name: "Maltesers milkshake", price: "€6.50" },
        ],
      },
      {
        id: "vegan-shakes",
        title: "Vegan shakes",
        items: [
          {
            id: "vs-1",
            name: "Chunky monkey",
            description: d(
              "Banana, cocoa, peanut butter, medjool dates, almond milk.",
              "Μπανάνα, κακάο, φιστικοβούτυρο, χουρμάδες, γάλα αμυγδάλου.",
            ),
            price: "€8",
          },
          {
            id: "vs-2",
            name: "Matcha man",
            description: d(
              "Japanese matcha tea, cashew nuts, avocado, banana, medjool dates, almond milk.",
              "Ιαπωνικό matcha, κάσιους, αβοκάντο, μπανάνα, χουρμάδες, γάλα αμυγδάλου.",
            ),
            price: "€8",
          },
        ],
      },
      {
        id: "ginger",
        title: "Ginger shots",
        intro: "€2.50 each.",
        items: [
          {
            id: "gi-1",
            name: "Ginger & apple",
            price: "€2.50",
          },
          {
            id: "gi-2",
            name: "Ginger & carrot",
            price: "€2.50",
          },
          {
            id: "gi-3",
            name: "Ginger & lemon",
            price: "€2.50",
          },
        ],
      },
    ],
  },
  {
    slug: "gin-spirits",
    name: "Gin & spirits",
    tagline: "Build your G&T",
    intro: "Choose a gin, then pick your tonic and garnish. All mixers €1.50 unless listed.",
    imageSrc: "https://picsum.photos/seed/tktc-gin/1200/900",
    subsections: [
      {
        id: "gins",
        title: "THE GIN MENU",
        intro: "Each gin is served with a tailored serve suggestion — ask your server for today's favourites.",
        items: [
          {
            id: "gn-1",
            name: "Hendrick's",
            description: d("Delightfully infused with cucumber.", "Αρωματισμένο με αγγούρι."),
            price: "€10",
          },
          {
            id: "gn-2",
            name: "Monkey 47",
            description: d(
              "From Germany's Black Forest — complex and aromatic.",
              "Από το Μαύρο Δάσος της Γερμανίας — πολύπλοκο & αρωματικό.",
            ),
            price: "€12.50",
          },
          {
            id: "gn-3",
            name: "Tanqueray No. Ten",
            description: d(
              "Botanical citrus, grapefruit and lime forward.",
              "Κίτρο, γκρέιπφρουτ και lime σε πρώτο πλάνο.",
            ),
            price: "€10.50",
          },
          {
            id: "gn-4",
            name: "Mataroa, Greece",
            description: d("Mediterranean dry gin from Greece.", "Mediterranean dry gin από την Ελλάδα."),
            price: "€10",
          },
          {
            id: "gn-5",
            name: "Aoratos, Cyprus",
            description: d(
              "10 organic, local hand-picked botanicals.",
              "10 βιολογικά, τοπικά βοτανικά χειροσυλλεγμένα.",
            ),
            price: "€9.50",
          },
          {
            id: "gn-6",
            name: "Ki No Bi, Japan",
            description: d(
              "'The beauty of the seasons' — fresh yuzu aroma.",
              "«Η ομορφιά των εποχών» — φρέσκο άρωμα yuzu.",
            ),
            price: "€13",
          },
          {
            id: "gn-7",
            name: "Gin Mare",
            description: d("Mediterranean botanicals, olive and rosemary.", "Μεσογειακά βοτανικά, ελιά & δεντρολίβανο."),
            price: "€11",
          },
          {
            id: "gn-8",
            name: "Gordon's Premium Pink",
            description: d("Floral with refreshing strawberry notes.", "Φλοράλ με νότες φράουλας."),
            price: "€8.50",
          },
        ],
      },
       
      {
        id: "rum",
        title: "Rum selection",
        items: [
          { id: "ru-1", name: "Captain Morgan Spiced", price: "€6.50" },
          { id: "ru-2", name: "Captain Morgan White Rum", price: "€6.50" },
          { id: "ru-3", name: "Eminente Cuban Rum", price: "€8" },
        ],
      },
      {
        id: "vodka",
        title: "Vodka selection",
        items: [
          { id: "vo-1", name: "Smirnoff", price: "€6" },
          { id: "vo-2", name: "Ketel One", price: "€7" },
          { id: "vo-3", name: "Belvedere", price: "€8" },
          { id: "vo-4", name: "Grey Goose", price: "€8" },
          { id: "vo-5", name: "Cîroc", price: "€8" },
        ],
      },
      {
        id: "brandy",
        title: "Brandies",
        items: [
          { id: "br-1", name: "VSOP / KEO", price: "€5" },
          { id: "br-2", name: "Five Kings", price: "€6" },
        ],
      },
      {
        id: "beer",
        title: "Beer & ciders",
        items: [
          {
            id: "be-1",
            name: "Draught Leon — ½ pint / pint",
            price: "€3 / €4.50",
          },
          {
            id: "be-2",
            name: "Bottles & cans (33cl) — selection",
            description: d(
              "Carlsberg, Fix Blonde, Guinness, Stella Artois, Corona, Sandy Weisse — €4–€5.50.",
              "Carlsberg, Fix Blonde, Guinness, Stella Artois, Corona, Sandy Weisse — €4–€5.50.",
            ),
          },
          {
            id: "be-3",
            name: "Ciders (33cl)",
            description: d(
              "Militsa Premium Apple · Militsa Premium Strawberry & Lime — €5.50 each.",
              "Militsa Premium Apple · Militsa Premium Strawberry & Lime — €5.50 το καθένα.",
            ),
          },
        ],
      },
      {
        id: "whisky",
        title: "Whisk(e)y selections (5cl)",
        items: [
          { id: "wh-1", name: "Jameson", price: "€6" },
          { id: "wh-2", name: "J&B", price: "€6" },
          { id: "wh-3", name: "Jack Daniel's", price: "€6" },
          { id: "wh-4", name: "Johnnie Walker Black Label", price: "€8" },
          { id: "wh-5", name: "Bulleit Bourbon", price: "€7" },
          { id: "wh-6", name: "Chivas Regal 12 yrs", price: "€9" },
          { id: "wh-7", name: "Glenfiddich 12 yrs", price: "€9" },
          { id: "wh-8", name: "Maker's Mark", price: "€8" },
          { id: "wh-9", name: "Macallan Double Cask", price: "€12" },
          {
            id: "wh-10",
            name: "Singleton Speyside 12 yrs",
            price: "€10",
          },
        ],
      },
      {
        id: "aperitifs",
        title: "Aperitifs",
        items: [
          { id: "ap-1", name: "Commandaria (6cl)", price: "€5" },
          { id: "ap-2", name: "AES Ambelis Commandaria (6cl)", price: "€6" },
          { id: "ap-3", name: "Skinos mastiha (5cl)", price: "€6" },
          {
            id: "ap-4",
            name: "José Cuervo silver / gold (5cl)",
            price: "€6",
          },
          { id: "ap-5", name: "Limoncello (5cl)", price: "€6" },
          { id: "ap-6", name: "Campari (5cl)", price: "€6" },
          { id: "ap-7", name: "Aperol (5cl)", price: "€6" },
          { id: "ap-8", name: "Ouzo (5cl / 20cl)", price: "€5 / €12.50" },
          { id: "ap-9", name: "Zivania (5cl / 20cl)", price: "€5 / €12.50" },
        ],
      },
    ],
  },
  {
    slug: "wines",
    name: "Wines",
    tagline: "By the glass or bottle",
    intro: "Our wines have been carefully selected to accompany each dish — or a relaxed evening at the bar.",
    imageSrc: "https://picsum.photos/seed/tktc-wine/1200/900",
    subsections: [
      {
        id: "house",
        title: "House wine",
        items: [
          {
            id: "wi-h1",
            name: "The house wine — red, white or rosé",
            description: d("Glass · jug 50cl", "Ποτήρι · κανάτα 50cl"),
            price: "€4.50 · €12",
          },
        ],
      },
      {
        id: "white",
        title: "White wines",
        intro: "Prices: 18.7cl | 75cl (— where not served by the glass).",
        items: [
          {
            id: "wi-w1",
            name: "Persefoni Xinisteri — Kolios Winery, Cyprus",
            price: "€6 | €24",
          },
          {
            id: "wi-w2",
            name: "Moschofilero — Boutari, Greece",
            price: "€6 | €24",
          },
          {
            id: "wi-w3",
            name: "Pinot Grigio — Italy",
            price: "— | €26",
          },
          {
            id: "wi-w4",
            name: "AES Ambelis Morokanella — AES Ambelis Winery, Cyprus",
            price: "— | €29",
          },
          {
            id: "wi-w5",
            name: "The Black Sheep Sauvignon Blanc–Semillon — Château Lazaridi, Greece",
            price: "— | €29",
          },
        ],
      },
      {
        id: "red",
        title: "Red wines",
        intro: "Prices: 18.7cl | 75cl.",
        items: [
          {
            id: "wi-r1",
            name: "Saint Fotios Maratheftiko — Kolios Winery, Paphos, Cyprus",
            price: "€6 | €24",
          },
          {
            id: "wi-r2",
            name: "Tsiakkas Porfiros, Troodos — Tsiakkas Winery, Cyprus",
            price: "— | €26",
          },
          {
            id: "wi-r3",
            name: "AES Ambelis Ektro, Shiraz — AES Ambelis Winery, Cyprus",
            price: "— | €28",
          },
          {
            id: "wi-r4",
            name: "The Black Sheep Syrah–Merlot — Château Lazaridi, Greece",
            price: "— | €29",
          },
        ],
      },
      {
        id: "rose",
        title: "Rosé wines",
        items: [
          {
            id: "wi-o1",
            name: "Cornetto Dry — Kolios Winery, Cyprus",
            price: "€6 | €24",
          },
          {
            id: "wi-o2",
            name: "Rosé — Kyperounda Winery, Limassol",
            price: "— | €25",
          },
          {
            id: "wi-o3",
            name: "Tsiakkas Rodinos, Troodos — Tsiakkas Winery, Cyprus",
            price: "— | €26",
          },
        ],
      },
      {
        id: "sparkling",
        title: "Sparkling wines",
        intro: "Prices: 18.7cl | 20cl | 75cl.",
        items: [
          { id: "wi-s1", name: "Mateus rosé", price: "€6 | — | —" },
          { id: "wi-s2", name: "Prosecco", price: "€6 | — | €24" },
          {
            id: "wi-s3",
            name: "Pink Moscato (light pink, sweet, velvety 6.5%)",
            price: "— | — | €22",
          },
          {
            id: "wi-s4",
            name: "Bianco Nero rosé sparkling (semi-sweet)",
            price: "— | €7.50 | —",
          },
        ],
      },
      {
        id: "wine-notes",
        title: "Good to know",
        items: [
          {
            id: "wi-n1",
            name: "Service & allergies",
            description: d(
              "Regrettably, we cannot accommodate menu variations during peak hours. If you have a food allergy or special dietary requirement, please inform our staff before ordering. All prices in euros include VAT.",
              "Κατά τις ώρες αιχμής ενδέχεται να μην είναι δυνατές παραλλαγές. Για αλλεργίες ή ειδικές δίαιτες, ενημερώστε το προσωπικό πριν παραγγείλετε. Όλες οι τιμές σε ευρώ περιλαμβάνουν ΦΠΑ.",
            ),
          },
        ],
      },
    ],
  },
];
