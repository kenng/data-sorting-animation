export interface IPlayState {
    isPlayingAll: boolean;
    isPlayingRandom: boolean;
    isPlayingReversed: boolean;
    isPlayingFewUnique: boolean;
    isPlayingNearlySorted: boolean;

    isPlayingBubble: boolean;
    isPlayingInsertion: boolean;
    isPlayingSelection: boolean;
    isPlayingQuick: boolean;
    isPlayingMerge: boolean;
    isPlayingHeap: boolean;
}

function state(): IPlayState {
    return {
        isPlayingAll: false,
        isPlayingRandom: false,
        isPlayingReversed: false,
        isPlayingFewUnique: false,
        isPlayingNearlySorted: false,

        isPlayingBubble: false,
        isPlayingInsertion: false,
        isPlayingSelection: false,
        isPlayingQuick: false,
        isPlayingMerge: false,
        isPlayingHeap: false,
    };
}

export class PlayState {
    static readonly MUTATAION_PlayAll = 'iwm_play_all';
    static readonly MUTATAION_PlayRandom = 'iwm_play_random';
    static readonly MUTATAION_PlayReversed = 'iwm_play_reversed';
    static readonly MUTATAION_PlayFewUnique = 'iwm_play_few_unique';
    static readonly MUTATAION_PlayNearlySorted = 'iwm_play_nearly_sorted';

    static readonly MUTATAION_PlayBubble = 'iwm_play_bubble';
    static readonly MUTATAION_PlayInsertion = 'iwm_play_insertion';
    static readonly MUTATAION_PlaySelection = 'iwm_play_selection';
    static readonly MUTATAION_PlayQuick = 'iwm_play_quick';
    static readonly MUTATAION_PlayMerge = 'iwm_play_merge';
    static readonly MUTATAION_PlayHeap = 'iwm_play_heap';
    static readonly MUTATAION_PlayReset = 'iwm_play_reset';
}

export default state;
