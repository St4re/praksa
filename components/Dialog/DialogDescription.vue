<template>
    <HdlssDialogDescription class="dialogDesc">
      <slot></slot>
    </HdlssDialogDescription>
  </template>
  
  <script>
  import {DialogDescription as HdlssDialogDescription} from "@headlessui/vue"
  
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
    }
  </script>
  
  <style lang="scss" scoped>
  .dialogDesc {
  margin-bottom: 5px;
}
  </style>