<template>
  <div v-for="(input, index) in formInputs" :key="index">
    <label :for="input.id">{{ input.label }}: </label>
    <input
      v-model="editingItem[input.key]"
      :id="input.id"
      :type="input.type"
      :class="{ capitalize: input.capitalize }"
    />
  </div>
</template>

<script>
export default {
  props: {
    formInputs: Array,
    editingItem: Object,
  },
};
</script>
