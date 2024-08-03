TFCEvents.data(event => {
    event.lampFuel('createdieselgenerators:biodiesel', '#tfc:lamps', 0.1)
    event.lampFuel('createdieselgenerators:diesel', '#tfc:lamps', 0.1)
    event.lampFuel('createdieselgenerators:gasoline', '#tfc:lamps', 0.1)
    event.lampFuel('createdieselgenerators:crude_oil', '#tfc:lamps', 1)

})

ServerEvents.recipes(event  => {

    let liquit_and_item_to_liquid_basin_fermenting = (input, fluid_input, fluid_input_amount, fluid_output, fluid_output_amount, time) =>
    {
        event.custom({
            type: "createdieselgenerators:basin_fermenting",
            heatRequirement: "heated",
            ingredients: [
                {
                item: input
                },
                {
                fluid: fluid_input,
                amount: fluid_input_amount
                },
            ],
            processingTime: time,
            results: [
                {
                fluid: fluid_output,
                amount: fluid_output_amount
                },
            ]
        })
    }

    event.recipes.create.mixing('tfc:jute_net', [Fluid.of('artisanal:soapy_water', 100), 'tfc:dirty_jute_net'])

    event.remove({ id: `woodencog:mixing/barrel/clean_jute` })

    liquit_and_item_to_liquid_basin_fermenting('tfc:olive_paste', 'minecraft:water', 200, 'tfc:olive_oil_water', 200, 1000)

    event.recipes.create.mixing([Fluid.of(`tfc:olive_oil`, 50), 'tfc:dirty_jute_net'], [Fluid.of(`tfc:olive_oil_water`, 250), `tfc:jute_net`])
    

})