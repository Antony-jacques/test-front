<template>
    <div>
        <h2>

        Movies List
        </h2>

        <div v-for="(movie, index) in getMovies" :key='index'>
            <h3>
                {{movie.title}}
            </h3>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MoviesList',
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