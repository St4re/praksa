<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
};
</script>