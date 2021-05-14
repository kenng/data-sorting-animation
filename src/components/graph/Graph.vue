<template lang="pug">
.iw-com-graph.column
    .col.relative-position
        .row.justify-around.q-mb-sm(
            v-if='isShowPlayController'
        )
            template(
                v-if='!isPlaying'
            )
                q-icon(
                    name='play_arrow',
                    @click='playOnClicked'
                )
                    q-tooltip(
                        anchor='center right',
                        self='center left',
                        :offset='[10, 10]'
                    ) Play
            template(
                v-else
            )
                q-icon(
                    name='pause',
                    @click='playOnClicked'
                )
                    q-tooltip(
                        anchor='center right',
                        self='center left',
                        :offset='[10, 10]'
                    ) Pause
            q-icon(
                name='redo',
                @click='runNext',
                :color='getBtnColor',
                :disable='isSorted'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Next
            q-icon(
                name='restart_alt',
                @click='reset'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Reset

        .row.justify-start.text-left
            .col.justify-start(
                v-if='showPointerIndex'
            )
                div nextIndex: {{ nextIndex }}
                div currentIndex: {{ currentIndex }}
                div secondMarkerIndex: {{ secondMarkerIndex }}
                div thirdMarkerIndex: {{ thirdMarkerIndex }}
                .row.q-ml-md

        .iw-graph-data.q-ml-sm(
            @wheel.prevent='onWheelEv'
        )
            .full-width.relative-position(
                v-for='(item, index) in data',
                :key='index'
            )
                .iw-line(
                    :class='getClassName(item, index)',
                    :style='getStyle(item)'
                )
                    span(
                        v-if='isShowNumber'
                    ) {{ item.value }}

        .iw-total-step(
            v-if='isShowTotalStep'
        ) {{ totalStep }}

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
        showPointerIndex: {
            type: Boolean,
            default: false,
        },
    },
    components: {},
    data: function () {
        return {
            isShowPlayController: null,
            isShowTotalStep: null,
            isShowNumber: null,
            showJsonData: false,
            data: [] as IData[],
            currentIndex: -1,
            nextIndex: -1,
            secondMarkerIndex: -1,
            thirdMarkerIndex: -1,
            theSortInstance: null,
            isPlaying: false,
            isSorted: false,
            runToFinishTimer: null,
            totalStep: 0,
            iter: null,
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
        ['$store.state.play.isPlayingBubble']: function () {
            if (this.sortType == ESortType.BUBBLE) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingInsertion']: function () {
            if (this.sortType == ESortType.INSERTION) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingSelection']: function () {
            if (this.sortType == ESortType.SELECTION) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingQuick']: function () {
            if (this.sortType == ESortType.QUICK) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingMerge']: function () {
            if (this.sortType == ESortType.MERGE) {
                this.execPlay();
            }
        },
        ['$store.state.play.isPlayingHeap']: function () {
            if (this.sortType == ESortType.HEAP) {
                this.execPlay();
            }
        },
        ['$store.state.play.isShowPlayController']: function (value) {
            this.isShowPlayController = value;
        },
        ['$store.state.play.isShowTotalStep']: function (value) {
            this.isShowTotalStep = value;
        },
        ['$store.state.play.isShowNumber']: function (value) {
            this.isShowNumber = value;
        },
    },
    computed: {
        getBtnColor: function () {
            const active = this.$q.dark.isActive ? 'white' : 'black';
            return this.isSorted ? 'grey-9' : active;
        },
    },
    created: function () {
        this.isShowPlayController = this.$store.state.play.isShowPlayController;
        this.isShowTotalStep = this.$store.state.play.isShowTotalStep;
        this.isShowNumber = this.$store.state.play.isShowNumber;
        this.reset();
    },
    mounted: function () {},
    methods: {
        reset: function () {
            this.isSorted = false;
            this.iter = this.sortInstance.sortGen();
            this.sortInstance.reset();
            this.updateReactiveData();
        },
        updateReactiveData: function () {
            const reactive = this.sortInstance.getReactiveData();
            this.currentIndex = reactive.currenIndex;
            this.nextIndex = reactive.nextIndex;
            this.secondMarkerIndex = reactive.secondMarkerIndex;
            this.thirdMarkerIndex = reactive.thirdMarkerIndex;
            this.totalStep = reactive.totalStep;
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
            this.iter.next();
            this.updateReactiveData();
        },
        playOnClicked: function () {
            if (this.isSorted) this.reset();
            this.isPlaying = !this.isPlaying;
            if (this.isPlaying) this.runToFinish();
        },
        runToFinish: function () {
            if (!this.isPlaying) return;
            const result = this.iter.next();
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
        getClassName: function (item, index: number) {
            return {
                active: index == this.currentIndex,
                pointer:
                    index == this.secondMarkerIndex ||
                    index == this.thirdMarkerIndex,
                sorted: item.sorted ?? false,
            };
        },
        getStyle: function (item: IData) {
            let percent = (item.value / 1000) * 100;
            let css = `width: ${percent}%;`;

            return css;
        },
    },
});
</script>

<style scoped>
.iw-com-graph {
    margin-right: 8px;
}

.iw-graph-data {
    padding: 0.5vw;
    max-width: 150px;
    min-height: 100px;
}

.iw-line {
    /* height: 3px; */
    font-size: 10px;
    background: #797979;
    margin: 2px;
    min-height: 2px;
}

.iw-line.pointer:before {
    content: ' ';
    width: 0px;
    height: 0px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid blue;
    position: absolute;
    left: -6px;
    margin-top: -5px;
}

.iw-line.sorted {
    background: black;
    background: linear-gradient(to right, #9cecfb, #65c7f7, #0052d4);
}

.body--dark .iw-line.sorted {
    background: linear-gradient(to right, #44b5f7, #2b32b2);
}

.iw-line.active:before {
    content: ' ';
    width: 0px;
    height: 0px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #f44336;
    position: absolute;
    left: -6px;
    margin-top: -5px;
}

.iw-total-step {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 3rem;
    font-weight: 400;
    font-style: italic;
    line-height: 3.125rem;
    letter-spacing: normal;
    text-shadow: 1px 1px 1px #afafafad;
    /* color: #236b6b; */
    color: grey;
    background: #ffffff87;
    width: 100%;
    text-align: right;
    margin-right: 10px;
}

.body--dark .iw-total-step {
    color: #d7ccc8aa;
    background: initial;
}
</style>
