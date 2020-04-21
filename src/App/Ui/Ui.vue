<template>
    <section class="section">
        <div class="container">
            <div class="buttons has-addons is-centered is-small"
                v-if="isCharacterCreated">
                <template v-for="(sectionValues, name) in section.list">
                    <button class="button is-capitalized"
                        v-if="sectionValues.visible"
                        @click="section.active = name"
                        :class="{'is-link': name === section.active}"
                        :key="name">
                        {{ name }}
                    </button>
                </template>
            </div>
            <game v-if="section.active === 'game'"></game>
            <player v-if="section.active === 'character'"></player>
        </div>
    </section>
</template>

<script>
import Game from './Game/Game.vue'
import Player from './Player/Player.vue'

export default {
    components: {
        Game,
        Player
    },
    data: () => ({
        section: {
            active: 'game',
            list: {
                // Instead of a simple array, list is an object to add some sort of feature flag
                game: {
                    visible: true
                },
                character: {
                    visible: true
                }
            }
        }
    }),
    computed: {
        isCharacterCreated () {
            return this.$store.state.player.name !== '???'
        }
    }
}
</script>

<style lang="scss" scoped>
.box {
    border: 1px solid #DBDBDB;
    border-radius: 4px;
}
</style>
