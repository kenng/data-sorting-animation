import { MutationTree } from 'vuex';
import { IPlayState, PlayState } from './state';

const mutation: MutationTree<IPlayState> = {
    [PlayState.MUTATION_LastUpdatedAt]: function (state) {
        state.lastUpdatedAt = new Date().getTime();
    },
    [PlayState.MUTATION_PlayAll]: function (state) {
        state.isPlayingAll = !state.isPlayingAll;
    },
    [PlayState.MUTATION_PlayRandom]: function (state) {
        state.isPlayingRandom = !state.isPlayingRandom;
    },
    [PlayState.MUTATION_PlayReversed]: function (state) {
        state.isPlayingReversed = !state.isPlayingReversed;
    },
    [PlayState.MUTATION_PlayFewUnique]: function (state) {
        state.isPlayingFewUnique = !state.isPlayingFewUnique;
    },
    [PlayState.MUTATION_PlayNearlySorted]: function (state) {
        state.isPlayingNearlySorted = !state.isPlayingNearlySorted;
    },
    [PlayState.MUTATION_PlayBubble]: function (state) {
        state.isPlayingBubble = !state.isPlayingBubble;
    },
    [PlayState.MUTATION_PlayInsertion]: function (state) {
        state.isPlayingInsertion = !state.isPlayingInsertion;
    },
    [PlayState.MUTATION_PlaySelection]: function (state) {
        state.isPlayingSelection = !state.isPlayingSelection;
    },
    [PlayState.MUTATION_PlayQuick]: function (state) {
        state.isPlayingQuick = !state.isPlayingQuick;
    },
    [PlayState.MUTATION_PlayMerge]: function (state) {
        state.isPlayingMerge = !state.isPlayingMerge;
    },
    [PlayState.MUTATION_PlayHeap]: function (state) {
        state.isPlayingHeap = !state.isPlayingHeap;
    },
    [PlayState.MUTATION_PlayReset]: function (state) {
        state.isPlayingAll = false;
        state.isPlayingInsertion = false;
    },
    [PlayState.MUTATION_TogglePlayController]: function (state) {
        state.isShowPlayController = !state.isShowPlayController;
    },
    [PlayState.MUTATION_ToggleShowTotalStep]: function (state) {
        state.isShowTotalStep = !state.isShowTotalStep;
    },
    [PlayState.MUTATION_ToggleShowNumber]: function (state) {
        state.isShowNumber = !state.isShowNumber;
    },
};

export default mutation;
