<template lang="pug">
.iw-com-graph-icon(
    :class='getComClassName()'
)
    .iw-icon-box.iw-icon-settings
        q-icon.iw-anim(
            name='settings',
            :class='getClassName()',
            @click='expandOptions'
        )
            q-tooltip(
                anchor='center right',
                self='center left',
                :offset='[10, 10]'
            ) Options

    transition(
        name='custom-classes-transition',
        :enter-active-class='getAnimatedClass()',
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
                    q-icon.iw-active(
                        name='wb_sunny',
                        :class='getClassName()',
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
                    q-icon.iw-active(
                        name='nightlight',
                        :class='getClassName()',
                        key='night',
                        @click='$q.dark.toggle()'
                    )
                        q-tooltip(
                            anchor='center right',
                            self='center left',
                            :offset='[10, 10]'
                        ) Switch to Dark Mode
            q-icon(
                name='video_settings',
                :class='getClassName({ "iw-active": $store.state.play.isShowPlayController })',
                @click='togglePlayController'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Toggle Play Controller

            q-icon(
                name='pin',
                :class='getClassName({ "iw-active": $store.state.play.isShowTotalStep })',
                @click='toggleShowTotalStep'
            )
                q-tooltip(
                    anchor='center right',
                    self='center left',
                    :offset='[10, 10]'
                ) Toggle Total Steps

            q-icon(
                name='analytics',
                :class='getClassName({ "iw-active": $store.state.play.isShowNumber })',
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
            isScreenGtXs: null,
        };
    },
    watch: {},
    computed: {},
    created: function () {
        this.isScreenGtXs = this.$q.screen.gt.xs;
    },
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
        getComClassName: function () {
            if (this.isScreenGtXs) {
                return {
                    column: true,
                    'flex-center': true,
                };
            }

            return {
                row: true,
                reverse: true,
                'items-end': true,
            };
        },
        getClassName: function (extra) {
            return {
                // col: !this.isScreenGtXs,
                row: this.isScreenGtXs,
                ...extra,
            };
        },
        getAnimatedClass: function () {
            let name = 'animated ';
            if (this.isScreenGtXs) return name + 'fadeInDown';
            return name + 'fadeInRight';
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
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 50px;
    margin-bottom: 8px;
}

.iw-com-graph-icon .q-icon {
    margin-top: 10px;
    margin-bottom: 10px;
}

.iw-com-graph-icon .iw-icon-settings {
    border-color: transparent;
}

@media screen and (max-width: 599px) {
    .iw-com-graph-icon .iw-icon-box {
        padding-top: 4px;
        padding-bottom: 4px;
        /* another 15px from .q-icon margin-left, so total still 30px for left space */
        padding-left: 15px;
        padding-right: 30px;
    }

    .iw-com-graph-icon .q-icon {
        margin-left: 15px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .iw-com-graph-icon .iw-icon-settings {
        padding-left: initial;
        padding-right: 15px;
        border-color: transparent;
    }
}
</style>
