import {applyMiddleware, combineReducers, createStore} from 'redux'
import {testReducer} from "./test-reducer";
import {authReducer} from "./auth-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";

import {recoveryReducer} from "./recovery-reducer";
import thunk from 'redux-thunk';
import {cardPacksReducer} from "./cardPacks-reducer";



const rootReducer = combineReducers({
    test: testReducer,
    isLoggedIn: authReducer,
    profile: profileReducer,
    isRegistered: registrationReducer,
    recovery: recoveryReducer,
    cardPacks: cardPacksReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
