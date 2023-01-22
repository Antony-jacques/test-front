<template>
    <div>
        <h2>

        Movies List
        </h2>

        <div v-for="(movie, index) in getMovies" :key='index'>
            <MovieCard :movie="movie"/>

        </div>
    </div>
</template>
<script>
import MovieCard from '@/components/MovieCard'
    export default {
        name: 'MoviesList',
        data(){
            return {
                bool: false
            }
        },
        components: {MovieCard},
        // mounted(){
        //     this.$store.dispatch('getMovies')
        // },
         computed: {
             getMovies() {
                 return this.$store.state.movies.results
             }
         }
    }

</script>