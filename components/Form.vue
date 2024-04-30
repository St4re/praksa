<template>
  <form v-if="isFormOpen" id="form" :class="hiddenClass">
    <FormInputs  :editingItem="editingItem" />
    <div>
      <button @click.prevent="saveEdit" class="mr-4">Save</button>
      <button @click.prevent="cancelEdit">Cancel</button>
    </div>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useFormStore } from "@/stores/form.js"
import { useCardStore } from "@/stores/card.js"

import FormInputs from "@/components/FormInputs.vue";
import formInputData from "@/assets/formInputData.json"

export default {
  name: "Form",
  props: {
    index: Number //index of the card being edited
  },
  setup(props) {
    const formStore = useFormStore();
    const cardStore = useCardStore();

    const isFormOpen = computed(() => formStore.isOpen); //gets the state value of isOpen
    const editingItem = computed(() => formStore.editingItem); //gets the state value of editingItem

    const cancelEdit = () => {
      formStore.restoreOriginalData(); //sets back original data
      formStore.closeForm(); // closes form
    };

    const saveEdit = () => {
      cardStore.updateCards(props.index, formStore.editingItem); //updates the card and updates data in state and local storage
      formStore.closeForm(); //closes form
    };

    const hiddenClass = computed(() => !isFormOpen.value ? "hidden" : "");

    return { isFormOpen, editingItem, cancelEdit, saveEdit, hiddenClass, formInputData };
  }
}
</script>
<style lang="scss" scoped>
form {
  position: fixed;
  background-color: black;
  padding: 30px;
  border-radius: 15px;
  border: 2px solid #e3d61d;
  box-shadow: 0px 0px 500px 200px black;
}

div {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 4vh;
  margin-top: 10%;

}

button {
  background-color: #e3d61d;
  border-radius: 7px;
  font-weight: bold;
  box-shadow: 0px 0px 30px 0px #e3d61d4d;
  font-size: 1.3em;
  transition: all 0.2s ease-in-out;
}

button:hover {
  color: #e3d61d;
  background-color: black;
}
</style>