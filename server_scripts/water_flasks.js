// priority: 0


ServerEvents.recipes(event  => {

    event.remove({ id: `waterflasks:crafting/repair_iron` })
    event.remove({ id: `waterflasks:crafting/repair_broken_iron` })
    
    event.custom({
        type: "waterflasks:heal_flask",
        recipe: {
          type: "minecraft:crafting_shaped",
          pattern: [
            "FB",
            "CK"
          ],
          key: {
            K: {
              tag: "tfc:knives"
            },
            F: {
              item: "waterflasks:iron_flask"
            },
            C: {
              item: "tfc:burlap_cloth"
            },
            B: {
              item: "waterflasks:bladder"
            }
          },
          result: {
            item: "waterflasks:iron_flask"
          }
        }
      }).id('kubejs:repair_iron_flask_manual_only')

      event.custom({
        type: "waterflasks:heal_flask",
        recipe: {
          type: "minecraft:crafting_shaped",
          pattern: [
            "FB",
            "CK"
          ],
          key: {
            K: {
              tag: "tfc:knives"
            },
            F: {
              item: "waterflasks:broken_iron_flask"
            },
            C: {
              item: "tfc:burlap_cloth"
            },
            B: {
              item: "waterflasks:bladder"
            }
          },
          result: {
            item: "waterflasks:iron_flask"
          }
        }
      }).id('kubejs:repair_broken_iron_flask_manual_only')

})