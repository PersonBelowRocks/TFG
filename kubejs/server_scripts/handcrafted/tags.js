// priority: 0

const registerHandcraftedItemTags = (event) => {
    global.HANDCRAFTED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    });

    // counters cant be customized with different countertop types and are all around a PITA, so we disable them
    for (const counter of Ingredient.of(/everycomp:hc\/tfc\/[a-z_]+_counter/).itemIds) {
        event.removeAllTagsFrom(counter)
        event.add('c:hidden_from_recipe_viewers', counter)
    }
}

const registerHandcraftedBlockTags = (event) => {
    global.HANDCRAFTED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    });

    // counters cant be customized with different countertop types and are all around a PITA, so we disable them
    for (const counter of Ingredient.of(/everycomp:hc\/tfc\/[a-z_]+_counter/).itemIds) {
        event.removeAllTagsFrom(counter)
    }
}