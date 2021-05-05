export interface IPlayState {
    isPlayingAll: boolean;
    isPlayingRandom: boolean;
    isPlayingReversed: boolean;
    isPlayingFewUnique: boolean;
    isPlayingNearlySorted: boolean;

    isPlayingInsertion: boolean;
}

function state(): IPlayState {
    return {
        isPlayingAll: false,
        isPlayingRandom: false,
        isPlayingReversed: false,
        isPlayingFewUnique: false,
        isPlayingNearlySorted: false,

        isPlayingInsertion: false,
    };
}

export class PlayState {
    static readonly MUTATAION_PlayAll = 'iwm_play_all';
    static readonly MUTATAION_PlayRandom = 'iwm_play_random';
    static readonly MUTATAION_PlayReversed = 'iwm_play_reversed';
    static readonly MUTATAION_PlayFewUnique = 'iwm_play_few_unique';
    static readonly MUTATAION_PlayNearlySorted = 'iwm_play_nearly_sorted';

    static readonly MUTATAION_PlayInsertion = 'iwm_play_insertion';
    static readonly MUTATAION_PlayReset = 'iwm_play_reset';
}

export default state;
