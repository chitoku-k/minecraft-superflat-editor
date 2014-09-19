var Minecraft = {};
Minecraft.biomes = [{
		id: "0",
		name: "海洋",
		en_name: "Ocean",
		icon: "8"
	}, {
		id: "1",
		name: "草原",
		en_name: "Plains",
		icon: "2"
	}, {
		id: "2",
		name: "砂漠",
		en_name: "Desert",
		icon: "12"
	}, {
		id: "3",
		name: "山岳",
		en_name: "Extreme Hills",
		icon: "129"
	}, {
		id: "4",
		name: "森林",
		en_name: "Forest",
		icon: "17"
	}, {
		id: "5",
		name: "タイガ",
		en_name: "Taiga",
		icon: "78"
	}, {
		id: "6",
		name: "湿地",
		en_name: "Swampland",
		icon: "111"
	}, {
		id: "7",
		name: "河川",
		en_name: "River",
		icon: "8"
	}, {
		id: "8",
		name: "ネザー",
		en_name: "Hell",
		icon: "87"
	}, {
		id: "9",
		name: "エンド",
		en_name: "Sky",
		icon: "120"
	}, {
		id: "10",
		name: "凍海",
		en_name: "FrozenOcean",
		icon: "79"
	}, {
		id: "11",
		name: "凍河",
		en_name: "FrozenRiver",
		icon: "79"
	}, {
		id: "12",
		name: "氷原",
		en_name: "Ice Plains",
		icon: "79"
	}, {
		id: "13",
		name: "氷の山岳",
		en_name: "Ice Mountains",
		icon: "79"
	}, {
		id: "14",
		name: "キノコ島バイオーム",
		en_name: "MushroomIsland",
		icon: "100"
	}, {
		id: "15",
		name: "キノコ島の海辺",
		en_name: "MushroomIslandShore",
		icon: "110"
	}, {
		id: "16",
		name: "砂浜",
		en_name: "Beach",
		icon: "12"
	}, {
		id: "17",
		name: "砂漠の丘陵",
		en_name: "DesertHills",
		icon: "24"
	}, {
		id: "18",
		name: "森林の丘陵",
		en_name: "ForestHills",
		icon: "17"
	}, {
		id: "19",
		name: "タイガの丘陵",
		en_name: "TaigaHills",
		icon: "80"
	}, {
		id: "20",
		name: "山縁",
		en_name: "Extreme Hills Edge",
		icon: "3"
	}, {
		id: "21",
		name: "ジャングル",
		en_name: "Jungle",
		icon: "6:3"
	}, {
		id: "22",
		name: "ジャングルの丘陵",
		en_name: "JungleHills",
		icon: "17:3"
	}
];
Minecraft.defaultPresets = [{
		name: "Classic Flat",
		code: "2;7,2x3,2;1;village",
		icon: "2"
	}, {
		name: "Tunnelers' Dream",
		code: "2;7,230x1,5x3,2;3;stronghold,biome_1,decoration,dungeon,mineshaft",
		icon: "1"
	}, {
		name: "Water World",
		code: "2;7,5x1,5x3,5x12,90x9;1;biome_1,village",
		icon: "8"
	}, {
		name: "Overworld",
		code: "2;7,59x1,3x3,2;1;stronghold,biome_1,village,decoration,dungeon,lake,mineshaft,lava_lake",
		icon: "31"
	}, {
		name: "Snowy Kingdom",
		code: "2;7,59x1,3x3,2,78;12;biome_1,village",
		icon: "78"
	}, {
		name: "Bottomless Pit",
		code: "2;2x4,3x3,2;1;biome_1,village",
		icon: "0"
	}, {
		name: "Desert",
		code: "2;7,3x1,52x24,8x12;2;stronghold,biome_1,village,decoration,dungeon,mineshaft",
 		icon: "12"
	}, {
		name: "Redstone Ready",
		code: "2;7,3x1,52x24;2",
		icon: "0"
	}
];
Minecraft.blocks = [{
		id: "0",
		name: "空気",
		en_name: "Air"
	}, {
		id: "1",
		name: "石",
		en_name: "Stone"
	}, {
		id: "2",
		name: "草ブロック",
		en_name: "Grass Block"
	}, {
		id: "3",
		name: "土",
		en_name: "Dirt"
	}, {
		id: "4",
		name: "丸石",
		en_name: "Cobblestone"
	},
	[{
		id: "5",
		name: "樫の木材",
		en_name: "Oak Wood Planks"
	}, {
		id: "5:1",
		name: "松の木材",
		en_name: "Spruce Wood Planks"
	}, {
		id: "5:2",
		name: "白樺の木材",
		en_name: "Birch Wood Planks"
	}, {
		id: "5:3",
		name: "ジャングルの木材",
		en_name: "Jungle Wood Planks"
	}],
	[{
		id: "6",
		name: "樫の苗木",
		en_name: "Oak Sapling"
	}, {
		id: "6:1",
		name: "松の苗木",
		en_name: "Spruce Sapling"
	}, {
		id: "6:2",
		name: "白樺の苗木",
		en_name: "Birch Sapling"
	}, {
		id: "6:3",
		name: "ジャングルの苗木",
		en_name: "Jungle Sapling"
	}], {
		id: "7",
		name: "岩盤",
		en_name: "Bedrock"
	}, {
		id: "8",
		name: "水",
		en_name: "Water"
	}, {
		id: "9",
		name: "水",
		en_name: "Water"
	}, {
		id: "10",
		name: "溶岩",
		en_name: "Lava"
	}, {
		id: "11",
		name: "溶岩",
		en_name: "Lava"
	}, {
		id: "12",
		name: "砂",
		en_name: "Sand"
	}, {
		id: "13",
		name: "砂利",
		en_name: "Gravel"
	}, {
		id: "14",
		name: "金鉱石",
		en_name: "Gold Ore"
	}, {
		id: "15",
		name: "鉄鉱石",
		en_name: "Iron Ore"
	}, {
		id: "16",
		name: "石炭鉱石",
		en_name: "Coal Ore"
	},
	[{
		id: "17",
		name: "樫の原木",
		en_name: "Oak Wood"
	}, {
		id: "17:1",
		name: "松の原木",
		en_name: "Spruce Wood"
	}, {
		id: "17:2",
		name: "白樺の原木",
		en_name: "Birch Wood"
	}, {
		id: "17:3",
		name: "ジャングルの原木",
		en_name: "Jungle Wood"
	}],
	[{
		id: "18",
		name: "樫の葉",
		en_name: "Oak Leaves"
	}, {
		id: "18:1",
		name: "松の葉",
		en_name: "Spruce Leaves"
	}, {
		id: "18:2",
		name: "白樺の葉",
		en_name: "Birch Leaves"
	}, {
		id: "18:3",
		name: "ジャングルの葉",
		en_name: "Jungle Leaves"
	}], {
		id: "19",
		name: "スポンジ",
		en_name: "Sponge"
	}, {
		id: "20",
		name: "ガラス",
		en_name: "Glass"
	}, {
		id: "21",
		name: "ラピスラズリ鉱石",
		en_name: "Lapis Lazuli Ore"
	}, {
		id: "22",
		name: "ラピスラズリブロック",
		en_name: "Lapis Lazuli Block"
	}, {
		id: "23",
		name: "ディスペンサー",
		en_name: "Dispenser"
	}, [{
		id: "24",
		name: "砂岩",
		en_name: "Sandstone"
	}, {
		id: "24:1",
		name: "模様入り砂岩",
		en_name: "Chiseled Sandstone"
	}, {
		id: "24:2",
		name: "滑らかな砂岩",
		en_name: "Smooth Sandstone"
	}], {
		id: "25",
		name: "音符ブロック",
		en_name: "Note Block"
	}, {
		id: "26",
		name: "ベッド",
		en_name: "Bed"
	}, {
		id: "27",
		name: "パワードレール",
		en_name: "Powered Rail"
	}, {
		id: "28",
		name: "ディテクターレール",
		en_name: "Detector Rail"
	}, {
		id: "29",
		name: "粘着ピストン",
		en_name: "Sticky Piston"
	}, {
		id: "30",
		name: "クモの巣",
		en_name: "Cobweb"
	},
	[{
		id: "31",
		name: "雑草",
		en_name: "Shrub"
	}, {
		id: "31:1",
		name: "草",
		en_name: "Grass"
	}, {
		id: "31:2",
		name: "シダ",
		en_name: "Fern"
	}], {
		id: "32",
		name: "枯れ木",
		en_name: "Dead Bush"
	}, {
		id: "33",
		name: "ピストン",
		en_name: "Piston"
	}, {
		id: "34"
	},
	[{
		id: "35",
		name: "羊毛",
		en_name: "Wool"
	}, {
		id: "35:1",
		name: "橙色の羊毛",
		en_name: "Orange Wool"
	}, {
		id: "35:2",
		name: "赤紫色の羊毛",
		en_name: "Magenta Wool"
	}, {
		id: "35:3",
		name: "空色の羊毛",
		en_name: "Light Blue Wool"
	}, {
		id: "35:4",
		name: "黄色の羊毛",
		en_name: "Yellow Wool"
	}, {
		id: "35:5",
		name: "黄緑色の羊毛",
		en_name: "Lime Wool"
	}, {
		id: "35:6",
		name: "桃色の羊毛",
		en_name: "Pink Wool"
	}, {
		id: "35:7",
		name: "灰色の羊毛",
		en_name: "Gray Wool"
	}, {
		id: "35:8",
		name: "薄灰色の羊毛",
		en_name: "Light Gray Wool"
	}, {
		id: "35:9",
		name: "水色の羊毛",
		en_name: "Cyan Wool"
	}, {
		id: "35:10",
		name: "紫色の羊毛",
		en_name: "Purple Wool"
	}, {
		id: "35:11",
		name: "青色の羊毛",
		en_name: "Blue Wool"
	}, {
		id: "35:12",
		name: "茶色の羊毛",
		en_name: "Brown Wool"
	}, {
		id: "35:13",
		name: "緑色の羊毛",
		en_name: "Green Wool"
	}, {
		id: "35:14",
		name: "赤色の羊毛",
		en_name: "Red Wool"
	}, {
		id: "35:15",
		name: "黒色の羊毛",
		en_name: "Black Wool"
	}], {
		id: "36"
	}, {
		id: "37",
		name: "花",
		en_name: "Flower"
	}, {
		id: "38",
		name: "バラ",
		en_name: "Rose"
	}, {
		id: "39",
		name: "キノコ",
		en_name: "Mushroom"
	}, {
		id: "40",
		name: "キノコ",
		en_name: "Mushroom"
	}, {
		id: "41",
		name: "金ブロック",
		en_name: "Block of Gold"
	}, {
		id: "42",
		name: "鉄ブロック",
		en_name: "Block of Iron"
	}, [{
		id: "43",
		name: "石ハーフブロック",
		en_name: "Stone Slab"
	}, {
		id: "43:1",
		name: "砂岩ハーフブロック",
		en_name: "Sandstone Slab"
	}, {
		id: "43:2",
		name: "木材ハーフブロック",
		en_name: "Wooden Slab"
	}, {
		id: "43:3",
		name: "丸石ハーフブロック",
		en_name: "Cobblestone Slab"
	}, {
		id: "43:4",
		name: "レンガハーフブロック",
		en_name: "Brick Slab"
	}, {
		id: "43:5",
		name: "石レンガハーフブロック",
		en_name: "Stone Brick Slab"
	}, {
		id: "43:6",
		name: "ネザーレンガハーフブロック",
		en_name: "Nether Brick Slab"
	}, {
		id: "43:7",
		name: "ネザー水晶ハーフブロック",
		en_name: "Quartz Slab"
	}, {
		id: "43:8",
		name: "石ハーフブロック",
		en_name: "Stone Slab"
	}, {
		id: "43:9",
		name: "石ハーフブロック",
		en_name: "Stone Slab"
	}], [{
		id: "44",
		name: "石ハーフブロック",
		en_name: "Stone Slab"
	}, {
		id: "44:1",
		name: "砂岩ハーフブロック",
		en_name: "Sandstone Slab"
	}, {
		id: "44:2",
		name: "木材ハーフブロック",
		en_name: "Wooden Slab"
	}, {
		id: "44:3",
		name: "丸石ハーフブロック",
		en_name: "Cobblestone Slab"
	}, {
		id: "44:4",
		name: "レンガハーフブロック",
		en_name: "Brick Slab"
	}, {
		id: "44:5",
		name: "石レンガハーフブロック",
		en_name: "Stone Brick Slab"
	}, {
		id: "44:6",
		name: "ネザーレンガハーフブロック",
		en_name: "Nether Brick Slab"
	}, {
		id: "44:7",
		name: "ネザー水晶ハーフブロック",
		en_name: "Quartz Slab"
	}], {
		id: "45",
		name: "レンガブロック",
		en_name: "Bricks"
	}, {
		id: "46",
		name: "TNT",
		en_name: "TNT"
	}, {
		id: "47",
		name: "本棚",
		en_name: "Bookshelf"
	}, {
		id: "48",
		name: "苔石",
		en_name: "Moss Stone"
	}, {
		id: "49",
		name: "黒曜石",
		en_name: "Obsidian"
	}, {
		id: "50",
		name: "松明",
		en_name: "Torch"
	}, {
		id: "51",
		name: "炎",
		en_name: "Fire"
	}, {
		id: "52",
		name: "モンスタースポナー",
		en_name: "Monster Spawner"
	}, {
		id: "53",
		name: "樫の木の階段",
		en_name: "Oak Wood Stairs"
	}, {
		id: "54",
		name: "チェスト",
		en_name: "Chest"
	}, {
		id: "55",
		name: "レッドストーンワイヤー",
		en_name: "Redstone Dust"
	}, {
		id: "56",
		name: "ダイヤモンド鉱石",
		en_name: "Diamond Ore"
	}, {
		id: "57",
		name: "ダイヤモンドブロック",
		en_name: "Block of Diamond"
	}, {
		id: "58",
		name: "作業台",
		en_name: "Crafting Table"
	}, {
		id: "59",
		name: "作物",
		en_name: "Crops"
	}, {
		id: "60",
		name: "耕地",
		en_name: "Farmland"
	}, {
		id: "61",
		name: "かまど",
		en_name: "Furnace"
	}, {
		id: "62",
		name: "かまど",
		en_name: "Furnace"
	}, {
		id: "63",
		name: "看板",
		en_name: "Sign"
	}, {
		id: "64",
		name: "木のドア",
		en_name: "Wooden Door"
	}, {
		id: "65",
		name: "はしご",
		en_name: "Ladder"
	}, {
		id: "66",
		name: "レール",
		en_name: "Rail"
	}, {
		id: "67",
		name: "石の階段",
		en_name: "Stone Stairs"
	}, {
		id: "68",
		name: "看板",
		en_name: "Sign"
	}, {
		id: "69",
		name: "レバー",
		en_name: "Lever"
	}, {
		id: "70",
		name: "感圧式スイッチ",
		en_name: "Pressure Plate"
	}, {
		id: "71",
		name: "鉄のドア",
		en_name: "Iron Door"
	}, {
		id: "72",
		name: "感圧式スイッチ",
		en_name: "Pressure Plate"
	}, {
		id: "73",
		name: "レッドストーン鉱石",
		en_name: "Redstone Ore"
	}, {
		id: "74",
		name: "レッドストーン鉱石",
		en_name: "Redstone Ore"
	}, {
		id: "75",
		name: "レッドストーントーチ",
		en_name: "Redstone Torch"
	}, {
		id: "76",
		name: "レッドストーントーチ",
		en_name: "Redstone Torch"
	}, {
		id: "77",
		name: "ボタン",
		en_name: "Button"
	}, {
		id: "78",
		name: "雪",
		en_name: "Snow"
	}, {
		id: "79",
		name: "氷",
		en_name: "Ice"
	}, {
		id: "80",
		name: "雪ブロック",
		en_name: "Snow"
	}, {
		id: "81",
		name: "サボテン",
		en_name: "Cactus"
	}, {
		id: "82",
		name: "粘土ブロック",
		en_name: "Clay"
	}, {
		id: "83",
		name: "サトウキビ",
		en_name: "Sugar Cane"
	}, {
		id: "84",
		name: "ジュークボックス",
		en_name: "Jukebox"
	}, {
		id: "85",
		name: "フェンス",
		en_name: "Fence"
	}, {
		id: "86",
		name: "カボチャ",
		en_name: "Pumpkin"
	}, {
		id: "87",
		name: "ネザーラック",
		en_name: "Netherrack"
	}, {
		id: "88",
		name: "ソウルサンド",
		en_name: "Soul Sand"
	}, {
		id: "89",
		name: "グロウストーン",
		en_name: "Glowstone"
	}, {
		id: "90",
		name: "ポータル",
		en_name: "Portal"
	}, {
		id: "91",
		name: "ジャック・オ・ランタン",
		en_name: "Jack 'o' Lantern"
	}, {
		id: "92",
		name: "ケーキ",
		en_name: "Cake"
	}, {
		id: "93"
	}, {
		id: "94"
	}, {
		id: "95",
		name: "鍵のかかったチェスト",
		en_name: "Locked Chest"
	}, {
		id: "96",
		name: "トラップドア",
		en_name: "Trapdoor"
	},
	[{
		id: "97",
		name: "石のモンスターエッグ",
		en_name: "Stone Monster Egg"
	}, {
		id: "97:1",
		name: "丸石モンスターエッグ",
		en_name: "Cobblestone Monster Egg"
	}, {
		id: "97:2",
		name: "石レンガモンスターエッグ",
		en_name: "Stone Brick Monster Egg"
	}],
	[{
		id: "98",
		name: "石レンガ",
		en_name: "Stone Bricks"
	}, {
		id: "98:1",
		name: "苔石レンガ",
		en_name: "Mossy Stone Bricks"
	}, {
		id: "98:2",
		name: "ひびの入った石レンガ",
		en_name: "Cracked Stone Bricks"
	}, {
		id: "98:3",
		name: "模様入り石レンガ",
		en_name: "Chiseled Stone Bricks"
	}], {
		id: "99",
		name: "キノコ",
		en_name: "Mushroom"
	}, {
		id: "100",
		name: "キノコ",
		en_name: "Mushroom"
	}, {
		id: "101",
		name: "鉄格子",
		en_name: "Iron Bars"
	}, {
		id: "102",
		name: "板ガラス",
		en_name: "Glass Pane"
	}, {
		id: "103",
		name: "スイカ",
		en_name: "Melon"
	}, {
		id: "104"
	}, {
		id: "105"
	}, {
		id: "106",
		name: "つる",
		en_name: "Vines"
	}, {
		id: "107",
		name: "フェンスゲート",
		en_name: "Fence Gate"
	}, {
		id: "108",
		name: "レンガの階段",
		en_name: "Brick Stairs"
	}, {
		id: "109",
		name: "石レンガの階段",
		en_name: "Stone Brick Stairs"
	}, {
		id: "110",
		name: "菌糸",
		en_name: "Mycelium"
	}, {
		id: "111",
		name: "スイレンの葉",
		en_name: "Lily Pad"
	}, {
		id: "112",
		name: "ネザーレンガ",
		en_name: "Nether Brick"
	}, {
		id: "113",
		name: "ネザーレンガフェンス",
		en_name: "Nether Brick Fence"
	}, {
		id: "114",
		name: "ネザーレンガの階段",
		en_name: "Nether Brick Stairs"
	}, {
		id: "115",
		name: "ネザーウォート",
		en_name: "Nether Wart"
	}, {
		id: "116",
		name: "エンチャントテーブル",
		en_name: "Enchantment Table"
	}, {
		id: "117"
	}, {
		id: "118",
		name: "大釜",
		en_name: "Cauldron"
	}, {
		id: "119"
	}, {
		id: "120",
		name: "エンドポータル",
		en_name: "End Portal"
	}, {
		id: "121",
		name: "エンドストーン",
		en_name: "End Stone"
	}, {
		id: "122",
		name: "ドラゴンの卵",
		en_name: "Dragon Egg"
	}, {
		id: "123",
		name: "レッドストーンランプ",
		en_name: "Redstone Lamp"
	}, {
		id: "124",
		name: "レッドストーンランプ",
		en_name: "Redstone Lamp"
	},
	[{
		id: "125",
		name: "樫の木材ハーフブロック",
		en_name: "Oak Wood Slab"
	}, {
		id: "125:1",
		name: "松の木材ハーフブロック",
		en_name: "Spruce Wood Slab"
	}, {
		id: "125:2",
		name: "白樺の木材ハーフブロック",
		en_name: "Birch Wood Slab"
	}, {
		id: "125:3",
		name: "ジャングルの木材ハーフブロック",
		en_name: "Jungle Wood Slab"
	}],
	[{
		id: "126",
		name: "樫の木材ハーフブロック",
		en_name: "Oak Wood Slab"
	}, {
		id: "126:1",
		name: "松の木材ハーフブロック",
		en_name: "Spruce Wood Slab"
	}, {
		id: "126:2",
		name: "白樺の木材ハーフブロック",
		en_name: "Birch Wood Slab"
	}, {
		id: "126:3",
		name: "ジャングルの木材ハーフブロック",
		en_name: "Jungle Wood Slab"
	}], {
		id: "127",
		name: "カカオの実",
		en_name: "Cocoa"
	}, {
		id: "128",
		name: "砂岩の階段",
		en_name: "Sandstone Stairs"
	}, {
		id: "129",
		name: "エメラルド鉱石",
		en_name: "Emerald Ore"
	}, {
		id: "130",
		name: "エンダーチェスト",
		en_name: "Ender Chest"
	}, {
		id: "131",
		name: "トリップワイヤーフック",
		en_name: "Tripwire Hook"
	}, {
		id: "132",
		name: "トリップワイヤー",
		en_name: "Tripwire"
	}, {
		id: "133",
		name: "エメラルドブロック",
		en_name: "Block of Emerald"
	}, {
		id: "134",
		name: "松の木の階段",
		en_name: "Spruce Wood Stairs"
	}, {
		id: "135",
		name: "白樺の木の階段",
		en_name: "Birch Wood Stairs"
	}, {
		id: "136",
		name: "ジャングルの木の階段",
		en_name: "Jungle Wood Stairs"
	}, {
		id: "137",
		name: "コマンドブロック",
		en_name: "Command Block"
	}, {
		id: "138",
		name: "ビーコン",
		en_name: "Beacon"
	},
	[{
		id: "139",
		name: "丸石の壁",
		en_name: "Stone Wall"
	}, {
		id: "139:1",
		name: "苔石の壁",
		en_name: "Mossy Cobblestone Wall"
	}], {
		id: "140"
	}, {
		id: "141",
		name: "ニンジン",
		en_name: "Carrots"
	}, {
		id: "142",
		name: "ジャガイモ",
		en_name: "Potatoes"
	}, {
		id: "143",
		name: "ボタン",
		en_name: "Button"
	}, {
		id: "144"
	}, {
		id: "145",
		name: "金床",
		en_name: "Anvil"
	}, {
		id: "146",
		name: "トラップチェスト",
		en_name: "Trapped Chest"
	}, {
		id: "147",
		name: "重量感圧板 (軽)",
		en_name: "Weighted Pressure Plate (Light)"
	}, {
		id: "148",
		name: "重量感圧板 (重)",
		en_name: "Weighted Pressure Plate (Heavy)"
	}, {
		id: "149"
	}, {
		id: "150"
	}, {
		id: "151",
		name: "日照センサー",
		en_name: "Daylight Sensor"
	}, {
		id: "152",
		name: "レッドストーンブロック",
		en_name: "Block of Redstone"
	}, {
		id: "153",
		name: "ネザークォーツ鉱石",
		en_name: "Nether Quartz Ore"
	}, {
		id: "154",
		name: "ホッパー",
		en_name: "Hopper"
	}, [{
		id: "155",
		name: "ネザー水晶ブロック",
		en_name: "Block of Quartz"
	}, {
		id: "155:1",
		name: "模様入りネザー水晶ブロック",
		en_name: "Chiselled Quartz Block"
	}, {
		id: "155:2",
		name: "柱型ネザー水晶ブロック",
		en_name: "Pillar Quartz Block"
	}], {
		id: "156",
		name: "ネザー水晶の階段",
		en_name: "Quartz Stairs"
	}, {
		id: "157",
		name: "作動レール",
		en_name: "Activator Rail"
	}, {
		id: "158",
		name: "ドロッパー",
		en_name: "Dropper"
	},
	[{
		id: "159",
		name: "White Stained Clay"
	}, {
		id: "159:1",
		name: "Orange Stained Clay"
	}, {
		id: "159:2",
		name: "Magenta Stained Clay"
	}, {
		id: "159:3",
		name: "Light Blue Stained Clay"
	}, {
		id: "159:4",
		name: "Yellow Stained Clay"
	}, {
		id: "159:5",
		name: "Lime Stained Clay"
	}, {
		id: "159:6",
		name: "Pink Stained Clay"
	}, {
		id: "159:7",
		name: "Gray Stained Clay"
	}, {
		id: "159:8",
		name: "Light Gray Stained Clay"
	}, {
		id: "159:9",
		name: "Cyan Stained Clay"
	}, {
		id: "159:10",
		name: "Purple Stained Clay"
	}, {
		id: "159:11",
		name: "Blue Stained Clay"
	}, {
		id: "159:12",
		name: "Brown Stained Clay"
	}, {
		id: "159:13",
		name: "Green Stained Clay"
	}, {
		id: "159:14",
		name: "Red Stained Clay"
	}, {
		id: "159:15",
		name: "Black Stained Clay"
	}], {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {
		id: "170",
		name: "Hay Bale"
	},
	[{
		id: "171",
		name: "Carpet"
	}, {
		id: "171:1",
		name: "Orange Carpet"
	}, {
		id: "171:2",
		name: "Magenta Carpet"
	}, {
		id: "171:3",
		name: "Light Blue Carpet"
	}, {
		id: "171:4",
		name: "Yellow Carpet"
	}, {
		id: "171:5",
		name: "Lime Carpet"
	}, {
		id: "171:6",
		name: "Pink Carpet"
	}, {
		id: "171:7",
		name: "Gray Carpet"
	}, {
		id: "171:8",
		name: "Light Gray Carpet"
	}, {
		id: "171:9",
		name: "Cyan Carpet"
	}, {
		id: "171:10",
		name: "Purple Carpet"
	}, {
		id: "171:11",
		name: "Blue Carpet"
	}, {
		id: "171:12",
		name: "Brown Carpet"
	}, {
		id: "171:13",
		name: "Green Carpet"
	}, {
		id: "171:14",
		name: "Red Carpet"
	}, {
		id: "171:15",
		name: "Black Carpet"
	}], {
		id: "172",
		name: "Hardened Clay"
	}, {
		id: "173",
		name: "Block of Coal"
	}, {}, {}
];
