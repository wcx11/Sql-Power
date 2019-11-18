import * as React from 'react';
import { Editor } from './Editor';
import { initializeIcons } from '@uifabric/icons';
import { CommandBar } from './CommandBar';
import { Stack, StackItem, IStackStyles, DefaultPalette, IStackTokens } from 'office-ui-fabric-react';
initializeIcons();

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

export class MainComponent extends React.Component<any, any> {
    private inputRef: HTMLInputElement;
    render(): JSX.Element {
        return (
        <Stack className='app' tokens={innerStackTokens}>
            <Stack>
                <CommandBar></CommandBar>
            </Stack>
            <Stack className='editorContainer' styles={stackStyles} tokens={innerStackTokens}>
                <StackItem grow>
                    <Editor language='sql' theme='vs-dark'></Editor>
                </StackItem>
                <StackItem grow>
                    <Editor language='powerquery' theme='vs-dark'></Editor>
                </StackItem>
            </Stack>
        </Stack>);
    }
}