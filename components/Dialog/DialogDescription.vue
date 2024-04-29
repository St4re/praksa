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
        default: "p",
    }

})
</script>

<style lang="scss" scoped>

</style>