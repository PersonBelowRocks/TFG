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
        B: "gtceu:brass_plate",
        S: "minecraft:stick",
    }).id("handcrafted:hammer")
}