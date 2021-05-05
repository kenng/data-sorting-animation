<template lang="pug">
.iw-com-graph.relative-position.column
    .col
        .row.justify-around.q-mb-sm(
            v-if='showController'
        )
            template(
                v-if='!isPlaying'
            )
                q-icon(
                    name='play_arrow',
                    @click='playOnClicked'
                )
            template(
                v-else
            )
                q-icon(
                    name='pause',
                    @click='playOnClicked'
                )
            q-icon(
                name='redo',
                @click='runNext'
            )
            q-icon(
                name='restart_alt',
                @click='reset'
            )

        .row.justify-start.text-left(
            v-if='showIndex'
        )
            .col.justify-start(
                v-if='showPointerIndex'
            )
                div nextIndex: {{ nextIndex }}
                div currentIndex: {{ currentIndex }}
                .row.q-ml-md

        .iw-graph-data(
            @wheel.prevent='onWheelEv'
        )
            .full-width(
                v-for='(item, index) in data',
                :key='item.index'
            )
                .iw-line(
                    :class='{ active: index == currentIndex }',
                    :style='getStyle(item)'
                )
                    span(
                        v-if='showNumber'
                    ) {{ item.value }}

    .col(
        v-if='showJsonData'
    )
        .row
            pre.text-caption {{ JSON.stringify(data, null, "\t") }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { EDataType, IData, ESortType } from 'src/data';
import { SortBase } from 'algorithms/SortBase';

export default defineComponent({
    props: {
        sortInstance: {
            type: Object as PropType<SortBase>,
            required: true,
        },
        dataType: {
            type: String as PropType<EDataType>,
            required: true,
        },
        sortType: {
            type: String as PropType<ESortType>,
            required: true,
        },
        showController: {
            type: Boolean,
            default: true,
        },
        showNumber: {
            type: Boolean,
            default: false,
        },
        showPointerIndex: {
            type: Boolean,
            default: false,
        },
        showTotalStep: {
            type: Boolean,
            default: true,
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
            isPlaying: false,
            isSorted: false,
            runToFinishTimer: null,
        };
    },
    watch: {
        ['$store.state.play.isPlayingAll']: function () {
            this.execPlay();
        },
        ['$store.state.play.isPlayingRandom']: function () {
            if (this.dataType == EDataType.RANDOM) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingReversed']: function () {
            if (this.dataType == EDataType.REVERSED) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingFewUnique']: function () {
            if (this.dataType == EDataType.FEW_UNIQUE) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingNearlySorted']: function () {
            if (this.dataType == EDataType.NEARLY_SORTED) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingInsertion']: function () {
            if (this.sortType == ESortType.INSERTION) {
                this.execPlay();
            }
        },
    },
    computed: {
        showIndex: function () {
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
        execPlay: function () {
            if (this.isPlaying) return;

            this.reset();
            this.isPlaying = true;
            if (this.isSorted) {
                this.reset();
                this.isSorted = false;
            }
            this.runToFinish();
        },
        onWheelEv: function (ev) {
            if (ev.deltaY > 1) this.runNext();
        },
        runNext: function () {
            if (this.runToFinishTimer) clearTimeout(this.runToFinishTimer);
            this.sortInstance.sortNext();
            this.updateReactiveData();
        },
        playOnClicked: function () {
            this.isPlaying = !this.isPlaying;
            if (this.isPlaying) this.runToFinish();
        },
        runToFinish: function () {
            if (!this.isPlaying) return;
            const result = this.sortInstance.sortGen().next();
            this.updateReactiveData();
            if (!result.done) {
                this.runToFinishTimer = setTimeout(() => {
                    this.$nextTick(() => {
                        this.runToFinish();
                    });
                }, 50);
            } else {
                this.isSorted = true;
                this.isPlaying = false;
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
.iw-com-graph {
    padding: 0.5vw;
    max-width: 150px;
}

.iw-line {
    /* height: 3px; */
    font-size: 10px;
    background: #aaa;
    margin: 2px;
    margin-left: 12px;
    min-height: 3px;
}

.iw-line.active:before {
    content: ' ';
    width: 0px;
    height: 0px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #f44336;
    position: absolute;
    left: 0;
    margin-top: -2px;
}
</style>
