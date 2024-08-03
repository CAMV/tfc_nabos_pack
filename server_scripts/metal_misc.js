// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event  => {

    let smelting = (input, output, o_amount) =>
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
                        amount : o_amount
                    }
                ],
                heatRequirement: 'heated'
            })
        }

    let heating = (input, output, o_amount, tmp) => 
        {
            event.custom({
                type: 'tfc:heating',
                ingredient : {
                    item: input
                },
                result_fluid: {
                    fluid: output,
                    amount: o_amount
                },
                temperature: tmp
            })
        }

    smelting('beneath:gold_chunk', 'tfc:metal/gold', 100)
    smelting('minecraft:bell', 'tfc:metal/gold', 100)
    smelting('tfc:bronze_bell', 'tfc:metal/bronze', 100)
    smelting('tfc:brass_bell', 'tfc:metal/brass', 100)

    event.remove({ output: 'create:brass_bars' })
    event.remove({ output: 'createaddition:electrum_nugget' })
    event.remove({ input: 'createaddition:electrum_nugget' })

    event.remove({ id: `woodencog:mixing/ingot_to_liquid_wrought_iron` })
    event.remove({ id: `artisanal:heating/metal/circle_blade/wrought_iron` })
    heating('artisanal:metal/circle_blade/wrought_iron', 'tfc:metal/cast_iron', 50, 1000)

    event.recipes.tfc.anvil('8x create:brass_bars', 'tfc:metal/sheet/brass', ["upset_last", "punch_not_last", "punch_not_last"]).tier(2)
    event.recipes.tfc.anvil('16x create:brass_bars', 'tfc:metal/double_sheet/brass', ["upset_last", "punch_not_last", "punch_not_last"]).tier(2)
})