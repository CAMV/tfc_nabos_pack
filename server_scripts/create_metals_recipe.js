
ServerEvents.tags('item', event => {
    event.add('kubejs:iron_pellet', 'tfcorewashing:pellet_hematite')
    event.add('kubejs:iron_pellet', 'tfcorewashing:pellet_limonite')
    event.add('kubejs:iron_pellet', 'tfcorewashing:pellet_magnetite')

    event.add('kubejs:iron_briquet', 'tfcorewashing:briquet_hematite')
    event.add('kubejs:iron_briquet', 'tfcorewashing:briquet_limonite')
    event.add('kubejs:iron_briquet', 'tfcorewashing:briquet_magnetite')
})

ServerEvents.tags('fluid', event => {
    // ANDESITE ALLOY
    event.add('tfc:usable_in_ingot_mold', 'kubejs:andesite_alloy')

    // ELECTRUM
    event.add('tfc:usable_in_ingot_mold', 'kubejs:electrum')

})

TFCEvents.data(event => {
    // ANDESITE ALLOY
    event.metal('kubejs:andesite_alloy', 450, 0.1, 'create:andesite_alloy', null, null, 4, 'kubejs:andesite_alloy')
    event.itemHeat('kubejs:andesite_alloy', 0.1, null, null)
    event.itemHeat('create:andesite_alloy', 0.1, 300, 350)

    // ELECTRUM
    event.metal('kubejs:electrum', 1050, 0.1, 'createadditions:electrum_ingot', 'kubejs:electrum_double_ingot', 'createadditions:electrum_sheet', 4, 'kubejs:electrum')
    event.itemHeat('kubejs:electrum', 0.1, null, null)
    event.itemHeat('createaddition:electrum_ingot', 0.1, 800, 900)
    event.itemHeat('createaddition:electrum_sheet', 0.1, 800, 900)
    event.itemHeat('createaddition:electrum_rod', 0.1, 800, 900)
    event.itemHeat('kubejs:electrum_double_ingot', 0.1, 800, 900)

})

ServerEvents.recipes(event  => {

    let filling = (mold, fill_fluid, fluid_amount) => 
        {
            event.custom({
                type: 'woodencog:filling',
                ingredients: [
                    {
                        item: mold
                    },
                    {
                        fluid: fill_fluid,
                        'amount': fluid_amount
                    }
                ],
                results: [
                    {
                        stack: {
                            item: mold,
                            count: 1
                        }
                    }
                ]
            })
        }

    // ANDESITE ALLOY
    event.remove({ id: `create:crafting/materials/andesite_alloy` })
    event.remove({ id: `create:crafting/materials/andesite_alloy_from_zinc` })
    event.remove({ id: `create:mixing/andesite_alloy_from_zinc` })
    event.remove({ id: `create:mixing/andesite_alloy` })

    event.remove({ id: `woodencog:rock_knapping/andesite_alloy` })

    event.recipes.tfc.blast_furnace(Fluid.of('kubejs:andesite_alloy', 100), '#kubejs:iron_pellet', TFC.fluidStackIngredient(['tfc:metal/zinc'], 80))
    event.recipes.tfc.casting('create:andesite_alloy', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('kubejs:andesite_alloy', 100), 1)
    event.recipes.tfc.casting('create:andesite_alloy', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('kubejs:andesite_alloy', 100), .5)

    filling('tfc:ceramic/ingot_mold', 'kubejs:andesite_alloy', 100)
    filling('tfc:ceramic/fire_ingot_mold', 'kubejs:andesite_alloy', 100)

    event.recipes.tfc.heating('create:andesite_alloy', 450).resultFluid(Fluid.of('kubejs:andesite_alloy', 100))

    // ELECTRUM
    event.remove({ id: `createaddition:mixing/electrum` })
    event.remove({ id: `createaddition:pressing/electrum_ingot` })

    event.recipes.tfc.casting('createaddition:electrum_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('kubejs:electrum', 100), 1)
    event.recipes.tfc.casting('createaddition:electrum_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('kubejs:electrum', 100), .5)

    filling('tfc:ceramic/ingot_mold', 'kubejs:electrum', 100)
    filling('tfc:ceramic/fire_ingot_mold', 'kubejs:electrum', 100)

    event.recipes.tfc.heating('createaddition:electrum_ingot', 1050).resultFluid(Fluid.of('kubejs:electrum', 100))
    event.recipes.tfc.heating('createaddition:electrum_sheet', 1050).resultFluid(Fluid.of('kubejs:electrum', 200))
    event.recipes.tfc.heating('createaddition:electrum_rod', 1050).resultFluid(Fluid.of('kubejs:electrum', 50))
    event.recipes.tfc.heating('createaddition:electrum_wire', 1050).resultFluid(Fluid.of('kubejs:electrum', 25))
    event.recipes.tfc.heating('kubejs:electrum_double_ingot', 1050).resultFluid(Fluid.of('kubejs:electrum', 200))

})