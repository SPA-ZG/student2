import { defineStore } from 'pinia'

export const useCardStore = defineStore({
  id: 'cards',
  state: () => ({
    totalCardsClicked: 0,
  }),
  actions: {
    incrementTotalCardsClicked() {
      this.totalCardsClicked += 1;
    },
  },
});
