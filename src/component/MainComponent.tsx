import * as React from 'react';
import { EditorContainer } from './Editor';
import { initializeIcons } from '@uifabric/icons';
import { CommandBarContainer } from './CommandBar';
import { Stack, StackItem, IStackStyles, DefaultPalette, IStackTokens } from 'office-ui-fabric-react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, AnyAction } from 'redux';
import { initialMainStates, AppStates } from '../store/AppStates';
import { mainReducers } from '../reducers/MainReducers';
import { MainStates } from '../store/MainStates';

initializeIcons();


let reducers = combineReducers({
    main: mainReducers
});

export const mainStore = createStore<AppStates, AnyAction, {}, {}>(reducers,
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
        <Provider store={mainStore}>
        <Stack className='app' tokens={innerStackTokens}>
            <Stack>
                <CommandBarContainer></CommandBarContainer>
            </Stack>
            <Stack className='editorContainer' styles={stackStyles} tokens={innerStackTokens}>
                <StackItem grow>
                    <EditorContainer language='sql' theme='vs-dark'></EditorContainer>
                </StackItem>
                <StackItem grow>
                    <EditorContainer language='powerquery' theme='vs-dark'></EditorContainer>
                </StackItem>
            </Stack>
        </Stack>
        </Provider>
        );
    }
}