import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        completed:[],
        newTodo: ''
    },
    mutations: {

        initialiseVars(state) {
            if (localStorage.getItem('todos')) {
                state.todos = JSON.parse(localStorage.todos)
            }
            if (localStorage.getItem('completed')) {
                state.completed = JSON.parse(localStorage.completed)
            }
                
        },
        setCardTodo(state, payload) {
           console.log(payload);
          state.todos = payload;
        },
        setCardCompleted(state, payload) {
           console.log(payload);
          state.completed = payload;
        },
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state) {
            state.todos.push({
                body: state.newTodo,
                completed: false
            })
           
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
           
        },
        COMPLETE_TODO(state, todo) {
            todo.completed = !todo.completed
        },
    },

    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({ commit }) {
            commit('ADD_TODO')
        },
        editTodo({ commit }, todo) {
            commit('EDIT_TODO', todo)
        },
        removeTodo({ commit }, todo) {
            commit('REMOVE_TODO', todo)
        },
        completeTodo({ commit }, todo) {
            commit('COMPLETE_TODO', todo)
        },

    },
    getters: {
        newTodo: state => state.newTodo,
        allTodos: state => state.todos,
        todos: state => state.todos.filter((todo) => { return !todo.completed }),
        completedTodos: state => state.todos.filter((todo) => { return todo.completed })
    }

})
