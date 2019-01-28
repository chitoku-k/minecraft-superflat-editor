var world = {
	blocks: [],
	error: [],
};
var draggingBlock, droppedPosition, dragFrom, dragTo;

function convertToBlockName(name) {
	return name.replace(/[ぁ-ん]/g, function (s) {
		return String.fromCharCode(s.charCodeAt(0) + 0x60);
	}).replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	}).toLowerCase();
}

function createBlockTable(array) {
	var blocks = "";
	var getBlockTable = function (block) {
		return "<tr onclick=\"addBlock('" + block.id + "')\" draggable=\"true\" ondragstart=\"blockDragStart(event); dragFrom = 2; draggingBlock = \'" +
			block.id + "\'\"><td class=\"blockImageCell\">" + "<span class=\"block block_" + block.id.replace(/:/g, "_") + "\"></span></td><td>" +
			(block.name ? block.name + "<br>" : "") + (block.en_name ? "<span class=\"en_name\">" + block.en_name + "</span><br>" : "") +
			"<span class=\"blockID\">" + block.id + "</span></td></tr>";
	};

	for (var i = 0, n = array.length; i < n; i++) {
		if (Array.isArray(array[i])) {
			for (var j = 0, m = array[i].length; j < m; j++) {
				blocks += getBlockTable(array[i][j]);
			}
		} else if (array[i].id === undefined) {
			continue;
		} else {
			blocks += getBlockTable(array[i]);
		}
	}

	$("blockTable").innerHTML = blocks;
}

