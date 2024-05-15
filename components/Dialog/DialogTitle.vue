<template>
  <HdlssDialogTitle class="dialogTitle">
    <slot></slot>
  </HdlssDialogTitle>
</template>

<script>
import { DialogTitle as HdlssDialogTitle } from "@headlessui/vue"

export default {
  components: {
    HdlssDialogTitle,
  },
  props: {
    as: {
      type: [Object, String],
      default: "h2",
    },
  },
  setup(props) {
    const as = ref(props.as);

    watch(() => props.as, (newVal) => {
      as.value = newVal;
    });
    return { as }
  }
}
</script>

<style lang="scss" scoped>
.dialogTitle {
  margin-bottom: 7px;
}
</style>