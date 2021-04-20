<template>
    <ul id="items-list">
        <li v-for="item in this.items" :key="item.name">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
module.exports = {
    data: function () {
        let user = this.$store.getters.GetUser();
        console.log(user);
        let items;
        if (this.$store.state.type == 'Service Provider') {
            items = user.services;
        }
        else {
            items = user.crops;
        }
        return {
            items: items
        }
    }
}
</script>
