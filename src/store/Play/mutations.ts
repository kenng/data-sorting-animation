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
    [PlayState.MUTATAION_PlayInsertion]: function (state) {
        state.isPlayingInsertion = !state.isPlayingInsertion;
    },
    [PlayState.MUTATAION_PlayReset]: function (state) {
        state.isPlayingAll = false;
        state.isPlayingInsertion = false;
    },
};

export default mutation;
