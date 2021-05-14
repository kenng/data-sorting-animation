<template lang="pug">
tr.iw-com-graph-insertion
    th
        PlayBtn(
            :onClickFn='togglePlayMerge',
            label='Merge'
        )
    td(
        v-for='theGraph in graphs'
    )
        //- div {{ theGraph }}
        Graph.col-12(
            :sortInstance='theGraph.graph',
            :dataType='theGraph.type',
            :sortType='theGraph.sort'
        )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Graph from 'src/components/graph/Graph.vue';
import PlayMixin from 'src/mixins/play-mixin.vue';
import PlayBtn from 'components/PlayBtn.vue';
import { MergeSort } from 'algorithms/MergeSort';
import { data, EDataType, ESortType } from 'src/data';

export default defineComponent({
    name: 'MergeGraph',
    mixins: [PlayMixin],
    props: {},
    components: { Graph, PlayBtn },
    data: function () {
        return {};
    },
    watch: {},
    computed: {},
    created: function () {
        this.graphs = [
            {
                graph: new MergeSort(data.random()),
                type: EDataType.RANDOM,
                sort: ESortType.MERGE,
            },
            {
                graph: new MergeSort(data.reversed()),
                type: EDataType.REVERSED,
                sort: ESortType.MERGE,
            },
            {
                graph: new MergeSort(data.fewUnique()),
                type: EDataType.FEW_UNIQUE,
                sort: ESortType.MERGE,
            },
            {
                graph: new MergeSort(data.nearlySorted()),
                type: EDataType.NEARLY_SORTED,
                sort: ESortType.MERGE,
            },
        ];
    },
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
