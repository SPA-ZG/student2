<template>
    <div class="card">
        <RouterLink :to="`/card/${card.id}`" @click="handleCardClick">
            <h3>{{ card.title }}</h3>
        </RouterLink>
        <img :src="card.image" :alt="card.title" width="100" height="150"/>
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        emits: ['cardClick'], // Define the custom event
        methods: {
            handleCardClick() {
                // Emit the custom event
                this.$emit('cardClick', this.card);
            },
        },
    }
</script>

<style scoped>
    .card {
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem;
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
</style>

