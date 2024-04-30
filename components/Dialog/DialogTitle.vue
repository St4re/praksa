<template>
   <DialogTitle>
    <slot></slot>
   </DialogTitle>
</template>

<script setup>
import {DialogTitle} from "@headlessui/vue"


const props = defineProps({
    open: {
        type:Boolean,
    },
    as: {
        type: String,
        default: "h2",
    }

})
</script>

<style lang="scss" scoped>

</style>