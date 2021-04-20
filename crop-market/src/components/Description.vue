<template>
    <v-container fluid>
        <div>
            <h1>Description</h1>
            {{ description }}
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Description',
    data () {
        return {
            description: null
        }
    },
    async created () {
        const response = await this.$store.getters.getUser;
        this.description = response.description;
    }
}
</script>
