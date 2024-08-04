
ServerEvents.recipes(event  => {
  let undo_block = (block_input, item_out, out_count, tool_tag) => {
    event.custom({
      type: "lychee:block_interacting",
      block_in: block_input,
      item_in: {
        tag: tool_tag
      },
      post: [
        {
            type: "damage_item"
        },
        {
            type: "place",
            block: "air"
        },
        {
            type: "drop_item",
            item: item_out,
            count: out_count
        }
      ],
    })
  }

  let support_chop = (block_input, block_out, item_out, tool_tag) => {
    event.custom({
      type: "lychee:block_interacting",
      block_in: block_input,
      item_in: {
        tag: tool_tag
      },
      contextual: [
        {
          type: "and",
          contextual : [
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~1 ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~1 ~ ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~-1 ~ ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~ ~1 #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~ ~-1 #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ minecraft:air",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #tfc:plants",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #tfc:snow",
            },
          ]
        }
      ],
      post: [
        {
          type: "damage_item"
        },
        {
          type: "place",
          block: block_out
        },
        {
          type: "drop_item",
          contextual: [
            {
              type : "chance",
              chance : "0.8"
            }
          ],
          item: item_out,
          count: 2
        },
        {
          type: "drop_item",
          contextual: [
            {
              type : "chance",
              chance : "0.4"
            }
          ],
          item: item_out,
          count: 1
        }
      ]
    })
  }

  let get_shingle = (block_input, shingle_item, tool_tag) => {
    event.custom({
      type: "lychee:block_interacting",
      block_in: block_input,
      item_in: {
        tag: tool_tag
      },
      contextual: [
        {
          type: "and",
          contextual : [
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~1 ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~1 ~ ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~-1 ~ ~ #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~ ~1 #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~ ~-1 #minecraft:logs",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ minecraft:air",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #tfc:plants",
            },
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ #tfc:snow",
            },
          ]
        }
      ],      
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
                chance: 0.8
              }
            ],
            item: shingle_item,
            count: 3
        },
      ],
    })
  }

  let woods = [
    {name: 'acacia', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'ash', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'aspen', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'birch', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'blackwood', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'chestnut', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'douglas_fir', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'hickory', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'kapok', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'mangrove', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'maple', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'oak', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'palm', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'pine', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'rosewood', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'sequoia', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'spruce', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'sycamore', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'white_cedar', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    {name: 'willow', mod: 'tfc', hasShingles: true, hasRoofing: true, hasStompingBarrel: true},
    
    {name: 'baobab', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'eucalyptus', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'mahogany', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'hevea', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'tualang', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'teak', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'cypress', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'fig', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'ironwood', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},
    {name: 'ipe', mod: 'afc', hasShingles: true, hasRoofing: false, hasStompingBarrel: true},

    {name: 'warped', mod: 'beneath', hasShingles: false, hasRoofing: true, hasStompingBarrel: false},
    {name: 'crimson', mod: 'beneath', hasShingles: false, hasRoofing: true, hasStompingBarrel: false},
  ]

  woods.forEach((w) => {
    
    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_lumber_log` })
    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_support` })

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_lumber_planks` })
    undo_block(`${w.mod}:wood/planks/${w.name}`, `${w.mod}:wood/lumber/${w.name}`, 4, 'tfc:saws')
    event.recipes.create.cutting([`4x ${w.mod}:wood/lumber/${w.name}`], `${w.mod}:wood/planks/${w.name}`).processingTime(300)

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_slab_undo` })
    undo_block(`${w.mod}:wood/planks/${w.name}_slab`, `${w.mod}:wood/lumber/${w.name}`, 2, 'tfc:saws')
    event.recipes.create.cutting([`2x ${w.mod}:wood/lumber/${w.name}`], `${w.mod}:wood/planks/${w.name}_slab`).processingTime(300)

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_stairs_undo` })
    undo_block(`${w.mod}:wood/planks/${w.name}_stairs`, `${w.mod}:wood/lumber/${w.name}`, 3, 'tfc:saws')
    event.recipes.create.cutting([`3x ${w.mod}:wood/lumber/${w.name}`], `${w.mod}:wood/planks/${w.name}_stairs`).processingTime(300)

    if (w.hasRoofing)
    {
      event.remove({ id: `firmaciv:crafting/uncraft_${w.name}_roofing` })
    }

    event.custom({
      type: "lychee:block_interacting",
      block_in: `${w.mod}:wood/vertical_support/${w.name}`,
      item_in: {
        tag: "tfc:saws"
      },
      contextual: [
        {
          type: "and",
          contextual : [
            {
              type: "execute",
              command: "execute unless block ~ ~-1 ~ minecraft:air",
            },
            {
              type: "execute",
              command: `execute unless block ~ ~-1 ~ ${w.mod}:wood/vertical_support/${w.name}`,
            },
            {
              type: "execute",
              command: `execute unless block ~ ~1 ~ ${w.mod}:wood/vertical_support/${w.name}`,
            },
          ]
        }
      ], 
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
                chance: 0.4
            }
            ],
            item: `${w.mod}:wood/lumber/${w.name}`,
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
            item: `${w.mod}:wood/lumber/${w.name}`,
            count: 2
        }
      ],
    })

    if (w.mod != 'tfc')
    {
        event.recipes.create.cutting([`4x ${w.mod}:wood/lumber/${w.name}`, "2x tfc_lumberjack:sawdust"], `${w.mod}:wood/support/${w.name}`).processingTime(300)
    }

    event.remove({ id: `tfc_lumberjack:support_from_log/${w.name}` })

    support_chop(`${w.mod}:wood/stripped_log/${w.name}`, `${w.mod}:wood/vertical_support/${w.name}`, `${w.mod}:wood/support/${w.name}`, 'tfc:saws')
    support_chop(`${w.mod}:wood/stripped_wood/${w.name}`, `${w.mod}:wood/vertical_support/${w.name}`, `${w.mod}:wood/support/${w.name}`, 'tfc:saws')
  
    event.remove({ id: `tfc_debark:bark/${w.name}_wood` })
    event.remove({ id: `tfc_debark:bark/${w.name}_log` })

    if (w.mod != 'tfc')
    {
      event.recipes.create.cutting([`3x ${w.mod}:wood/support/${w.name}`, "2x tfc_lumberjack:sawdust"], `${w.mod}:wood/stripped_log/${w.name}`).processingTime(300)
      event.recipes.create.cutting([`3x ${w.mod}:wood/support/${w.name}`, "2x tfc_lumberjack:sawdust"], `${w.mod}:wood/stripped_wood/${w.name}`).processingTime(300)
    }

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_bladed_axle` })
    event.recipes.minecraft.crafting_shapeless(`${w.mod}:wood/bladed_axle/${w.name}`,[`${w.mod}:wood/axle/${w.name}`, 'tfc:metal/ingot/steel']).id(`kubejs:crafting/wood/${w.name}_axle_manual_only`)
    event.recipes.create.deploying(`${w.mod}:wood/bladed_axle/${w.name}`, [`${w.mod}:wood/axle/${w.name}`, 'tfc:metal/ingot/steel'])

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_trapped_chest` })
    event.recipes.minecraft.crafting_shapeless(`${w.mod}:wood/trapped_chest/${w.name}`,[`${w.mod}:wood/chest/${w.name}`, 'minecraft:tripwire_hook']).id(`kubejs:crafting/wood/${w.name}_trapped_chest_manual_only`)
    event.recipes.create.deploying(`${w.mod}:wood/trapped_chest/${w.name}`, [`${w.mod}:wood/chest/${w.name}`, 'minecraft:tripwire_hook'])

    if (w.hasStompingBarrel)
    {

      let stomping_mod = 'firmalife'
      if (w.mod == 'afc')
        stomping_mod = 'afc'

      event.remove({ id: `${stomping_mod}:crafting/wood/${w.name}_stomping_barrel` })
      event.custom({
        type: "lychee:block_interacting",
        block_in: `${w.mod}:wood/barrel/${w.name}`,
        item_in: {
          tag: "tfc:saws"
        },
        post: [
          {
              type: "damage_item"
          },
          {
              type: "place",
              block: `${stomping_mod}:wood/stomping_barrel/${w.name}`
          }
        ],
      })

      event.recipes.create.cutting(`${stomping_mod}:wood/stomping_barrel/${w.name}`, `${w.mod}:wood/barrel/${w.name}`)
    
      event.remove({ id: `${stomping_mod}:crafting/wood/${w.name}_barrel_press`})
      event.shaped(`${stomping_mod}:wood/barrel_press/${w.name}`, [
          ' A ', 
          ' B ', 
          'CDC'  
        ], {
          A: 'tfc:brass_mechanisms', 
          B: 'tfc:metal/sheet/wrought_iron',
          C: 'tfc:metal/rod/wrought_iron',
          D: `${stomping_mod}:wood/stomping_barrel/${w.name}`,
      })
    }

    event.remove({ id: `${w.mod}:crafting/wood/${w.name}_chest_minecart` })
    event.recipes.minecraft.crafting_shapeless(`${w.mod}:wood/chest_minecart/${w.name}`, ['minecraft:minecart', `tfc:wood/chest/${w.name}`]).id(`kubejs:crafting/chest_minecart/${w.name}_manual_only`)
    event.recipes.create.deploying(`${w.mod}:wood/chest_minecart/${w.name}`, ['minecraft:minecart', `${w.mod}:wood/chest/${w.name}`])

    if (w.mod == 'beneath')
    {
      event.remove({ output: `${w.mod}:wood/scribing_table/${w.name}` })
      event.shaped(`${w.mod}:wood/scribing_table/${w.name}`, [
        'A B', 
        'CCC', 
        'D D'  
      ], {
        A: 'artisanal:quill', 
        B: 'minecraft:black_dye',
        C: `${w.mod}:wood/planks/${w.name}_slab`, 
        D: `${w.mod}:wood/planks/${w.name}`
      })

      event.shaped(`${w.mod}:wood/sewing_table/${w.name}`, [
        ' AB', 
        'CCC', 
        'D D'  
      ], {
        A: '#tfc:leather_knapping', 
        B: '#forge:shears',
        C: `${w.mod}:wood/planks/${w.name}`, 
        D: `${w.mod}:wood/log/${w.name}`
      })
    }

    if (w.hasShingles)
    {
      event.remove({ id: `rnr:crafting/shingle/${w.name}`})

      get_shingle(`${w.mod}:wood/log/${w.name}`, `rnr:wood/shingle/${w.name}`, 'tfc:chisels')
      get_shingle(`${w.mod}:wood/wood/${w.name}`, `rnr:wood/shingle/${w.name}`, 'tfc:chisels')

      event.recipes.create.deploying(`4x rnr:wood/shingle/${w.name}`, [`${w.mod}:wood/log/${w.name}`, '#tfc:chisels'])
      event.recipes.create.deploying(`4x rnr:wood/shingle/${w.name}`, [`${w.mod}:wood/wood/${w.name}`, '#tfc:chisels'])
    }
  })

  event.remove({ id: `tfc:crafting/wood/palm_mosaic` })
  undo_block(`tfc:wood/planks/palm_mosaic`, `tfc:wood/lumber/palm`, 4, 'tfc:saws')
  event.recipes.create.cutting([`4x tfc:wood/lumber/palm`], `tfc:wood/planks/palm_mosaic`).processingTime(300)
  
  event.remove({ id: `tfc:crafting/wood/palm_mosaic_slab_undo` })
  undo_block(`tfc:wood/planks/palm_mosaic_stairs`, `tfc:wood/lumber/palm`, 3, 'tfc:saws')
  event.recipes.create.cutting([`3x tfc:wood/lumber/palm`], `tfc:wood/planks/palm_mosaic_stairs`).processingTime(300)
  
  event.remove({ id: `tfc:crafting/wood/palm_mosaic_stairs_undo` })
  undo_block(`tfc:wood/planks/palm_mosaic_slab`, `tfc:wood/lumber/palm`, 2, 'tfc:saws')
  event.recipes.create.cutting([`2x tfc:wood/lumber/palm`], `tfc:wood/planks/palm_mosaic_slab`).processingTime(300)

})




