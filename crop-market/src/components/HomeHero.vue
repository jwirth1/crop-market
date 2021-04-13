<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black text-xs-center">
                The Crop Market
            </div>
            <div class="display-1 font-weight-bold text-xs-center">
                The #1 Place for Farmers to Barter
            </div>
            <v-btn fab class="mt-5 blue accent-4" name="nav-down">
                <v-icon large color="white">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://images.unsplash.com/photo-1528952686551-542043782ab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80');
    background-size: cover;
    width: 100%;
    height: 100%;
    color: white;
    text-shadow: 2px 2px black;
}
</style>
