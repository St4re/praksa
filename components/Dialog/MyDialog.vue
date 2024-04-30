<template>
    <Dialog class="dialog" :open="open" @close="$emit('close')">
        <slot></slot>
    </Dialog>
</template>

<script>
import { Dialog } from "@headlessui/vue"
import { ref } from "vue"

export default {

    props: {
        open: {
            type: Boolean,
            default: false,
        },
        initialFocus: {
            type: String,
        },
        as: {
            type: String,
            default: "div",
        },
        static: {
            type: Boolean,
            default: false,
        },
        unmount: {
            type: Boolean,
            default: true,
        }
    },
    setup(props) {
        
    }
}
</script>

<style lang="scss" scoped>
.dialog {
    background-color: red;
    width:100px;
    height:100px;
}
</style>