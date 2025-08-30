player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
    for (let index = 0; index < 10; index++) {
        gameplay.setWeather(RAIN)
        mobs.spawn(WOLF, pos(0, 0, 0))
    }
})
