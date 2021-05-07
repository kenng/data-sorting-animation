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
        togglePlayBubble: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayBubble);
        },
        togglePlayInsertion: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayInsertion);
        },
        togglePlaySelection: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlaySelection);
        },
        togglePlayQuick: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayQuick);
        },
        togglePlayMerge: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayMerge);
        },
        togglePlayHeap: function (): void {
            this.$store.commit(PlayState.MUTATAION_PlayHeap);
        },
    },
});
</script>
