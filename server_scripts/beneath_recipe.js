
ServerEvents.recipes(event  => {

    let chisel_translation = (output, input, id) => {
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                `${output}`,
                [`${input}`, '#tfc:chisels'])
            ).id(`kubejs:${id}_manual_only`)
          event.recipes.create.deploying(`${output}`, [`${input}`, '#tfc:chisels'])
    }

    let knife_translation = (output, input, id) => {
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(
                output,
                [input, '#tfc:knives'])
            ).id(`kubejs:${id}_manual_only`)
      }

    event.remove({ id: `beneath:crafting/blackstone_brick` })
    chisel_translation(`beneath:blackstone_brick`, 'beneath:blackstone_pebble', 'blackstone_brick')

    event.remove({ id: `beneath:crafting/blackstone_button` })
    chisel_translation(`minecraft:polished_blackstone_button`, 'beneath:blackstone_brick', 'polished_blackstone_button')

    event.remove({ id: `beneath:crafting/blackstone_plate` })
    chisel_translation(`minecraft:polished_blackstone_pressure_plate`, '2x beneath:blackstone_brick', 'polished_blackstone_pressure_plate')
    
    event.remove({ id: `beneath:crafting/nether_brick` })
    chisel_translation(`minecraft:nether_brick`, 'beneath:nether_pebble', 'nether_brick')

    event.remove({ id: `beneath:crafting/cracked_blackstone_bricks` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            `minecraft:cracked_polished_blackstone_bricks`,
            [`minecraft:polished_blackstone_bricks`, '#tfc:hammers'])
        ).id(`kubejs:cracked_polished_blackstone_bricks_manual_only`)
    event.recipes.create.pressing('minecraft:cracked_polished_blackstone_bricks', 'minecraft:polished_blackstone_bricks')

    event.remove({ id: `beneath:crafting/juicer` })
    event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            'beneath:juicer',
            ['3x #forge:leather', 'tfc:firepit_sticks', '#tfc:knives'])
        ).id(`kubejs:juicer_manual_only`)
})