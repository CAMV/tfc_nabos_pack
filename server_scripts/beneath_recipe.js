
ServerEvents.recipes(event  => {

      let woods = [
        'warped',
        'crimson',
      ]


    woods.forEach((wood) => {
        event.remove({ id: `beneath:crafting/wood/${wood}_lumber_log` })
        event.remove({ id: `beneath:crafting/wood/${wood}_lumber_planks` })
        event.remove({ id: `beneath:crafting/wood/${wood}_slab_undo` })
        event.remove({ id: `beneath:crafting/wood/${wood}_stairs_undo` })

        event.remove({ id: `beneath:crafting/wood/${wood}_support` })

        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`4x beneath:wood/lumber/${wood}`,[`beneath:wood/planks/${wood}`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_lumber_planks_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless( `2x beneath:wood/lumber/${wood}`, [`beneath:wood/planks/${wood}_slab`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_slab_undo_manual_only`)
        event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless(`3x beneath:wood/lumber/${wood}`,[`beneath:wood/planks/${wood}_stairs`, '#tfc:saws'])).id(`kubejs:crafting/wood/${wood}_stairs_undo_manual_only`)

        event.remove({ id: `beneath:crafting/wood/${wood}_trapped_chest` })

        event.recipes.minecraft.crafting_shapeless(`beneath:wood/trapped_chest/${wood}`,[`beneath:wood/chest/${wood}`, 'minecraft:tripwire_hook']).id(`kubejs:crafting/wood/${wood}_trapped_chest_manual_only`)
        event.recipes.create.deploying(`beneath:wood/trapped_chest/${wood}`, [`beneath:wood/chest/${wood}`, 'minecraft:tripwire_hook'])
     
        event.remove({ id: `beneath:crafting/wood/${wood}_bladed_axle` })

        event.recipes.minecraft.crafting_shapeless(`beneath:wood/bladed_axle/${wood}`,[`beneath:wood/axle/${wood}`, 'tfc:metal/ingot/steel']).id(`kubejs:crafting/wood/${wood}_axle_manual_only`)
        event.recipes.create.deploying(`beneath:wood/bladed_axle/${wood}`, [`beneath:wood/axle/${wood}`, 'tfc:metal/ingot/steel'])
  
        event.remove({ id: `beneath:crafting/wood/${wood}_chest_minecart` })
        event.recipes.minecraft.crafting_shapeless(`beneath:wood/chest_minecart/${wood}`, ['minecraft:minecart', `beneath:wood/chest/${wood}`]).id(`kubejs:crafting/chest_minecart/${wood}_manual_only`)
        event.recipes.create.deploying(`beneath:wood/chest_minecart/${wood}`, ['minecraft:minecart', `beneath:wood/chest/${wood}`])

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
                item: `beneath:wood/support/${wood}`,
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
                item: `beneath:wood/support/${wood}`,
                count: 1
            }
            ],
            item_in: {
            tag: "tfc:axes"
            },
            block_in: `beneath:wood/stripped_log/${wood}`
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
                item: `beneath:wood/lumber/${wood}`,
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
                item: `beneath:wood/lumber/${wood}`,
                count: 2
            }
            ],
            item_in: {
            tag: "tfc:saws"
            },
            block_in: `beneath:wood/vertical_support/${wood}`
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
                block: `beneath:wood/stripped_log/${wood}`
            }
            ],
            "max_repeats": 3,
            item_in: {
            tag: "tfc:axes"
            },
            block_in: `beneath:wood/log/${wood}`
        })

        event.recipes.create.cutting([`3x beneath:wood/support/${wood}`, "2x tfc_lumberjack:sawdust"], `beneath:wood/stripped_log/${wood}`).processingTime(300)
        event.recipes.create.cutting([`4x beneath:wood/lumber/${wood}`, "2x tfc_lumberjack:sawdust"], `beneath:wood/support/${wood}`).processingTime(300)

        event.remove({ output: `beneath:wood/scribing_table/${wood}` })
        event.shaped(`beneath:wood/scribing_table/${wood}`, [
          'A B', 
          'CCC', 
          'D D'  
        ], {
          A: 'artisanal:quill', 
          B: 'minecraft:black_dye',
          C: `beneath:wood/planks/${wood}_slab`, 
          D: `beneath:wood/planks/${wood}`
        })
   
    })





})