function createWorldTable() {
	var getWorldTable = function (block, count, index) {
		if (!block) {
			return "";
		}
		return "<tr ondrop=\"dragTo = 0; droppedPosition = '" + index +
			"'; blockDrop(event)\" ondragstart=\"blockDragStart(event); dragFrom = 0; draggingBlock = " + index +
			"\" draggable=\"true\"><td class=\"worldBlockImage\"><span class=\"block block_" +
			block.id.replace(/:/g, "_") + "\"></span></td><td class=\"worldBlockName\">" +
			(block.name ? block.name + "<br>" : "") + (block.en_name ? "<span class=\"en_name\">" +
			block.en_name + "</span><br>" : "") + "<span class=\"blockID\">" + block.id + "</span></td><td class=\"worldBlockCount\">" +
			"<input type=\"text\" value=\"" + count + "\" onkeyup=\"changeBlock(" + index + ", this.value)\"></td>" +
			"<td class=\"worldBlockEdit\"><input type=\"button\" value=\"＋\" onclick=\"changeBlock(" + index + ", '+1')\">" +
			"<input type=\"button\" value=\"－\" onclick=\"changeBlock(" + index + ", '-1')\"" + (count < 2 ? " disabled>" : ">") +
			"<input type=\"button\" onclick=\"switchBlock(" +
			index + ", -1)\" value=\"▲\"" + (index === 0 ? " disabled>" : ">") + "<input type=\"button\" onclick=\"switchBlock(" +
			index + ", 1)\" value=\"▼\"" + (index === world.blocks.length - 1 ? " disabled>" : ">") +
			"<input type=\"button\" onclick=\"removeBlock(" + index + ")\" value=\"✖\"></td></tr>";
	};

	world = parsePresetCode(this.value);
	var blocks = "";
	var isNonDoubleBlock = false;
	var isPreviousBlockNonDouble = false;
	var previousBlock = "";

	for (var i = 0; i < world.blocks.length; i++) {
		blocks += getWorldTable(world.blocks[i].block, world.blocks[i].length, i);

		isNonDoubleBlock = (world.blocks[i].block.id === '50' || world.blocks[i].block.id === '70' || world.blocks[i].block.id === '72' ||
			world.blocks[i].block.id === '75' || world.blocks[i].block.id === '76' ||  world.blocks[i].block.id === '147' || world.blocks[i].block.id === '148');
		isPreviousBlockNonDouble = (previousBlock.id === '50' || previousBlock.id === '70' || previousBlock.id === '72' ||
			previousBlock.id === '75' || previousBlock.id === '76' || previousBlock.id === '147' || previousBlock.id === '148');

		if (world.blocks[i].block.id === '64' || world.blocks[i].block.id === '65' || world.blocks[i].block.id === '71') {
			world.error.push((i + 1) + "層目: '" + world.blocks[i].block.name + "' はクラッシュの原因になります。");
		}

		if (isNonDoubleBlock && isPreviousBlockNonDouble) {
			if (previousBlock.id === world.blocks[i].block.id) {
				world.error.push(i + "～" + (i + 1) + "層目: '" + world.blocks[i].block.name + "' は2段以上設置できません。クラッシュの原因になります。");
			} else {
				world.error.push(i + "～" + (i + 1) + "層目: '" + previousBlock.name + "' と '" + world.blocks[i].block.name + "' は上下に設置できません。クラッシュの原因になります。");
			}
		}
		if (isNonDoubleBlock && world.blocks[i].length > 1) {
			world.error.push((i + 1) + "層目: '" + world.blocks[i].block.name + "' は2段以上設置できません。クラッシュの原因になります。");
		}

		previousBlock = world.blocks[i].block;
	}

	$("worldTable").innerHTML = blocks;

	$("biome").innerHTML = world.biome ? world.biome.name + " (" + world.biome.en_name + ")" : "";

	var elm = $("structureTable").getElementsByTagName("input");

	if (world.village) {
		$("villageOption").checked = true;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("village") < 0) {
				continue;
			}
			elm[i].value = "";
		}
		for (var option in world.village) {
			if (!world.village.hasOwnProperty(option)) {
				continue;
			}
			$("village_" + option).value = world.village[option];
		}
	} else {
		$("villageOption").checked = false;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("village") < 0) {
				continue;
			}
			elm[i].value = "";
		}
	}

	if (world.mineshaft) {
		$("mineshaftOption").checked = true;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("mineshaft") < 0) {
				continue;
			}
			elm[i].value = "";
		}
		for (var option in world.mineshaft) {
			if (!world.mineshaft.hasOwnProperty(option)) {
				continue;
			}
			$("mineshaft_" + option).value = world.mineshaft[option];
		}
	} else {
		$("mineshaftOption").checked = false;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("mineshaft") < 0) {
				continue;
			}
			elm[i].value = "";
		}
	}

	if (world.stronghold) {
		$("strongholdOption").checked = true;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("stronghold") < 0) {
				continue;
			}
			elm[i].value = "";
		}
		for (var option in world.stronghold) {
			if (!world.stronghold.hasOwnProperty(option)) {
				continue;
			}
			$("stronghold_" + option).value = world.stronghold[option];
		}
	} else {
		$("strongholdOption").checked = false;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("stronghold") < 0) {
				continue;
			}
			elm[i].value = "";
		}
	}

	if (world.biome_1) {
		$("biome_1Option").checked = true;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("biome_1") < 0) {
				continue;
			}
			elm[i].value = "";
		}
		for (var option in world.biome_1) {
			if (!world.biome_1.hasOwnProperty(option)) {
				continue;
			}
			$("biome_1_" + option).value = world.biome_1[option];
		}
	} else {
		$("biome_1Option").checked = false;
		for (var i = 0, n = elm.length; i < n; i++) {
			if (elm[i].type === "checkbox" || elm[i].id.indexOf("biome_1") < 0) {
				continue;
			}
			elm[i].value = "";
		}
	}

	$("dungeonOption").checked = !!world.dungeon;
	$("decorationOption").checked = !!world.decoration;
	$("lakeOption").checked = !!world.lake;
	$("lava_lakeOption").checked = !!world.lava_lake;

	validateError();
}

