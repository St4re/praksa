<template>
  <HdlssDialog :open="isOpen" :onClose="passOnClose" :initialFocus="passFocus" :as="passAs" :static="passStatic"
    :unmount="passUnmount">
    <slot></slot>
  </HdlssDialog>
</template>


<script>
import { ref } from "vue"
import { Dialog as HdlssDialog } from '@headlessui/vue'

export default {
  components: {
    HdlssDialog,
  },
  props: {
    open: Boolean,
    onClose: Object,
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
    const passOnClose = ref(null);
    const passFocus = ref(null);
    const passAs = ref("div");
    const passStatic = ref(false);
    const passUnmount = ref(true);


    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });

    return { isOpen, passOnClose, passFocus, passAs, passStatic, passUnmount }
  }
}
</script>

<style lang="scss" scoped></style>