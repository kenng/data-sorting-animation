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
            BubbleGraph
            SelectionGraph
            InsertionGraph
            QuickGraph
            MergeGraph
            HeapGraph
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PlayMixin from 'src/mixins/play-mixin.vue';
import PlayBtn from 'components/PlayBtn.vue';
import InsertionGraph from 'components/graph/InsertionGraph.vue';
import SelectionGraph from 'components/graph/SelectionGraph.vue';
import BubbleGraph from 'components/graph/BubbleGraph.vue';
import QuickGraph from 'components/graph/QuickGraph.vue';
import MergeGraph from 'components/graph/MergeGraph.vue';
import HeapGraph from 'components/graph/HeapGraph.vue';

export default defineComponent({
    name: 'PageIndex',
    mixins: [PlayMixin],
    components: {
        PlayBtn,
        InsertionGraph,
        BubbleGraph,
        SelectionGraph,
        QuickGraph,
        MergeGraph,
        HeapGraph,
    },
    data: function () {
        return {
            graphs: [],
        };
    },
    created: function () {},
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
