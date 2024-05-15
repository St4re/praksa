<template>
    <HdlssDialog :open="isOpen">
    <slot></slot>
  </HdlssDialog>
</template>


<script>
import {ref} from "vue"
import { Dialog as HdlssDialog } from '@headlessui/vue'

export default {
  components: {
    HdlssDialog,
  },
  props: {
    open:  Boolean,
    initialFocus: String,
    as: {
      type: [Object, String],
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
    const isOpen = ref(false);

    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    return {isOpen}
  }
  }
</script>

<style lang="scss" scoped>

</style>