<template>
    <v-dialog  v-model="dialog" persistent max-width="350px">
        <template class="elevation-0" v-slot:activator="{ on, attrs }">
            <v-btn color="grey" v-bind="attrs" v-on="on" fab x-small class="elevation-0 lighten-4 white" width="20px" height="20px">
                <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
        </template>
        <v-card class="rounded-lg ">
            <v-card-title class="d-flex align-items-center justify-space-between">
                <span class="text-h6">Edit card </span>
                <span class="text-subtitle-2 grey lighten-2 pt-1 pb-1 pr-2 pl-2 rounded-lg text-capitalize">{{type}}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        {{item}}
                        <v-form>
                            <v-col class="pt-0 pb-0 pl-0 pr-0" cols="12" sm="6" md="12">
                                <v-text-field  v-model="item.title"  label="Enter a title for this card...*" outlined></v-text-field>
                            </v-col>
                            <v-col class="pt-0 pb-0 pl-0 pr-0" cols="12" sm="6" md="12">
                                <v-textarea v-model="item.description" outlined name="input-7-4" label="Add more detailed description...*">
                                </v-textarea>
                            </v-col>
                            <v-col class="pt-0 pb-0 pl-0 pr-0" cols="12" sm="6" md="12">
                                <v-select :items="items" v-model="item.chips" chips label="Chips" multiple outlined></v-select>
                            </v-col>
                        </v-form>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="edit">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
	props: ['item','type','col','index'],
    data: () => ({
         
        dialog: false,
        items: ['Planning', 'Monetization'],
    }),
     methods: {

		edit() {
            
            this.$store.dispatch('editTodo', { col: this.col, task: this.item, index: this.index })
            this.dialog = false
        }
        
    },
    computed: {
        newTodo() {
            return this.$store.getters.newTodo
        }
    }
}

</script>
