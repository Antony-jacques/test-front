import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    SET_MOVIES: (state,movies)=>{
      state.movies = movies
      console.log(state.movies)
    }
  },
  actions: {
    getMovies: ({ commit })=>{
      axios.get('http://localhost:8000/api/movies/')
      .then((response)=>{
        commit('SET_MOVIES', response.data)
      })
    }
  },
  modules: {
  }
})
