<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="card-page">
        <img :src="card.image" :alt="card.title" width="300" height="450"/>
        <div class="card-info">
            <h1>{{ card.title }}</h1>
            <p>{{ card.description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .card-page {
        min-height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        margin: 10px;
        border: 3px solid hsla(160, 100%, 37%, 1)
    }

    .card-info {
        margin-left: 2rem;
    }
</style>


