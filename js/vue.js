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
      doubleMana () {
        this.player.mana *= 2
      },
    },
  }).mount('#app')
}
