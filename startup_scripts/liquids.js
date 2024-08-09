// priority: 0

StartupEvents.registry('fluid', e => {
    // Basic "thick" (looks like lava) fluid with red tint
    e.create('andesite_alloy') // ('') contains the fluid id
        //sets the texture to thick
        .thickTexture(0x809587) // () conatins the hex code, prefixed by 0x, of the color of the fluid
        .bucketColor(0x809587) //  () conatins the hex code, prefixed by 0x, of the color of the fluid in the bucket, usually the same 
        .displayName('Zinc Alloy') //in  game name of fluid
})

StartupEvents.registry('fluid', e => {
  // Basic "thick" (looks like lava) fluid with red tint
  e.create('electrum') // ('') contains the fluid id
      //sets the texture to thick
      .thickTexture(0xF8D767) // () conatins the hex code, prefixed by 0x, of the color of the fluid
      .bucketColor(0xF8D767) //  () conatins the hex code, prefixed by 0x, of the color of the fluid in the bucket, usually the same 
      .displayName('Electrum') //in  game name of fluid
})
