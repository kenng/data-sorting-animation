<template lang="pug">
tr.iw-com-graph-insertion
    th
        PlayBtn(
            :onClickFn='togglePlayBubble',
            label='Bubble'
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
import { BubbleSort } from 'algorithms/BubbleSort';
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
                graph: new BubbleSort(data.random),
                type: EDataType.RANDOM,
                sort: ESortType.BUBBLE,
            },
            {
                graph: new BubbleSort(data.reversed),
                type: EDataType.REVERSED,
                sort: ESortType.BUBBLE,
            },
            {
                graph: new BubbleSort(data.few_unique),
                type: EDataType.FEW_UNIQUE,
                sort: ESortType.BUBBLE,
            },
            {
                graph: new BubbleSort(data.nearly_sorted),
                type: EDataType.NEARLY_SORTED,
                sort: ESortType.BUBBLE,
            },
        ];
    },
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
