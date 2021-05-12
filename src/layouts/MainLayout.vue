<template lang="pug">
q-layout(
    view='lHh Lpr lff'
)
    q-page-container
        router-view

    Footer
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import Footer from 'layouts/Footer.vue';

const linksData = [];

import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
    name: 'MainLayout',
    components: { Footer, EssentialLink },
    setup() {
        const leftDrawerOpen = ref(false);
        const essentialLinks = ref(linksData);

        return { leftDrawerOpen, essentialLinks };
    },
});
</script>
