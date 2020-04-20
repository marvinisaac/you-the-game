<template>
    <div>
        <p>
            <span class="has-text-weight-bold">Name:</span>
            {{name}}
        </p>
        <hr/>
        <ul v-for="attribute in attributes"
            :key="attribute.name">
            <li v-if="attribute.visible">
                <span class="has-text-weight-bold">{{ attribute.name }}:</span>
                {{ attribute.value }}
            </li>
        </ul>
        <hr/>
        <p>
            <span class="has-text-weight-bold">Weight:</span>
            0 / {{ inventoryWeightLimit }}
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        attributes () {
            return this.$store.state.player.attributes
        },
        inventoryWeightLimit () {
            let constant = this.$store.state.gameConstants
            let strength = this.$store.state.player.attributes.strength

            if (!strength.visible) {
                return '???'
            }

            return strength.value * constant.player.weightLimitStrengthMultiplier
        },
        name () {
            return this.$store.state.player.name
        }
    }
}
</script>

<style scoped>
hr {
    margin: 0.5rem 0;
}
</style>
