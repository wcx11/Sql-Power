import {createAction, ActionType} from 'typesafe-actions';

export const startCompileAction = createAction('START_COMPILE')<{}>();
export const endCompileAction = createAction('END_COMPILE')<{}>();
export const codeChangeAction = createAction('CODE_CHANGE_ACTION')<{code: string}>();
export const setMCodeAction = createAction('SET_M_CODE')<{code: string}>();
const mainActions = {
    startCompileAction,
    endCompileAction,
    codeChangeAction,
    setMCodeAction
};

export type MainActionType = ActionType<typeof mainActions>;