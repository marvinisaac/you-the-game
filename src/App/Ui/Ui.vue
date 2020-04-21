<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-2">
                    <div class="box">
                        <environment></environment>
                    </div>
                    <div class="box">
                        <player></player>
                    </div>
                </div>
                <div class="column">
                    <div class="buttons has-addons">
                        <button class="button is-capitalized"
                            v-for="tabItem in tab.list"
                            @click="tab.active = tabItem"
                            :class="{'is-dark': tabItem === tab.active}"
                            :key="tabItem">
                            {{ tabItem }}
                        </button>
                    </div>
                    <action v-if="tab.active === 'action'"></action>
                    <inventory v-if="tab.active === 'inventory'"></inventory>
                    <log v-if="tab.active === 'log'"></log>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Player from './UiPlayer.vue'
import Action from './Tab/Action.vue'
import Inventory from './Tab/Inventory.vue'
import Log from './Tab/Log.vue'
import Environment from './UiEnvironment.vue'

export default {
    components: {
        Player,
        Action,
        Inventory,
        Log,
        Environment
    },
    data: () => ({
        tab: {
            active: 'action',
            list: [
                'action',
                'inventory',
                'log'
            ]
        }
    })
}
</script>

<style scoped>
.box {
    border: 1px #DBDBDB solid;
    border-radius: 4px;
}
</style>
