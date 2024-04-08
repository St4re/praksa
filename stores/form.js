import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    isOpen: false, //if form is open
    editingItem: null, //the card thats being edited
    originalData: null, //the cards previously saved data
  }),
  actions: {
    openForm(item) {
      this.editingItem = item; //sets the correct card to edit
      this.originalData = JSON.parse(JSON.stringify(item)) //saves the original data in a different constant in case of canceling
      this.isOpen = true;// opens the form
    },
    closeForm() {
      this.editingItem = null; //resets for the next card
      this.originalData = null; // resets for the next card
      this.isOpen = false; //closes the form
    },
    restoreOriginalData() {
      if (this.originalData) {
        //if originalData exists sets the edited card its original data back
        Object.assign(this.editingItem, this.originalData);
        this.originalData = null; // resets for the next card
      }
    },
  },
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : ""; //if false hide the form, if true show it
    },
  },
});
