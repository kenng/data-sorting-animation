<template lang="pug">
q-page.iw-page.iw-page-home
    GraphIndex
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GraphIndex from 'components/graph/GraphIndex.vue';

export default defineComponent({
    name: '',
    mixins: [],
    components: {
        GraphIndex,
    },
    props: {},
    data: function () {
        return {};
    },
    watch: {},
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
