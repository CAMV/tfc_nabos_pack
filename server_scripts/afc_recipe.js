
ServerEvents.recipes(event  => {

    event.custom({
        type: "create:mixing",
        heatRequirement: "heated",
        ingredients: [
            {
              fluidTag: "afc:latex",
              amount: 1000
            },
            {
              item: "tfc:powder/sulfur",
            },
        ],
        results: [
            {
                item: 'afc:rubber_bar',
            }
        ],
      })

      event.remove({ output: `afc:maple_sugar` })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_syrup",
            amount: 200
          },
        ],
        processingTime: 2000,
        results: [
          {
            item: "afc:maple_sugar",
          },
        ]
      })

      event.custom({
        type: "artisanal:scalable_pot",
        ingredients: [],
        fluid_ingredient: {
          ingredient: "afc:maple_syrup",
          amount: 200
        },
        duration: 2000,
        temperature: 107,
        item_output: [
          {
            item: "afc:maple_sugar"
          }
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_sap",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:maple_sap_concentrate",
            amount: 100
          },
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:maple_sap_concentrate",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:maple_syrup",
            amount: 200
          },
        ]
      })

      event.remove({ output: `afc:birch_sugar` })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_syrup",
            amount: 200
          },
        ],
        processingTime: 2000,
        results: [
          {
            item: "afc:birch_sugar",
          },
        ]
      })

      event.custom({
        type: "artisanal:scalable_pot",
        ingredients: [],
        fluid_ingredient: {
          ingredient: "afc:birch_syrup",
          amount: 200
        },
        duration: 2000,
        temperature: 107,
        item_output: [
          {
            item: "afc:birch_sugar"
          }
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_sap",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:birch_sap_concentrate",
            amount: 100
          },
        ]
      })

      event.custom({
        type: "createdieselgenerators:basin_fermenting",
        heatRequirement: "heated",
        ingredients: [
          {
            fluid: "afc:birch_sap_concentrate",
            amount: 1000
          }
        ],
        processingTime: 2000,
        results: [
          {
            fluid: "afc:birch_syrup",
            amount: 200
          },
        ]
      })

      let woods = [
        'baobab',
        'eucalyptus',
        'mahogany',
        'hevea',
        'tualang',
        'teak',
        'cypress',
        'fig',
        'ironwood',
        'ipe'
      ]


    woods.forEach((wood) => {
        event.remove({ id: `afc:crafting/wood/${wood}_lumber_log` })
        event.remove({ id: `afc:crafting/wood/${wood}_lumber_planks` })
        event.remove({ id: `afc:crafting/wood/${wood}_slab_undo` })
        event.remove({ id: `afc:crafting/wood/${wood}_stairs_undo` })

        event.remove({ id: `afc:crafting/wood/${wood}_support` })


        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x afc:wood/lumber/${wood}`,[`afc:wood/planks/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_lumber_planks_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless( `2x afc:wood/lumber/${wood}`, [`afc:wood/planks/${wood}_slab`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_slab_undo_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`3x afc:wood/lumber/${wood}`,[`afc:wood/planks/${wood}_stairs`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_stairs_undo_manual_only`)

        event.custom({
            type: "lychee:block_interacting",
            post: [
            {
                type: "damage_item"
            },
            {
                type: "place",
                contextual: [
                {
                    "type": "chance",
                    "chance": 0.8
                }
                ],
                block: "air"
            },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.4
                }
                ],
                item: `afc:wood/support/${wood}`,
                count: 1
            },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.8
                }
                ],
                item: `afc:wood/support/${wood}`,
                count: 1
            }
            ],
            item_in: {
            tag: "tfc:axes"
            },
            block_in: `afc:wood/stripped_log/${wood}`
        })

        event.custom({
            type: "lychee:block_interacting",
            post: [
            {
                type: "damage_item"
            },
            {
                type: "place",
                contextual: [
                {
                    "type": "chance",
                    "chance": 1.0
                }
                ],
                block: "air"
            },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.4
                }
                ],
                item: `afc:wood/lumber/${wood}`,
                count: 1
            },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.8
                }
                ],
                item: `afc:wood/lumber/${wood}`,
                count: 2
            }
            ],
            item_in: {
            tag: "tfc:saws"
            },
            block_in: `afc:wood/vertical_support/${wood}`
        })

        event.custom({
            type: "lychee:block_interacting",
            post: [
            {
                type: "damage_item"
            },
            {
                type: "place",
                contextual: [
                {
                    "type": "chance",
                    "chance": 1.0
                }
                ],
                block: `afc:wood/stripped_log/${wood}`
            }
            ],
            "max_repeats": 3,
            item_in: {
            tag: "tfc:axes"
            },
            block_in: `afc:wood/log/${wood}`
        })

        event.recipes.create.cutting([`3x afc:wood/support/${wood}`, "2x tfc_lumberjack:sawdust"], `afc:wood/stripped_log/${wood}`).processingTime(300)
        event.recipes.create.cutting([`4x afc:wood/lumber/${wood}`, "2x tfc_lumberjack:sawdust"], `afc:wood/support/${wood}`).processingTime(300)

        event.remove({ id: `afc:crafting/wood/${wood}_trapped_chest` })

        event.recipes.minecraft.crafting_shapeless(`afc:wood/trapped_chest/${wood}`,[`afc:wood/chest/${wood}`, 'minecraft:tripwire_hook']).id(`kubejs:crafting/wood/${wood}_trapped_chest_manual_only`)
        event.recipes.create.deploying(`afc:wood/trapped_chest/${wood}`, [`afc:wood/chest/${wood}`, 'minecraft:tripwire_hook'])
   
        event.remove({ id: `afc:crafting/wood/${wood}_bladed_axle` })

        event.recipes.minecraft.crafting_shapeless(`afc:wood/bladed_axle/${wood}`,[`afc:wood/axle/${wood}`, 'tfc:metal/ingot/steel']).id(`kubejs:crafting/wood/${wood}_axle_manual_only`)
        event.recipes.create.deploying(`afc:wood/bladed_axle/${wood}`, [`afc:wood/axle/${wood}`, 'tfc:metal/ingot/steel'])

        event.remove({ id: `afc:crafting/wood/${wood}_stomping_barrel` })

        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`afc:wood/stomping_barrel/${wood}`,[`afc:wood/barrel/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/stomping_barrel/${wood}_manual_only`)
        event.recipes.create.cutting(`afc:wood/stomping_barrel/${wood}`, `afc:wood/barrel/${wood}`)

        event.remove({ id: `afc:crafting/wood/${wood}_chest_minecart` })
        event.recipes.minecraft.crafting_shapeless(`afc:wood/chest_minecart/${wood}`, ['minecraft:minecart', `afc:wood/chest/${wood}`]).id(`kubejs:crafting/chest_minecart/${wood}_manual_only`)
        event.recipes.create.deploying(`afc:wood/chest_minecart/${wood}`, ['minecraft:minecart', `afc:wood/chest/${wood}`])
    })




})