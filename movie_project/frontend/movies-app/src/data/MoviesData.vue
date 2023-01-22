<template>
    <div>
    </div>
</template>
<script>
    export default {
        name: 'MoviesData',
        data(){
            return {

            }
        },
        mounted(){
            this.$store.dispatch('getMovies')
            this.$store.dispatch('getActors')
        },
        computed: {
            getMovies() {
                return this.$store.state.movies.results
            },
            getActors() {
                return this.$store.state.actors.results
            },
        }

    }
</script>