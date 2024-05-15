<template>
  <div class="whole">
  <div class="field" v-if="editingItem" v-for="(input, index) in formInputs" :key="index">
    <label :for="input.id">{{ input.label }}: </label>
    <input v-model="editingItem[input.key]" :id="input.id" :type="input.type"
      :class="{ capitalize: input.capitalize }" />
  </div>
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
<style lang="scss" scoped>

.whole {
  display:grid;
  width:70%;
  justify-content: center;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap:20px;
  align-items:center;
  margin: 0 auto;
}
.field {
  width:100%;

}
label {
  color: white;
}

input {
  width: 100%;
  margin: 5px 0 5px 0;
  padding: 5px;
  background-color: #e3d61d;
  color: black;
  border-radius: 7px;
}

@media screen and (max-width: 1280px) {

  label {
    color: white;
    font-size: 0.9em;
  }

  input {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 768px) {

  label {
    color: white;
    font-size: 0.8em;
  }

  input {
    font-size: 0.8em;
    margin: 0;
  }

}

@media screen and (max-width: 480px) {

  label {
    color: white;
    font-size: 0.9em;
  }

  input {
    font-size: 0.9em;
  }
}

@media screen and (max-width: 400px) {
  label {
    font-size: 0.8em;
  }

  input {
    font-size: 0.8em;
  }
}
</style>
