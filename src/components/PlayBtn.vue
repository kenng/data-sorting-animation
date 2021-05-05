<template lang="pug">
.iw-com-play-btn
    q-btn(
        flat,
        @click='onClickFn'
    )
        .column.flex-center
            .row
                q-icon(
                    :name='icon',
                    :size='size'
                )
            .row {{ label }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    props: {
        onClickFn: {
            type: Function,
            required: true,
        },
        icon: {
            type: String,
            default: 'play_arrow',
        },
        size: {
            type: String,
            default: '24px',
        },
        label: {
            type: String,
            default: '',
        },
    },
    components: {},
    data: function () {
        return {};
    },
    watch: {},
    computed: {},
    created: function () {},
    mounted: function () {},
    methods: {},
});
</script>

<style></style>
