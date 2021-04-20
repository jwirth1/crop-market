<template>
    <span>
        <items></items>
        <desires></desires>
    </span>
</template>

<script>
import Items from '@/components/Items';
import Desires from '@/components/Desires';

export default {
    name: 'test-items',
    components: {
        Items, Desires
    }
};
</script>
