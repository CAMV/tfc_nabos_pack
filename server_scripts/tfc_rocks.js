
ServerEvents.recipes(event  => {

    let sand_colors = 
    [
        'brown',
        'white',
        'black',
        'red',
        'yellow',
        'green',
        'pink'
    ]

    let rocks = [
        'granite',
        'diorite',
        'gabbro',
        'shale',
        'claystone',
        'limestone',
        'conglomerate',
        'dolomite',
        'chert',
        'chalk',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite',
        'quartzite',
        'slate',
        'phyllite',
        'schist',
        'gneiss',
        'marble'
    ]

    event.remove({ id: `tfcorewashing:rock_powder` })

    sand_colors.forEach((c) => {
        event.remove({ id: `tfc:crafting/sandstone/${c}_smooth` })
        
        event.remove({ id: `tfc:crafting/sandstone/${c}_cut` })

        event.remove({ id: `rnr:crafting/flagstone/${c}_sandstone` })

        event.custom({
            type: "lychee:block_clicking",
            post: [
            {
                type: "damage_item"
            },
            {
              type: "place",
              contextual: [
              {
                  "type": "chance",
                  "chance": 0.9
              }
              ],
              block: "air"
          },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.8
                }
                ],
                item: `rnr:flagstone/${c}_sandstone`,
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
                item: `rnr:flagstone/${c}_sandstone`,
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
              item: `rnr:flagstone/${c}_sandstone`,
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
              item: `rnr:flagstone/${c}_sandstone`,
              count: 1
          },
            ],
              item_in: {
              tag: "tfc:chisels"
            },
              block_in: `tfc:cut_sandstone/${c}`
        })

        // event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x rnr:flagstone/${c}_sandstone`,[`tfc:cut_sandstone/${c}`, '#tfc:chisels'])).id(`kubejs:crafting/flagstone/${c}_sandstone_manual_only`)

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:cut_sandstone/${c}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `4x rnr:flagstone/${c}_sandstone`
                }
            ]
        })
    })

    rocks.forEach((r) => {
        event.remove({ id: `tfc:crafting/rock/${r}_smooth` })

        event.remove({ id: `tfc:crafting/rock/${r}_brick` })
        event.remove({ id: `tfc:crafting/rock/${r}_brick_from_mossy` })
        event.remove({ id: `tfc:crafting/rock/${r}_button` })
        event.remove({ id: `tfc:crafting/rock/${r}_pressure_plate` })

        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfcorewashing:rock_powder`,[`tfc:rock/loose/${r}`, '#forge:tools/hammers'])).id(`kubejs:${r}_rock_powder_manual_only`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfc:brick/${r}`,[`tfc:rock/loose/${r}`, '#tfc:chisels'])).id(`kubejs:crafting/brick/${r}_bricks_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfc:brick/${r}`,[`tfc:rock/mossy_loose/${r}`, '#tfc:chisels'])).id(`kubejs:crafting/brick/${r}_bricks_from_mossy_manual_only`)
       
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfc:rock/button/${r}`,[`tfc:brick/${r}`, '#tfc:chisels'])).id(`kubejs:crafting/button/${r}_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`tfc:rock/pressure_plate/${r}`,[`2x tfc:brick/${r}`, '#tfc:chisels'])).id(`kubejs:crafting/pressure_plate/${r}_manual_only`)

        event.remove({ id: `tfc:crafting/rock/${r}_chiseled` })

        event.remove({ id: `tfc:crafting/rock/${r}_cracked` })
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
                block: `tfc:rock/cracked_bricks/${r}`
            }
            ],
            item_in: {
            tag: "tfc:hammers"
            },
            block_in: `tfc:rock/bricks/${r}`
        })

        event.recipes.create.pressing(`tfc:rock/cracked_bricks/${r}`, `tfc:rock/bricks/${r}`)

        event.remove({ id: `rnr:crafting/flagstone/${r}` })

        event.custom({
            type: "lychee:block_clicking",
            post: [
            {
                type: "damage_item"
            },
            {
              type: "place",
              contextual: [
              {
                  "type": "chance",
                  "chance": 0.9
              }
              ],
              block: "air"
          },
            {
                type: "drop_item",
                contextual: [
                {
                    type: "chance",
                    chance: 0.8
                }
                ],
                item: `rnr:flagstone/${r}`,
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
                item: `rnr:flagstone/${r}`,
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
              item: `rnr:flagstone/${r}`,
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
              item: `rnr:flagstone/${r}`,
              count: 1
          },
            ],
              item_in: {
              tag: "tfc:chisels"
            },
              block_in: `tfc:rock/smooth/${r}`
        })


        // event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x rnr:flagstone/${r}`,[`tfc:rock/smooth/${r}`, '#tfc:chisels'])).id(`kubejs:crafting/flagstone/${r}_manual_only`)
        

        // e.recipes.create.deploying(['diamond', 'emerald'], ['coal_block', 'sand']).keepHeldItem()

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:rock/loose/${r}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `tfc:brick/${r}`
                }
            ]
        })

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:rock/mossy_loose/${r}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `tfc:brick/${r}`
                }
            ]
        })

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:brick/${r}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `tfc:rock/button/${r}`
                }
            ]
        })

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:rock/button/${r}`,
                },
                {
                    tag: `tfc:brick/${r}`
                }
            ],
            results: [
                {
                    item: `tfc:rock/pressure_plate/${r}`
                }
            ]
        })

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:rock/bricks/${r}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `tfc:rock/chiseled/${r}`
                }
            ]
        })

        event.custom({
            type: "create:deploying",
            ingredients: [
                {
                    item: `tfc:rock/smooth/${r}`,
                },
                {
                    tag: "tfc:chisels"
                }
            ],
            results: [
                {
                    item: `4x rnr:flagstone/${r}`
                }
            ]
        })


    })

    // event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x afc:wood/lumber/${wood}`,[`afc:wood/planks/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_lumber_planks_manual_only`)

    

})