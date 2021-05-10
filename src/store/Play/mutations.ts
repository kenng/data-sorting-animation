import { MutationTree } from 'vuex';
import { IPlayState, PlayState } from './state';

const mutation: MutationTree<IPlayState> = {
    [PlayState.MUTATAION_PlayAll]: function (state) {
        state.isPlayingAll = !state.isPlayingAll;
    },
    [PlayState.MUTATAION_PlayRandom]: function (state) {
        state.isPlayingRandom = !state.isPlayingRandom;
    },
    [PlayState.MUTATAION_PlayReversed]: function (state) {
        state.isPlayingReversed = !state.isPlayingReversed;
    },
    [PlayState.MUTATAION_PlayFewUnique]: function (state) {
        state.isPlayingFewUnique = !state.isPlayingFewUnique;
    },
    [PlayState.MUTATAION_PlayNearlySorted]: function (state) {
        state.isPlayingNearlySorted = !state.isPlayingNearlySorted;
    },
    [PlayState.MUTATAION_PlayBubble]: function (state) {
        state.isPlayingBubble = !state.isPlayingBubble;
    },
    [PlayState.MUTATAION_PlayInsertion]: function (state) {
        state.isPlayingInsertion = !state.isPlayingInsertion;
    },
    [PlayState.MUTATAION_PlaySelection]: function (state) {
        state.isPlayingSelection = !state.isPlayingSelection;
    },
    [PlayState.MUTATAION_PlayQuick]: function (state) {
        state.isPlayingQuick = !state.isPlayingQuick;
    },
    [PlayState.MUTATAION_PlayMerge]: function (state) {
        state.isPlayingMerge = !state.isPlayingMerge;
    },
    [PlayState.MUTATAION_PlayHeap]: function (state) {
        state.isPlayingHeap = !state.isPlayingHeap;
    },
    [PlayState.MUTATAION_PlayReset]: function (state) {
        state.isPlayingAll = false;
        state.isPlayingInsertion = false;
    },
    [PlayState.MUTATAION_TogglePlayController]: function (state) {
        state.isShowPlayController = !state.isShowPlayController;
    },
    [PlayState.MUTATAION_ToggleShowTotalStep]: function (state) {
        state.isShowTotalStep = !state.isShowTotalStep;
    },
    [PlayState.MUTATAION_ToggleShowNumber]: function (state) {
        state.isShowNumber = !state.isShowNumber;
    },
};

export default mutation;
