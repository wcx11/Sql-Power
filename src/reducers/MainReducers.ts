import { MainStates } from "../store/MainStates";
import { initialMainStates } from "../store/AppStates";
import { MainActionType, codeChangeAction, startCompileAction, endCompileAction } from "../actions/MainActions";
import { getType } from "typesafe-actions";

export const mainReducers = (state: MainStates = initialMainStates, action: MainActionType): MainStates => {
    switch (action.type) {
        case getType(codeChangeAction):
            return {sqlCode: action.payload.code, ...state};
        case getType(startCompileAction):
            return {isCompiling: true, ...state};
        case getType(endCompileAction):
            return {isCompiling: false, ...state};
        default:
            break;
    }
    return state;
}