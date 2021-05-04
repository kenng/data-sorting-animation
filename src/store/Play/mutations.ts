import { MutationTree } from 'vuex';
import { IPlayState, PlayState } from './state';

const mutation: MutationTree<IPlayState> = {
    [PlayState.MUTATAION_PlayAll]: function (state) {
        state.isPlayingAll = !state.isPlayingAll;
    },
    [PlayState.MUTATAION_PlayInsertion]: function (state) {
        state.isPlayingInsertion = !state.isPlayingInsertion;
    },
};

export default mutation;
