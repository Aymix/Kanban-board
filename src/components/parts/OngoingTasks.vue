<template>
    <v-col>
        <v-row>
            <v-col class="justify-space-between d-flex align-center">
                <h4 class="grey--text text--darken-2">IN PROGRESS <span class="mx-2 grey--text text--lighten-1">{{completed.length}}</span></h4>
                <todoModal v-bind:type="type"></todoModal>
            </v-col>
        </v-row>
       
        <v-row>
            <v-col>
                {{draggableCards}}
                

                <draggable @change="onUnpublishedChange"  group="cards" v-model="draggableCards">
                <v-card  v-for="(todo, index) in draggableCards" :key="index" :elevation="1" class="mb-3 mx-auto rounded-lg" tile>
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
                </draggable>
            </v-col>
        </v-row>
    </v-col>
</template>
<script>
import draggable from "vuedraggable";

import todoModal from '../modals/todo.vue'
export default {
    components: {
        draggable,
        todoModal
    },

    data() {
        return {
            editable: true,
            type: 'In Progress',
            
        }
    },
    methods: {
         onUnpublishedChange({ added }) {
          if (added) {
            
            this.$store.dispatch('completeTodo', added.element)
            
          }
        },
        onCompleted(todo) {
                this.$store.dispatch('completeTodo', todo)
            
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        
        draggableCards: {
            get() {
                return this.$store.state.completed;
            },
            set(val) { 
                console.log(this.$store.state.completed);  
                this.$store.commit("setCardCompleted", val);
            }
        },
        completed() {
            return this.$store.getters.completedTodos
        }
    }
}

</script>
