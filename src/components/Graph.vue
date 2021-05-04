<template lang="pug">
.iw-com-graph.col
    .col
        .row.justify-around
            button(
                label='play',
                @click='runToFinish'
            ) Play
            button(
                label='play',
                @click='runNext'
            ) Next
            button(
                label='play',
                @click='reset'
            ) Reset
        .row.justify-start.text-left(
            v-if='showIndex'
        )
            .col.justify-start
                div nextIndex: {{ nextIndex }}
                div currentIndex: {{ currentIndex }}
                .row.q-ml-md
        .col-3(
            @click='runNext'
        )
            div(
                v-for='(item, index) in data',
                :key='item.index'
            )
                .iw-line(
                    :class='{ active: index == currentIndex }',
                    :style='getStyle(item)'
                ) {{ item.value }}

    .col(
        v-if='showJsonData'
    )
        .row
            pre.text-caption {{ JSON.stringify(data, null, "\t") }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { IData } from 'data/data';
import { SortBase } from 'algorithms/SortBase';

export default defineComponent({
    props: {
        sortInstance: {
            type: Object as PropType<SortBase>,
            required: true,
        },
    },
    components: {},
    data: function () {
        return {
            showJsonData: false,
            data: [] as IData[],
            currentIndex: -1,
            nextIndex: -1,
            theSortInstance: null,
        };
    },
    watch: {
        ['$store.state.isPlayAllInProgress']: function (newValue) {
            if (newValue) {
                this.runToFinish();
            }
            return;
        },
    },
    computed: {
        showIndex: function () {
            return true;
        },
        showNumber: function () {
            return true;
        },
    },
    created: function () {
        this.reset();
    },
    methods: {
        reset: function () {
            this.sortInstance.reset();
            this.updateReactiveData();
        },
        updateReactiveData: function () {
            const reactive = this.sortInstance.getReactiveData();
            this.currentIndex = reactive.currenIndex;
            this.nextIndex = reactive.nextIndex;
            this.data = Object.assign([], reactive.data);
        },
        runNext: function () {
            this.sortInstance.sortNext();
            this.updateReactiveData();
        },
        runToFinish: function () {
            const result = this.sortInstance.sortGen().next();
            this.updateReactiveData();
            if (!result.done) {
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.runToFinish();
                    });
                }, 50);
            }
        },
        getStyle: function (item: IData) {
            let percent = (item.value / 1000) * 100;
            let css = `width: ${percent}%;`;
            if (item.sorted) css += 'background: black; color: white;';

            return css;
        },
    },
});
</script>

<style scoped>
.iw-line {
    /* height: 3px; */
    font-size: 10px;
    background: #ccc;
    margin: 2px;
    margin-left: 12px;
}

.iw-line.active:before {
    content: ' ';
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #f44336;
    position: absolute;
    left: 0;
    margin-top: -2px;
}
</style>
