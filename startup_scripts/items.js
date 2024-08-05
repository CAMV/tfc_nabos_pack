StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('electrum_double_ingot').displayName("Electrum Double Ingot")

    e.create('fire_powder').displayName("Fire Powder")

    e.create('incomplete_electrum_double_ingot', 'create:sequenced_assembly')
    e.create('incomplete_electrum_sheet', 'create:sequenced_assembly')

    e.create('incomplete_ungalvanized_engine_piston', 'create:sequenced_assembly')
    e.create('incomplete_ungalvanized_engine_silencer', 'create:sequenced_assembly')
    e.create('incomplete_ungalvanized_engine_turbocharger', 'create:sequenced_assembly')
    e.create('incomplete_tin_can', 'create:sequenced_assembly')
    e.create('incomplete_tinplate', 'create:sequenced_assembly')

 
    e.create('ungalvanized_engine_piston')
    e.create('ungalvanized_engine_silencer')
    e.create('ungalvanized_engine_turbocharger')
 })