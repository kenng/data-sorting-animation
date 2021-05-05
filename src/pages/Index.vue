<template lang="pug">
q-page.row.items-center.justify-evenly.iw-page.iw-page-graph-index
    table.col-md-8.col-xs-12
        thead
            th
                PlayBtn(
                    :onClickFn='togglePlayAll',
                    label='All'
                )
            th
                PlayBtn(
                    :onClickFn='togglePlayRandom',
                    label='Random'
                )
            th
                PlayBtn(
                    :onClickFn='togglePlayReversed',
                    label='Reversed'
                )
            th
                PlayBtn(
                    :onClickFn='togglePlayFewUnique',
                    label='Few Uniqued'
                )
            th
                PlayBtn(
                    :onClickFn='togglePlayNearlySorted',
                    label='Nearly Sorted'
                )

        tbody
            tr(
                v-for='graph in graphs'
            )
                th
                    PlayBtn(
                        :onClickFn='togglePlayInsertion',
                        label='Insertion'
                    )
                td(
                    v-for='theGraph in graph'
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
import Graph from 'components/Graph.vue';
import { InsertionSort } from 'algorithms/InsertionSort';
import { data, EDataType, ESortType } from 'src/data';
import PlayMixin from 'src/mixins/play-mixin.vue';
import PlayBtn from 'components/PlayBtn.vue';

export default defineComponent({
    name: 'PageIndex',
    mixins: [PlayMixin],
    components: { Graph, PlayBtn },
    data: function () {
        return {
            graphs: [],
            EDataType,
            ESortType,
        };
    },
    created: function () {
        this.graphs = {
            insertion: [
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
            ],
        };
    },
});
</script>

<style>
.iw-page-graph-index td {
    width: 20%;
}

.iw-page-graph-index table,
.iw-page-graph-index th,
.iw-page-graph-index td {
    border: 1px solid #aaa;
    border-collapse: collapse;
}

@media (max-width: 599px) {
    .iw-page-graph-index th .q-btn__wrapper {
        /* font-size: 10px; */
        padding: 5px;
        min-width: 81px;
    }
}
</style>
