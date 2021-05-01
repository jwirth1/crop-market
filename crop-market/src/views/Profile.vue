<template>
    <v-container fluid fill-height class="profile">
        <v-layout column>
            <v-row>
                <v-col cols="3">
                    <v-flex>
                        <v-card>
                            <div class="profilePicandEdit">
                                <h1>Profile Pic</h1>
                            </div>
                            <v-btn class="rounded slategray" name="edit-profile">
                                Edit Profile
                            </v-btn>
                        </v-card>
                    </v-flex>
                </v-col>
                <v-col cols="5">
                    <v-card>
                        <div class="profileInfo">
                            <div>
                                <main-info></main-info>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <div class="description">
                            <description></description>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card>             
                        <div class="services">
                            <v-row>
                                <v-col class = "listANDdesirebox">
                                    <h1>Listings</h1>
                                </v-col>
                                <v-col>
                                    <v-btn fab class="mt-5 white accent-4" name="add" :style="{left: '25%', top: '-30%', transform:'translateX(0%)'}">
                                        <v-icon>mdi-plus-box-outline</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <items></items>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <div class="desires">
                            <v-row>
                                <v-col class = "listANDdesirebox">
                                    <h1>Desires</h1>
                                </v-col>
                                <v-col>
                                    <v-btn fab class="mt-5 white accent-4" name="add" :style="{left: '25%', top: '-30%', transform:'translateX(0%)'}">
                                        <v-icon>mdi-plus-box-outline</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <desires></desires>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                        <div class="Reviews">
                            <v-row>
                                <v-col class = "listANDdesirebox">
                                    <h1>Reviews</h1>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <reviews></reviews>
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

.profileInfo {
    text-align: center;
}

.profilePicandEdit {
    text-align: center;
}

.listANDdesirebox {
    text-align: center;
    text-decoration: underline;
}

</style>

<script>
import Items from '@/components/Items';
import Desires from '@/components/Desires';
import Description from '@/components/Description';
import MainInfo from '@/components/MainInfo';
import Reviews from '@/components/Reviews';

export default {
    name: 'profile',
    components: {
        Items, Desires, Description, MainInfo, Reviews
    }
};
</script>