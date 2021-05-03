<template>
    <v-container fluid>
        <div>
            <ul id="review-list">
                <li v-for="review in reviews" :key="review.review_id">
                    <h3>{{ review.name }}</h3>
                    <h3>Rating: {{ review.rating }}</h3>
                    {{ review.description }}
                </li>
            </ul>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Reviews',
    props: {
        viewed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            reviews: null
        }
    },
    async created () {
        if (this.viewed) {
            const response = await this.$store.getters.getViewedReviews;
            this.reviews = response;
        }
        else {
            const response = await this.$store.getters.getReviews;
            this.reviews = response;
        }
    }
}
</script>
