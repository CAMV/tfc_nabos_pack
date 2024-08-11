// priority: 0

ServerEvents.recipes(event  => {
    let modID = 'vintageimprovements'

    event.remove({ id: `${modID}:pressurizing/copper_sulfate` })
    event.remove({ id: `${modID}:pressurizing/sulfuric_acid` })
    event.remove({ id: `${modID}:pressurizing/sulfur_trioxide` })
    event.remove({ id: `${modID}:pressurizing/sulfur_trioxide_alt` })
    event.remove({ id: `${modID}:pressurizing/sulfur_dioxide` })

    event.remove({ id: `${modID}:craft/sulfur_block_to_items` })
    event.remove({ id: `${modID}:craft/sulfur_nuggets_to_item` })

    event.remove({ id: `${modID}:rolling/pig_iron_plate` })
    event.remove({ id: `${modID}:pressing/pig_iron_ingot` })
    event.remove({ id: `${modID}:rolling/pig_iron_ingot` })

    event.remove({ id: `tfc_metal_items:seq_pressing/sheets/pig_iron` })
    event.remove({ id: `${modID}:curving/iron_sheet` })

    event.remove({ id: `${modID}:craft/helve_hammer_slot_cover` })

    event.remove({ mod: 'vintageimprovements', output: `${modID}:vanadium_ingot` })
    event.remove({ mod: 'vintageimprovements', output: `${modID}:vanadium_block` })
    event.remove({ mod: 'vintageimprovements', output: `${modID}:vanadium_nugget` })


})