function validateError() {
	var error = $("error");

	if (world.error.length > 0) {
		error.className = "visible";
		error.innerHTML = "";
		for (var i = 0; i < world.error.length; i++) {
			error.innerHTML += world.error[i] + "<br>";
		}
	} else {
		error.className = "";
	}
}

function createPresetTable(preset, id) {
	return "<tr onclick=\"selectPreset(" + id + ")\">" + "<td class=\"blockImageCell\"><span class=\"block block_" +
		preset.icon.replace(/:/g, "_") + "\"></span></td><td>" + preset.name + "<br><span class=\"en_name\">" +
		preset.code + "</span></td></tr>";
}

function createBiomeTable(biome) {
	return "<tr onclick=\"selectBiome(" + biome.id + ")\">" + "<td class=\"blockImageCell\"><span class=\"block block_" +
		biome.icon.replace(/:/g, "_") + "\"></span></td><td>" + biome.name + "<br><span class=\"en_name\">" +
		biome.en_name + "</span><br><span class=\"blockID\">" + biome.id + "</span></td></tr>";
}

function getBlock(id) {
	var mainBlock = id;
	var subBlock;

	if (id.indexOf(":") < 0) {
		if (Minecraft.blocks[mainBlock] instanceof Array) {
			if (Minecraft.blocks[mainBlock][0]) {
				return Minecraft.blocks[mainBlock][0];
			} else {
				world.error.push("ブロックID '" + id + "' は存在しません。");
				return null;
			}
		}
	}
	else {
		subBlock = id.slice(id.indexOf(":") + 1);
		mainBlock = id.slice(0, id.indexOf(":"));

		if (Minecraft.blocks[mainBlock] instanceof Array) {
			if (Minecraft.blocks[mainBlock][subBlock]) {
				return Minecraft.blocks[mainBlock][subBlock];
			} else {
				world.error.push("ブロックID '" + id + "' は存在しません。");
				return null;
			}
		}
	}

	if (Minecraft.blocks[mainBlock]) {
		return Minecraft.blocks[mainBlock];
	} else {
		world.error.push("ブロックID '" + id + "' は存在しません。");
		return null;
	}
}

function searchBlock() {
	var name = convertToBlockName(this.value);
	var perfectMatch = /^\".*\"$/.test(name);
	if (perfectMatch) {
		name = name.slice(1, name.length - 1);
	}

	var array = [];
	var ja_name, en_name;

	for (var i = 0, n = Minecraft.blocks.length; i < n; i++) {
		if (Minecraft.blocks[i] instanceof Array) {
			for (var j = 0, m = Minecraft.blocks[i].length; j < m; j++) {
				ja_name = Minecraft.blocks[i][j].name;
				en_name = Minecraft.blocks[i][j].en_name;

				if (perfectMatch) {
					if (ja_name && convertToBlockName(ja_name) === name) {
						array.push(Minecraft.blocks[i][j]);
					} else if (en_name && en_name.toLowerCase() === name) {
						array.push(Minecraft.blocks[i][j]);
					}
				} else {
					if (ja_name && convertToBlockName(ja_name).indexOf(name) >= 0) {
						array.push(Minecraft.blocks[i][j]);
					} else if (en_name && en_name.toLowerCase().indexOf(name) >= 0) {
						array.push(Minecraft.blocks[i][j]);
					}
				}
			}
		} else if (Minecraft.blocks[i].name === undefined) {
			continue;
		} else {
			ja_name = Minecraft.blocks[i].name;
			en_name = Minecraft.blocks[i].en_name;

			if (perfectMatch) {
				if (ja_name && convertToBlockName(ja_name) === name) {
					array.push(Minecraft.blocks[i]);
				} else if (en_name && en_name.toLowerCase() === name) {
					array.push(Minecraft.blocks[i]);
				}
			} else {
				if (ja_name && convertToBlockName(ja_name).indexOf(name) >= 0) {
					array.push(Minecraft.blocks[i]);
				} else if (en_name && en_name.toLowerCase().indexOf(name) >= 0) {
					array.push(Minecraft.blocks[i]);
				}
			}
		}
	}
	if (array.length) {
		createBlockTable(array);
	} else {
		$("blockTable").innerHTML = "<tr><td style=\"text-align: center;\">ブロックがありません</td></tr>";
	}
}

