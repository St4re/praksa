<template>
    <HdlssDialogPanel class="panel">
      <slot></slot>
    </HdlssDialogPanel>
  </template>
  
  <script>
  import {DialogTitle as HdlssDialogPanel} from "@headlessui/vue"
  
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
    }
  </script>
  
  <style lang="scss" scoped>
  .panel {
    padding: 30px 0;
  }
  </style>