ServerEvents.recipes(event  => {

  event.remove({ output: 'createdieselgenerators:engine_piston' })



  let inter = "kubejs:incomplete_ungalvanized_engine_piston"
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:ungalvanized_engine_piston'),
	], 'tfc:metal/ingot/steel', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/rod/steel']),
		event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'create:andesite_alloy']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(1) 

  event.custom({
      type:"createaddition:charging",
      input: {
        item: "kubejs:ungalvanized_engine_piston",
        count: 1
      },
      result: {
        item: "createdieselgenerators:engine_piston",
        count: 1
      },
      energy: 4000,
      maxChargeRate: 100
  })

  event.remove({ output: 'createdieselgenerators:engine_silencer' })

  inter = "kubejs:incomplete_ungalvanized_engine_silencer"
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:ungalvanized_engine_silencer'),
	], 'create:fluid_pipe', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/sheet/steel']),
		event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'create:andesite_alloy']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(2) 

  event.custom({
      type:"createaddition:charging",
      input: {
        item: "kubejs:ungalvanized_engine_silencer",
        count: 1
      },
      result: {
        item: "createdieselgenerators:engine_silencer",
        count: 1
      },
      energy: 4000,
      maxChargeRate: 100
  })

  event.remove({ output: 'createdieselgenerators:engine_turbocharger' })

  inter = "kubejs:incomplete_ungalvanized_engine_turbocharger"
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:ungalvanized_engine_turbocharger'),
	], 'create:propeller', [ 
		event.recipes.createDeploying(inter, [inter, 'tfc:metal/sheet/steel']),
		event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'create:andesite_alloy']),
		event.recipes.createPressing(inter, inter),
    event.recipes.createDeploying(inter, [inter, 'create:fluid_pipe']),
	]).transitionalItem(inter).loops(4) 

  event.custom({
      type:"createaddition:charging",
      input: {
        item: "kubejs:ungalvanized_engine_turbocharger",
        count: 1
      },
      result: {
        item: "createdieselgenerators:engine_turbocharger",
        count: 1
      },
      energy: 4000,
      maxChargeRate: 100
  })


  event.remove({ output: 'createdieselgenerators:diesel_engine' })
  event.recipes.create.mechanical_crafting('createdieselgenerators:diesel_engine', [
    'BAAAAB',
    'BCDDDB',
    'FFFFEF',
  ], {
      A: 'createdieselgenerators:engine_piston', 
      B: 'tfc:metal/sheet/brass', 
      C: 'minecraft:flint_and_steel',
      D: 'create:fluid_tank',
      E: 'create:fluid_pipe', 
      F: 'tfc:metal/ingot/black_steel', 
  })

  event.remove({ output: 'createdieselgenerators:large_diesel_engine' })
  event.recipes.create.mechanical_crafting('createdieselgenerators:large_diesel_engine', [
    'BBB',
    'DCD',
    'FFF',
  ], {
      B: 'tfc:metal/sheet/brass', 
      C: 'createdieselgenerators:diesel_engine',
      D: 'create:andesite_alloy', 
      F: 'tfc:metal/ingot/black_steel', 
  })

  event.remove({ output: 'createdieselgenerators:huge_diesel_engine' })
  event.recipes.create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', [
    'BAB',
    'BAB',
    'BDB',
    'FCF',
  ], {
      A: 'create:andesite_alloy', 
      B: 'tfc:metal/sheet/brass', 
      D: 'create:steam_engine', 
      C: 'createdieselgenerators:large_diesel_engine',
      F: 'tfc:metal/ingot/black_steel', 
  })

  event.remove({ output: 'createdieselgenerators:pumpjack_hole' })
  event.shaped('createdieselgenerators:pumpjack_hole', [
      ' B ', 
      'ACA', 
      ' B '  
    ], {
      A: 'tfc:metal/chain/steel', 
      B: 'create:fluid_pipe', 
      C: 'create:copper_casing', 
    }
  )

  event.remove({ output: 'createdieselgenerators:pumpjack_head' })
  event.shaped('createdieselgenerators:pumpjack_head', [
      'A A', 
      'BCB', 
      'A A'  
    ], {
      A: 'create:andesite_alloy', 
      B: 'tfc:metal/ingot/steel', 
      C: 'afc:rubber_bar', 
    }
  )

  event.remove({ output: 'createdieselgenerators:canister' })
  event.shaped('createdieselgenerators:canister', [
      'A A', 
      'BCB', 
      ' B '  
    ], {
      A: 'create:andesite_alloy', 
      B: 'tfc:metal/sheet/steel', 
      C: '#tfc:barrels', 
    }
  )

  event.remove({ output: 'createdieselgenerators:oil_barrel' })
  event.shaped('createdieselgenerators:oil_barrel', [
      ' B', 
      'BAB', 
      ' B '  
    ], {
      A: '#tfc:barrels', 
      B: 'tfc:metal/sheet/steel', 
    }
  )

  event.remove({ output: 'createdieselgenerators:kelp_handle' })
  event.shaped('createdieselgenerators:kelp_handle', [
      '  ', 
      'BBB', 
      '  A'  
    ], {
      A: 'create:andesite_alloy', 
      B: 'afc:rubber_bar', 
    }
  )

  event.remove({ output: 'createdieselgenerators:lighter' })
  event.shaped('createdieselgenerators:lighter', [
      ' BA', 
      'BCB', 
      'BDB'  
    ], {
      A: 'minecraft:flint_and_steel', 
      B: 'tfc:metal/sheet/brass', 
      C: '#forge:string', 
      D: 'create:andesite_alloy', 
    }
  )

  event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
  event.remove({ id: 'createaddition:compacting/seed_oil' })
  event.remove({ id: 'createdieselgenerators:mixing/biodiesel' })
  event.remove({ type: "createdieselgenerators:basin_fermenting" })

  event.remove({ output: Fluid.of('createdieselgenerators:compacting/plant_oil') })
  event.remove({ input: Fluid.of('createdieselgenerators:compacting/plant_oil') })

  event.remove({ output: 'createaddition:biomass' })

  let alcohols = [
    'tfc:beer',
    'tfc:cider',
    'tfc:rum',
    'tfc:sake',
    'tfc:vodka',
    'tfc:whiskey',
    'tfc:corn_whiskey',
    'tfc:rye_whiskey',
    'firmalife:pina_colada',
    'firmalife:mead',
    'firmalife:red_wine',
    'firmalife:white_wine',
    'firmalife:rose_wine',
    'firmalife:sparkling_wine',
    'firmalife:dessert_wine',
  ]

  let sugars =
  [
    "artisanal:non_perishable_sugar",
    "artisanal:perishable_sugar",
    "afc:birch_sugar",
    "afc:maple_sugar",
  ]

  alcohols.forEach((alcohol) => {
    sugars.forEach((sugar) => {
      event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
              fluidTag: alcohol,
              amount: 200
            },
            {
              item: sugar,
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            },
            {
              item: "tfc:compost",
            }
        ],
        results: [
            {
                item: 'createaddition:biomass',
            }
        ],
      })
    })
  })

  event.custom({
    type: "createdieselgenerators:basin_fermenting",
    heatRequirement: "heated",
    ingredients: [
      {
        item: "createaddition:biomass"
      }
    ],
    processingTime: 1000,
    results: [
      {
        fluid: "createdieselgenerators:biodiesel",
        amount: 1000
      },
    ]
  })

  event.remove({ id: 'createdieselgenerators:crafting/chip_wood_block' })
  event.recipes.create.compacting('4x createdieselgenerators:chip_wood_block', 'createdieselgenerators:wood_chip')

  event.remove({ input: 'createdieselgenerators:plant_oil_bucket' })
  event.remove({ output: 'createdieselgenerators:plant_oil_bucket' })
  
  event.remove({ input: 'createdieselgenerators:ethanol_bucket' })
  event.remove({ output: 'createdieselgenerators:ethanol_bucket' })
    


})