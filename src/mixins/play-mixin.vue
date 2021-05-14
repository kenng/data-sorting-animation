<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PlayState } from 'store/Play/state';

export default defineComponent({
    methods: {
        togglePlayAll: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayAll);
        },
        togglePlayRandom: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayRandom);
        },
        togglePlayReversed: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayReversed);
        },
        togglePlayFewUnique: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayFewUnique);
        },
        togglePlayNearlySorted: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayNearlySorted);
        },
        togglePlayBubble: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayBubble);
        },
        togglePlayInsertion: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayInsertion);
        },
        togglePlaySelection: function (): void {
            this.$store.commit(PlayState.MUTATION_PlaySelection);
        },
        togglePlayQuick: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayQuick);
        },
        togglePlayMerge: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayMerge);
        },
        togglePlayHeap: function (): void {
            this.$store.commit(PlayState.MUTATION_PlayHeap);
        },
    },
});
</script>
