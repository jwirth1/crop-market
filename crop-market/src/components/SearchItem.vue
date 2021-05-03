<template>
    <v-container fluid fill-height class="hello">
        <v-layout column>
            <v-row>
                <v-col cols="4" v-for="item in items" :key="item._id">
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ item.name }}</span>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="ViewLister(item.user_id)">
                                View Profile
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchItem',
    data() {
        return {
            searchQuery: this.$store.state.searchParam,
            type: this.$store.state.searchType,
            items: null,
        }
    },
    methods: {
        async ViewLister(userId) {
            this.$store.dispatch('ViewUser', {
                userId: userId,
                type: this.type
            });
        }
    },
    async created () {
        let itemList;
        if (this.type == 'Crop') {
            await axios
                .get('http://localhost:3000/api/findCrops',
                    {
                        params: {
                            crop: this.searchQuery
                        }
                    }
                )
                .then((response) => {
                    itemList = response.data.crops;
                })
                .catch(() => {
                    alert('Error: no crops found');
                    return null;
                });
            this.items = itemList;
        }
        else {
            await axios
                .get('http://localhost:3000/api/findServices',
                    {
                        params: {
                            service: this.searchQuery
                        }
                    }
                )
                .then((response) => {
                    itemList = response.data.services;
                })
                .catch(() => {
                    alert('Error: no crops found');
                    return null;
                });
            this.items = itemList;
        }
    }
}
</script>

<style>
.hello {
    background: url('https://drive.google.com/uc?id=16_Tl881mxHEWJimCNtkGUPQiJtEUXHvg');
    background-size: cover;
    color: blue;
    position: relative;
}
</style>