function changeBlock(index, count) {
	if (count === "+1") {
		world.blocks[index].length++;
	} else if (count === "-1") {
		world.blocks[index].length--;
	} else {
		count = count.toHalfbyte();
		if (!world.blocks[index] || isNaN(count) || count < 1) {
			return;
		}
		world.blocks[index].length = count;
	}
	generatePresetCode();
	createWorldTable.call($("presetTextBox"));
}

function switchBlock(index, position) {
	var tmp = world.blocks[index + position];
	world.blocks[index + position] = world.blocks[index];
	world.blocks[index] = tmp;
	generatePresetCode();
	createWorldTable.call($("presetTextBox"));
}

function removeBlock(index) {
	world.blocks.splice(index, 1);
	generatePresetCode();
	createWorldTable.call($("presetTextBox"));
}

function addBlock(id, position) {
	if (position === undefined) {
		position = world.blocks.length;
	}

	world.blocks.reverse();
	if (world.blocks[position - 1] && world.blocks[position - 1].block.id === id) {
		world.blocks[position - 1].length++;
		position--;
	} else if (world.blocks[position] && world.blocks[position].block.id === id) {
		world.blocks[position].length++;
	} else {
		world.blocks.splice(position, 0, {
			block: getBlock(id),
			length: 1,
		});
	}
	world.blocks.reverse();
	generatePresetCode();
	createWorldTable.call($("presetTextBox"));
	if (!isSmartphone && !isTablet) {
		$("worldTable").getElementsByTagName("input")[(world.blocks.length - position - 1) * 6].select();
	}
}

function blockDragStart(event) {
	event.dataTransfer.setData('text', "");
}

function blockDrop(event) {
	if (dragFrom === 2 && dragTo === 0) {
		addBlock(draggingBlock, world.blocks.length - droppedPosition);
	} else if (dragFrom === 2 && dragTo === 1 && world.blocks.length === 0) {
		addBlock(draggingBlock, 0);
	} else if (dragFrom === 0 && dragTo === 0) {
		switchBlock(draggingBlock, droppedPosition - draggingBlock);
	} else if (dragFrom === 0 && dragTo === 2) {
		removeBlock(draggingBlock);
	}
}

function cancelDrop(event) {
	event.preventDefault();
}

function selectPreset(id) {
	if (!world.blocks.length || confirm("ブロック、バイオーム、構造物への変更は保存されません。\nプリセットを適用しますか?")) {
		$("presetTextBox").value = Minecraft.defaultPresets[id].code;
		createWorldTable.call($("presetTextBox"));
	}
}

function selectBiome(id) {
	world.biome = Minecraft.biomes[id];
	generatePresetCode();
	$("biome").innerHTML = world.biome.name + " (" + world.biome.en_name + ")";
	validateError();
}

function showPresetWindow() {
	var presetWindow = $("presetWindow");
	presetWindow.style.display = "block";

	document.body.style.overflow = "hidden";
	showWindow(presetWindow, 500, 500, true, function () {
		presetWindow.style.display = "none";
		document.body.style.overflow = "auto";
		document.body.appendChild(presetWindow);
	});
}

function showBiomeDescriptionWindow() {
	var biomeDescriptionWindow = $("biomeDescriptionWindow");
	biomeDescriptionWindow.style.display = "block";

	document.body.style.overflow = "hidden";
	showWindow(biomeDescriptionWindow, 500, 480, false, function () {
		biomeDescriptionWindow.style.display = "none";
		document.body.style.overflow = "auto";
		document.body.appendChild(biomeDescriptionWindow);
	});
}

