<template>
  <HdlssDialogTitle class="dialogTitle" :as="passAs">
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
    const passAs = ref(props.as);
    return { passAs }
  }
}
</script>

<style lang="scss" scoped>
.dialogTitle {
  margin-bottom: 7px;
}
</style>