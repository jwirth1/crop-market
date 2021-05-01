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
                <span class="headline">Add Desire</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Desire Name"
                                v-model="desire"
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
                <v-btn text @click="AddDesire">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddDesire',
    data () {
        return {
            dialog: false,
            desire: ''
        }
    },
    methods: {
        async AddDesire() {
            axios
                .post(
                    'http://localhost:3000/api/addDesire',
                    {
                        userId: this.$store.state.userId,
                        type: this.$store.state.type,
                        desire: this.desire
                    }
                )
                .then(() => {
                    window.location.reload(true);
                })
                .catch(() => {
                    alert('Error adding desire');
                });
            this.dialog = false;
        },
    }
}
</script>
