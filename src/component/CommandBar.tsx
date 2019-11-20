import * as React from 'react';
import { Stack, CommandBarButton, IStackStyles, IIconProps } from 'office-ui-fabric-react'
import {compile} from '../sql/SqlConsumer';
import { AppStates } from '../store/AppStates';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { setMCodeAction } from '../actions/MainActions';
import * as copy from 'copy-to-clipboard';

export interface CommandBarProps {
    currentCode: string;
    mCode: string;
    renewMCode(code: string): void;
}
export interface CommandBarState {
}

const runIcon: IIconProps = { iconName: 'Play' };
const copyIcon: IIconProps = { iconName: 'Copy' };
const issueIcon: IIconProps = { iconName: 'Bug' };
const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

export class CommandBar extends React.Component<CommandBarProps, CommandBarState> {
    constructor(props) {
        super(props);
    }

    private doCompile() {
        this.props.renewMCode(compile(this.props.currentCode));
    }

    render(): JSX.Element {
        return (
            <Stack horizontal styles={stackStyles}>
              <CommandBarButton
                iconProps={runIcon}
                text="Compile"
                onClick={() => this.doCompile()}
              />
              <CommandBarButton iconProps={copyIcon} text="Copy" 
                onClick={() => copy(this.props.mCode)}
              />
              <CommandBarButton iconProps={issueIcon} text="Issue" onClick = {() => {window.location.href = 'https://github.com/wcx11/Sql-Power/issues';}}/>
            </Stack>
          );
    }
}

function mapStateToProps(state: AppStates): Partial<CommandBarProps> {
    return { 
        currentCode: state.main.sqlCode,
        mCode: state.main.mCode
    };
}

function mapDispatchToProps(dispatch: (action: Action) => any): Partial<CommandBarProps> {
    return {
        renewMCode: code => dispatch(setMCodeAction({code}))
    };
}

export const CommandBarContainer = connect(mapStateToProps, mapDispatchToProps)(CommandBar)