
ServerEvents.recipes(event  => {

      event.remove({ id: `alekiships:crafting/cleat` })
      event.remove({ id: `alekiships:crafting/oarlock` })
      event.remove({ id: `alekiships:crafting/anchor` })
      event.remove({ id: `alekiships:crafting/cannonball` })

      event.remove({ id: `firmaciv:crafting/large_waterproof_hide` })

})