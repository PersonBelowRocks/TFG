// priority: 0

global.MCWROOFS_DISABLED_ITEMS = [

]

const DISABLED_ROOF_WOOD_TYPES = [
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

const MCW_ROOF_BLOCK_TYPES = [
    "roof",
    "attic_roof",
    "top_roof",
    "lower_roof",
    "steep_roof",
    "upper_lower_roof",
    "upper_steep_roof",
];

/**
 * Helper for easily disabling all roof blocks in Macaw's roofs made from a given material.
 * @param {string} material The material to disable (e.g., 'oak', 'oak_planks', etc.)
 */
const disableMcwRoofMaterial = (material) => {
    MCW_ROOF_BLOCK_TYPES.forEach(blockType => {
        global.MCWROOFS_DISABLED_ITEMS.push(`mcwroofs:${material}_${blockType}`);
    });
}

// Get rid of the unwanted wooden roofs
DISABLED_ROOF_WOOD_TYPES.forEach(woodType => {
    disableMcwRoofMaterial(woodType);
    // disable the plank version of the wood roofing too
    disableMcwRoofMaterial(`${woodType}_planks`);
});

// Get rid of all vanilla stone roofs
global.VANILLA_STONE_TYPES.forEach(stoneType => {
    disableMcwRoofMaterial(stoneType);
});
