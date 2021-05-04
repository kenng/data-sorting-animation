<template lang="pug">
q-page.row.items-center.justify-evenly
    Graph(
        :sortInstance='insertSortInstance'
    )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Graph from 'components/Graph.vue';
import { InsertionSort } from 'algorithms/InsertionSort';
import { data } from 'data/data';

export default defineComponent({
    name: 'PageIndex',
    components: { Graph },
    data: function () {
        return {
            insertSortInstance: new InsertionSort(data.random),
        };
    },
});
</script>
