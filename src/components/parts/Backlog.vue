<template>
    <v-col>
        <v-row>
            <v-col class="justify-space-between d-flex align-center">
                <h4 class="grey--text text--darken-2">BACKLOG <span class="mx-2 grey--text text--lighten-1">{{completed.length}}</span></h4>
                <todoModal v-bind:type="type" ></todoModal>
            </v-col>
        </v-row>
        
           <v-card v-if="completed == 0" outlined elevation="0" color="rgb(0, 0, 0, .03)" class=" rounded-lg mt-6" height="100%">
               
           </v-card> 
        
        <v-row>
            <v-col>
                <v-card v-for="(todo, index) in completed" :key="index" :elevation="1" class="mb-3 mx-auto rounded-lg" tile>
                    <v-card-text class="pb-0">
                        <p class="text-subtitle-2 font-weight-bold text--primary">
                            {{todo.body}}
                        </p>
                        <p class="mb-0 text-subtitle-2 font-weight-medium grey--text text--lighten-1">Please replace the text on the top of CTA button from "Request a demo" to "Get Started" </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-chip class="font-weight-bold rounded-lg ma-2 text--darken-4 red--text red lighten-4 ">
                            Planning
                        </v-chip>
                        <v-chip class="font-weight-bold rounded-lg ma-2 text--darken-4 purple--text purple lighten-4 ">
                            Monetization
                        </v-chip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>
<script>
import todoModal from '../modals/todo.vue'
export default {
    components: {
        todoModal
    },

    data() {
        return {
            type: 'Backlog'
        }
    },
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
