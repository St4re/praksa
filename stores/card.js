import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cardsPinia: [],
  }),
  actions: {
    setCards(newCards) {
      this.cardsPinia = newCards;
      localStorage.setItem("localCards", JSON.stringify(this.cardsPinia));
    },
    updateCards(index, newCard) {
      this.cardsPinia[index] = newCard;
      this.setCards(this.cardsPinia);
    },
    initialize() {
      const storedCards = localStorage.getItem("localCards");
      if (storedCards) {
        this.cardsPinia = JSON.parse(storedCards);
      }
    },
  },
});
