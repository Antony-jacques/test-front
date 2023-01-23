<template>
  <div class="card" @click="toggleVisibility">
    <div class="title">{{ movie.title }}</div>
    <div class="movie-details" v-if="visible">
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
  name: "MovieCard",
  props: {
    movie: Object
  },
  data(){
      return {
          visible: false
      }
  },
  methods: {
      toggleVisibility: function() {
          this.visible = !this.visible
      }
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
  },
  mounted() {}
};
</script>
<style scoped>
.card {
  border: solid 1px;
}
</style>