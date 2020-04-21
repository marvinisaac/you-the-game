<template>
    <div>
        <div class="box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="buttons has-addons is-centered">
                <button class="button">Up</button>
                <button class="button">Down</button>
                <button class="button">Left</button>
                <button class="button">Right</button>
            </div>
        </div>
        <history></history>
    </div>
</template>

<script>
import History from './GameHistory.vue'

export default {
    components: {
        History
    }
}
</script>

<style lang="scss" scoped>
.buttons {
    margin-top: 1rem;
}
</style>
