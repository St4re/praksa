<template>
    <div>
        <slot></slot>
    </div>
    
</template>

<script setup>
import {DialogDescription} from "@headlessui/vue"

const props = defineProps({
    open: {
        type:Boolean,
    },
    as: {
        type: String,
        default: "p",
    }

})
</script>

<style lang="scss" scoped>

</style>