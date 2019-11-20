import { MainStates } from "../store/MainStates";
import { initialMainStates } from "../store/AppStates";
import { MainActionType, codeChangeAction, startCompileAction, endCompileAction, setMCodeAction } from "../actions/MainActions";
import { getType } from "typesafe-actions";

export const mainReducers = (state: MainStates = initialMainStates, action: MainActionType): MainStates => {
    switch (action.type) {
        case getType(codeChangeAction):
            return {... state, sqlCode: action.payload.code};
        case getType(setMCodeAction):
            return {... state, mCode: action.payload.code};
        case getType(startCompileAction):
            return {...state, isCompiling: true};
        case getType(endCompileAction):
            return {...state, isCompiling: false};
        default:
            break;
    }
    return state;
}