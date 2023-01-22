<template>
<div class="card">
    <div class="title">{{ movie.title }}</div>
    <div class="description">{{ movie.description }}</div>
    <div class="actors" v-for="(actor, index) in movie.actors" :key=index>{{ actor }}</div>
    
</div>

</template>
<script>
    export default {
        name: 'MovieCard',
        props: {
            movie: Object
        }
    }
</script>
<style scoped>
    .card {
        border: solid 1px;
    }

</style>