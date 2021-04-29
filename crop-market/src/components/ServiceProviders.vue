<template>
    <v-container fluid fill-height class="hello">
        <v-layout column>
            <v-row>
                <v-col cols="4" v-for=" provider in providers" :key="provider.name">
                    <v-card>
                        <div>
                             <h1>{{ provider.name }}</h1>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Providers',
    data () {
        return {
            providers: null,
        }
    },
    async created () {
        const response = await this.$store.getters.getServiceProviders;
        this.providers = response;
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