function showTutorialWindow() {
	var tutorialWindow = $("tutorialWindow");
	tutorialWindow.style.display = "block";

	document.body.style.overflow = "hidden";
	showWindow(tutorialWindow, 700, 250, false, function () {
		tutorialWindow.style.display = "none";
		document.body.style.overflow = "auto";
		document.body.appendChild(tutorialWindow);
	});
}

function showBiomeWindow() {
	var biomeWindow = $("biomeWindow");
	biomeWindow.style.display = "block";
	var tableRows = $("biomeWindowTable").getElementsByTagName("tr");

	for (var i = 0, n = tableRows.length; i < n; i++) {
		tableRows[i].id = "";
	}

	tableRows[world.biome ? world.biome.id : 0].id = "activeItem";
	$("biomeTableContainer").scrollTop = (world.biome ? world.biome.id : 0) * 65;

	document.body.style.overflow = "hidden";
	showWindow(biomeWindow, 500, 500, true, function () {
		biomeWindow.style.display = "none";
		document.body.style.overflow = "auto";
		document.body.appendChild(biomeWindow);
	});
}

function changeStructures() {
	var option, value;
	if (this.type === "checkbox") {
		option = this.id.slice(0, -("Option".length));
		if (this.checked) {
			world[option] = {};
			var elm = $("structureTable").getElementsByTagName("input");
			for (var i = 0, n = elm.length; i < n; i++) {
				if (elm[i].type === "checkbox" || elm[i].id.indexOf(option) < 0) {
					continue;
				}
				value = elm[i].id.slice(elm[i].id.lastIndexOf("_") + 1);
				if (!isNaN(elm[i].value)) {
					world[option][value] = elm[i].value;
				}
			}
		} else {
			world[option] = null;
		}
	} else if (this.type === "text") {
		value = this.id.slice(this.id.lastIndexOf("_") + 1);
		option = this.id.slice(0, this.id.lastIndexOf("_"));
		if (world[option] && !isNaN(this.value)) {
			world[option][value] = this.value;
		}
	} else {
		return;
	}

	generatePresetCode();
}

function generatePresetCode() {
	var code = "2;";

	if (world.blocks) {
		// Affects array itself
		world.blocks.reverse();

		for (var i = 0; i < world.blocks.length; i++) {
			if (!world.blocks[i].length) {
				continue;
			} else if (world.blocks[i].length === 1) {
				code += world.blocks[i].block.id + ",";
			} else {
				code += world.blocks[i].length + "x" + world.blocks[i].block.id + ",";
			}
		}

		world.blocks.reverse();
	}
	code += ";";

	if (world.biome) {
		code += world.biome.id;
	}
	code += ";";

	if (world.dungeon) {
		code += "dungeon,";
	}
	if (world.decoration) {
		code += "decoration,";
	}
	if (world.lake) {
		code += "lake,";
	}
	if (world.lava_lake) {
		code += "lava_lake,";
	}

	if (world.village) {
		code += "village";
		if (world.village.distance || world.village.size) {
			code += "(";
			if (world.village.distance) {
				code += "distance=" + world.village.distance + " ";
			}
			if (world.village.size) {
				code += "size=" + world.village.size;
			}
			code += ")";
		}
		code += ","
	}
	if (world.mineshaft) {
		code += "mineshaft";
		if (world.mineshaft.chance) {
			code += "(chance=" + world.mineshaft.chance + ")";
		}
		code += ",";
	}
	if (world.stronghold) {
		code += "stronghold";
		if (world.stronghold.distance || world.stronghold.count || world.stronghold.spread) {
			code += "(";
			if (world.stronghold.distance) {
				code += "distance=" + world.stronghold.distance + " ";
			}
			if (world.stronghold.count) {
				code += "count=" + world.stronghold.count + " ";
			}
			if (world.stronghold.spread) {
				code += "spread=" + world.stronghold.spread;
			}
			code += ")";
		}
		code += ",";
	}
	if (world.biome_1) {
		code += "biome_1";
		if (world.biome_1.distance) {
			code += "(distance=" + world.biome_1.distance + ")";
		}
	}

	world.error = [];
	code = code.replace(/,;/, ";").replace(/,$/, "").replace(/\s\)/g, ")");
	$("presetTextBox").value = code;
}

