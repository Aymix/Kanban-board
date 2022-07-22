<template>
    
        <v-col>
            <v-card class="mx-auto" tile>
                <v-card-title> Current({{todos.length}})</v-card-title>
                <v-list-item v-for="(todo, index) in todos" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{todo.body}}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn @click="edit(todo)" icon>
                            <v-icon color="blue lighten-1">mdi-lead-pencil</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <v-list-item-action>
                        <v-btn @click="markAsCompleted(todo)" icon>
                            <v-icon color="green lighten-1">mdi-check</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <v-list-item-action>
                        <v-btn @click="remove(todo)" icon>
                            <v-icon color="red lighten-1">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
        </v-col>
  
</template>
<script>
export default {

    methods: {
        edit(todo) {
            this.$store.dispatch('editTodo', todo)
        },
        markAsCompleted(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },

    computed: {
        todos() {
            return this.$store.getters.todos
        }
    }

}

</script>
