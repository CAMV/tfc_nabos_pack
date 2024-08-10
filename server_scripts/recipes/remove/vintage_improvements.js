// priority: 0

ServerEvents.recipes(event  => {
    let mod = 'vintageimprovements'

    event.remove({ id: `${mod}:pressurizing/copper_sulfate` })
    event.remove({ id: `${mod}:pressurizing/sulfuric_acid` })
    event.remove({ id: `${mod}:pressurizing/sulfur_trioxide` })
    event.remove({ id: `${mod}:pressurizing/sulfur_trioxide_alt` })
    event.remove({ id: `${mod}:pressurizing/sulfur_dioxide` })

    event.remove({ id: `${mod}:craft/sulfur_block_to_items` })
    event.remove({ id: `${mod}:craft/sulfur_nuggets_to_item` })

    event.remove({ id: `${mod}:rolling/pig_iron_plate` })
    event.remove({ id: `${mod}:pressing/pig_iron_ingot` })
    event.remove({ id: `${mod}:rolling/pig_iron_ingot` })

    event.remove({ id: `tfc_metal_items:seq_pressing/sheets/pig_iron` })
    event.remove({ id: `${mod}:curving/iron_sheet` })
})