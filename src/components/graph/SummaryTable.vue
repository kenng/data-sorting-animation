<template lang="pug">
.iw-com-graph-summary-table.text-center
    h4 Sorting Algorithm Summary
    table
        thead.iw-table-head
            tr
                th Algorithms
                th(
                    colspan=3
                ) Time Complexity
                th Space Complexity
                th.cursor-pointer(
                    @click='sortStability'
                ) Stability
            tr.cursor-pointer
                th
                th(
                    @click='sortTimeBest'
                ) Best (&Omega;)
                th(
                    @click='sortTimeAverage'
                ) Average (&Theta;)
                th(
                    @click='sortTimeWorst'
                ) Worst (&Omicron;)
                th(
                    @click='sortSpaceWorst'
                ) Worst (&Omicron;)
                th
        tbody
            tr.iw-formula(
                v-for='algo in algos'
            )
                th {{ algo.name }}
                td(
                    v-html='algo.time_best.label',
                    :style='"background-color: " + algo.time_best.color + ";"'
                )
                td(
                    v-html='algo.time_average.label',
                    :style='"background-color: " + algo.time_average.color'
                )
                td(
                    v-html='algo.time_worst.label',
                    :style='"background-color: " + algo.time_worst.color'
                )
                td(
                    v-html='algo.space_worst.label',
                    :style='"background-color: " + algo.space_worst.color'
                )
                td(
                    v-html='algo.stability.label',
                    :style='"background-color: " + algo.stability.color'
                )

    .iw-legend.row.justify-center.q-mt-md
        .span Best&nbsp;
        .col-5(
            :style='getLegendColor()'
        )
        .span &nbsp;Worst
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

interface IAlgoComplexity {
    label: string;
    complexity?: number;
    stable?: number;
    color: string;
}

enum eComplexity {
    one,
    log_n,
    n,
    n_log_n,
    n_power_two,
    two_power_n,
    n_factoria,
    stable_yes,
    stable_no,
    stable_quicksort,
}

interface IAlgoSummary {
    name: string;
    time_best: IAlgoComplexity;
    time_average: IAlgoComplexity;
    time_worst: IAlgoComplexity;
    space_worst: IAlgoComplexity;
    stability: IAlgoComplexity;
}

const complexityColor = [
    '#049F76',
    '#06D6A0',
    '#C1C12E',
    '#FFBA08',
    '#E95E1E',
    '#DA3C3C',
    '#D62828',
];

const complexity: { [name: number]: IAlgoComplexity } = {
    [eComplexity.one]: {
        label: '(1)',
        complexity: 1,
        color: complexityColor[0],
    },
    [eComplexity.log_n]: {
        label: '(log N)',
        complexity: 2,
        color: complexityColor[1],
    },
    [eComplexity.n]: {
        label: '(n)',
        complexity: 3,
        color: complexityColor[2],
    },
    [eComplexity.n_log_n]: {
        label: '(n log n)',
        complexity: 4,
        color: complexityColor[3],
    },
    [eComplexity.n_power_two]: {
        label: '(n<sup>2</sup>)',
        complexity: 5,
        color: complexityColor[4],
    },
    [eComplexity.two_power_n]: {
        label: '(2<sup>n</sup>)',
        complexity: 6,
        color: complexityColor[5],
    },
    [eComplexity.n_factoria]: {
        label: '(n!)',
        complexity: 7,
        color: complexityColor[6],
    },
    [eComplexity.stable_yes]: {
        label: 'Yes',
        stable: 1,
        color: complexityColor[0],
    },
    [eComplexity.stable_quicksort]: {
        label: '',
        stable: 3,
        color: complexityColor[3],
    },
    [eComplexity.stable_no]: {
        label: 'No',
        stable: 7,
        color: complexityColor[6],
    },
};

