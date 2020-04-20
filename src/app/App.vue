<template>
    <div class="hero is-fullheight is-white">
        <div class="hero-body">
            <h1 class="title">You, The Game</h1>
            <div class="footer">
                <p class="is-size-7">{{version}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        version: process.env.VUE_APP_VERSION
    })
}
</script>

<style lang="scss" scoped>
.hero.is-fullheight {
    padding: 0;
    .hero-body {
        flex-direction: column;
        padding: 0;
        .footer {
            background: transparent;
            margin-top: auto;
            padding: 0;
            text-align: center;
            width: 100%;
        }
    }
}
</style>
