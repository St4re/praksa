<template>
  <HdlssDialogDescription class="dialogDesc" :as="passAs">
    <slot></slot>
  </HdlssDialogDescription>
</template>

<script>
import { DialogDescription as HdlssDialogDescription } from "@headlessui/vue"

export default {
  components: {
    HdlssDialogDescription,
  },
  props: {
    as: {
      type: [Object, String],
      default: "p",
    },
  },
  setup(props) {
    const passAs = ref(props.as);
    return { passAs }
  }
}
</script>

<style lang="scss" scoped>
.dialogDesc {
  margin-bottom: 5px;
}
</style>