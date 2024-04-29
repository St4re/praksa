<template>
    <div>

    </div>
</template>

<script setup>
const props = defineProps({
    open: {
        type:Boolean,
    },
    as: {
        type: String | Component,
        default: "div",
    }

})
</script>

<style lang="scss" scoped>

</style>