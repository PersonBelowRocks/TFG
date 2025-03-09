// priority: 0

const registerMcwRoofsItemTags = (event) => {
    global.MCWROOFS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    });
}

const registerMcwRoofsBlockTags = (event) => {
    global.MCWROOFS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}