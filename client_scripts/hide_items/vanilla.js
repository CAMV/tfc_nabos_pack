JEIEvents.hideItems( event => {
    event.hide('minecraft:wooden_sword')
    event.hide('minecraft:wooden_shovel')
    event.hide('minecraft:wooden_axe')
    event.hide('minecraft:wooden_hoe')
    event.hide('minecraft:copper_ingot')
    event.hide('minecraft:copper_block')
    event.hide('minecraft:iron_block')
    event.hide('minecraft:iron_ingot')


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

    event.hide(`minecraft:copper_block`)

    states.forEach(state => {
        copper_pieces.forEach(piece =>
        {
            event.hide(`minecraft:${state}copper${piece}`)
            event.hide(`minecraft:waxed_${state}copper${piece}`)
            event.hide(`minecraft:${state}cut_copper${piece}`)
            event.hide(`minecraft:waxed_${state}cut_copper${piece}`)
        })
    });

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
        event.hide(`minecraft:${w}_log`)
        event.hide(`minecraft:${w}_wood`)
        event.hide(`minecraft:stripped_${w}_log`)
        event.hide(`minecraft:stripped_${w}_wood`)
        event.hide(`minecraft:${w}_planks`)
        event.hide(`minecraft:${w}_stairs`)
        event.hide(`minecraft:${w}_slab`)
        event.hide(`minecraft:${w}_fence`)
        event.hide(`minecraft:${w}_fence_gate`)
        event.hide(`minecraft:${w}_door`)
        event.hide(`minecraft:${w}_trapdoor`)
        event.hide(`minecraft:${w}_pressure_plate`)
        event.hide(`minecraft:${w}_button`)
    })

    event.hide(`minecraft:crimson_stem`)
    event.hide(`minecraft:crimson_hyphae`)
    event.hide(`minecraft:stripped_crimson_stem`)
    event.hide(`minecraft:stripped_crimson_hyphae`)

    event.hide(`minecraft:warped_stem`)
    event.hide(`minecraft:warped_hyphae`)
    event.hide(`minecraft:stripped_warped_stem`)
    event.hide(`minecraft:stripped_warped_hyphae`)

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
        event.hide(`minecraft:${s}`)
        event.hide(`minecraft:${s}_stairs`)
        event.hide(`minecraft:${s}_slab`)
        event.hide(`minecraft:${s}_wall`)
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

    event.hide(`minecraft:candle`)
    colors.forEach((c) => {
        event.hide(`minecraft:${c}_candle`)
        event.hide(`minecraft:${c}_shulker_box`)

    })

    event.hide(`minecraft:shulker_box`)
    event.hide(`minecraft:shulker_shell`)
    event.hide(`minecraft:stone_pressure_plate`)
    event.hide(`minecraft:stone_button`)
    event.hide(`minecraft:stone_bricks`)
    event.hide(`minecraft:chiseled_stone_bricks`)
    event.hide(`minecraft:cracked_stone_bricks`)
    event.hide(`minecraft:mossy_stone_bricks`)
    event.hide(`minecraft:cracked_deepslate_brick`)
    event.hide(`minecraft:cracked_deepslate_tiles`)
    event.hide(`minecraft:deepslate_brick_stairs`)
    event.hide(`minecraft:deepslate_brick_slab`)
    event.hide(`minecraft:deepslate_brick_wall`)
    event.hide(`minecraft:cracked_deepslate_tile_stairs`)
    event.hide(`minecraft:deepslate_tile_slab`)
    event.hide(`minecraft:deepslate_tile_wall`)
    event.hide(`minecraft:reinforced_deepslate`)

    event.hide(`minecraft:mud_brick_stairs`)
    event.hide(`minecraft:mud_brick_slab`)
    event.hide(`minecraft:mud_brick_wall`)

    event.hide(`minecraft:chiseled_sandstone`)
    event.hide(`minecraft:chiseled_red_sandstone`)
    event.hide(`minecraft:sea_lantern`)
    event.hide(`minecraft:prismarine_bricks`)
    event.hide(`minecraft:purpur_pillar`)

    event.hide(`minecraft:iron_bars`)
    event.hide(`minecraft:coal_block`)
    event.hide(`minecraft:chain`)
    event.hide(`minecraft:gold_block`)
    event.hide(`minecraft:emerald_block`)
    event.hide(`minecraft:lapis_block`)
    event.hide(`minecraft:diamond_block`)
    event.hide(`minecraft:waxed_copper_block`)
    event.hide(`minecraft:netherite_block`)

    event.hide(`minecraft:grass_block`)
    event.hide(`minecraft:podzol`)
    event.hide(`minecraft:mycelium`)
    event.hide(`minecraft:dirt_path`)
    event.hide(`minecraft:dirt`)
    event.hide(`minecraft:coarse_dirt`)
    event.hide(`minecraft:rooted_dirt`)
    event.hide(`minecraft:farmland_dirt`)
    event.hide(`minecraft:mud`)
    event.hide(`minecraft:gravel`)
    event.hide(`minecraft:sand`)
    event.hide(`minecraft:red_sand`)
    event.hide(`minecraft:tuff`)
    event.hide(`minecraft:calcite`)

    let ores = [
        "iron",
        "copper",
        "gold",
        "diamond",
        "redstone",
        "coal",
        "lapis",
        "emerald"
    ]

    ores.forEach((o) => {
        event.hide(`minecraft:${o}_ore`)
        event.hide(`minecraft:deepslate_${o}_ore`)
    })

    event.hide(`minecraft:raw_iron_block`)
    event.hide(`minecraft:raw_copper_block`)
    event.hide(`minecraft:raw_gold_block`)

    event.hide(`minecraft:composter`)
    event.hide(`minecraft:chest`)
    event.hide(`minecraft:barrel`)
    event.hide(`minecraft:honey_block`)
    event.hide(`minecraft:iron_block`)
    event.hide(`minecraft:sugar_cane`)
    event.hide(`minecraft:sugar`)


})