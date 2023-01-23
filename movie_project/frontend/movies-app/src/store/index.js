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
    SET_MOVIES: (state,movies) => {
      state.movies = movies
      console.log(state.movies)
    },
    SET_ACTORS: (state, actors) => {
      state.actors = actors
    },
    SET_MOVIES_PAGE: (state, moviesPage) => {
      state.moviesPage = moviesPage
    }
  },
  actions: {
    getMovies: ({ commit }) => {
      axios.get('http://localhost:8000/api/movies/')
      .then((response)=>{
        commit('SET_MOVIES', response.data)
      })
    },
    getActors: ({ commit }) => {
      axios.get('http://localhost:8000/api/actors/')
      .then((response)=>{
        commit('SET_ACTORS', response.data)
      })
    },
    setMoviesPage: ({ commit }, { moviesPage }) => {
      commit('SET_MOVIES_PAGE', moviesPage)
    }
  },
  modules: {
  }
})
