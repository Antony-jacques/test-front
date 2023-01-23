<template>
  <div class="movie-form">
    <div class="movie-details">
        <h2>{{movie.id}}</h2>

      <input type="text" v-model="newDescription" :placeholder="movie.description">
      <p>{{newDescription}}</p>
      <p>{{newDescription.length}}</p>
      <input type="text"  v-for="(actor, index) in getFeaturedActors"
        :key="index" :value="actor.first_name">
    </div>
    <button @click="editMovie">submit</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "EditMovie",
  data() {
    return {
        newDescription: ""
    };
  },
  props: {
    movie: Object
  }, 
  methods: {
      editMovie: function(){
          const newMovie = {
              id: this.movie.id,
              title: this.movie.title,
              description: this.newDescription,
              actors: this.movie.actors
          }
          axios.put(`http://localhost:8000/api/movies/${this.movie.id}/`, newMovie)
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
  }
};
</script>