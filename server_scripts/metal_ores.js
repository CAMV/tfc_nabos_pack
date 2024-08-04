ServerEvents.recipes(event  => {

    const all_ores = [
        {name: 'bismuthinite', metal: 'bismuth', heat: 'heated', mod: 'tfc'},
        {name: 'cassiterite',  metal: 'tin', heat: 'heated', mod: 'tfc'},
        {name: 'chromite', metal: 'chromium', heat: 'superheated', mod: 'firmalife'},
        {name: 'cinnabar', metal: null, heat: null, mod: 'tfc'},
        {name: 'copper',  metal: 'copper', heat: 'heated', mod: 'tfc'},
        {name: 'cryolite', metal: null, heat: null, mod: 'tfc'},
        {name: 'garnierite', metal: 'nickel', heat: 'superheated', mod: 'tfc'},
        {name: 'gold',  metal: 'gold', heat: 'heated', mod: 'tfc'},
        {name: 'graphite', metal: null, heat: null, mod: 'tfc'},
        {name: 'hematite', metal: 'cast_iron', heat: 'superheated', mod: 'tfc'},
        {name: 'limonite', metal: 'cast_iron', heat: 'superheated', mod: 'tfc'},
        {name: 'magnetite', metal: 'cast_iron', heat: 'superheated', mod: 'tfc'},
        {name: 'malachite',  metal: 'copper', heat: 'heated', mod: 'tfc'},
        {name: 'silver',  metal: 'silver', heat: 'heated', mod: 'tfc'},
        {name: 'sphalerite',  metal: 'zinc', heat: 'heated', mod: 'tfc'},
        {name: 'sulfur',  metal: null, heat: null, mod: 'tfc'},
        {name: 'tetrahedrite',  metal: 'copper', heat: 'heated', mod: 'tfc'},
    ]

    let smelting = (input, output, output_amount, heat) =>
        {
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    { item: input }
                ],
                results: [
                    { 
                        fluid: output, 
                        nbt: {},
                        amount : output_amount
                    }
                ],
                heatRequirement: heat
            })
        }

    all_ores.forEach((ore) => 
        {
            let n_ore = `${ore.name}`;
            if (ore.name ==  'copper' || ore.name == 'gold' || ore.name == 'silver')
                n_ore = `native_${ore.name}`
            if (ore.metal) {
                event.remove({ id: `woodencog:mixing/nugget_rich_to_liquid_${n_ore}` })
                event.remove({ id: `woodencog:mixing/nugget_normal_to_liquid_${n_ore}` })
                event.remove({ id: `woodencog:mixing/nugget_poor_to_liquid_${n_ore}` })
                if (ore.name == 'chromite') {
                    smelting(`tfcorewashing:chromium_powder`, `${ore.mod}:metal/${ore.metal}`, 5, ore.heat)
                    smelting(`tfcorewashing:pellet_chromium`, `${ore.mod}:metal/${ore.metal}`, 20, ore.heat)
                    smelting(`tfcorewashing:briquet_chromium`, `${ore.mod}:metal/${ore.metal}`, 80, ore.heat)
                } else {
                    smelting(`tfc:powder/${n_ore}`, `${ore.mod}:metal/${ore.metal}`, 5, ore.heat)
                    smelting(`tfcorewashing:pellet_${ore.name}`, `${ore.mod}:metal/${ore.metal}`, 20, ore.heat)
                    smelting(`tfcorewashing:briquet_${ore.name}`, `${ore.mod}:metal/${ore.metal}`, 80, ore.heat)
                }
            } else {
                event.remove({  id: `tfcorewashing:ores/${ore.name}/${ore.name}_hammer` })
                event.remove({  id: `woodencog:crushing/milling_${ore.name}.json` })
                event.remove({  id: `woodencog:crushing/crushing_${ore.name}.json` })
                event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `7x tfcorewashing:rocky_chunks_${ore.name}`,[`tfc:ore/${ore.name}`, '#tfc:hammers'])).id(`kubejs:ores/${ore.name}_hammer_manual_only`)
            }

            event.remove({  id: `tfcorewashing:ores/${ore.name}/${ore.name}_small_hammer` })
            event.remove({  id: `tfcorewashing:ores/${ore.name}/${ore.name}_poor_hammer` })
            event.remove({  id: `tfcorewashing:ores/${ore.name}/${ore.name}_normal_hammer` })
            event.remove({  id: `tfcorewashing:ores/${ore.name}/${ore.name}_rich_hammer` })
    
            event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `2x tfcorewashing:rocky_chunks_${ore.name}`,[`${ore.mod}:ore/small_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore.name}_small_hammer_manual_only`)
            event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `3x tfcorewashing:rocky_chunks_${ore.name}`,[`${ore.mod}:ore/poor_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore.name}_poor_hammer_manual_only`)
            event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `5x tfcorewashing:rocky_chunks_${ore.name}`,[`${ore.mod}:ore/normal_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore.name}_normal_hammer_manual_only`)
            event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `7x tfcorewashing:rocky_chunks_${ore.name}`,[`${ore.mod}:ore/rich_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore.name}_rich_hammer_manual_only`)
        })
})