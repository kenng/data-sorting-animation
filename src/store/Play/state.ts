export interface IPlayState {
    isPlayAllInProgress: boolean;
}

function state(): IPlayState {
    return {
        isPlayAllInProgress: false,
    };
}

export class PlayState {
    static readonly MUTATAION_PlayAll = 'iwm_play_all';
}

export default state;
