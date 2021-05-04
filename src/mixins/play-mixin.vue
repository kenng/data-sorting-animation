<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PlayState } from 'store/Play/state';

export default defineComponent({
    data: function () {
        return {
            isPlayed: false,
        };
    },
    methods: {
        togglePlayAll: function (): void {
            this.isPlayed = !this.isPlayed;
            this.$store.commit(PlayState.MUTATAION_PlayAll, this.isPlayed);
        },
    },
});
</script>
