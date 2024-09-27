<script>
  import CardList from '../components/CardList.vue';
  import { useCardStore } from '@/stores/counter';

  export default {
    components: { CardList },
    setup() {
      const cardStore = useCardStore();

      return {
        totalCardsClicked: cardStore.totalCardsClicked,
        incrementTotalCardsClicked: cardStore.incrementTotalCardsClicked,
      };
    },
};
</script>

<template>
  <div class="home-page">
    <h1>Total cards clicked: {{ totalCardsClicked }}</h1>
    <CardList @cardClick="incrementTotalCardsClicked"/>
  </div>
</template>

<style>
  .home-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
