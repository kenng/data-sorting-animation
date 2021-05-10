<template lang="pug">
.iw-com-graph-icon.column.flex-center
    q-icon.row.iw-anim(
        name='settings',
        @click='expandOptions'
    )
        q-tooltip(
            anchor='center right',
            self='center left',
            :offset='[10, 10]'
        ) Options

    transition(
        name='custom-classes-transition',
        enter-active-class='animated fadeInDown',
        mode='out-in'
    )
        .iw-icon-box(
            v-if='isShowOption'
        )
            transition(
                name='custom-classes-transition',
                enter-active-class='animated fadeInRight',
                mode='out-in'
            )
                template(
                    v-if='$q.dark.isActive'
                )
                    q-icon.row.iw-active(
                        name='wb_sunny',
                        key='sunny',
                        @click='$q.dark.toggle()'
                    )
                        q-tooltip(
                            anchor='center right',
                            self='center left',
                            :offset='[10, 10]'
                        ) Switch to Bright Mode
                template(
                    v-else
                )
                    q-icon.row.iw-active(
                        name='nightlight',
                        key='night',
                        @click='$q.dark.toggle()'
                    )
                        q-tooltip(
                            anchor='center right',
                            self='center left',
                            :offset='[10, 10]'
                        ) Switch to Dark Mode
            q-icon.row.q-mt-lg(
                name='video_settings',
                :class='{ "iw-active": $store.state.play.isShowPlayController }',
                @click='togglePlayController'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Toggle Play Controller

            q-icon.row.q-mt-lg(
                name='pin',
                :class='{ "iw-active": $store.state.play.isShowTotalStep }',
                @click='toggleShowTotalStep'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Toggle Total Steps

            q-icon.row.q-mt-lg(
                name='analytics',
                :class='{ "iw-active": $store.state.play.isShowNumber }',
                @click='toggleShowNumber'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Toggle Show Number Inside Graph
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PlayState } from 'src/store/Play/state';

export default defineComponent({
    name: '',
    mixins: [],
    components: {},
    props: {},
    data: function () {
        return {
            isShowOption: true,
        };
    },
    watch: {},
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {
        expandOptions: function () {
            this.isShowOption = !this.isShowOption;
        },
        togglePlayController: function () {
            this.$store.commit(PlayState.MUTATAION_TogglePlayController);
        },
        toggleShowTotalStep: function () {
            this.$store.commit(PlayState.MUTATAION_ToggleShowTotalStep);
        },
        toggleShowNumber: function () {
            this.$store.commit(PlayState.MUTATAION_ToggleShowNumber);
        },
    },
});
</script>

<style>
.iw-com-graph-icon {
    align-self: flex-start;
    position: sticky;
    top: 20px;
}

.iw-com-graph-icon .material-icons {
    cursor: pointer;
    font-size: 30px;
}

.iw-com-graph-icon .iw-anim.material-icons:hover {
    animation: iw-spin 1s ease 1;
}

.iw-com-graph-icon .iw-icon-box {
    border: 1px solid #ccc;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 50px;
}
</style>
