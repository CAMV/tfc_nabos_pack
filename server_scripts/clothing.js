ServerEvents.recipes(event  => {

  // ServerEvents.recipes(event => {
  //   event.recipes.tfc.sewing('6x minecraft:dirt', [
  //       0, 0, 0, 0, 0, 0, 0, 0, 0, 
  //       0, 0, 0, 0, 0, 0, 0, 0, 0,
  //       0, 0, 0, 0, 0, 0, 0, 0, 0,
  //       0, 0, 0, 0, 0, 0, 0, 0, 0,
  //       0, 0, 0, 0, 0, 0, 0, 0, 0
  //   ], [
  //       -1, -1, -1, -1, -1, -1, -1, -1,
  //       -1, -1, -1, -1, -1, -1, -1, -1,
  //       -1, -1, -1, -1, -1, -1, -1, -1,
  //       -1, -1, -1, -1, -1, -1, -1, -1
  //   ])
  // })

  event.remove({ output: 'tfcambiental:wool_hat' })
    event.recipes.tfc.sewing('tfcambiental:wool_hat', [
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ], [
        -1, -1, 1, 1, 1, 1, -1, -1,
        -1, -1, 1, -1, -1, 1, -1, -1,
        -1, -1, 1, -1, -1, 1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1
    ])

    event.remove({ output: 'tfcambiental:burlap_cowl' })
    event.recipes.tfc.sewing('tfcambiental:burlap_cowl', [
        0, 0, 1, 1, 1, 1, 1, 0, 0, 
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ], [
        -1, -1, 0, 0, 0, 0, -1, -1,
        -1, -1, 0, -1, -1, 0, -1, -1,
        -1, -1, 0, -1, -1, 0, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1
    ])

    event.remove({ output: 'tfcambiental:wool_sweater' })
    event.recipes.tfc.sewing('tfcambiental:wool_sweater', [
        0, 1, 1, 0, 0, 0, 1, 1, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0
    ], [
        -1, 1, 1, 1, 1, 1, 1, -1,
        -1, 1, 1, 1, 1, 1, 1, -1,
        -1, -1, 1, 1, 1, 1, -1, -1,
        -1, -1, 1, 1, 1, 1, -1, -1
    ])

    event.remove({ output: 'tfcambiental:burlap_shirt' })
    event.recipes.tfc.sewing('tfcambiental:burlap_shirt', [
        0, 1, 1, 0, 0, 0, 1, 1, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 0, 0, 0, 1, 1, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0,
        0, 0, 1, 0, 0, 0, 1, 0, 0
    ], [
        -1, 0, 0, 0, 0, 0, 0, -1,
        -1, 0, 0, 0, 0, 0, 0, -1,
        -1, -1, 0, 0, 0, 0, -1, -1,
        -1, -1, 0, 0, 0, 0, -1, -1
    ])

    event.remove({ output: 'tfcambiental:wool_pants' })
    event.recipes.tfc.sewing('tfcambiental:wool_pants', [
        0, 1, 0, 0, 0, 0, 0, 1, 0, 
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 1, 0
    ], [
        -1, 1, 1, 1, 1, 1, 1, -1,
        -1, 1, 1, 1, 1, 1, 1, -1,
        -1, 1, 1, -1, -1, 1, 1, -1,
        -1, 1, 1, -1, -1, 1, 1, -1
    ])

    event.remove({ output: 'tfcambiental:burlap_pants' })
    event.recipes.tfc.sewing('tfcambiental:burlap_pants', [
        0, 1, 0, 0, 0, 0, 0, 1, 0, 
        0, 1, 0, 0, 0, 0, 0, 1, 0,
        0, 1, 0, 1, 1, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 1, 0
    ], [
        -1, 0, 0, 0, 0, 0, 0, -1,
        -1, 0, 0, 0, 0, 0, 0, -1,
        -1, 0, 0, -1, -1, 0, 0, -1,
        -1, 0, 0, -1, -1, 0, 0, -1
    ])

    event.remove({ output: 'tfcambiental:wool_boots' })
    event.recipes.tfc.sewing('tfcambiental:wool_boots', [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 0
    ], [
        -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 1, -1, -1, 1, -1, -1,
        -1, -1, 1, -1, -1, 1, -1, -1,
        -1, 1, 1, -1, -1, 1, 1, -1
    ])

    event.remove({ output: 'tfcambiental:burlap_shoes' })
    event.recipes.tfc.sewing('tfcambiental:burlap_shoes', [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 0, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 0
    ], [
        -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, 0, -1, -1, 0, -1, -1,
        -1, -1, 0, -1, -1, 0, -1, -1,
        -1, 0, 0, -1, -1, 0, 0, -1
    ])

    event.remove({ output: 'tfcambiental:insulated_leather_hat' })
    event.shaped('tfcambiental:insulated_leather_hat', [
      ' B ', 
      'BAB', 
      '   '  
    ], {
      A: 'minecraft:leather_helmet', 
      B: '#tfc:high_quality_cloth',
    })

    event.remove({ output: 'tfcambiental:insulated_leather_tunic' })
    event.shaped('tfcambiental:insulated_leather_tunic', [
      ' B ', 
      'BAB', 
      ' B '  
    ], {
      A: 'minecraft:leather_chestplate', 
      B: '#tfc:high_quality_cloth',
    })
    
    event.remove({ output: 'tfcambiental:insulated_leather_pants' })
    event.shaped('tfcambiental:insulated_leather_pants', [
      ' B ', 
      'BAB', 
      ' B '  
    ], {
      A: 'minecraft:leather_leggings', 
      B: '#tfc:high_quality_cloth',
    })
    
    event.remove({ output: 'tfcambiental:insulated_leather_boots' })
    event.shaped('tfcambiental:insulated_leather_boots', [
      '   ', 
      'BAB', 
      '   '  
    ], {
      A: 'minecraft:leather_boots', 
      B: '#tfc:high_quality_cloth',
    })

})