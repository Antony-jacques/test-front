<template>
  <div>
    <div class="movie-details">
      <div class="description">{{ movie.description }}</div>
      <div
        class="actors"
        v-for="(actor, index) in getFeaturedActors"
        :key="index"
      >{{ actor.first_name }} - {{ actor.last_name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  data() {
    return {};
  },
    props: {
    movie: Object
  },
  computed: {
    getActors() {
      return this.$store.state.actors.results;
    },
    getFeaturedActors() {
      let featuredActors = [];
      this.getActors.forEach(actor => {
        if (this.movie.actors.includes(actor.id)) {
          featuredActors.push(actor);
        }
      });
      return featuredActors;
    }
  }
};
</script>