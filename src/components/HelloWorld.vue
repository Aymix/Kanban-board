<template>
    <div id="app" >
        <v-app class="grey lighten-4">
            <v-container>
               
                <v-row>
                <CurrentTasks></CurrentTasks>
                



              </v-row>
            </v-container>
        </v-app>
    </div>
</template>
<script>
import CurrentTasks from './parts/CurrentTasks.vue'

export default {
    name: 'HelloWorld',

    components: {
        CurrentTasks,
        
    },

    watch: {
      '$store.getters.allColumns': function() {
        console.log(this.$store.state.todos);
     localStorage.setItem('todos', JSON.stringify(this.$store.state.todos));
     localStorage.setItem('completed', JSON.stringify(this.$store.state.completed));

     localStorage.setItem('columns', JSON.stringify(this.$store.state.columns));
  }
  }
}

</script>
