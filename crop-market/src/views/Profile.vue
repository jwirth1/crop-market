<template>
    <v-container fluid fill-height class="profile">
        <v-layout column>
                <v-row>
                    <v-col cols="3">
                        <v-card>
                            <div class="profilePicandEdit">
                                <h1>Profile Pic</h1>
                            </div>
                            <v-btn class="rounded slategray" name="edit-profile">
                                Edit Profile
                            </v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card>
                            <div class="profileInfo">
                                <div>
                                    <h1>Jane's Cleaning Parlor</h1>
                                </div>
                                <div>
                                    <h2>Charlotte, NC</h2>
                                </div>
                                <div>
                                    Rating
                                </div>
                                <div>
                                    <h3>Contact</h3>
                                    <h5>jane@janesclean.com</h5>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card>
                            <div class="description">
                                <h1>Description</h1>
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
                                        <h1>Services</h1>
                                    </v-col>
                                    <v-col>
                                        <v-btn fab class="mt-5 white accent-4" name="add">
                                            <v-icon>mdi-plus-box-outline</v-icon>
                                        </v-btn>
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
                                        <h1>Desires</h1>
                                    </v-col>
                                    <v-col>
                                        <v-btn fab class="mt-5 white accent-4" name="add">
                                            <v-icon>mdi-plus-box-outline</v-icon>
                                        </v-btn>
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