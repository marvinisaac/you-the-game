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
            name: '???',
            attributes: {
                strength: {
                    name: 'Strength',
                    value: 0,
                    visible: false
                },
                luck: {
                    name: 'Luck',
                    value: 0,
                    visible: false
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
