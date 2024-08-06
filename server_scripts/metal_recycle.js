// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event  => {

    const metals = [
        {name: 'wrought_iron',      hasTools: true, modName: "tfc", hasbars: true, hasWire: true, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'steel',             hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'black_steel',       hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'red_steel',         hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'blue_steel',        hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'nickel',            hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'stainless_steel',   hasTools: false, modName: "firmalife", hasbars: false, hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'chromium',          hasTools: false, modName: "firmalife", hasbars: false, hasWire: false, hasMagnifyingGlass: false, heat: 'superheated'},
        {name: 'bismuth',           hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'bismuth_bronze',    hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'heated'},
        {name: 'black_bronze',      hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'heated'},
        {name: 'bronze',            hasTools: true, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: false, heat: 'heated'},
        {name: 'brass',             hasTools: false, modName: "tfc", hasbars: true,  hasWire: false, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'copper',            hasTools: true, modName: "tfc", hasbars: true,  hasWire: true, hasMagnifyingGlass: false, heat: 'heated'},
        {name: 'gold',              hasTools: false, modName: "tfc", hasbars: false, hasWire: true, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'rose_gold',         hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'silver',            hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'tin',               hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: true, heat: 'heated'},
        {name: 'zinc',              hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: false, heat: 'heated'},
        {name: 'sterling_silver',   hasTools: false, modName: "tfc", hasbars: false, hasWire: false, hasMagnifyingGlass: true, heat: 'heated'}
    ]

    const weak_steels = [
        'pig_iron',
        'high_carbon_steel',
        'weak_steel',
        'weak_red_steel',
        'weak_blue_steel',
        'high_carbon_black_steel',
        'high_carbon_red_steel',
        'high_carbon_blue_steel',
    ]

    let smelting = (input, output, output_amount, heat) =>
        {
            event.custom({
                type: 'create:mixing',
                ingredients: [
                    { item: input }
                ],
                results: [
                    { 
                        fluid: output, 
                        nbt: {},
                        amount : output_amount
                    }
                ],
                heatRequirement: heat
            })
        }

    event.remove({ id: `woodencog:mixing/ingot_to_liquid_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_black_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_red_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_blue_steel` })
    event.remove({ id: `woodencog:mixing/ingot_to_liquid_nickel` })

    smelting(`tfc:wrought_iron_grill`, `tfc:metal/cast_iron`, 400, 'superheated')

    metals.forEach((metal) =>
    {
        let cast = metal.name
        if (metal.name == 'wrought_iron')
            cast = 'cast_iron'

        smelting(`${metal.modName}:metal/ingot/${metal.name}`, `${metal.modName}:metal/${cast}`, 100, metal.heat)
        smelting(`${metal.modName}:metal/double_ingot/${metal.name}`, `${metal.modName}:metal/${cast}`, 200, metal.heat)
        smelting(`${metal.modName}:metal/sheet/${metal.name}`, `${metal.modName}:metal/${cast}`, 200, metal.heat)
        smelting(`${metal.modName}:metal/double_sheet/${metal.name}`, `${metal.modName}:metal/${cast}`, 400, metal.heat)
        smelting(`${metal.modName}:metal/rod/${metal.name}`, `${metal.modName}:metal/${cast}`, 50, metal.heat)
        
        if (metal.hasMagnifyingGlass) {
            smelting(`artisanal:metal/magnifying_glass_frame/${metal.name}`, `${metal.modName}:metal/${cast}`, 50, metal.heat)
            smelting(`artisanal:metal/magnifying_glass/${metal.name}`, `${metal.modName}:metal/${cast}`, 50, metal.heat)
        }

        if (metal.hasbars)
        {
            if (metal.name == 'brass')
            {
                smelting(`create:${metal.name}_bars`, `${metal.modName}:metal/${cast}`, 25, metal.heat)
            }
            else
            {
                smelting(`tfc:metal/bars/${metal.name}`, `${metal.modName}:metal/${cast}`, 25, metal.heat)
            }
        }

        if (metal.hasWire) {
            if (metal.name = 'wrought_iron') {
                smelting(`createaddition:iron_wire`, `${metal.modName}:metal/${cast}`, 25, metal.heat)
            } else {
                smelting(`createaddition:${metal.name}_wire`, `${metal.modName}:metal/${cast}`, 25, metal.heat)
            }
        }

        if (metal.hasTools){
            smelting(`tfc:metal/lamp/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/unfinished_lamp/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)

            smelting(`tfc:metal/chain/${metal.name}`, `tfc:metal/${cast}`, 6, metal.heat)
            smelting(`tfc:metal/anvil/${metal.name}`, `tfc:metal/${cast}`, 1400, metal.heat)

            smelting(`rnr:metal/mattock_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/pickaxe_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/propick_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/axe_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/shovel_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/hoe_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/chisel_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/hammer_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/javelin_head/${metal.name}`, `tfc:metal/${cast}`, 100, metal.heat)
            smelting(`tfc:metal/mace_head/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)
            smelting(`tfc:metal/sword_blade/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)
            smelting(`tfc:metal/fish_hook/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)
            smelting(`artisanal:metal/circle_blade/${metal.name}`, `tfc:metal/${cast}`, 50, metal.heat)
            smelting(`tfc:metal/tuyere/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)
            smelting(`tfc:metal/trapdoor/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)

            smelting(`tfc:metal/unfinished_helmet/${metal.name}`, `tfc:metal/${cast}`, 400, metal.heat)
            smelting(`tfc:metal/unfinished_chestplate/${metal.name}`, `tfc:metal/${cast}`, 400, metal.heat)
            smelting(`tfc:metal/unfinished_greaves/${metal.name}`, `tfc:metal/${cast}`, 400, metal.heat)
            smelting(`tfc:metal/unfinished_boots/${metal.name}`, `tfc:metal/${cast}`, 200, metal.heat)
        }

        event.remove({ id: `vintageimprovements:pressing/${metal.name}_ingot` })
        event.remove({ id: `vintageimprovements:rolling/${metal.name}_ingot` })
        event.remove({ id: `tfc_metal_items:seq_pressing/sheets/${metal.name}` })

    })

    weak_steels.forEach((metal) =>{
        event.remove({ id: `woodencog:mixing/ingot_to_liquid_${metal}` })
        smelting(`tfc:metal/ingot/${metal}`, `tfc:metal/${metal}`, 100, 'superheated')
    })

    smelting(`createaddition:electrum_rod`, `kubejs:electrum`, 50, 'heated')
    smelting(`createaddition:electrum_ingot`, `kubejs:electrum`, 100, 'heated')
    smelting(`createaddition:electrum_sheet`, `kubejs:electrum`, 200, 'heated')
    smelting(`createaddition:electrum_wire`, `kubejs:electrum`, 25, 'heated')
    smelting(`kubejs:electrum_double_ingot`, `kubejs:electrum`, 200, 'heated')

})