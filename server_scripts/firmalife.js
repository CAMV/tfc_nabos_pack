// priority: 0

ServerEvents.recipes(event  => {

    let chisel_translation = (output, input) => {
        event.recipes.create.deploying(`firmalife:${output}`, [input, '#tfc:chisels'])
    }

    let countertops  = [
        {name: 'rustic', input: 'firmalife:rustic_bricks'},
        {name: 'brick', input: 'minecraft:bricks'},
        {name: 'tile', input: 'firmalife:tiles'},
        {name: 'stone', input: 'firmalife:sealed_bricks'}
    ]
    countertops.forEach((c) => {
        chisel_translation(`${c.name}_countertop`, c.input)
    })

    chisel_translation('chiseled_sealed_bricks', 'firmalife:polished_sealed_bricks' )

    let weathered_doors = [
        {input: 'firmalife:rusted_iron_greenhouse_door', output: 'firmalife:iron_greenhouse_door', id: 'rusted_iron_greenhouse_door'},
        {input: 'firmalife:exposed_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'exposed_copper_greenhouse_door'},
        {input: 'firmalife:weathered_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'weathered_copper_greenhouse_door'},
        {input: 'firmalife:oxidized_copper_greenhouse_door', output: 'firmalife:copper_greenhouse_door', id: 'oxidized_copper_greenhouse_door'},
        {input: 'firmalife:weathered_treated_wood_greenhouse_door', output: 'firmalife:treated_wood_greenhouse_door', id: 'weathered_treated_wood_greenhouse_door'}
    ]

    weathered_doors.forEach((wd) => {
        event.recipes.create.deploying(wd.output, [wd.input, '#tfc:chisels'])
    })

    event.recipes.create.pressing('firmalife:pottery_sherd', `#tfc:fired_vessels`)

})