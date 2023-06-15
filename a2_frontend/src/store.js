import rootReducer from './reducers';
import {configureStore} from "@reduxjs/toolkit";
// import {initialState} from "./reducers/index";
//
// // Save the state to local storage
// const saveState = (state) => {
//     try {
//         console.log("State is being saved");
//         const serialisedState = JSON.stringify(state);
//         localStorage.setItem('app_state', serialisedState);
//     } catch (err) {
//         console.log("Something went wrong when saving the state");
//     }
// };
//
// // Load the state from local storage
// const loadState = () => {
//     try {
//         console.log("State is being loaded");
//         const serialisedState = localStorage.getItem('app_state');
//         if (!serialisedState) return undefined;
//         return JSON.parse(serialisedState) || initialState
//     } catch (err) {
//         console.log("Error when loading state from local storage");
//         return undefined;
//     }
// };
//
// const oldState = loadState();
// const store = configureStore({
//     reducer: rootReducer,
//     preloadedState: oldState
// });
//
// // Subscribe to store changes and save state to local storage
// store.subscribe(() => {
//     const currentState = store.getState();
//     saveState(currentState);
//     console.log('Store changed (State)', currentState);
//     console.log('LocalStorage change', localStorage.getItem('app_state'));
// });
//
// export default store;

const store = configureStore({
    reducer: rootReducer,
});

export default store;