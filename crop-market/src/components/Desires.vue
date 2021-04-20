<template>
    <v-container fluid>
        <div>
            <h1>Desires</h1>
            <ul id="desires-list">
                <li v-for="desire in desires" :key="desire">
                    {{ desire }}
                </li>
            </ul>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Desires',
    data () {
        return {
            desires: null
        }
    },
    async created () {
        const response = await this.$store.getters.getDesires;
        console.log(response);
        this.desires = response;
    }
}
</script>
