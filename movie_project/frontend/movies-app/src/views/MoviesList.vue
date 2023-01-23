<template>
  <div>
    <h2>Movies List</h2>

    <div v-for="(movie, index) in getMovies" :key="index">
      <MovieCard :movie="movie" />
    </div>
    <PaginationNav/>
  </div>
</template>
<script>
import MovieCard from "@/components/MovieCard";
import PaginationNav from "@/components/PaginationNav";
export default {
  name: "MoviesList",
  data() {
    return {
      bool: false
    };
  },
  components: { MovieCard, PaginationNav },
  // mounted(){
  //     this.$store.dispatch('getMovies')
  // },
  computed: {
    getMovies() {
      return this.$store.state.movies.results;
    }
  }
};
</script>