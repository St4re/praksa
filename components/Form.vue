<template>
  <form v-if="isFormOpen" id="form" :class="hiddenClass">
    <FormInputs :formInputs="formInputData" :editingItem="editingItem" />
    <button @click.prevent="saveEdit" class="mr-4">Save</button>
    <button @click.prevent="cancelEdit">Cancel</button>
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
