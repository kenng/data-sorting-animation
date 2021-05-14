<template lang="pug">
tr.iw-com-graph-insertion
    th
        PlayBtn(
            :onClickFn='togglePlaySelection',
            label='Selection'
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
import { SelectionSort } from 'algorithms/SelectionSort';
import { data, EDataType, ESortType } from 'src/data';

export default defineComponent({
    name: 'SelectionGraph',
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
                graph: new SelectionSort(data.random()),
                type: EDataType.RANDOM,
                sort: ESortType.SELECTION,
            },
            {
                graph: new SelectionSort(data.reversed()),
                type: EDataType.REVERSED,
                sort: ESortType.SELECTION,
            },
            {
                graph: new SelectionSort(data.fewUnique()),
                type: EDataType.FEW_UNIQUE,
                sort: ESortType.SELECTION,
            },
            {
                graph: new SelectionSort(data.nearlySorted()),
                type: EDataType.NEARLY_SORTED,
                sort: ESortType.SELECTION,
            },
        ];
    },
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
