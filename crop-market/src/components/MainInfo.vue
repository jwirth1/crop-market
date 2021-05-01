<template>
    <v-container fluid>
        <div>
            <h1>Main Info</h1>
            <h1>{{ name }}</h1>
            <h2>{{ location }}</h2>
            <h2>Rating: {{ rating }}</h2>
            <h3>Contact</h3>
            <b>{{ contact }}</b>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'MainInfo',
    props: {
        viewed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            name: null,
            location: null,
            contact: null,
            rating: null
        }
    },
    async created () {
        if (this.viewed) {
            const response = await this.$store.getters.getViewedUser;
            this.name = response.name;
            this.location = response.location;
            this.contact = response.contact;
            if (response.rating === undefined) {
                this.rating = 'No ratings yet!';
            }
            else {
                this.rating = response.rating;
            }
        }
        else {
            const response = await this.$store.getters.getUser;
            this.name = response.name;
            this.location = response.location;
            this.contact = response.contact;
            if (response.rating === undefined) {
                this.rating = 'No ratings yet!';
            }
            else {
                this.rating = response.rating;
            }
        }
    }
}
</script>
