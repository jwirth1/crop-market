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
                                    <main-info viewed=true></main-info>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <div class="description">
                                <description viewed=true></description>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="4">
                        <v-card>             
                            <div class="services">
                                <v-rows>
                                    <v-col>
                                        <items viewed=true></items>
                                    </v-col>
                                </v-rows>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <div class="desires">
                                <v-rows>
                                    <v-col>
                                        <desires viewed=true></desires>
                                    </v-col>
                                </v-rows>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <div class="Reviews">
                                <h1>Reviews</h1>
                            </div>
                            <v-rows>
                                <v-col>
                                    <v-btn fab class="mt-5 white accent-4" name="add">
                                        <v-icon>mdi-plus-box-outline</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-rows>
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

export default {
    name: 'viewedProfile',
    components: {
        Items, Desires, Description, MainInfo
    }
};
</script>