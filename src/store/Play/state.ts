export interface IPlayState {
    isPlayingAll: boolean;
    isPlayingInsertion: boolean;
    isPlayingRandom: boolean;
}

function state(): IPlayState {
    return {
        isPlayingAll: false,
        isPlayingInsertion: false,
        isPlayingRandom: false,
    };
}

export class PlayState {
    static readonly MUTATAION_PlayAll = 'iwm_play_all';
    static readonly MUTATAION_PlayInsertion = 'iwm_play_insertion';
}

export default state;
