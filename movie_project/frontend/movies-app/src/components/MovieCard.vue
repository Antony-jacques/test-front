<template>
  <div class="card" @click.stop="toggleVisibility">
    <div class="title">{{ movie.title }}</div>

    <MovieDetails v-if="visible" :movie="movie" />
    <EditMovie v-if="enabledEdition" :movie="movie" />
    <button @click.stop="toggleEdition" >Edit</button>
  </div>
</template>
<script>
import EditMovie from "@/components/EditMovie";
import MovieDetails from "@/components/MovieDetails";

export default {
  name: "MovieCard",
  props: {
    movie: Object
  },
  components: { EditMovie, MovieDetails },
  data() {
    return {
      visible: false,
      enabledEdition: false
    };
  },
  methods: {
    toggleVisibility: function() {
      this.visible = !this.visible;
    },
    toggleEdition: function() {
        console.log('click')
      this.enabledEdition = !this.enabledEdition;
    }
  },

  mounted() {}
};
</script>
<style scoped>
.card {
  border: solid 1px;
  max-width: 200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>