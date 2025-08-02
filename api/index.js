const express = require("express");
const req = require("express/lib/request");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Hello, Data Skin ML!",
        data: {
            skins: [
                {
                    "id": 1,
                    "hero": "Alucard",
                    "name": "Lone Hero",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/2d/28/f5/2d28f55395b3fe75db8747ac02780e6c.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 2,
                    "hero": "Miya",
                    "name": "Moon Priestess",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/6f/b3/30/6fb3302b5799887b10e52626c48a7d0a.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan, animasi baru",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 3,
                    "hero": "Layla",
                    "name": "Green Flash",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/3c/48/11/3c481197b290800f9fdd920f268143a3.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 4,
                    "hero": "Akai",
                    "name": "Panda Warrior",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/ec/96/9a/ec969a61aa3c3e0edbfa911bf63a915f.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 5,
                    "hero": "Aurora",
                    "name": "Veil of the Celestials",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/20/b5/9f/20b59f0ad34035b808ca2e9a74a7a3cd.jpg",
                    "attributes": {
                        "release_year": 2025,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema langit",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 6,
                    "hero": "Gusion",
                    "name": "Cosmic Gleam",
                    "type": "Legend",
                    "price": 200,
                    "currency": "Magic Cores",
                    "image": "https://i.pinimg.com/736x/52/6b/0a/526b0a912264c64e34bfd4c066d74e61.jpg",
                    "attributes": {
                        "release_year": 2020,
                        "rarity": "Legend",
                        "effects": "Intro sinematik, suara unik, efek recall eksklusif",
                        "availability": "Magic Wheel"
                    }
                },
                {
                    "id": 7,
                    "hero": "Zilong",
                    "name": "Eastern Warrior",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/f0/f1/24/f0f124910f5ce17e78a1c3a9422a74ee.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 8,
                    "hero": "Karina",
                    "name": "Phantom Blade",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/4a/72/d9/4a72d9498227db9f68b6c72c57c4a673.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 9,
                    "hero": "Tigreal",
                    "name": "Dark Knight",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/45/41/d9/4541d95b236679c7e64a185f090eccb0.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 10,
                    "hero": "Eudora",
                    "name": "Emerald Enchantress",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/9f/21/49/9f214980a3679aa4a82bb5368d0b96cf.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 11,
                    "hero": "Lunox",
                    "name": "Cosmic Harmony",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/60/55/39/605539dc5f9b2b2b832fe9aa1eb025f0.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Efek recall eksklusif, animasi bertema kosmik",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 12,
                    "hero": "Lesley",
                    "name": "Lethal Lady",
                    "type": "Legend",
                    "price": 200,
                    "currency": "Magic Cores",
                    "image": "https://i.pinimg.com/736x/dc/56/78/dc56781a3403978964fbf8d2f87f6626.jpg",
                    "attributes": {
                        "release_year": 2021,
                        "rarity": "Legend",
                        "effects": "Intro sinematik, efek recall eksklusif",
                        "availability": "Magic Wheel"
                    }
                },
                {
                    "id": 13,
                    "hero": "Fanny",
                    "name": "Royal Knight",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/1200x/44/2b/0e/442b0e8fb18a7794606d0b44d2103952.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 14,
                    "hero": "Clint",
                    "name": "Rock and Roll",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/90/06/43/900643604d6e8414fc498e8f5bf41f9e.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 15,
                    "hero": "Rafaela",
                    "name": "Flower Fairy",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/rafaela-flower-fairy.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 16,
                    "hero": "Hayabusa",
                    "name": "Shadow of Obscurity",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/hayabusa-shadow-obscurity.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 17,
                    "hero": "Kagura",
                    "name": "Soryu Maiden",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/kagura-soryu-maiden.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 18,
                    "hero": "Johnson",
                    "name": "Wreck King",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/johnson-wreck-king.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 19,
                    "hero": "Saber",
                    "name": "Codename: Storm",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/saber-codename-storm.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 20,
                    "hero": "Guinevere",
                    "name": "Amethyst Dance",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://example.com/images/guinevere-amethyst-dance.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema permata",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 21,
                    "hero": "Harley",
                    "name": "Great Inventor",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/harley-great-inventor.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 22,
                    "hero": "Lancelot",
                    "name": "Swordmaster",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/lancelot-swordmaster.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 23,
                    "hero": "Angela",
                    "name": "Dove Magic",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/angela-dove-magic.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 24,
                    "hero": "Grock",
                    "name": "Castle Guard",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/grock-castle-guard.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 25,
                    "hero": "Hanabi",
                    "name": "Viper",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/hanabi-viper.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 26,
                    "hero": "Aldous",
                    "name": "Soul Contractor",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/aldous-soul-contractor.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 27,
                    "hero": "Chou",
                    "name": "Thunderfist",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/chou-thunderfist.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 28,
                    "hero": "Nana",
                    "name": "Mecha Baby",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/nana-mecha-baby.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 29,
                    "hero": "Sun",
                    "name": "Monkey King",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/sun-monkey-king.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 30,
                    "hero": "Balmond",
                    "name": "Savage Point",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/balmond-savage-point.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 31,
                    "hero": "Franco",
                    "name": "Valhalla Ruler",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/franco-valhalla-ruler.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 32,
                    "hero": "Natalia",
                    "name": "Phantom Dancer",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/natalia-phantom-dancer.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 33,
                    "hero": "Yi Sun-shin",
                    "name": "Azure Sentry",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/yi-sun-shin-azure-sentry.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 34,
                    "hero": "Karrie",
                    "name": "Bladed Mantis",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/karrie-bladed-mantis.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 35,
                    "hero": "Vale",
                    "name": "Supernova",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://example.com/images/vale-supernova.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema bintang",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 36,
                    "hero": "Selena",
                    "name": "Virus",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/selena-virus.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 37,
                    "hero": "Odette",
                    "name": "Mermaid Princess",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://example.com/images/odette-mermaid-princess.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 38,
                    "hero": "Helcurt",
                    "name": "Exoracial Executer",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/helcurt-exoracial-executer.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 39,
                    "hero": "Hilda",
                    "name": "Power of Wildness",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/hilda-power-wildness.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 40,
                    "hero": "Ling",
                    "name": "Serene Plume",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://example.com/images/ling-serene-plume.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema burung",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 41,
                    "hero": "Moskov",
                    "name": "Spear of Quiescence",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/moskov-spear-quiescence.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 42,
                    "hero": "Minsitthar",
                    "name": "Golden Flash",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/minsitthar-golden-flash.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 43,
                    "hero": "Cyclops",
                    "name": "Starlight Explorer",
                    "type": "Starlight",
                    "price": 500,
                    "currency": "Starlight Points",
                    "image": "https://example.com/images/cyclops-starlight-explorer.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Starlight Pass"
                    }
                },
                {
                    "id": 44,
                    "hero": "Bane",
                    "name": "Count Dracula",
                    "type": "Special",
                    "price": 749,
                    "image": "https://example.com/images/bane-count-dracula.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event"
                    }
                },
                {
                    "id": 45,
                    "hero": "Granger",
                    "name": "Agent Z",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://example.com/images/granger-agent-z.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas"
                    }
                },
                {
                    "id": 46,
                    "hero": "Vale",
                    "name": "Windtalker",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/vale-windtalker.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                },
                {
                    "id": 47,
                    "hero": "Cecilion",
                    "name": "Wisteria Count",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://example.com/images/cecilion-wisteria-count.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema gothic",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 48,
                    "hero": "Carmilla",
                    "name": "Wisteria Countess",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://example.com/images/carmilla-wisteria-countess.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema gothic",
                        "availability": "Event Koleksi Besar"
                    }
                },
                {
                    "id": 49,
                    "hero": "Esmeralda",
                    "name": "Cleopatra",
                    "type": "Legend",
                    "price": 200,
                    "currency": "Magic Cores",
                    "image": "https://example.com/images/esmeralda-cleopatra.jpg",
                    "attributes": {
                        "release_year": 2021,
                        "rarity": "Legend",
                        "effects": "Intro sinematik, efek recall eksklusif",
                        "availability": "Magic Wheel"
                    }
                },
                {
                    "id": 50,
                    "hero": "Bruno",
                    "name": "Firebolt",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://example.com/images/bruno-firebolt.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko"
                    }
                }
            ]
        }
    })
})

module.exports = app;