<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PlayState } from 'store/Play/state';

export default defineComponent({
    methods: {
        togglePlayAll: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayAll);
        },
        togglePlayRandom: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayRandom);
        },
        togglePlayReversed: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayReversed);
        },
        togglePlayFewUnique: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayFewUnique);
        },
        togglePlayNearlySorted: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayNearlySorted);
        },
        togglePlayInsertion: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayInsertion);
        },
    },
});
</script>
