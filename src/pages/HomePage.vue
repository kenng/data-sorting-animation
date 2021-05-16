<template lang="pug">
q-page.iw-page.iw-page-home
    h4.text-center Visualizing Sorting Algorithms
        .text-subtitle1 with interactive animation

    GraphIndex

    .row.items-center.justify-evenly.q-mt-xl
        SummaryTable
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GraphIndex from 'components/graph/GraphIndex.vue';
import SummaryTable from 'components/graph/SummaryTable.vue';

export default defineComponent({
    name: '',
    mixins: [],
    components: {
        GraphIndex,
        SummaryTable,
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
