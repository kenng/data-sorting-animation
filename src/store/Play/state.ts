export interface IPlayState {
    lastUpdatedAt: number;
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

    isShowPlayController: boolean;
    isShowTotalStep: boolean;
    isShowNumber: boolean;
}

function state(): IPlayState {
    return {
        lastUpdatedAt: new Date().getTime(),
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

        isShowPlayController: true,
        isShowTotalStep: true,
        isShowNumber: false,
    };
}

export class PlayState {
    static readonly MUTATAION_LastUpdatedAt = 'iwm_last_updated_at';

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

    static readonly MUTATAION_TogglePlayController = 'iwm_toggle_play_ctrl';
    static readonly MUTATAION_ToggleShowTotalStep = 'iwm_toggle_show_step';
    static readonly MUTATAION_ToggleShowNumber = 'iwm_toggle_show_number';
}

export default state;
