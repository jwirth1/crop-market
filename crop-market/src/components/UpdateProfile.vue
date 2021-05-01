<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
                class="rounded slategray"
                name="edit-profile"
                v-bind="attrs"
                v-on="on">
                Update Profile
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Update Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Location"
                                v-model="location"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Contact Information"
                                v-model="contact"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                label="Description"
                                v-model="description"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">
                    Close
                </v-btn>
                <v-btn text @click="UpdateProfile">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UpdateProfile',
    data () {
        return {
            dialog: false,
            description: '',
            location: '',
            contact: ''
        }
    },
    methods: {
        async UpdateProfile() {
            this.dialog = false;
            if (this.description != '') {
                await axios
                    .post(
                        'http://localhost:3000/api/updateDescription',
                        {
                            userId: this.$store.state.userId,
                            type: this.$store.state.type,
                            description: this.description
                        }
                    )
                    .catch(() => {
                        alert('Error updating description');
                    });
            }
            if (this.location != '') {
                await axios
                    .post(
                        'http://localhost:3000/api/updateLocation',
                        {
                            userId: this.$store.state.userId,
                            type: this.$store.state.type,
                            location: this.location
                        }
                    )
                    .catch(() => {
                        alert('Error updating location');
                    });
            }
            if (this.contact != '') {
                await axios
                    .post(
                        'http://localhost:3000/api/updateContact',
                        {
                            userId: this.$store.state.userId,
                            type: this.$store.state.type,
                            contact: this.contact
                        }
                    )
                    .catch(() => {
                        alert('Error updating contact info');
                });
            }

            window.location.reload(true);
        },
    }
}
</script>
