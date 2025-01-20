// priority: 0

global.HANDCRAFTED_DISABLED_ITEMS = [
    "handcrafted:oven",
    "handcrafted:berry_jam_jar",
    "handcrafted:kitchen_hood_pipe",
    "handcrafted:kitchen_hood",
    // counters are usually automatically disabled, but the bamboo counter is a special case
    // since it doesnt come from EveryCompat but rather directly from handcrafted, so we need to disable it manually.
    "handcrafted:bamboo_counter",
]

const DISABLED_FURNITURE_WOOD_TYPES = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "cherry",
    "dark_oak",
    "mangrove",
    "crimson",
    "warped"
];

const DISABLED_TRIM_MATERIALS = [
    "sandstone",
    "red_sandstone",
    "deepslate",
    "dripstone",
    "andesite",
    "diorite",
    "granite",
    "calcite",
    "quartz",
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "cherry",
    "dark_oak",
    "mangrove",
    "crimson",
    "warped",
    "blackstone",
    "stone"
];

/**
 * Helper for easily disabling an entire type of furniture made out of vanilla wood types (excluding bamboo since the pack supports that)
 * @param {string} furnitureType The name of the furniture type (like bench, chair, etc.)
 */
const disableWoodFurniture = (furnitureType) => {
    DISABLED_FURNITURE_WOOD_TYPES.forEach(wood => {
        global.HANDCRAFTED_DISABLED_ITEMS.push(`handcrafted:${wood}_${furnitureType}`)
    });
}

/**
 * Helper for easily disabling trims made out of disabled vanilla materials
 */
const disableVanillaMaterialTrims = () => {
    DISABLED_TRIM_MATERIALS.forEach(material => {
        global.HANDCRAFTED_DISABLED_ITEMS.push(`handcrafted:${material}_pillar_trim`)
        global.HANDCRAFTED_DISABLED_ITEMS.push(`handcrafted:${material}_corner_trim`)
    });
}

// disable furniture made from vanilla wood (excluding bamboo!)
disableWoodFurniture("bench")
disableWoodFurniture("couch")
disableWoodFurniture("chair")
disableWoodFurniture("dining_bench")
disableWoodFurniture("side_table")
disableWoodFurniture("desk")
disableWoodFurniture("table")
disableWoodFurniture("fancy_bed")
disableWoodFurniture("counter")
disableWoodFurniture("cupboard")
disableWoodFurniture("nightstand")
disableWoodFurniture("drawer")
disableWoodFurniture("shelf")

// disable trims made out of vanilla materials
disableVanillaMaterialTrims()
