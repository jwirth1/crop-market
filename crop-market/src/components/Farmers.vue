<template>
<v-container fluid fill-height class="hello">
    <div>
        <div v-for="farmer in farmers" v-bind:key="farmer.name">
            <h1>{{ farmer.name }}</h1>
        </div>
    </div>
    <h1>Hello</h1>
</v-container>

</template>

<script>
export default {
    name: 'farm',
    data() {
        return { }
    },
    computed: {
        farmers() {
           return this.$store.getters.getFarmers;
        }
    }
}
</script>
<style>
#hello {
    color: blue;
    position: relative;
}
</style>