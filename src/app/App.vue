<template>
    <div>
        <h1>You, The Game</h1>
        <p>{{version}}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        version: process.env.VUE_APP_VERSION
    })
}
</script>
