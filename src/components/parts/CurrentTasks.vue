<template>
    <v-row class="mt-4">
        <v-col v-for="(column, title) in draggableCards" :key="title">
            <v-row>
                <v-col class="justify-space-between d-flex align-center">
                    <h4 class="grey--text text--darken-2">{{column.title}}
                        <span class="mx-2 grey--text text--lighten-1">
                            {{column.tasks.length}}
                        </span>
                    </h4>
                    <newTodoModal :col="column.tasks" :type="column.title"></newTodoModal>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <draggable @change="onUnpublishedChange" v-model="column.tasks" :animation="200" ghost-class="ghost-card" group="cards">
                        <v-card v-for="(task, index) in column.tasks" :key="index" :elevation="1" class="mb-3 mx-auto rounded-lg">
                            <v-card-text class="pb-0 d-flex justify-space-between">
                                <p class="mb-2 text-subtitle-2 font-weight-bold text--primary">
                                    {{task.title}}
                                </p>
                                <div>
                                <editTodoModal :item="task" :index="index" :col="column.tasks" :type="column.title"></editTodoModal>
                                <v-btn @click="remove(column.tasks, task, index)" fab x-small class="elevation-0 lighten-4 white" width="20px" height="20px">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                </div>
                            </v-card-text>
                            <v-card-text class="pb-0 pt-0">
                                <p class="mb-0 text-subtitle-2 font-weight-medium grey--text text--lighten-1">{{task.description}} </p>
                            </v-card-text>
                            <v-card-actions>
                                <v-chip v-for="(chip, index) in task.chips" :key="index" class="font-weight-bold rounded-lg ma-2 text--darken-4 red--text red lighten-4 ">
                                    {{chip}}
                                </v-chip>
                            </v-card-actions>
                        </v-card>
                    </draggable>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
import draggable from "vuedraggable";
import newTodoModal from '../modals/newTodo.vue'
import editTodoModal from '../modals/editTodo.vue'
export default {
    name: 'CurrentTasks',
    components: {
        draggable,
        newTodoModal,
        editTodoModal
    },

    data() {
        return {

            editable: true,
            type: 'todo',
        }
    },

    methods: {


        onUnpublishedChange() {

            console.log('ss');
            this.$store.commit("setCardcolumns", this.draggableCards);
            //this.$store.dispatch('completeTodo', added.element)


        },

        markAsCompleted(todo) {

            this.$store.dispatch('completeTodo', todo)
        },
        remove(col, task, index) {
            console.log(col)
            console.log(task);
            console.log(index);

            this.$store.dispatch('removeTodo', {col:col,task:task, index:index})
        }
    },

    computed: {


        draggableCards: {
            get() {
                //console.log(this.$store.getters.allColumns);
                return this.$store.getters.allColumns
            },
            set(val) {
                console.log(val)
                this.$store.commit("setCardcolumns", val);
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
