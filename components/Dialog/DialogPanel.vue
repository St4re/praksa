<template>
    <HdlssDialogPanel class="panel" :as="passAs">
        <slot></slot>
    </HdlssDialogPanel>
</template>

<script>
import { DialogPanel as HdlssDialogPanel } from "@headlessui/vue"

export default {
    components: {
        HdlssDialogPanel,
    },
    props: {
        as: {
            type: [Object, String],
            default: "div",
        },
    },
    setup(props) {
        const passAs = ref(props.as);
        return { passAs }
    }
}
</script>

<style lang="scss" scoped>
.panel {
    padding: 30px 0;
}
</style>