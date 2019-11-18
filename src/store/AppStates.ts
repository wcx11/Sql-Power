import { MainStates } from "./MainStates";

export interface AppStates {
    main: MainStates;
}

export const initialMainStates: MainStates = {
    sqlCode: '-- write your sql script here',
    mCode: '',
    isCompiling: false
}