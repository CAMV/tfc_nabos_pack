
ServerEvents.recipes(event  => {
    
    event.remove({ type: 'minecraft:blasting' })
    event.remove({ type: 'minecraft:campfire_cooking' })
    event.remove({ type: 'minecraft:smoking' })
    event.remove({ type: 'minecraft:smelting' })
    event.remove({ type: 'minecraft:stonecutting' })
    event.remove({ type: 'minecraft:smelting' })
    event.remove({ id: `minecraft:smithing_table` })
    event.remove({ id: `minecraft:smithing_table` })
    event.remove({ input: 'minecraft:wooden_sword' })
    event.remove({ output: 'minecraft:copper_ingot' })
    event.remove({ output: 'minecraft:piston' })
    event.remove({ output: 'minecraft:sticky_piston' })

    let states = [
        'oxidized_',
        'weathered_',
        'exposed_',
        ''
    ]

    let copper_pieces = [
        '_slab',
        '',
        '_stairs',
    ]

    event.remove({ output: `minecraft:copper_block` })
    states.forEach(state => {
        copper_pieces.forEach(piece =>
        {
            event.remove({ output: `minecraft:${state}copper${piece}` })
            event.remove({ output: `minecraft:waxed_${state}copper${piece}` })
            event.remove({ output: `minecraft:${state}cut_copper${piece}` })
            event.remove({ output: `minecraft:waxed_${state}cut_copper${piece}` })
        })
    });

    event.remove({ id: `minecraft:minecart` })
    event.remove({ id: `minecraft:hopper_minecart` })
    event.remove({ id: `minecraft:furnace_minecart` })

    let woods = [
        'oak',
        'dark_oak',
        'birch',
        'jungle',
        'acacia',
        'mangrove',
        'cherry',
        'crimson',
        'warped',
        'spruce'
    ]

    woods.forEach((w) => {
        event.remove({output: `minecraft:${w}_log` })
        event.remove({output: `minecraft:${w}_wood`})
        event.remove({output: `minecraft:stripped_${w}_log`})
        event.remove({output: `minecraft:stripped_${w}_wood`})
        event.remove({output: `minecraft:${w}_planks`})
        event.remove({output: `minecraft:${w}_stairs`})
        event.remove({output: `minecraft:${w}_slab`})
        event.remove({output: `minecraft:${w}_fence`})
        event.remove({output: `minecraft:${w}_gate`})
        event.remove({output: `minecraft:${w}_door`})
        event.remove({output: `minecraft:${w}_trapdoor`})
        event.remove({output: `minecraft:${w}_pressure_plate`})
        event.remove({output: `minecraft:${w}_button`})
    })

    let stones = [
        'stone',
        'smooth_stone',
        'cobblestone',
        'mossy_cobblestone',
        'stone_brick',
        'mossy_stone_brick',
        'granite',
        'polished_granite',
        'diorite',
        'polished_diorite',
        'andesite',
        'polished_andesite',
        'deepslate',
        'polished_deepslate',
        'cobbled_deepslate',
        'cracked_deepslate',
        'chiseled_deepslate',
        'deepslate_bricks',
        'deepslate_tiles',
        'cobbled_tiles',
        'packed_mud',
        'mud_bricks',
        'sandstone',
        'red_sandstone',
        'cut_sandstone',
        'cut_red_sandstone',
        'smooth_sandstone',
        'smooth_red_sandstone',
        'prismarine',
        'dark_prismarine',
        'prismarine_brick',
        'purpur_block',
        'purpur',
        'endstone_brick'
    ]

    stones.forEach((s)=>{
        event.remove({output: `minecraft:${s}`})
        event.remove({output: `minecraft:${s}_stairs`})
        event.remove({output: `minecraft:${s}_slab`})
        event.remove({output: `minecraft:${s}_wall`})
    })


    let colors = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink',
    ]

    event.remove({output: `minecraft:candle`})
    colors.forEach((c) => {
        event.remove({output: `minecraft:${c}_candle`})
        event.remove({output: `minecraft:${c}_shulker_box`})

    })

    event.remove({output: `minecraft:shulker_box`})
    event.remove({output: `minecraft:shulker_shell`})

    event.remove({id: `minecraft:gold_block`})
    event.remove({id: `minecraft:mossy_stone_brick`})
    event.remove({id: `minecraft:crafting_table`})
    event.remove({id: `minecraft:stone_presure_plate`})
    event.remove({id: `minecraft:stone_button`})
    event.remove({id: `minecraft:stone_bricks`})
    event.remove({id: `minecraft:chiseled_stone_bricks`})
    event.remove({id: `minecraft:mossy_stone_bricks_from_moss_block`})
    event.remove({id: `minecraft:mossy_stone_bricks_from_moss_vine`})
    event.remove({id: `minecraft:deepslate_brick_stairs`})
    event.remove({id: `minecraft:deepslate_brick_slab`})
    event.remove({id: `minecraft:deepslate_brick_wall`})
    event.remove({id: `minecraft:cracked_deepslate_tile_stairs`})
    event.remove({id: `minecraft:deepslate_tile_slab`})
    event.remove({id: `minecraft:deepslate_tile_wall`})

    event.remove({id: `minecraft:mud_brick_stairs`})
    event.remove({id: `minecraft:mud_brick_slab`})
    event.remove({id: `minecraft:mud_brick_wall`})

    event.remove({id: `minecraft:chiseled_sandstone`})
    event.remove({id: `minecraft:chiseled_red_sandstone`})

    event.remove({id: `minecraft:sea_lantern`})
    event.remove({id: `minecraft:prismarine_bricks`})
    event.remove({id: `minecraft:purpur_pillar`})

    event.remove({id: `minecraft:iron_bars`})
    event.remove({id: `minecraft:coal_block`})
    event.remove({id: `minecraft:chain`})
    event.remove({id: `minecraft:emerald_block`})
    event.remove({id: `minecraft:lapis_block`})
    event.remove({id: `minecraft:diamond_block`})
    event.remove({id: `minecraft:waxed_copper_block_from_honeycomb`})
    event.remove({id: `minecraft:netherite_ingot_from_netherite_block`})

    event.remove({id: `minecraft:sugar_from_honey_bottle`})
    event.remove({id: `minecraft:paper`})

    event.remove({mod:'minecraft', output: `minecraft:gold_ingot`})

    event.remove({id: `minecraft:raw_iron_block`})
    event.remove({id: `minecraft:raw_copper_block`})
    event.remove({id: `minecraft:raw_gold_block`})

    event.remove({id: `minecraft:honey_block`})


})