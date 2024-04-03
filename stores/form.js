import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    isOpen: false,
    editingItem: null,
    originalData: null,
  }),
  actions: {
    openForm(item) {
      this.editingItem = item;
      this.isOpen = true;
    },
    closeForm() {
      this.editingItem = null;
      this.isOpen = false;
    },
    setEditingItem(item) {
      this.editingItem = item;
    },
    setOriginalData(data) {
      this.originalData = data;
    },
    restoreOriginalData() {
      if (this.originalData) {
        console.log(this.editingItem, this.originalData);
        Object.assign(this.editingItem, this.originalData);
        console.log(this.editingItem);

        this.originalData = null;
      }
    },
    saveChanges() {
      // to do
    },
    clearOriginalData() {
      this.originalData = null;
    },
  },
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
