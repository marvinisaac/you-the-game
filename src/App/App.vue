<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-head">
            <h1 class="title">You</h1>
            <h6 class="subtitle is-size-6">The Game</h6>
        </div>
        <ui class="is-align-top"></ui>
        <div class="hero-foot has-background-black has-text-white">
            <p class="is-size-7">v{{ version }}</p>
        </div>
    </section>
</template>

<script>
import Ui from './Ui/Ui.vue'

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
    .hero-head {
        padding: 1em 0 0;
    }
    .hero-foot {
        padding: 0.5em 0;
    }
    .is-align-top {
        margin-bottom: auto;
        padding-top: 1.5rem;
    }
}
</style>
