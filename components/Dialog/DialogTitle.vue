<template>
   <div>
    <slot></slot>
   </div>
</template>

<script setup>
import {DialogTitle as hdlssDialogTitle} from "@headlessui/vue"


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