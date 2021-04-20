<template>
    <span>
        <items></items>
        <desires></desires>
        <description></description>
        <main-info></main-info>
    </span>
</template>

<script>
import Items from '@/components/Items';
import Desires from '@/components/Desires';
import Description from '@/components/Description';
import MainInfo from '@/components/MainInfo';

export default {
    name: 'test-items',
    components: {
        Items, Desires, Description, MainInfo
    }
};
</script>
