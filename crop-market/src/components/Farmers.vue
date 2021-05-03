<template>
    <v-container fluid fill-height class="hello">
        <v-layout column>
            <v-row>
                <v-col cols="4" v-for="farmer in farmers" :key="farmer.name">
                    <v-card>
                        <div>
                             <h1>{{ farmer.name }}</h1>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Farmers',
    data () {
        return {
            farmers: null,
        }
    },
    async created () {
        const response = await this.$store.getters.getFarmers;
        this.farmers = response;
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