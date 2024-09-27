<script>
  import { getFirebase } from '@/firebase';
  import { getFirestore, doc, getDoc } from 'firebase/firestore';
  import { RouterLink, useRoute } from 'vue-router';
  import BigCard from '../components/BigCard.vue';

  export default {
    data(){
        return{
          cardId: useRoute().params.id,
          card: {},
        }
    },
    watch: {
      // Watch for changes in the route params and update the cardId ref accordingly
      route(to, from) {
          this.cardId = to.params.id;
      },
    },
    components: { BigCard, RouterLink },
    methods:{
      // Fetch card data
      async fetchCard() {
          const firebase = getFirebase();
          const db = getFirestore(firebase);
          try {
              const docRef = doc(db, 'cards', this.cardId); // fetches the card with id from the route params
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
                  this.card = {
                      ...docSnap.data(),
                      id: docSnap.id,
                  };
              } else {
                  console.log('No such document!');
              }
          } catch (error) {
              console.error('Error fetching card:', error);
          }
      },
    },
    mounted() { // Lifecycle hook
      this.fetchCard();
    },
  };
</script>

<template>
  <div class="card-page">
    <RouterLink to="/" class="back-link">Back</RouterLink>
    <h1>This is a card page for card with id: {{ cardId }}</h1>
    <BigCard :card="card" />
  </div>
</template>

<style>
  .card-page {
    align-items: center;
  }
</style>
