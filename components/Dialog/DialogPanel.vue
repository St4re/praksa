<template>
    <DialogPanel>
        <slot></slot>
    </DialogPanel>
</template>

<script setup>
import {DialogPanel} from "@headlessui/vue"


const props = defineProps({
    open: {
        type:Boolean,
    },
    as: {
        type: String,
        default: "div",
    }

})
</script>

<style lang="scss" scoped>

</style>