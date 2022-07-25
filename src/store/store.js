import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        columns: {
            "To do": {
                "tasks": [{
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    },

                ],
                "title": "To Do"
            },
            "In Progress": {
                "tasks": [{
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    },

                ],
                "title": "In Progress"
            },
            "In Review": {
                "tasks": [{
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    },
                    {
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    }
                ],
                "title": "In Review"
            },
            "Backlog": {
                "tasks": [{
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    },
                    {
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    }
                ],
                "title": "Backlog"
            },
            "Done": {
                "tasks": [{
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    },
                    {
                        "title": "Add discount code to checkout page",
                        "description": "not supported in version",
                        "chips": ["Planning", "Monetization"]
                    }
                ],
                "title": "Done"
            }
        },

    },
    mutations: {

        initialiseVars(state) {

            if (localStorage.getItem('columns')) {
                state.columns = JSON.parse(localStorage.columns)
            }

        },


        setCardcolumns(state, payload) {
            console.log(payload);
            state.columns = payload;
        },
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state, task) {
            console.log(task);
            task.col.push({
                title: task.item.title,
                description: task.item.description,
                chips: task.item.chips,

            })
        },
        EDIT_TODO(state, todo) {
            console.log(todo);
            Vue.set(todo.col, todo.index, todo.task);
            //var todos = state.todos
            //todos.splice(todos.indexOf(todo), 1)
            //state.todos = todos
            //state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo) {
            console.log(todo.col);
            console.log(todo.index);
            console.log(todo.task);
            //todo.col.splice(todo.task, 0)
            Vue.delete(todo.col, todo.index);

        },
        COMPLETE_TODO(state, todo) {
            todo.completed = !todo.completed
        },
    },

    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo)
        },
        editTodo({ commit }, todo) {
            commit('EDIT_TODO', todo)
        },
        removeTodo({ commit }, todo) {
            commit('REMOVE_TODO', todo)
        },


    },
    getters: {
        allColumns: state => state.columns,
    }

})
