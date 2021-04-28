<template>
    <v-container fluid>
        <div>
            <h1>Listings</h1>
            <ul id="items-list">
                <li v-for="item in items" :key="item.name">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Items',
    props: {
        viewed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            items: null
        }
    },
    async created () {
        if (this.viewed) {
            const response = await this.$store.getters.getViewedItems;
            this.items = response;
        }
        else {
            const response = await this.$store.getters.getItems;
            this.items = response;
        }
    }
}
</script>
