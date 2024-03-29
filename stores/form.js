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
        this.editingItem = this.originalData;
        console.log(this.editingItem);

        this.originalData = null;
      }
    },
    saveChanges() {
      // Implement logic to save changes to `editingItem`
      // This might involve sending a request to a server
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
