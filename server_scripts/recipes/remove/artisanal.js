
ServerEvents.recipes(event  => {

    event.remove({ id: `artisanal:barrel/dry_bagasse` })

    event.remove({ id: `artisanal:welding/metal/tinplate_from_steel` })
    event.remove({ id: `artisanal:welding/metal/tinplate_from_iron` })
    
    event.remove({ id: `artisanal:barrel/filtered_sugarcane_juice` })
    event.remove({ id: `artisanal:barrel/alkalized_sugarcane_juice` })
    event.remove({ id: `artisanal:barrel/clarified_sugarcane_juice` })
    event.remove({ id: `artisanal:pot/non_perishable_sugar` })

})