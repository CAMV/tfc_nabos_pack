ServerEvents.recipes(event  => {



    event.shaped('create:schematicannon', [// arg 1: output
        ' A ', 
        'BBB', // arg 2: the shape (array of strings)
        'CDC'  
      ], {
        A: 'firmaciv:cannon', 
        B: '#minecraft:logs',  //arg 3: the mapping object
        C: '#tfc:rock/smooth',
        D: 'create:cogwheel'   
      }
    )

    event.remove({ id: 'create:crafting/schematics/schematic_table' })
    event.remove({ id: 'create:crafting/kinetics/shaft' })
    event.remove({ id: 'create:cutting/andesite_alloy' })

    event.remove({ id: 'create:crafting/kinetics/cogwheel' })
    event.shapeless('create:cogwheel', ['#minecraft:planks', 'tfc:brass_mechanisms', 'create:shaft']).id('kubejs:cogwheel_manual_only')
   
    event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
    event.remove({ id: 'create:crafting/kinetics/large_cogwheel_from_little' })
    event.shapeless('create:large_cogwheel', ['#minecraft:planks', 'create:cogwheel', '#minecraft:planks']).id('kubejs:large_cogwheel_manual_only')

    event.remove({ output: 'create:encased_chain_drive' })

    event.shaped('create:encased_chain_drive', [
        ' B ', 
        'BAB', 
        'CCC'  
      ], {
        A: 'create:andesite_casing', 
        B: 'tfc:metal/ingot/wrought_iron',  
        C: 'tfc:metal/chain/steel',
      }
    )

    event.remove({ id: 'create:crafting/kinetics/adjustable_chain_gearshift' })

    event.remove({ id: 'create:crafting/kinetics/encased_fan' })

    event.remove({ output: 'create:hand_crank' })
    event.shaped('create:hand_crank', [
        'A  ', 
        'BBB', 
        '  C'  
      ], {
        A: 'create:andesite_alloy', 
        B: '#minecraft:planks', 
        C: 'create:cogwheel', 
      }
    )

    event.remove({ output: 'create:millstone' })
    event.shaped('create:millstone', [
        ' A ', 
        ' B ', 
        ' C '  
      ], {
        A: 'create:cogwheel', 
        B: 'tfc:quern', 
        C: 'create:andesite_casing', 
      }
    )

    event.remove({ id: 'create:mechanical_crafting/crushing_wheel' })

    event.remove({ id: 'create:crafting/kinetics/crushing_wheel' })

    event.remove({ output: 'create:mechanical_press' })
    event.shaped('create:mechanical_press', [
        ' A ', 
        ' B ', 
        ' C '  
      ], {
        A: 'create:shaft', 
        B: 'create:andesite_casing', 
        C: 'tfc:metal/double_ingot/steel', 
      }
    )

    event.remove({ id: 'create:crafting/kinetics/basin' })

    event.remove({ output: 'create:empty_blaze_burner' })
    event.shaped('create:empty_blaze_burner', [
        ' B ', 
        'BAB', 
        ' B '  
      ], {
        A: 'tfc:metal/double_ingot/blue_steel', 
        B: 'tfc:metal/sheet/steel', 
      }
    )

    event.remove({ output: 'create:depot' })
    event.shaped('create:depot', [
        '   ', 
        ' A ', 
        ' B '  
      ], {
        A: 'tfc:metal/sheet/steel', 
        B: 'create:andesite_casing', 
      }
    )

    event.remove({ output: 'create:chute' })
    event.shaped('4x create:chute', [
        'ABA', 
        'A A', 
        'A A'  
      ], {
        A: 'tfc:metal/sheet/wrought_iron', 
        B: 'minecraft:hopper', 
      }
    )
    event.shaped('8x create:chute', [
        'ABA', 
        'A A', 
        'A A'  
      ], {
        A: 'tfc:metal/sheet/steel', 
        B: 'minecraft:hopper', 
      }
    )

    event.remove({ id: 'create:crafting/kinetics/metal_bracket' })

    event.remove({ output: 'create:fluid_pipe' })
    event.shaped('2x create:fluid_pipe', [
        '   ', 
        'ABA', 
        '   '  
      ], {
        A: 'firmalife:copper_pipe', 
        B: 'create:andesite_alloy', 
      }
    )
    event.shaped('2x create:fluid_pipe', [
        '   ', 
        'ABA', 
        '   '  
      ], {
        A: 'firmalife:oxidized_copper_pipe', 
        B: 'create:andesite_alloy', 
      }
    )
    event.shaped('4x create:fluid_pipe', [
        '   ', 
        'ABA', 
        '   '  
      ], {
        A: 'tfc:steel_pipe', 
        B: 'create:andesite_alloy', 
      }
    )

    event.remove({ output: 'create:mechanical_pump' })
    event.shaped('create:mechanical_pump', [
        ' A ', 
        ' B ', 
        ' C '  
      ], {
        A: 'create:cogwheel', 
        B: 'tfc:steel_pump', 
        C: 'create:fluid_pipe', 
      }
    )

    event.remove({ id: 'create:crafting/kinetics/steam_whistle' })


    event.remove({ id: 'tfc:crafting/unsticky_piston' })

    event.remove({ output: 'create:mechanical_piston' })
    event.shaped('create:mechanical_piston', [
        'AAA', 
        'BCB', 
        'BDB'  
      ], {
        A: '#minecraft:wooden_slabs', 
        B: 'create:andesite_casing', 
        C: 'tfc:brass_mechanisms', 
        D: 'create:piston_extension_pole', 
      }
    )

    event.remove({ output: 'create:windmill_bearing' })

    event.remove({ output: 'create:rope_pulley' })
    event.shaped('create:rope_pulley', [
        ' A ', 
        ' B ', 
        ' C '  
      ], {
        A: 'create:andesite_casing', 
        B: 'firmaciv:rope_coil', 
        C: 'tfc:metal/sheet/steel', 
      }
    )

    event.remove({ id: 'create:crafting/kinetics/sticker' })

    event.remove({ output: 'create:mechanical_drill' })
    event.recipes.create.mechanical_crafting('create:mechanical_drill', [
        ' A ',
        'ABA',
        'ABA',
        'CCC'
    ], {
        A: 'create:andesite_alloy', 
        B: 'tfc:metal/double_ingot/steel', 
        C: 'create:andesite_casing',
    })





  event.remove({ output: 'create:track' })
  let inter = 'create:incomplete_track'
  event.recipes.create.sequenced_assembly([
  Item.of('32x create:track'),
	], '#forge:smooth_stone_slab', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/rod/wrought_iron']),
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/rod/wrought_iron']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(3) 

  event.recipes.create.sequenced_assembly([
		Item.of('64x create:track'),
	], '#forge:smooth_stone_slab', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/rod/steel']),
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/rod/steel']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(3) 

    event.remove({ id: 'create:item_application/railway_casing_using_deployer' })
    event.remove({ id: 'create:item_application/railway_casing' })

    event.remove({ id: 'create:crafting/kinetics/schedule' })
    event.shapeless('4x create:schedule', ['tfc:metal/sheet/steel', 'minecraft:paper']).id('kubejs:schedule_manual_only')

    event.remove({ output: 'create:track_station' })
    event.shapeless('2x create:track_station', ['create:railway_casing', 'minecraft:compass']).id('kubejs:track_station_manual_only')

    event.remove({ output: 'create:track_observer' })
    event.shapeless('2x create:track_observer', ['create:railway_casing', '#minecraft:wooden_pressure_plates']).id('kubejs:track_observer_manual_only')

    event.remove({ id: 'create:crafting/logistics/andesite_funnel' })

    event.remove({ id: 'create:crafting/logistics/brass_funnel' })

    event.remove({ id: 'create:crafting/logistics/andesite_tunnel' })
    
    event.remove({ id: 'create:crafting/logistics/brass_tunnel' })

    event.remove({ id: 'minecraft:observer' })

    event.remove({ output: 'create:display_board' })
    event.shaped('create:display_board', [
        'ABA', 
        'CCC', 
        'DDD'  
      ], {
        A: 'create:brass_casing', 
        B: 'minecraft:redstone_torch', 
        C: 'tfc:metal/sheet/copper', 
        D: 'firmalife:reinforced_glass', 
      }
    )

    event.remove({ output: 'create:rose_quartz_lamp' })

    event.remove({ output: 'create:placard' })
    event.shapeless('create:placard', ['minecraft:item_frame', 'tfc:metal/sheet/brass']).id('kubejs:placard_manual_only')

    event.remove({ output: 'create:analog_lever' })
    event.shaped('create:analog_lever', [
      ' A ', 
      ' B ', 
      '   '  
    ], {
      A: 'minecraft:lever', 
      B: 'create:andesite_casing', 
    })

  event.remove({ output: 'create:peculiar_bell' })
  event.shaped('create:peculiar_bell', [
    ' A ', 
    'ABA', 
    ' A '  
  ], {
    A: 'tfc:metal/sheet/brass', 
    B: 'tfc:brass_bell', 
  })

  event.remove({ output: 'create:railway_casing' })
  event.recipes.create.deploying('2x create:railway_casing', ['create:brass_casing', 'tfc:metal/sheet/steel'])

  event.remove({ id: 'create:crafting/kinetics/attribute_filter' })
  event.remove({ id: 'create:crafting/kinetics/filter' })


})