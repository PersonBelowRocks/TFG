// priority: 0

const registerDecorativeBlocksItemTags = (event) => {
    global.DECORATIVE_BLOCKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerDecorativeBlocksBlockTags = (event) => {
    global.DECORATIVE_BLOCKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}