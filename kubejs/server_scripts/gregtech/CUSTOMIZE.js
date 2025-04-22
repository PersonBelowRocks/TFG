function customGregtechRecipes(event) {
    // allow crushing loose stone into dust
    global.TFC_STONE_TYPES.forEach(stone => {
        var outputDust = global.pickAppropriateStoneDust(stone)

        if (outputDust == null) {
            console.error(`CANNOT PICK A DUST FOR STONE TYPE '${stone}'`)
            return
        }

        // regular
        event.recipes.gtceu.macerator(`loose_${stone}_rock_to_dust`)
            .itemInputs(`tfc:rock/loose/${stone}`)
            .itemOutputs(outputDust)
            .duration(60)
            .EUt(16)
            .circuit(1)
        
        // mossy
        event.recipes.gtceu.macerator(`mossy_loose_${stone}_rock_to_dust`)
            .itemInputs(`tfc:rock/mossy_loose/${stone}`)
            .itemOutputs(outputDust)
            .chancedOutput("gtceu:plant_ball", 120, 50)
            .duration(60)
            .EUt(16)
            .circuit(1)
    })

    // manually hammer rubber sheets so funnels and shit from create can be crafted before LV
    event.shaped("2x gtceu:rubber_foil", [
        "   ",
        "HP ",
        "   "
    ], {
        P: "gtceu:rubber_plate",
        H: "#forge:tools/hammers"
    }).id(`tfg:hammering_thin_rubber_sheets`)
}