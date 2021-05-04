import { MutationTree } from 'vuex';
import { IPlayState, PlayState } from './state';

const mutation: MutationTree<IPlayState> = {
    [PlayState.MUTATAION_PlayAll]: function (state, isPlayed) {
        state.isPlayAllInProgress = isPlayed;
    },
};

export default mutation;
