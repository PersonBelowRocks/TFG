// priority: 0

const registerDecorativeBlocksRecipes = (event) => {
    // remove recipes for disabled items
    global.DECORATIVE_BLOCKS_DISABLED_ITEMS.forEach(item => {
        event.remove({output: item});
    })

    // add beam recipes for TFC wood types
    global.TFC_WOOD_TYPES.forEach(wood => {
        event.shaped(`everycomp:db/tfc/${wood}_beam`,
            [
                "PLP",
                "PLP",
                "   ",
            ], {
                P: `tfc:wood/lumber/${wood}`,
                L: `tfc:wood/stripped_log/${wood}`,
        }).id(`everycomp:db/tfc/${wood}_beam`)
    });

    // add palisade recipes for TFC wood types
    global.TFC_WOOD_TYPES.forEach(wood => { 
        event.shaped(`everycomp:db/tfc/${wood}_palisade`,
            [
                "LPL",
                "LPL",
                "   ",
            ], {
                P: `tfc:wood/lumber/${wood}`,
                L: `tfc:wood/stripped_log/${wood}`,
        }).id(`everycomp:db/tfc/${wood}_palisade`)
    });

    // recipe for big chain
    event.recipes.tfc.welding(
        "2x decorative_blocks:chain",
        "gtceu:wrought_iron_ring",
        "gtceu:wrought_iron_ring",
        3
    ).id("tfg:big_chain_welding");
    event.remove({id: "decorative_blocks:chain"}); // disable old recipe
}