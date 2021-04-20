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
    data () {
        return {
            items: null
        }
    },
    async created () {
        const response = await this.$store.getters.getItems;
        this.items = response;
    }
}
</script>
