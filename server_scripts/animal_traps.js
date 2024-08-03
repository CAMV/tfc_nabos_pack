// priority: 0

ServerEvents.recipes(event  => {

    let animals = [
        'chicken',
        'duck',
        'gouse',
        'pheasant',
        'quail',
        'rabbit',
        'turkey',
        'turtle'        
    ]
    
    animals.forEach((a) => {
        event.remove({ id: `animaltraptfc:compat/tfc/carcass_${a}` })
    })

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:quail_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/quail"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_quail_manual_only')

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:bone", "count": 2
          },
          {
            item: "minecraft:rabbit_hide"
          },
          {
            item: "minecraft:rabbit_foot"
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:rabbit_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/rabbit",
              count: 2
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_rabbit_manual_only')

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:turkey_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/turkey"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_turkey_manual_only')
  
    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:scute"
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:turtle_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/turtle",
              count: 4
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_turtle_manual_only')

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:chicken_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/chicken"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_chicken_manual_only')

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:duck_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/duck"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_duck_manual_only')
  
    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:pheasant_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/pheasant"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_pheasant_manual_only')

    event.custom({
        type: "tfc:extra_products_shapeless_crafting",
        extra_products: [
          {
            item: "minecraft:feather",
            count: 4
          }
        ],
        recipe: {
          type: "tfc:damage_inputs_shapeless_crafting",
          recipe: {
            type: "minecraft:crafting_shapeless",
            ingredients: [
              {
                type: "tfc:not_rotten",
                ingredient: {
                  item: "animaltrap:grouse_carcass"
                }
              },
              {
                tag: "forge:tools/knives"
              }
            ],
            result: {
              item: "tfc:food/grouse"
            },
            modifiers: [
              "tfc:copy_food"
            ]
          }
        }
    }).id('kubejs:compat/tfc/carcass_gouse_manual_only')
})