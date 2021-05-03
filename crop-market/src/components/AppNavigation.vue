<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="blue lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="blue accent-4" dark>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title class="rounded" to="/">{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <span v-if="isLoggedIn">
                <v-row>
                    <v-col cols="2">
                        <v-text-field single-line dense class="hidden-sm-and-down search" label="Search" v-model="searchParam"></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-select class="hidden-sm-and-down search" :items="searchTypes" v-model="searchType"></v-select>
                    </v-col>
                    <v-col cols="8">
                        <v-btn class="hidden-sm-and-down searchButton" fab @click="search">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                        <v-btn text class="hidden-sm-and-down" to="/listings">
                            LISTINGS
                        </v-btn>
                        <v-btn text class="hidden-sm-and-down" to="/farmers">
                            FARMERS
                        </v-btn>
                        <v-btn text class="hidden-sm-and-down" to="/service-providers">
                            SERVICE PROVIDERS
                        </v-btn>
                        <v-btn text class="hidden-sm-and-down" to="/profile">
                            PROFILE
                        </v-btn>
                        <v-btn text class="hidden-sm-and-down" id="logout" to="/" @click="logout">
                            LOG OUT
                        </v-btn>
                    </v-col>
                </v-row>
            </span>
            <span v-else>
                <v-btn text class="hidden-sm-and-down" to="/log-in">
                    LOG IN
                </v-btn>
                <v-btn
                    color="blue lighten-2"
                    class="hidden-sm-and-down"
                    to="/sign-up"
                >
                    SIGN UP
                </v-btn>
            </span>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    computed: {
        isLoggedIn: function() {
            return this.$store.state.user;
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch('LogOut');
            this.$router.push('/');
        },
        async search() {
            await this.$store.dispatch('SearchItem', { 
                searchParam: this.searchParam, 
                type: this.searchType 
            });
            if (this.searchParam != '') {
                this.$router.push({ name: 'Search-Item', params: { type: this.searchType, param: this.searchParam }});
            }
            else {
                this.$router.push({ name: 'Search-Item', params: { type: this.searchType, param: 'all' }});
            }
        }
    },
    data() {
        return {
            appTitle: 'The Crop Market',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Log In' },
                { title: 'Sign Up' }
            ],
            searchTypes: ['Crop', 'Service'],
            searchParam: '',
            searchType: 'Crop'
        };
    }
};
</script>

<style scoped>
.v-toolbar__title {
    border: solid 2px transparent;
    /*border-radius: 6px;*/
    background-color: yellowgreen;
    padding: 4px;
    color: #fff;
    text-decoration: underline;
    text-decoration-color: yellowgreen;
}
.hidden-sm-and-down {
    margin: 5px;
}
#logout {
    background-color: coral;
}
.searchButton {
    scale: 60%;
}
.search {
    position: relative;
    top: 25%;
}
</style>
