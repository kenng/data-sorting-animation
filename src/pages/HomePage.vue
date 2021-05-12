<template lang="pug">
q-page.iw-page.iw-page-home
    h4.text-center Visualizing Sorting Algorithms
        .text-subtitle1 with interactive animation

    GraphIndex

    .q-mt-xs.text-center Graph animation was inspired by&nbsp;
        a.q-link(
            href='https://www.toptal.com/developers/sorting-algorithms'
        ) Toptal
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
