const express = require("express");
const req = require("express/lib/request");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "Hello, Data Skin ML!",
        data: {

            "skins": [
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
                        "availability": "Toko",
                        "category": "Classic",
                        "additional_effects": "Perubahan warna armor dan pedang",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
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
                        "availability": "Toko",
                        "category": "Mystical",
                        "additional_effects": "Efek panah bercahaya bulan, animasi skill baru",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema bulan purnama"
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
                        "availability": "Event",
                        "category": "Futuristic",
                        "additional_effects": "Efek laser hijau pada skill, perubahan model futuristik",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event teknologi tahunan MLBB"
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
                        "availability": "Event Terbatas",
                        "category": "Animal-Themed",
                        "additional_effects": "Animasi bambu pada skill, suara panda",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event Tahun Baru Imlek"
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
                        "availability": "Event Koleksi Besar",
                        "category": "Celestial",
                        "additional_effects": "Efek aurora borealis pada skill, animasi masuk langit berbintang",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2025"
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
                        "availability": "Magic Wheel",
                        "category": "Cosmic",
                        "additional_effects": "Efek galaksi pada pisau, animasi recall bertema luar angkasa",
                        "exclusivity": "Eksklusif Magic Wheel",
                        "event_context": "Rilis melalui Magic Wheel"
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
                        "availability": "Toko",
                        "category": "Martial",
                        "additional_effects": "Perubahan warna tombak dan armor",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
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
                        "availability": "Toko",
                        "category": "Assassin",
                        "additional_effects": "Efek pedang bercahaya, animasi serangan lebih halus",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema assassin"
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
                        "availability": "Event",
                        "category": "Knight",
                        "additional_effects": "Efek perisai gelap, animasi skill bertema gothic",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event Halloween"
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
                        "availability": "Event Terbatas",
                        "category": "Magical",
                        "additional_effects": "Efek petir hijau zamrud, suara mantra khusus",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event musiman"
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
                        "availability": "Event Koleksi Besar",
                        "category": "Cosmic",
                        "additional_effects": "Efek dualitas cahaya dan kegelapan, animasi recall galaksi",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024"
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
                        "availability": "Magic Wheel",
                        "category": "Sniper",
                        "additional_effects": "Efek tembakan bercahaya, animasi masuk sinematik",
                        "exclusivity": "Eksklusif Magic Wheel",
                        "event_context": "Rilis melalui Magic Wheel"
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
                        "availability": "Event",
                        "category": "Knight",
                        "additional_effects": "Efek kabel bercahaya emas, animasi skill kerajaan",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event kerajaan MLBB"
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
                        "availability": "Toko",
                        "category": "Music",
                        "additional_effects": "Perubahan warna revolver dan efek tembakan musik",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 15,
                    "hero": "Rafaela",
                    "name": "Flower Fairy",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/a5/f1/05/a5f105c8d5bcb220b14ed3686c9dce49.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Nature",
                        "additional_effects": "Efek penyembuhan berbunga, animasi skill bertema alam",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema alam"
                    }
                },
                {
                    "id": 16,
                    "hero": "Hayabusa",
                    "name": "Shadow of Obscurity",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/0e/f5/40/0ef54024ccdab279eee4c4198aed720d.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Ninja",
                        "additional_effects": "Efek bayangan pada skill, suara ninja khusus",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event ninja-themed"
                    }
                },
                {
                    "id": 17,
                    "hero": "Kagura",
                    "name": "Soryu Maiden",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/ec/53/b5/ec53b51e9611f789413b4dae2dc87bee.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Japanese",
                        "additional_effects": "Efek payung bertema naga, animasi skill tradisional Jepang",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event budaya Jepang"
                    }
                },
                {
                    "id": 18,
                    "hero": "Johnson",
                    "name": "Wreck King",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/ea/ef/2d/eaef2dabb4cae5b4c0788e5345a3232d.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Vehicle",
                        "additional_effects": "Perubahan warna mobil dan efek ledakan",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 19,
                    "hero": "Saber",
                    "name": "Codename: Storm",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/43/74/22/4374224f688d39178b8c514a1091596e.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Futuristic",
                        "additional_effects": "Efek pedang energi, animasi skill cyber",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema teknologi"
                    }
                },
                {
                    "id": 20,
                    "hero": "Guinevere",
                    "name": "Amethyst Dance",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/8d/3d/dc/8d3ddcc6d8567bd251316f5f10dd69cd.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema permata",
                        "availability": "Event Koleksi Besar",
                        "category": "Elegant",
                        "additional_effects": "Efek tarian permata, animasi recall bercahaya",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024"
                    }
                },
                {
                    "id": 21,
                    "hero": "Harley",
                    "name": "Great Inventor",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/59/d6/fe/59d6feb1e8631cf3954855f56df7819b.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Steampunk",
                        "additional_effects": "Efek kartu mekanik, suara mesin uap",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event steampunk-themed"
                    }
                },
                {
                    "id": 22,
                    "hero": "Lancelot",
                    "name": "Swordmaster",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/1200x/22/ba/00/22ba003239e4e59896ec95a1fe1f8b63.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Knight",
                        "additional_effects": "Efek pedang bercahaya, animasi skill elegan",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event kerajaan MLBB"
                    }
                },
                {
                    "id": 23,
                    "hero": "Angela",
                    "name": "Dove Magic",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/1200x/eb/28/ba/eb28ba959d71a7f017bccdb699d78aa2.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Magical",
                        "additional_effects": "Perubahan warna sayap dan efek burung merpati",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 24,
                    "hero": "Grock",
                    "name": "Castle Guard",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/0f/15/e7/0f15e70eb976481bfaf1a906f3beff7e.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Fortress",
                        "additional_effects": "Efek dinding batu, animasi skill kastil",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema pertahanan"
                    }
                },
                {
                    "id": 25,
                    "hero": "Hanabi",
                    "name": "Viper",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/5d/39/eb/5d39eb73ee0f165ace50f219498d831e.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Ninja",
                        "additional_effects": "Efek shuriken beracun, animasi skill bertema ular",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event ninja-themed"
                    }
                },
                {
                    "id": 26,
                    "hero": "Aldous",
                    "name": "Soul Contractor",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/cb/43/87/cb4387b6d134afadd0a65cc995958ff7.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Dark",
                        "additional_effects": "Efek jiwa gelap pada skill, suara kontrak mistis",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event mistis"
                    }
                },
                {
                    "id": 27,
                    "hero": "Chou",
                    "name": "Thunderfist",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/3b/47/84/3b4784ec14be6c2ba7eff97d8bcd76ce.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Martial",
                        "additional_effects": "Perubahan warna tinju dan efek petir",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 28,
                    "hero": "Nana",
                    "name": "Mecha Baby",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/5a/64/4a/5a644af129554bfdfa3b3591fa3798c3.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Mecha",
                        "additional_effects": "Efek skill mekanik, animasi kucing robot",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema teknologi"
                    }
                },
                {
                    "id": 29,
                    "hero": "Sun",
                    "name": "Monkey King",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/80/49/85/8049856c15d324a4da5db176925faac8.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Mythical",
                        "additional_effects": "Efek tongkat emas, animasi skill bertema legenda",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event Tahun Baru Imlek"
                    }
                },
                {
                    "id": 30,
                    "hero": "Balmond",
                    "name": "Savage Point",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/13/92/b1/1392b164d45c1abf96da191a450580b0.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Warrior",
                        "additional_effects": "Perubahan warna kapak dan efek darah",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 31,
                    "hero": "Franco",
                    "name": "Valhalla Ruler",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/9b/d0/7e/9bd07e21579a0bc7bba5d38d6ab4449f.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Nordic",
                        "additional_effects": "Efek rantai es, suara dewa nordik",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event mitologi Nordik"
                    }
                },
                {
                    "id": 32,
                    "hero": "Natalia",
                    "name": "Phantom Dancer",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/c5/28/d6/c528d6911f90eb650298cabbd7f66832.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Assassin",
                        "additional_effects": "Efek asap bercahaya, animasi tarian bayangan",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event malam misteri"
                    }
                },
                {
                    "id": 33,
                    "hero": "Yi Sun-shin",
                    "name": "Azure Sentry",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/d0/2f/0e/d02f0e1c6b34943db8b122f197023893.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Naval",
                        "additional_effects": "Efek panah laut biru, animasi skill maritim",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema laut"
                    }
                },
                {
                    "id": 34,
                    "hero": "Karrie",
                    "name": "Bladed Mantis",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/e5/ad/c5/e5adc54cf85c121a6ed720c8b134fc81.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Insect",
                        "additional_effects": "Efek pisau serangga, suara mekanik",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event teknologi serangga"
                    }
                },
                {
                    "id": 35,
                    "hero": "Vale",
                    "name": "Supernova",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/00/27/a6/0027a65033d469128f602ca2a8ab2e53.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema bintang",
                        "availability": "Event Koleksi Besar",
                        "category": "Cosmic",
                        "additional_effects": "Efek angin bercahaya bintang, animasi recall supernova",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024"
                    }
                },
                {
                    "id": 36,
                    "hero": "Selena",
                    "name": "Virus",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/cb/77/37/cb77377bb669f2c4ef0108960c912388.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Dark",
                        "additional_effects": "Efek virus bercahaya, animasi skill gelap",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event Halloween"
                    }
                },
                {
                    "id": 37,
                    "hero": "Odette",
                    "name": "Mermaid Princess",
                    "type": "Elite",
                    "price": 899,
                    "image": "https://i.pinimg.com/736x/2d/7d/aa/2d7daaeaca9392a6a19a26d091674eee.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Toko",
                        "category": "Fantasy",
                        "additional_effects": "Efek air bercahaya, animasi skill bertema laut",
                        "exclusivity": "Permanen",
                        "event_context": "Rilis untuk tema putri duyung"
                    }
                },
                {
                    "id": 38,
                    "hero": "Helcurt",
                    "name": "Exoracial Executer",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/c7/3d/b4/c73db4daf38a0808b3182ff375656106.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Dark",
                        "additional_effects": "Efek cakar gelap, suara eksekusi mistis",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event malam misteri"
                    }
                },
                {
                    "id": 39,
                    "hero": "Hilda",
                    "name": "Power of Wildness",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/1a/74/83/1a748377ddc8e222075be24a0f5dc2bb.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Nature",
                        "additional_effects": "Perubahan warna kapak dan efek alam liar",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 40,
                    "hero": "Ling",
                    "name": "Serene Plume",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/43/6c/96/436c963f46f10a1beb317efa00869fa2.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema burung",
                        "availability": "Event Koleksi Besar",
                        "category": "Mystical",
                        "additional_effects": "Efek bulu bercahaya, animasi recall bertema burung",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024"
                    }
                },
                {
                    "id": 41,
                    "hero": "Moskov",
                    "name": "Spear of Quiescence",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/e7/a1/b9/e7a1b9a033a2649f8309a52c7b7d1e16.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Dark",
                        "additional_effects": "Efek tombak kegelapan, suara mistis",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event malam misteri"
                    }
                },
                {
                    "id": 42,
                    "hero": "Minsitthar",
                    "name": "Golden Flash",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/b4/78/54/b478548e75e4dc345b2ad408229335c5.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Royal",
                        "additional_effects": "Efek tombak emas, animasi skill kerajaan",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event kerajaan MLBB"
                    }
                },
                {
                    "id": 43,
                    "hero": "Cyclops",
                    "name": "Starlight Explorer",
                    "type": "Starlight",
                    "price": 500,
                    "currency": "Starlight Points",
                    "image": "https://i.pinimg.com/736x/f6/7b/ef/f67bef6a8f6c83725f16677ec6a89bb7.jpg",
                    "attributes": {
                        "release_year": 2017,
                        "rarity": "Rare",
                        "effects": "Efek skill ditingkatkan",
                        "availability": "Starlight Pass",
                        "category": "Cosmic",
                        "additional_effects": "Efek orbit bintang, animasi skill luar angkasa",
                        "exclusivity": "Eksklusif Starlight",
                        "event_context": "Rilis melalui Starlight Pass bulanan"
                    }
                },
                {
                    "id": 44,
                    "hero": "Bane",
                    "name": "Count Dracula",
                    "type": "Special",
                    "price": 749,
                    "image": "https://i.pinimg.com/736x/6d/15/80/6d158061c98f025b17f5ba5391c0b680.jpg",
                    "attributes": {
                        "release_year": 2018,
                        "rarity": "Uncommon",
                        "effects": "Efek skill kustom",
                        "availability": "Event",
                        "category": "Horror",
                        "additional_effects": "Efek darah pada skill, animasi vampir",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event Halloween"
                    }
                },
                {
                    "id": 45,
                    "hero": "Granger",
                    "name": "Agent Z",
                    "type": "Epic",
                    "price": 1089,
                    "image": "https://i.pinimg.com/736x/2b/81/06/2b8106568d07608aa96bd288ab3a0786.jpg",
                    "attributes": {
                        "release_year": 2019,
                        "rarity": "Epic",
                        "effects": "Animasi unik, suara khusus",
                        "availability": "Event Terbatas",
                        "category": "Cyberpunk",
                        "additional_effects": "Efek tembakan cyber, suara teknologi",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Event teknologi futuristik"
                    }
                },
                {
                    "id": 46,
                    "hero": "Vale",
                    "name": "Windtalker",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/5d/1c/64/5d1c64bd897247522dc2fa23cb8fcae4.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Nature",
                        "additional_effects": "Perubahan warna angin pada skill",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                },
                {
                    "id": 47,
                    "hero": "Cecilion",
                    "name": "Wisteria Count",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/9a/dd/eb/9addeb7e3ac64a05a38e5e6f33d1b250.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema gothic",
                        "availability": "Event Koleksi Besar",
                        "category": "Gothic",
                        "additional_effects": "Efek kelelawar bercahaya, animasi recall wisteria",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024, dipasangkan dengan Carmilla"
                    }
                },
                {
                    "id": 48,
                    "hero": "Carmilla",
                    "name": "Wisteria Countess",
                    "type": "Collector",
                    "price": 3000,
                    "image": "https://i.pinimg.com/736x/b0/d4/fc/b0d4fc760692a5afb569a543b4de305f.jpg",
                    "attributes": {
                        "release_year": 2024,
                        "rarity": "Collector",
                        "effects": "Animasi recall eksklusif, efek bertema gothic",
                        "availability": "Event Koleksi Besar",
                        "category": "Gothic",
                        "additional_effects": "Efek bunga wisteria, animasi recall berpasangan",
                        "exclusivity": "Terbatas waktu",
                        "event_context": "Grand Collection Event 2024, dipasangkan dengan Cecilion"
                    }
                },
                {
                    "id": 49,
                    "hero": "Esmeralda",
                    "name": "Cleopatra",
                    "type": "Legend",
                    "price": 200,
                    "currency": "Magic Cores",
                    "image": "https://i.pinimg.com/736x/83/e7/87/83e787dd965e70d8d94fa6e14d76127c.jpg",
                    "attributes": {
                        "release_year": 2021,
                        "rarity": "Legend",
                        "effects": "Intro sinematik, efek recall eksklusif",
                        "availability": "Magic Wheel",
                        "category": "Historical",
                        "additional_effects": "Efek energi emas Mesir, animasi recall bertema ratu",
                        "exclusivity": "Eksklusif Magic Wheel",
                        "event_context": "Rilis melalui Magic Wheel"
                    }
                },
                {
                    "id": 50,
                    "hero": "Bruno",
                    "name": "Firebolt",
                    "type": "Normal",
                    "price": 599,
                    "image": "https://i.pinimg.com/736x/7d/08/d0/7d08d0581f6cac197d21534c1535838d.jpg",
                    "attributes": {
                        "release_year": 2016,
                        "rarity": "Common",
                        "effects": "Efek visual dasar",
                        "availability": "Toko",
                        "category": "Sport",
                        "additional_effects": "Perubahan warna bola dan efek tembakan api",
                        "exclusivity": "Permanen",
                        "event_context": "Tersedia sejak rilis awal game"
                    }
                }
            ]

        }
    })
})

module.exports = app;