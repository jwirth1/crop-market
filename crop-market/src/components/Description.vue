<template>
    <v-container fluid>
        <div>
            <v-card>
                <v-card-title>
                    <span class="headline">Description</span>
                </v-card-title>
                <v-card-text>
                    <h3>{{ description }}</h3>
                </v-card-text>
            </v-card>
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
