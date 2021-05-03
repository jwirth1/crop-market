<template>
    <v-container fluid>
        <div>
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
    props: {
        viewed: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            desires: null
        }
    },
    async created () {
        if (this.viewed) {
            const response = await this.$store.getters.getViewedDesires;
            this.desires = response;
        }
        else {
            const response = await this.$store.getters.getDesires;
            this.desires = response;
        }
    }
}
</script>
