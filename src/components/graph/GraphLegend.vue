<template lang="pug">
.iw-com-graph-legend.row.flex-center
    .col-md-8.col-xs-12.row.justify-center
        .iw-graph-line.circle
        .q-mx-sm Unsorted

        .iw-graph-line.circle.sorted
        .q-mx-sm Sorted

        .iw-graph-legend.pointer
        .q-mx-sm Current Position
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import 'css/graph.css';

export default defineComponent({
    name: '',
    mixins: [],
    components: {},
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

<style scoped>
.iw-com-graph-legend {
    font-size: 12px;
}
.iw-graph-legend {
    margin: 0;
    margin-top: 2px;
    margin-bottom: 2px;
}

.iw-graph-legend.pointer {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #f44336;
}

.iw-graph-line.circle {
    width: 14px;
    border-radius: 50%;
}
</style>
