function customGregtechRecipes(event) {
    crushingGravelToDust(event);
    extruderStoneRecipes(event);

    // manually hammer rubber sheets so funnels and shit from create can be crafted before LV
    event.shaped("2x gtceu:rubber_foil", [
        "   ",
        "HP ",
        "   "
    ], {
        P: "gtceu:rubber_plate",
        H: "#forge:tools/hammers"
    }).id(`tfg:hammering_thin_rubber_sheets`);
}

/**
 * Macerator recipe(s) for pulverizing gravel of a stone type into dust of that stone type.
 * 
 * @param {any} event The recipe event
 */
function crushingGravelToDust(event) {
    global.TFC_STONE_TYPES.forEach(stone => {
        var outputDust = global.pickAppropriateStoneDust(stone);

        if (outputDust == null || Item.of(`tfc:rock/gravel/${stone}`).isEmpty()) {
            console.error(`CANNOT PICK A DUST FOR STONE TYPE '${stone}'`);
            return;
        }

        event.recipes.gtceu.macerator(`${stone}_gravel_to_${stone}_dust`)
            .itemInputs(`tfc:rock/gravel/${stone}`)
            .itemOutputs(outputDust)
            .duration(2.0 * 20)
            .EUt(8)
            .circuit(1);
    })
}

/**
 * Extruder recipes for GTCEu stone parts (stone ingot, plate, etc.) using the TFG's `tfg:stone_dusts` tag instead of the `gtceu:stone_dust` item.
 * This function will also remove/override the default built-in recipes using the `gtceu:stone_dust` item.
 * 
 * @param {any} event The recipe event
 */
function extruderStoneRecipes(event) {
    // remove default
    event.remove({id: "gtceu:extruder/extrude_stone_to_ingot"});
    // generalize
    event.recipes.gtceu.extruder("tfg_stone_dust_to_stone_ingot")
        .itemInputs("#tfg:stone_dusts")
        .notConsumable("gtceu:ingot_extruder_mold")
        .itemOutputs("gtceu:stone_ingot")
        .duration(0.5 * 20)
        .EUt(28);

    // do the same for plates and gears!

    // plate
    event.remove({id: "gtceu:extruder/extrude_stone_dust_to_plate"});
    event.recipes.gtceu.extruder("tfg_stone_dust_to_stone_plate")
        .itemInputs("#tfg:stone_dusts")
        .notConsumable("gtceu:plate_extruder_mold")
        .itemOutputs("gtceu:stone_plate")
        .duration(4.9 * 20)
        .EUt(56);

    // gear
    event.remove({id: "gtceu:extruder/extrude_stone_dust_to_gear"});
    event.recipes.gtceu.extruder("tfg_stone_dust_to_stone_gear")
        .itemInputs("#tfg:stone_dusts")
        .notConsumable("gtceu:gear_extruder_mold")
        .itemOutputs("gtceu:stone_gear")
        .duration(24.5 * 20)
        .EUt(56);
}