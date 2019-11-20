import * as React from 'react';
import { EditorContainer } from './Editor';
import { initializeIcons } from '@uifabric/icons';
import { CommandBarContainer, CommandBar } from './CommandBar';
import { Stack, StackItem, IStackStyles, DefaultPalette, IStackTokens } from 'office-ui-fabric-react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, AnyAction } from 'redux';
import { initialMainStates, AppStates } from '../store/AppStates';
import { mainReducers } from '../reducers/MainReducers';
import { MainStates } from '../store/MainStates';
import { MEditorContainer } from './MEditor';

initializeIcons();


let reducers = combineReducers({
    main: mainReducers
});

export const appStore = createStore<AppStates, AnyAction, {}, {}>(reducers,
    {
        main: initialMainStates,
    }
);


const stackStyles: IStackStyles = {
    root: {
    }
};

const itemStyles: React.CSSProperties = {
    alignItems: 'center',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    justifyContent: 'center',
};
const innerStackTokens: IStackTokens = {
    childrenGap: 0,
    padding: 0
};


export interface AppState {
}

export class MainComponent extends React.Component<any, AppState> {
    private inputRef: HTMLInputElement;
    render(): JSX.Element {
        return (
        <Provider store={appStore}>
        <div className='app'>
            <div id='commandBar'>
                <CommandBarContainer></CommandBarContainer>
            </div>
            <div className='editorContainer'> 
                <div id='sqlEditor'>
                <EditorContainer theme='vs-dark'></EditorContainer>
                </div>
                <div id='mEditor'>
                <MEditorContainer theme='vs-dark'></MEditorContainer>
                </div>
            </div>
        </div>
        </Provider>
        );
    }
}