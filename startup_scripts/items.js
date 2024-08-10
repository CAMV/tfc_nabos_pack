StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('electrum_double_ingot').displayName("Electrum Double Ingot")

    e.create('fire_powder').displayName("Fire Powder")
    e.create('mirror').displayName("Mirror")

    e.create('incomplete_ungalvanized_engine_piston', 'create:sequenced_assembly')
    e.create('incomplete_ungalvanized_engine_silencer', 'create:sequenced_assembly')
    e.create('incomplete_ungalvanized_engine_turbocharger', 'create:sequenced_assembly')
    e.create('incomplete_tin_can', 'create:sequenced_assembly')
    e.create('incomplete_stator', 'create:sequenced_assembly')
    e.create('incomplete_mirror', 'create:sequenced_assembly')
    e.create('incomplete_capacitor', 'create:sequenced_assembly')
    e.create('incomplete_electron_tube', 'create:sequenced_assembly')
    e.create('incomplete_small_light_connector', 'create:sequenced_assembly')

    e.create('ungalvanized_engine_piston')
    e.create('ungalvanized_engine_silencer')
    e.create('ungalvanized_engine_turbocharger')

    e.create('latex_curdle')
    e.create('stainless_steel_spool')
    e.create('stainless_steel_wire')

    e.create('incomplete_rubber_bar', 'create:sequenced_assembly')
    e.create('incomplete_wet_bagasse', 'create:sequenced_assembly')

 })