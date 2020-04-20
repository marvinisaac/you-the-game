import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        gameConstants: {
            player: {
                weightLimitStrengthMultiplier: 10
            }
        },
        player: {
            name: 'Player',
            attributes: {
                strength: {
                    name: 'Strength',
                    value: 5,
                    visible: true
                },
                luck: {
                    name: 'Luck',
                    value: 99,
                    visible: true
                }
            }
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
