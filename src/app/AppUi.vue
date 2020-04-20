<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-9">
                    <div class="tabs is-toggle">
                        <ul>
                            <li class="is-capitalized">
                                <a>Action</a>
                            </li>
                            <li class="is-capitalized">
                                <a>Delivery</a>
                            </li>
                            <li class="is-capitalized">
                                <a>Logs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="box">
                        <player></player>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Player from './Character/Player.vue'

export default {
    components: {
        Player
    }
}
</script>

<style scoped>
.box {
    border: 1px #DBDBDB solid;
    border-radius: 4px;
}
</style>
