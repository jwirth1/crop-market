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
    props: {
        viewed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            description: null
        }
    },
    async created () {
        if (this.viewed) {
            const response = await this.$store.getters.getViewedUser;
            this.description = response.description;
        }
        else {
            const response = await this.$store.getters.getUser;
            this.description = response.description;
        }
    }
}
</script>
