ServerEvents.recipes(event  => {

    const ores = [
        'bismuthinite', 
        'cassiterite', 
        'native_copper',
        'gold',
        'malachite',
        'silver',
        'sphalerite',
        'tetrahedrite',
    ]

    const metals = [
        'bismuth', 
        'tin',
        'copper',
        'gold', 
        'copper',
        'silver',
        'zinc',
        'copper',
    ]

    const all_ores = [
        'bismuthinite', 
        'cassiterite', 
        'chromite',
        'cinnabar',
        'copper',
        'cryolite',
        'garnierite',
        'gold',
        'graphite',
        'hematite',
        'limonite',
        'magnetite',
        'malachite',
        'silver',
        'sphalerite',
        'sulfur',
        'tetrahedrite',
    ]

    const all_minerals = [
        'cinnabar',
        'cryolite',
        'graphite',
        'sulfur',
    ]

    let smelting = (input, output, output_amount) =>
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
                heatRequirement: 'heated'
            })
        }

    let index = 0
    ores.forEach((ore) => 
        {
            let powder_ore = ore;
            if (ore == 'copper' || ore == 'gold')
            {
                powder_ore = `native_${powder_ore}`
            }

            event.remove({ id: `woodencog:mixing/nugget_rich_to_liquid_${powder_ore}` })
            event.remove({ id: `woodencog:mixing/nugget_normal_to_liquid_${powder_ore}` })
            event.remove({ id: `woodencog:mixing/nugget_poor_to_liquid_${powder_ore}` })

            smelting(`tfc:powder/${powder_ore}`, `tfc:metal/${metals[index]}`, 5)
            smelting(`tfcorewashing:pellet_${ore}`, `tfc:metal/${metals[index]}`, 20)
            smelting(`tfcorewashing:briquet_${ore}`, `tfc:metal/${metals[index]}`, 80)

            index = index + 1
        })

    all_ores.forEach((ore) =>{
        event.remove({  id: `tfcorewashing:ores/${ore}/${ore}_small_hammer` })
        event.remove({  id: `tfcorewashing:ores/${ore}/${ore}_poor_hammer` })
        event.remove({  id: `tfcorewashing:ores/${ore}/${ore}_normal_hammer` })
        event.remove({  id: `tfcorewashing:ores/${ore}/${ore}_rich_hammer` })

        let n_ore = `${ore}`;
        if (ore ==  'copper' || ore == 'gold')
            n_ore = `native_${ore}`

        let mod = 'tfc'
        if (ore ==  'chromite')
            mod = 'firmalife'

        event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `2x tfcorewashing:rocky_chunks_${ore}`,[`${mod}:ore/small_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore}_small_hammer_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `3x tfcorewashing:rocky_chunks_${ore}`,[`${mod}:ore/poor_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore}_poor_hammer_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `5x tfcorewashing:rocky_chunks_${ore}`,[`${mod}:ore/normal_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore}_normal_hammer_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `7x tfcorewashing:rocky_chunks_${ore}`,[`${mod}:ore/rich_${n_ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore}_rich_hammer_manual_only`)
    })
    
    all_minerals.forEach((ore) =>{
        event.remove({  id: `tfcorewashing:ores/${ore}/${ore}_hammer` })

        event.remove({  id: `woodencog:crushing/milling_${ore}.json` })
        event.remove({  id: `woodencog:crushing/crushing_${ore}.json` })


        event.recipes.tfc.damage_inputs_shapeless_crafting( event.recipes.minecraft.crafting_shapeless( `7x tfcorewashing:rocky_chunks_${ore}`,[`tfc:ore/${ore}`, '#tfc:hammers'])).id(`kubejs:ores/${ore}_hammer_manual_only`)
    })

})