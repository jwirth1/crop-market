<template>
    <v-container fluid fill-height class="profile">
        <v-layout column>
                <v-row>
                    <v-col cols="3">
                        <v-card>
                            <div class="profilePic">
                                <h1>Profile Pic</h1>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card>
                            <div class="profileInfo">
                                <div>
                                    <main-info :viewed=true></main-info>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <div class="description">
                                <description :viewed=true></description>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-card>             
                            <v-card-title>
                                <span class="headline">Services</span>
                            </v-card-title>
                            <div class="services">
                                <v-row>
                                    <v-col>
                                        <items :viewed=true></items>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Desires</span>
                            </v-card-title>
                            <div class="desires">
                                <v-row>
                                    <v-col>
                                        <desires :viewed=true></desires>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Reviews</span>
                                <v-spacer></v-spacer>
                                <add-review></add-review>
                            </v-card-title>
                            <div class="Reviews">
                                <v-row>
                                    <v-col>
                                        <reviews :viewed=true></reviews>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
    </v-container>
</template>

<style scoped>

.edit-profile{
    color: white;
}

.profile {
    background: url('https://drive.google.com/uc?id=16_Tl881mxHEWJimCNtkGUPQiJtEUXHvg');
    background-size: cover;
}
</style>

<script>
import Items from '@/components/Items';
import Desires from '@/components/Desires';
import Description from '@/components/Description';
import MainInfo from '@/components/MainInfo';
import AddReview from '@/components/AddReview';
import Reviews from '@/components/Reviews';

export default {
    name: 'viewedProfile',
    components: {
        Items, Desires, Description, MainInfo, AddReview, Reviews
    }
};
</script>