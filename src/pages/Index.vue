<template lang="pug">
q-page.row.items-center.justify-evenly
    table.col-12
        th(
            @click='togglePlayAll'
        )
            q-icon(
                name='play_arrow',
                size='24px'
            )
            div All

    Graph.col-12(
        :sortInstance='insertSortInstance'
    )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Graph from 'components/Graph.vue';
import { InsertionSort } from 'algorithms/InsertionSort';
import { data } from 'data/data';
import PlayMixin from 'src/mixins/play-mixin.vue';

export default defineComponent({
    name: 'PageIndex',
    mixins: [PlayMixin],
    components: { Graph },
    data: function () {
        return {
            insertSortInstance: new InsertionSort(data.random),
        };
    },
});
</script>
