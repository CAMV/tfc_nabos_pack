ServerEvents.recipes(event  => {

  event.remove({ id: 'createoreexcavation:drilling_machine' })
  event.remove({ id: 'createoreexcavation:extractor' })
  event.remove({ id: 'createoreexcavation:sample_drill' })
  event.remove({ id: 'createoreexcavation:netherite_drill' })
  event.remove({ id: 'createoreexcavation:vein_finder' })
  event.remove({ id: 'createoreexcavation:vein_atlas' })

})