function parsePresetCode(code) {
	var matches;
	var NOT_SUPPORTED = "' はサポートされていません。";
	var USE_PRESET = "<a href=\"javascript:void(0);\" onclick=\"showPresetWindow()\">プリセット</a> が使用できます。";
	var CHOOSE_BIOME = "<a href=\"javascript:void(0);\" onclick=\"showBiomeWindow()\">バイオームを変更</a> してください。";

	world = {
		blocks: [],
		error: [],
	};

	if (code.length === 0) {
		world.error.push("コードが入力されていません。" + USE_PRESET);
		return world;
	}

	var customStrings = code.split(";");

	if (customStrings.length > 4 || customStrings.length < 3 || !customStrings[0].length) {
		world.error.push("構文エラーです。" + USE_PRESET);
		return world;
	}
	if ((customStrings[0] !== "2" && customStrings[0] !== "1") || isNaN(customStrings[0])) {
		world.error.push("バージョン '" + customStrings[0] + NOT_SUPPORTED + "1 または 2 を指定してください。");
	}
	if (customStrings[1].match(/[\dx,:]+/)) {
		var blocks = customStrings[1].split(",");

		for (i = 0; i < blocks.length; i++) {
			if (matches = blocks[i].match(/^([\d]+)x([\d:]+)$/)) {
				if (getBlock(matches[2])) {
					world.blocks.push({
						block: getBlock(matches[2]),
						length: matches[1],
					});
				}
			} else if (matches = blocks[i].match(/^([\d:]+)$/)) {
				if (getBlock(matches[1])) {
					world.blocks.push({
						block: getBlock(matches[1]),
						length: 1,
					});
				}
			} else {
				world.error.push("'" + blocks[i] + "' はブロックではありません。");
			}
		}
		world.blocks.reverse();
	} else if (customStrings[1].length === 0) {
		world.error.push("ブロックを指定してください。" + USE_PRESET);
	} else {
		world.error.push("'" + customStrings[1] + NOT_SUPPORTED);
	}

	var biome = customStrings[2];
	if (isNaN(biome) || biome < 0 || biome >= Minecraft.biomes.length) {
		world.error.push("バイオームID '" + biome + "' は存在しません。" + CHOOSE_BIOME);
	} else if (biome.length === 0) {
		world.error.push("バイオームが指定されていません。" + CHOOSE_BIOME);
	} else {
		world.biome = Minecraft.biomes[biome];
	}

	if (!customStrings[3]) {
		return world;
	}
	var structures = customStrings[3].split(",");

	for (i = 0; i < structures.length; i++) {
		if (matches = structures[i].match(/^(dungeon|decoration|lake|lava_lake)$/)) {
			world[matches[1]] = true;
		} else if (matches = structures[i].match(/^village(?:\(([a-z0-9\.=\s]+)\))?$/)) {
			var village = matches[1];
			world.village = {};
			if (village) {
				var option = village.split(" ");
				for (j = 0; j < option.length; j++) {
					if (matches = option[j].match(/^distance=([\d\.]+)$/)) {
						world.village.distance = matches[1];
					} else if (matches = option[j].match(/^size=([\d\.]+)$/)) {
						world.village.size = matches[1];
					} else {
						world.error.push("'" + option[j] + NOT_SUPPORTED);
					}
				}
			}
		} else if (matches = structures[i].match(/^mineshaft(?:\(([a-z0-9\.=\s]+)\))?$/)) {
			var mineshaft = matches[1];
			world.mineshaft = {};
			if (mineshaft) {
				var option = mineshaft.split(" ");
				for (j = 0; j < option.length; j++) {
					if (matches = option[j].match(/^chance=([\d\.]+)$/)) {
						world.mineshaft.chance = matches[1];
					} else {
						world.error.push("'" + option[j] + NOT_SUPPORTED);
					}
				}
			}
		} else if (matches = structures[i].match(/^stronghold(?:\(([a-z0-9\.=\s]+)\))?$/)) {
			var stronghold = matches[1];
			world.stronghold = {};
			if (stronghold) {
				var option = stronghold.split(" ");
				for (j = 0; j < option.length; j++) {
					if (matches = option[j].match(/^distance=([\d\.]+)$/)) {
						world.stronghold.distance = matches[1];
					} else if (matches = option[j].match(/^count=([\d\.]+)$/)) {
						world.stronghold.count = matches[1];
					} else if (matches = option[j].match(/^spread=([\d\.]+)$/)) {
						world.stronghold.spread = matches[1];
					} else {
						world.error.push("'" + option[j] + NOT_SUPPORTED);
					}
				}
			}
		} else if (matches = structures[i].match(/^biome_1(?:\(([a-z0-9\.=\s]+)\))?$/)) {
			var biome_1 = matches[1];
			world.biome_1 = {};
			if (biome_1) {
				var option = biome_1.split(" ");
				for (j = 0; j < option.length; j++) {
					if (matches = option[j].match(/^distance=([\d\.]+)$/)) {
						world.biome_1.distance = matches[1];
					} else {
						world.error.push("'" + option[j] + NOT_SUPPORTED);
					}
				}
			}
		} else {
			world.error.push("'" + structures[i] + NOT_SUPPORTED);
		}
	}
	return world;
}

