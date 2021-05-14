<template lang="pug">
tr.iw-com-graph-insertion
    th
        PlayBtn(
            :onClickFn='togglePlayQuick',
            label='Quick'
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
import { QuickSort } from 'algorithms/QuickSort';
import { data, EDataType, ESortType } from 'src/data';

export default defineComponent({
    name: 'QuickGraph',
    mixins: [PlayMixin],
    props: {},
    components: { Graph, PlayBtn },
    data: function () {
        return {};
    },
    watch: {},
    computed: {},
    created: function () {
        console.log('graph created');
        this.graphs = [
            {
                graph: new QuickSort(data.random()),
                type: EDataType.RANDOM,
                sort: ESortType.QUICK,
            },
            {
                graph: new QuickSort(data.reversed()),
                type: EDataType.REVERSED,
                sort: ESortType.QUICK,
            },
            {
                graph: new QuickSort(data.fewUnique()),
                type: EDataType.FEW_UNIQUE,
                sort: ESortType.QUICK,
            },
            {
                graph: new QuickSort(data.nearlySorted()),
                type: EDataType.NEARLY_SORTED,
                sort: ESortType.QUICK,
            },
        ];
    },
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
