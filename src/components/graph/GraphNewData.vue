<template lang="pug">
tr.iw-com-graph-data.text-center
    th New Data
    td
        q-btn(
            flat,
            icon-right='edit',
            @click='newRandom',
            label='Random'
        )
    td
        q-btn(
            flat,
            icon-right='edit',
            @click='newReversed',
            label='Reversed'
        )
    td
        q-btn(
            flat,
            icon-right='edit',
            @click='newFewUnique',
            label='Few Unique'
        )
    td
        q-btn(
            flat,
            icon-right='edit',
            @click='newNearlySorted',
            label='Nearly Sorted'
        )

    q-dialog.column(
        v-model='prompt',
        persistent
    )
        q-card.iw-edit-data-dialog(
            style='min-width: 375px'
        )
            q-card-section.text-white.iw-dialog-head
                .text-h6.text-center Edit Data

            q-card-section
                q-input(
                    v-model='data',
                    autofocus,
                    autogrow,
                    type='textarea'
                ).

            q-card-actions.text-primary.q-py-lg.q-mx-lg(
                align='right'
            )
                q-btn.iw-btn-cancel(
                    flat,
                    label='Cancel',
                    v-close-popup
                )
                q-btn(
                    color='primary',
                    label='Update',
                    @click='setNewData',
                    v-close-popup
                ).
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { data, IData, getDataValue, setNewData, EDataType } from 'src/data';
import { PlayState } from 'src/store/Play/state';

export default defineComponent({
    name: '',
    mixins: [],
    components: {},
    props: {},
    data: function () {
        return {
            data: '',
            dataTemp: {
                [EDataType.RANDOM]: null,
                [EDataType.NEARLY_SORTED]: null,
                [EDataType.REVERSED]: null,
                [EDataType.FEW_UNIQUE]: null,
            },
            dataType: '',
            prompt: false,
        };
    },
    watch: {},
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
        showPrompt: function (dataType: string, currentData: IData[]) {
            this.dataType = dataType;
            this.data =
                this.dataTemp[dataType] ??
                JSON.stringify(getDataValue(currentData));
            this.prompt = true;
        },
        setNewData: function () {
            try {
                this.dataTemp[this.dataType] = this.data;
                setNewData[this.dataType](this.data);
                this.$store.commit(PlayState.MUTATION_LastUpdatedAt);

                // reset to null if no error got throw
                this.dataTemp[this.dataType] = null;
                this.$q.notify({
                    progress: true,
                    message: 'Data updated',
                    color: 'accent',
                });
            } catch (err) {
                console.warn(err);
            }
        },
        newRandom: function () {
            const currentData = data.random();
            this.showPrompt(EDataType.RANDOM, currentData);
        },
        newReversed: function () {
            const currentData = data.reversed();
            this.showPrompt(EDataType.REVERSED, currentData);
        },
        newFewUnique: function () {
            const currentData = data.fewUnique();
            this.showPrompt(EDataType.FEW_UNIQUE, currentData);
        },
        newNearlySorted: function () {
            const currentData = data.nearlySorted();
            this.showPrompt(EDataType.NEARLY_SORTED, currentData);
        },
    },
});
</script>

<style>
.iw-edit-data-dialog .iw-btn-cancel {
    color: var(--text-label-2);
}

.iw-edit-data-dialog .iw-dialog-head {
    background: linear-gradient(to right, #8e2de2, #4a00e0) !important;
}
</style>
