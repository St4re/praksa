<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
import {DialogPanel} from "@headlessui/vue"


const props = defineProps({
    open: Boolean,
    as: {
        type: String,
        default: "div",
    }

})
</script>

<style lang="scss" scoped>

</style>