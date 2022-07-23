<template>
    <v-col>
        <v-row>
            <v-col class="justify-space-between d-flex align-center">
                <h4 class="grey--text text--darken-2">TO DO <span class="mx-2 grey--text text--lighten-1">{{todos.length}}</span></h4>
                <todoModal v-bind:type="type"></todoModal>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <draggable v-model="myArray" group="people">
                   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
                </draggable>
                <draggable v-model="myArray" group="people">
                   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
                </draggable>

                {{draggableCards}} 
                <br>
                <br>
                {{allTodos}}   
                <br>
                <br>       
                <draggable group="cards" class="row wrap" v-model="draggableCards">
                    
                    <v-card v-for="(todo, index) in draggableCards" :key="index" :elevation="1" class="mb-3 mx-auto rounded-lg" tile>
                        <v-card-text class="pb-0 d-flex justify-space-between">
                            <p class="text-subtitle-2 font-weight-bold text--primary">
                                {{todo.body}}
                            </p>
                            <v-btn @click="remove(todo)" fab x-small class="elevation-0 lighten-4 white" width="20px" height="20px">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-text class="pb-0">
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
    name: 'CurrentTasks',
    components: {
        draggable,
        todoModal
    },

    data() {
        return {
            editable: true,
            type: 'todo',
            myArray2: [{
                    'body': '1st body',
                    'completed': true
                },
                {
                    'body': '2nd body',
                    'completed': false
                }
            ],
            myArray: [
            {'name':'Aymen'},
            {'name':'Ayoub'}

            ],
            myArray3: [
            {'name':'Ali'},
            {'name':'Asma'}

            ]
        }
    },

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
        
        draggableCards: {
            get() {
                return this.$store.getters.todos
            },
            set(val) {
                console.log(val)
                this.$store.commit("setCardTodo", val);
            }
        },
        todos() {
            return this.$store.getters.todos
        },
        allTodos() {
            return this.$store.getters.allTodos
        }
    }

}

</script>
