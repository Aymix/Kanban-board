<template>
    <div id="app" >
        <v-app class="grey lighten-4">
            <v-container>
               
                <v-row>
                <CurrentTasks></CurrentTasks>
                <OngoingTasks></OngoingTasks>
                <Reviews></Reviews>
                <Backlog></Backlog>
                <CompletedTasks></CompletedTasks>

              </v-row>
            </v-container>
        </v-app>
    </div>
</template>
<script>
import CurrentTasks from './parts/CurrentTasks.vue'
import CompletedTasks from './parts/CompletedTasks.vue'
import OngoingTasks from './parts/OngoingTasks.vue'
import Backlog from './parts/Backlog.vue'
import Reviews from './parts/Reviews.vue'
export default {
    name: 'HelloWorld',

    components: {
        CurrentTasks,
        CompletedTasks,
        OngoingTasks,
        Backlog,
        Reviews
    },

    watch: {
      '$store.getters.todos': function() {
        console.log(this.$store.state.todos);
     localStorage.setItem('todos', JSON.stringify(this.$store.state.todos));
     localStorage.setItem('completed', JSON.stringify(this.$store.state.completed));
  }
  }
}

</script>