export default defineComponent({
    name: '',
    mixins: [],
    components: {},
    props: {},
    data: function () {
        return {
            complexityColor,
            sortOrder: {
                time_best: null,
                time_average: null,
                time_worst: null,
                space_worst: null,
                stability: null,
            },
            algos: [
                {
                    name: 'Bubble Sort',
                    time_best: complexity[eComplexity.n],
                    time_average: complexity[eComplexity.n_power_two],
                    time_worst: complexity[eComplexity.n_power_two],
                    space_worst: complexity[eComplexity.one],
                    stability: complexity[eComplexity.stable_yes],
                },
                {
                    name: 'Selection Sort',
                    time_best: complexity[eComplexity.n_power_two],
                    time_average: complexity[eComplexity.n_power_two],
                    time_worst: complexity[eComplexity.n_power_two],
                    space_worst: complexity[eComplexity.one],
                    stability: complexity[eComplexity.stable_no],
                },
                {
                    name: 'Insertion Sort',
                    time_best: complexity[eComplexity.n],
                    time_average: complexity[eComplexity.n_power_two],
                    time_worst: complexity[eComplexity.n_power_two],
                    space_worst: complexity[eComplexity.one],
                    stability: complexity[eComplexity.stable_yes],
                },
                {
                    name: 'Quicksort',
                    time_best: complexity[eComplexity.n_log_n],
                    time_average: complexity[eComplexity.n_log_n],
                    time_worst: complexity[eComplexity.n_power_two],
                    space_worst: complexity[eComplexity.log_n],
                    stability: complexity[eComplexity.stable_quicksort],
                },
                {
                    name: 'Mergesort',
                    time_best: complexity[eComplexity.n_log_n],
                    time_average: complexity[eComplexity.n_log_n],
                    time_worst: complexity[eComplexity.n_log_n],
                    space_worst: complexity[eComplexity.n],
                    stability: complexity[eComplexity.stable_yes],
                },
                {
                    name: 'Heapsort',
                    time_best: complexity[eComplexity.n_log_n],
                    time_average: complexity[eComplexity.n_log_n],
                    time_worst: complexity[eComplexity.n_log_n],
                    space_worst: complexity[eComplexity.one],
                    stability: complexity[eComplexity.stable_no],
                },
            ] as IAlgoSummary[],
        };
    },
    watch: {},
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
        sortTimeBest: function () {
            const order = (this.sortOrder.time_best = this.reverseOrder(
                this.sortOrder.time_best,
            ));
            this.algos.sort((a, b) => {
                if (a.time_best.complexity == b.time_best.complexity) return 0;
                return a.time_best.complexity < b.time_best.complexity
                    ? order
                    : -order;
            });
        },
        sortTimeAverage: function () {
            const order = (this.sortOrder.time_average = this.reverseOrder(
                this.sortOrder.time_average,
            ));
            this.algos.sort((a, b) => {
                if (a.time_average.complexity == b.time_average.complexity)
                    return 0;
                return a.time_average.complexity < b.time_average.complexity
                    ? order
                    : -order;
            });
        },
        sortTimeWorst: function () {
            const order = (this.sortOrder.time_worst = this.reverseOrder(
                this.sortOrder.time_worst,
            ));
            this.algos.sort((a, b) => {
                if (a.time_worst.complexity == b.time_worst.complexity)
                    return 0;
                return a.time_worst.complexity < b.time_worst.complexity
                    ? order
                    : -order;
            });
        },
        sortSpaceWorst: function () {
            const order = (this.sortOrder.space_worst = this.reverseOrder(
                this.sortOrder.space_worst,
            ));
            this.algos.sort((a, b) => {
                if (a.space_worst.complexity == b.space_worst.complexity)
                    return 0;
                return a.space_worst.complexity < b.space_worst.complexity
                    ? order
                    : -order;
            });
        },
        sortStability: function () {
            const order = (this.sortOrder.stability = this.reverseOrder(
                this.sortOrder.stability,
            ));
            this.algos.sort((a, b) => {
                if (a.stability.stable == b.stability.stable) return 0;
                return a.stability.stable < b.stability.stable ? order : -order;
            });
        },
        reverseOrder: function (key) {
            if (!key) {
                key = 1;
                return key;
            }

            key = -key;
            return key;
        },
        getLegendColor: function () {
            const colors = this.complexityColor.join(',');
            return `background: linear-gradient(to right, ${colors});`;
        },
    },
});
</script>

<style>
.iw-com-graph-summary-table .iw-table-head {
    font-size: 16px;
}

.iw-com-graph-summary-table .iw-formula {
    font-family: monospace, sans-serif;
    font-size: 18px;
}

.iw-com-graph-summary-table .iw-formula td {
    text-shadow: 1px 1px 1px #402424;
}

@media screen and (max-width: 599px) {
    .iw-com-graph-summary-table .iw-table-head,
    .iw-com-graph-summary-table .iw-formula {
        font-size: 12px;
    }
}
</style>
