<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
                fab 
                class="mt-5 white accent-4" 
                name="add" 
                :style="{left: '25%', 
                         top: '-30%',
                         transform: 'translateX(0%)'
                        }"
                v-bind="attrs"
                v-on="on">
                <v-icon>mdi-plus-box-outline</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Add Listing</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Listing Name"
                                v-model="listing"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn text @click="AddItem">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddItem',
    data () {
        return {
            dialog: false,
            listing: ''
        }
    },
    methods: {
        async AddItem() {
            axios
                .post(
                    'http://localhost:3000/api/addItem',
                    {
                        userId: this.$store.state.userId,
                        type: this.$store.state.type,
                        item: this.listing
                    }
                )
                .then(() => {
                    window.location.reload(true);
                })
                .catch(() => {
                    alert('Error adding item');
                });
            this.dialog = false;
        }
    }
}
</script>
