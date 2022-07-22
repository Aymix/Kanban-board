<template>
    <v-row>
        <v-col>
            <v-text-field v-bind:value="newTodo" @change="getTodo" label="Task"></v-text-field>
            <v-btn depressed @click="addTodo" color="primary">
                Add Task
            </v-btn>
        </v-col>
    </v-row>
</template>
<script>
export default {
    methods: {
        getTodo(e) {

            this.$store.dispatch('getTodo', e)
        },
        addTodo() {
            this.$store.dispatch('addTodo')

        }
    },
    computed: {
        newTodo() {
            return this.$store.getters.newTodo
        }
    }

}

</script>
