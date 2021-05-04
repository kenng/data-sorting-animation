<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PlayState } from 'store/Play/state';

export default defineComponent({
    methods: {
        togglePlayAll: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayAll);
        },
        togglePlayInsertion: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayInsertion);
        },
    },
});
</script>
