<template lang="pug">
tr.iw-com-graph-insertion
    th
        PlayBtn(
            :onClickFn='togglePlayInsertion',
            label='Insertion'
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
import { InsertionSort } from 'algorithms/InsertionSort';
import { data, EDataType, ESortType } from 'src/data';

export default defineComponent({
    name: 'InsertionGraph',
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
                graph: new InsertionSort(data.random),
                type: EDataType.RANDOM,
                sort: ESortType.INSERTION,
            },
            {
                graph: new InsertionSort(data.reversed),
                type: EDataType.REVERSED,
                sort: ESortType.INSERTION,
            },
            {
                graph: new InsertionSort(data.few_unique),
                type: EDataType.FEW_UNIQUE,
                sort: ESortType.INSERTION,
            },
            {
                graph: new InsertionSort(data.nearly_sorted),
                type: EDataType.NEARLY_SORTED,
                sort: ESortType.INSERTION,
            },
        ];
    },
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
