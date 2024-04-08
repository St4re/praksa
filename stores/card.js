import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cardsPinia: [],
  }),
  actions: {
    setCards(newCards) {
      this.cardsPinia = newCards; //sets the current cards in the state
      localStorage.setItem("localCards", JSON.stringify(this.cardsPinia)); //sets the current cards in the localStorage
    },
    updateCards(index, newCard) {
      this.cardsPinia[index] = newCard; //update the current edited card in the state with new data
      this.setCards(this.cardsPinia); // updates the state and localStorage with new cards
    },
  },
});
