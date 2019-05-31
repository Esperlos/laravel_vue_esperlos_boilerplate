import Vue from "vue"
import Vuex  from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },

    actions: {
        async fetchTodos({ commit }) {
            return commit('setTodos', await axios.get('/api/todos'))
        }
    },

    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        }
    }
})
