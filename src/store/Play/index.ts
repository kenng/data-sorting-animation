import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { IPlayState } from './state';
import mutations from './mutations';

const playModule: Module<IPlayState, StateInterface> = {
    // namespaced: true,
    mutations,
    state,
};

export default playModule;
