<script>
import SmallCard from '../components/SmallCard.vue';
import { getFirebase } from '@/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
    components: { SmallCard },
    data(){
        return{
            cards: [],
            page: 1,
            cardsPerPage: 3,
        }
    },
    methods:{
        // Handle the cardClick event and emit it further
        handleCardClick(){
            this.$emit('cardClick', this.card);
        },

        // Fetch card data
        async fetchCards() {
            const firebase = getFirebase();
            console.log(firebase);
            const db = getFirestore(firebase);
            try {
                const querySnapshot = await getDocs(collection(db, 'cards'));

                querySnapshot.forEach((doc) => {
                this.cards.push({
                    ...doc.data(),
                    id: doc.id,
                });
                });
                console.log(this.cards);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        },

        // Functions to handle pagination
        previousPage() {
            if (this.page > 1) {
                this.page -= 1;
            }
        },

        nextPage() {
            if (this.page < this.totalPages) {
                this.page += 1;
            }
        },
    },
    mounted() { // Lifecycle hook
        this.fetchCards();
    },
    computed: {
        // Compute the total number of pages
        totalPages() {
            return Math.ceil(this.cards.length / this.cardsPerPage);
        },

        // Compute the indices of visible cards based on the current page
        visibleCardsIndices() {
            const start = (this.page - 1) * this.cardsPerPage;
            const end = start + this.cardsPerPage;
            return Array.from({ length: this.cards.length }, (_, index) => index).slice(start, end);
        },
    },
};
</script>

<template>
    <div class="list-cards">
        <h1>Click on the card names to find out more</h1>
        <div class="cards">
            <SmallCard v-for="index in visibleCardsIndices" :key="index" :card="cards[index]" @cardClick="handleCardClick"/>
        </div>
        <div class="page-switches">
            <button @click="previousPage" :disabled="page === 1">Previous</button>
            <span>Page {{ page }}</span>
            <button @click="nextPage" :disabled="page === totalPages">Next</button>
        </div>
        <div class="range-wrapper">
            <input type="range" min="1" :max="totalPages" v-model.number="page" />
        </div>
    </div>
</template>

<style scoped>
    .list-cards {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .cards{
        display: flex;
        flex-direction: row;
    }
    .page-switches {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    button{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    
    .range-wrapper {
        background-color: hsla(160, 100%, 37%, 1);
    }

    input:hover{
        cursor: pointer;
    }
</style>
