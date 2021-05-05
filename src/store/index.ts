import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import play from './Play';
// import Example from './module-example';
// import { ExampleStateInterface } from './module-example/state';
import { IPlayState } from './Play/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
    // Define your own store structure, using submodules if needed
    // example: ExampleStateInterface;
    // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
    // Play: IPlayState;
    // Example: ExampleStateInterface;
    play: IPlayState;
}

export default store(function ({ Vue }) {
    Vue.use(Vuex);

    const Store = new Vuex.Store<StateInterface>({
        modules: {
            // Play,
            // Example,
            play,
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: !!process.env.DEBUGGING,
    });

    return Store;
});
