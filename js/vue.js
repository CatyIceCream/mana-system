var app;

function loadVue() {
  Vue.createApp({
    data () {
      return {
        player: getStartPlayer(),
      }
    },
    methods: {
      addOneToMana () {
        this.player.mana += 1
      },
      doubleOrResetMana () {
      	// Math.random() is a number between 0.0 and 1.0
      	if (Math.random() < 0.1) {
      		// 10% of clearing mana
      		this.player.mana = 0
      	} else {
      		this.player.mana *= 2
      	}
      }
    },
  }).mount('#app')
}
