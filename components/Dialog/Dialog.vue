<template>
  <HdlssDialog :open="isOpen" :initialFocus="passFocus" :as="passAs" :static="passStatic"
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
    initialFocus: Object,
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
    const passFocus = ref({});
    const passAs = ref(props.as);
    const passStatic = ref(false);
    const passUnmount = ref(true);

   watch(
  [() => props.open, () => props.initialFocus, () => props.static, () => props.unmount],
  ([open, initialFocus, staticProp, unmount]) => {
    isOpen.value = open;
    passFocus.value = initialFocus;
    passStatic.value = staticProp;
    passUnmount.value = unmount;
  }
);
    return { isOpen, passFocus, passAs, passStatic, passUnmount }
  }
}
</script>

<style lang="scss" scoped></style>