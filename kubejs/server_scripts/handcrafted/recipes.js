// priority: 0

const registerHandcraftedRecipes = (event) => {
    // remove recipes for disabled items
    global.HANDCRAFTED_DISABLED_ITEMS.forEach(item => {
        event.remove({output: item});
    });

    // counters cant be customized with different countertop types and are all around a PITA, so we disable them
    for (const counter of Ingredient.of(/everycomp:hc\/tfc\/[a-z_]+_counter/).itemIds) {
        event.remove({output: counter});
    }

    // default hammer recipe is uncraftable and/or unbalanced
    event.shaped("handcrafted:hammer", [
        " B ",
        " SB",
        "S  "
    ], {
        B: "#forge:plates/brass",
        S: "minecraft:stick",
    }).id("handcrafted:hammer")

    // metal bench recipe, using wrought iron.
    // also balanced so that theyre cheaper and thus easier to build with
    event.shaped("8x handcrafted:bench", [
        "BPB",
        "BPB",
        "B B"
    ], {
        B: "tfc:metal/bars/wrought_iron",
        P: "gtceu:wrought_iron_plate"
    }).id("handcrafted:bench")
}