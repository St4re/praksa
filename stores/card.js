import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cardsPinia: [],
  }),
  actions: {
    setCards(newCards) {
      this.cardsPinia = newCards;
    },
  },
});