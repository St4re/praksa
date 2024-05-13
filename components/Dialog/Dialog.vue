<template>
  <div>
    <slot></slot>
  </div>
</template>


<script>
import { Dialog as hdlssDialog } from '@headlessui/vue'

export default {
  components: {
    hdlssDialog,
  },
  props: {
    open:  Boolean,
    initialFocus: String,
    as: {
      type: (Object | String),
      default: String,
    },
    static: {
      type: Boolean,
      default: false,
    },
    unmount: {
      type: Boolean,
      default: true,
    }
  }}
</script>

<style lang="scss" scoped>

</style>