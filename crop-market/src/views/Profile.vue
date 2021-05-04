<template>
    <v-container fluid fill-height class="profile">
        <v-layout column>
            <v-row>
                <v-col cols="3">
                    <v-flex>
                        <v-card>
                            <div class="profilePicandEdit">
                                <v-card-title>
                                    <span class="headline">Profile Pic</span>
                                </v-card-title>
                            </div>
                            <update-profile></update-profile>
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
                    <div class="description">
                        <description></description>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card>
                        <div class="services">
                            <v-row>
                                <v-col>
                                    <v-card-title>
                                        <span class="headline">Listings</span>
                                    </v-card-title>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col>
                                    <add-item></add-item>
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
                                <v-card-title>
                                    <v-col>
                                        <span class="headline">Desires</span>
                                    </v-col>
                                </v-card-title>
                                <v-spacer></v-spacer>
                                <v-spacer></v-spacer>
                                <v-col>
                                    <add-desire></add-desire>
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
                                <v-col>
                                    <v-card-title>
                                        <span class="headline">Reviews</span>
                                        <v-spacer></v-spacer>
                                    </v-card-title>
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
.edit-profile {
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
import AddItem from '@/components/AddItem';
import AddDesire from '@/components/AddDesire';
import UpdateProfile from '@/components/UpdateProfile';

export default {
    name: 'profile',
    components: {
        Items,
        Desires,
        Description,
        MainInfo,
        Reviews,
        AddItem,
        AddDesire,
        UpdateProfile,
    },
};
</script>
