<template>
    <v-container fluid fill-height class="hello">
        <div>
            <ul>
                <li v-for="farmer in farmers" :key="farmer.name">
                    <h1>{{ farmer.name }}</h1>
                </li>
            </ul>
        </div>
        <h1>Hello</h1>
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
#hello {
    color: blue;
    position: relative;
}
</style>