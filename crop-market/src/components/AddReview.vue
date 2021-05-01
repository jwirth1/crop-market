<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn 
                fab 
                class="mt-5 white accent-4" 
                name="add" 
                v-bind="attrs"
                v-on="on">
                <v-icon>mdi-plus-box-outline</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Add Review</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="9">
                            Rating:
                        </v-col>
                        <v-col cols="3">
                            <v-select 
                                :items="ratingChoices" 
                                label="0-5"
                                v-model="rating"
                                required
                            ></v-select>
                        </v-col>    
                        <v-col cols="12">
                            <v-textarea
                                label="Review"
                                v-model="review"
                                required
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
                <v-btn text @click="AddReview">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddReview',
    data () {
        return {
            ratingChoices: [1, 2, 3, 4, 5],
            dialog: false,
            rating: null,
            review: ''
        }
    },
    methods: {
        async AddReview() {
            if (this.rating === null) {
                alert('You must choose a rating');
            }
            else if (this.review === '') {
                alert('You must enter a review');
            }
            else {
                this.dialog = false;
                axios
                    .post(
                        'http://localhost:3000/api/addReview',
                        {
                            userId: this.$store.state.viewedUserId,
                            type: this.$store.state.viewedUserType,
                            name: this.$store.state.user.name,
                            rating: this.rating,
                            description: this.review
                        }
                    )
                    .then(() => {
                        window.location.reload(true);
                    })
                    .catch(() => {
                        alert('Error adding review');
                    });
            }
        }
    }
}
</script>
