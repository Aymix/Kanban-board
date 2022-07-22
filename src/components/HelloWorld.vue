<template>
    <div id="app">
        <v-app>
            <v-container>
                <GetTasks></GetTasks>
                <v-row>
                <CurrentTasks></CurrentTasks>
                <CompletedTasks></CompletedTasks>
              </v-row>
            </v-container>
        </v-app>
    </div>
</template>
<script>
import GetTasks from './parts/GetTasks.vue'
import CurrentTasks from './parts/CurrentTasks.vue'
import CompletedTasks from './parts/CompletedTasks.vue'
export default {
    name: 'HelloWorld',

    components: {
        GetTasks,
        CurrentTasks,
        CompletedTasks
    },

    watch: {
      '$store.state.todos': function() {
     localStorage.setItem('todos', JSON.stringify(this.$store.state.todos));
  }
  }
}

</script>
