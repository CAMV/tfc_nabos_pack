// priority: 0

ServerEvents.recipes(event  => {

    event.remove({ output: `firmalife:barrel_stave` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `firmalife:barrel_stave`,
            [`2x firmalife:treated_lumber`, `tfc:metal/sheet/wrought_iron`, '#tfc:hammers'])
        ).id(`kubejs:barrel_stave_manual_only`)
    

})