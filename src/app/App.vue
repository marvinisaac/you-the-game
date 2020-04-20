<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-head">
            <h1 class="title">You: The Game</h1>
        </div>
        <ui class="is-align-top"></ui>
        <div class="hero-foot has-background-dark has-text-white">
            <p class="is-size-7">v{{ version }}</p>
        </div>
    </section>
</template>

<script>
import Ui from './AppUi.vue'

export default {
    components: {
        Ui
    },
    data: () => ({
        version: process.env.VUE_APP_VERSION
    })
}
</script>

<style lang="scss" scoped>
* {
    line-height: 2em;
    user-select: none;
}
.hero {
    .hero-head, .hero-foot {
        text-align: center;
    }
    .hero-foot {
        padding: 0.5em 0;
    }
    .is-align-top {
        margin-bottom: auto;
    }
}
</style>
