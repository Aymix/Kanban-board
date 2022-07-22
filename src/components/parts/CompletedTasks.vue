<template>
    
        <v-col>
            <v-card class="mx-auto" tile>
                <v-card-title> Completed({{completed.length}})</v-card-title>
                <v-list-item v-for="(todo, index) in completed" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{todo.body}}</v-list-item-title>
                    </v-list-item-content>
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
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        completed() {
            return this.$store.getters.completedTodos
        }
    }
}

</script>
