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
        },
        computed: {
            getMovies() {
                return this.$store.state.movies.results
            }
        }

    }
</script>