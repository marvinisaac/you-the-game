<template>
    <div>
        <p>
            <span class="has-text-weight-bold">Name </span>
            <span>{{name}}</span>
        </p>
        <hr/>
        <ul>
            <li v-for="attribute in attributes"
                :key="attribute.name">
                <template>
                    <span class="has-text-weight-bold">{{ attribute.name }} </span>
                    <span v-if="attribute.visible">{{ attribute.value }}</span>
                    <span v-else>???</span>
                </template>
            </li>
        </ul>
        <hr/>
        <p>
            <span class="has-text-weight-bold">Weight </span>
            <span>??? / {{ inventoryWeightLimit }}</span>
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
