// priority: 0

const registerMcwRoofsRecipes = (event) => {
    // remove recipes for disabled items
    global.MCWROOFS_DISABLED_ITEMS.forEach(item => {
        event.remove({output: item});
    });
}