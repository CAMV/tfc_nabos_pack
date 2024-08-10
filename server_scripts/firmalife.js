// priority: 0

ServerEvents.recipes(event  => {

    let chisel_translation = (output, input) => {
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                `firmalife:${output}`,
                [input, '#tfc:chisels'])
            ).id(`kubejs:${output}_manual_only`)
        event.recipes.create.deploying(`firmalife:${output}`, [input, '#tfc:chisels'])
    }


    event.remove({ id: `firmalife:crafting/barrel_stave` })

    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `firmalife:barrel_stave`,
            [`2x firmalife:treated_lumber`, `tfc:metal/sheet/wrought_iron`, '#tfc:hammers'])
        ).id(`kubejs:barrel_stave_manual_only`)

    let countertops  = [
        {name: 'rustic', input: 'firmalife:rustic_bricks'},
        {name: 'brick', input: 'minecraft:bricks'},
        {name: 'tile', input: 'firmalife:tiles'},
        {name: 'stone', input: 'firmalife:sealed_bricks'}
    ]

    countertops.forEach((c) => {
        event.remove({ id: `firmalife:crafting/${c.name}_countertop` })
        chisel_translation(`${c.name}_countertop`, c.input)
    })

    event.remove({ id: `firmalife:crafting/chiseled_sealed_bricks` })
    chisel_translation('chiseled_sealed_bricks', 'firmalife:polished_sealed_bricks' )

    event.remove({ id: `firmalife:crafting/polished_sealed_bricks` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `firmalife:polished_sealed_bricks`,
            [`firmalife:sealed_bricks`, 'tfc:mortar', '#tfc:chisels'])
        ).id(`kubejs:polished_sealed_bricks_manual_only`)

    let weathered_doors = [
        {input: 'firmalife:rusted_iron_greenhouse_door', output: 'firmalife:iron_greenhouse_door', id: 'rusted_iron_greenhouse_door'},
        {input: 'firmalife:exposed_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'exposed_copper_greenhouse_door'},
        {input: 'firmalife:weathered_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'weathered_copper_greenhouse_door'},
        {input: 'firmalife:oxidized_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'oxidized_copper_greenhouse_door'},
        {input: 'firmalife:weathered_treated_wood_greenhouse_door', output: 'firmalife:treated_wood_greenhouse_door', id: 'weathered_treated_wood_greenhouse_door'}
    ]

    weathered_doors.forEach((wd) => {
        event.remove({ id: `firmalife:crafting/cleaning/${wd.id}` })
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                wd.output,
                [wd.input, '#tfc:chisels'])
            ).id(`kubejs:cleaning/${wd.id}_manual_only`)
        event.recipes.create.deploying(wd.output, [wd.input, '#tfc:chisels'])
    })

    event.remove({ id: `firmalife:crafting/pottery_sherd` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `firmalife:pottery_sherd`,
            [`#tfc:fired_vessels`, '#tfc:hammers'])
        ).id(`kubejs:pottery_sherd_manual_only`)
    event.recipes.create.pressing('firmalife:pottery_sherd', `#tfc:fired_vessels`)

    event.remove({ id: `firmalife:crafting/bottle_label` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            '16x firmalife:bottle_label',
            ['minecraft:paper', 'firmalife:beeswax','#tfc:knives'])
        ).id(`kubejs:bottle_label_manual_only`)

    event.remove({ id: `firmalife:crafting/spoon` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            'firmalife:spoon',
            ['#tfc:firepit_sticks', '#tfc:lumber','#tfc:knives'])
        ).id(`kubejs:spoon_manual_only`)

})