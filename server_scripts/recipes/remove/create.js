
ServerEvents.recipes(event  => {
    
    event.remove({ id: 'create:milling/wheat' })
    event.remove({ output: 'create:dough' })
    event.remove({ id: 'create:milling/wheat' })
    event.remove({ output: 'create:dough' })
    event.remove({ output: 'create:cake_base' })
    event.remove({ id: 'create:crafting/curiosities/cake' })
    event.remove({ output: 'create:sturdy_sheet' })
    event.remove({ id: 'create:crafting/kinetics/crafter_slot_cover' })
    event.remove({ output: 'create:bar_of_chocolate' })
    event.remove({ input: 'create:bar_of_chocolate' })
    event.remove({ output: 'create:sweet_roll' })
    event.remove({ output: 'create:chocolate_glazed_berries' })
    event.remove({ output: 'create:honeyed_apple' })
    event.remove({ output: 'create:raw_zinc' })
    event.remove({ input: 'create:raw_zinc' })
    event.remove({ output: 'create:zinc_ingot' })
    event.remove({ output: 'create:brass_ingot' })
    event.remove({ output: 'create:brass_nugget' })
    event.remove({ output: 'create:zinc_nugget' })
    event.remove({ output: 'create:copper_nugget' })
    event.remove({ output: 'create:experience_nugget' })
    event.remove({ output: 'create:experience_block' })
    event.remove({ output: 'create:copper_sheet' })
    event.remove({ output: 'create:iron_sheet' })
    event.remove({ output: 'create:brass_sheet' })
    event.remove({ output: 'create:gold_sheet' })
    event.remove({ input: 'create:crushed_raw_iron' })
    event.remove({ input: 'create:crushed_raw_gold' })
    event.remove({ output: 'create:tree_fertilizer' })
    event.remove({ output: 'create:zinc_block' })
    event.remove({ output: 'create:brass_block' })

    let stones = [
        'granite', 
        'diorite', 
        'andesite', 
        'calcite', 
        'dripstone', 
        'deepslate', 
        'tuff',
        'asurine',
        'crimsite',
        'limestone',
        'ochrum',
        'scoria',
        'scorchia',
        'veridium' 
      ]
    
      stones.forEach((stone) => {
        event.remove({ output: `create:${stone}` })
        event.remove({ input: `create:${stone}` })
        event.remove({ output: `create:cut_${stone}` })
        event.remove({ input: `create:cut_${stone}` })
        event.remove({ output: `create:cut_${stone}_stairs` })
        event.remove({ input: `create:cut_${stone}_stairs` })
        event.remove({ output: `create:cut_${stone}_slab` })
        event.remove({ input: `create:cut_${stone}_slab` })
        event.remove({ output: `create:cut_${stone}_wall` })
        event.remove({ input: `create:cut_${stone}_wall` })
        event.remove({ output: `create:polished_cut_${stone}` })
        event.remove({ input: `create:polished_cut_${stone}` })
        event.remove({ output: `create:polished_cut_${stone}_stairs` })
        event.remove({ input: `create:polished_cut_${stone}_stairs` })
        event.remove({ output: `create:polished_cut_${stone}_slab` })
        event.remove({ input: `create:polished_cut_${stone}_slab` })
        event.remove({ output: `create:polished_cut_${stone}_wall` })
        event.remove({ input: `create:polished_cut_${stone}_wall` })
        event.remove({ output: `create:cut_${stone}_bricks` })
        event.remove({ input: `create:cut_${stone}_bricks` })
        event.remove({ output: `create:cut_${stone}_brick_stairs` })
        event.remove({ input: `create:cut_${stone}_brick_stairs` })
        event.remove({ output: `create:cut_${stone}_brick_slab` })
        event.remove({ input: `create:cut_${stone}_brick_slab` })
        event.remove({ output: `create:cut_${stone}_brick_wall` })
        event.remove({ input: `create:cut_${stone}_brick_wall` })
        event.remove({ output: `create:small_${stone}_bricks` })
        event.remove({ input: `create:small_${stone}_bricks` })
        event.remove({ output: `create:small_${stone}_brick_stairs` })
        event.remove({ input: `create:small_${stone}_brick_stairs` })
        event.remove({ output: `create:small_${stone}_brick_slab` })
        event.remove({ input: `create:small_${stone}_brick_slab` })
        event.remove({ output: `create:small_${stone}_brick_wall` })
        event.remove({ input: `create:small_${stone}_brick_wall` })
        event.remove({ output: `create:layered_${stone}` })
        event.remove({ input: `create:layered_${stone}` })
        event.remove({ output: `create:${stone}_pillar` })
        event.remove({ input: `create:${stone}_pillar` })
      })

    let window_mat = [
        'oak',
        'birch',
        'spruce',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'crimson',
        'warped',
        'ornate_iron'
    ]

    window_mat.forEach((mat) => {
        event.remove({ output: `create:${mat}_window` })
        event.remove({ input: `create:${mat}_window` })
        event.remove({ output: `create:${mat}_window_pane` })
        event.remove({ input: `create:${mat}_window_pane` }) 
    })

    event.remove({ output: 'create:tiled_glass' })
    event.remove({ output: 'create:framed_glass' })
    event.remove({ output: 'create:horizontal_framed_glass' })
    event.remove({ output: 'create:vertical_framed_glass' })
    event.remove({ output: 'create:tiled_glass_pane' })
    event.remove({ output: 'create:framed_glass_pane' })
    event.remove({ output: 'create:horizontal_framed_glass_pane' })
    event.remove({ output: 'create:vertical_framed_glass_pane' })
    event.remove({ output: 'create:framed_glass_door' })
    event.remove({ output: 'create:framed_glass_trapdoor' })

    let shapes = [
        'shingles',
        'shingle_slab',
        'shingle_stairs',
        'tiles',
        'tile_slab',
        'tile_stairs'
    ]

    let expositions = [
        'exposed_',
        'weathered_',
        'oxidized_',
        ''
    ]

    shapes.forEach((shape) => {
        expositions.forEach((exp) => {
            event.remove({ output: `create:${exp}copper_${shape}` })
            event.remove({ output: `create:waxed_${exp}copper_${shape}` })
            event.remove({ input: `create:${exp}copper_${shape}` })
            event.remove({ input: `create:waxed_${exp}copper_${shape}` })
            
        })
    })

    event.remove({ id: 'create:crafting/materials/andesite_alloy_from_block' })
    event.remove({ id: 'create:crafting/materials/andesite_alloy_block' })
    event.remove({ id: 'create:crafting/schematics/empty_schematics' })
    event.remove({ id: `create:crafting/materials/andesite_alloy` })
    event.remove({ id: `create:crafting/materials/andesite_alloy_from_zinc` })
    event.remove({ id: `create:mixing/andesite_alloy_from_zinc` })
    event.remove({ id: `create:mixing/andesite_alloy` })
    event.remove({ id: `create:crafting/materials/electron_tube` })
    // event.remove({ id: `create:crafting/kinetics/deployer` })
    event.remove({ id: `create:mechanical_crafting/potato_cannon` })
    event.remove({ id: `create:mechanical_crafting/extendo_grip` })
    event.remove({ id: `create:mechanical_crafting/wand_of_symmetry` })
    event.remove({ id: 'create:crafting/appliances/linked_controller' })
    event.remove({ id: 'create:crafting/schematics/schematicannon' })
    event.remove({ id: 'create:crafting/kinetics/steam_engine' })
    event.remove({ id: 'create:crafting/kinetics/belt_connector' })
    event.remove({ id: 'create:crafting/kinetics/water_wheel' })
    event.remove({ id: 'create:crafting/kinetics/large_water_wheel' })
    event.remove({ id: 'create:crafting/kinetics/copper_valve_handle' })
    event.remove({ id: 'create:crafting/kinetics/fluid_valve' })
    event.remove({ id: 'create:crafting/kinetics/fluid_tank' })
    event.remove({ id: 'create:crafting/kinetics/hose_pulley' })
    event.remove({ id: 'create:crafting/kinetics/item_drain' })
    event.remove({ id: 'create:crafting/kinetics/spout' })
    event.remove({ id: 'create:crafting/logistics/redstone_contact' })
    event.remove({ id: 'create:crafting/kinetics/elevator_pulley' })
    event.remove({ id: 'create:crafting/kinetics/item_vault' })

    event.remove({ id: 'create:filling/grass_block' })
    event.remove({ id: 'create:pressing/path' })
    event.remove({ id: 'create:mixing/mud' })
    event.remove({ id: 'create:milling/cobblestone' })
    event.remove({ id: 'create:milling/sandstone' })
    event.remove({ id: 'create:milling/granite' })
    event.remove({ id: 'create:milling/terracotta' })
    event.remove({ id: 'create:crushing/gravel' })
    event.remove({ id: 'create:splashing/red_sand' })

    event.remove({ id: 'create:crushing/golden_horse_armor' })
    event.remove({ id: 'create:crushing/iron_horse_armor' })
    event.remove({ id: 'create:crushing/diamond_horse_armor' })
    event.remove({ id: 'create:crushing/diorite' })
    event.remove({ id: 'create:crushing/prismarine_crystals' })
    event.remove({ id: 'create:milling/sugar_cane' })

    event.remove({ id: 'create:compacting/honey' })
    event.remove({ id: 'create:mixing/honey' })
    event.remove({ id: 'create:mixing/chocolate' })

    event.remove({ output: 'create:sail_frame' })
    event.remove({ output: 'create:white_sail' })
})