addEvent(window, "load", function () {
	$("presetTextBox").value = Minecraft.defaultPresets[0].code;
	createWorldTable.call($("presetTextBox"));

	createBlockTable(Minecraft.blocks);

	var presets = "";
	for (var i = 0, n = Minecraft.defaultPresets.length; i < n; i++) {
		presets += createPresetTable(Minecraft.defaultPresets[i], i);
	}
	$("presetWindowTable").innerHTML = presets;

	var biomes = "";
	for (var i = 0, n = Minecraft.biomes.length; i < n; i++) {
		biomes += createBiomeTable(Minecraft.biomes[i]);
	}
	$("biomeWindowTable").innerHTML = biomes;

	addEvent($("presetCopyButton"), "click", function () {
		$("presetTextBox").select();
		document.execCommand("copy");
		this.value = "コピー完了";
		setTimeout(function () {
			$("presetCopyButton").value = "コピー";
		}, 1000);
	});

	addEvent($("presetTextBox"), "input", createWorldTable);
	if ($("presetTextBox").input === undefined) {
		addEvent($("presetTextBox"), "keyup", createWorldTable);
	}

	addEvent($("presetButton"), "click", showPresetWindow);
	addEvent($("biomeButton"), "click", showBiomeWindow);
	addEvent($("biomeDetailButton"), "click", showBiomeDescriptionWindow);
	addEvent($("blockSearchBox"), "input", searchBlock);
	if ($("blockSearchBox").input === undefined) {
		addEvent($("blockSearchBox"), "keyup", searchBlock);
	}

	var structureOptions = $("structureTable").getElementsByTagName("input");
	for (var i = 0, m = structureOptions.length; i < m; i++) {
		if (structureOptions[i].type === "checkbox") {
			addEvent(structureOptions[i], "click", changeStructures);
		} else {
			addEvent(structureOptions[i], "keyup", changeStructures);
		}
	}

	if (document.cookie.indexOf("superflat") < 0) {
		showTutorialWindow();
	}

	document.cookie = "superflat=1; expires=" + new Date(2014, 9, 6).toGMTString();
});
