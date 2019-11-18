import * as React from 'react';
import { Stack, CommandBarButton, IStackStyles, IIconProps } from 'office-ui-fabric-react'
import {compile} from '../sql/SqlConsumer';
import { AppStates } from '../store/AppStates';
import { Action } from 'redux';
import { connect } from 'react-redux';

export interface CommandBarProps {
    currentCode: string;
}
export interface CommandBarState {
}

const runIcon: IIconProps = { iconName: 'Run' };
const copyIcon: IIconProps = { iconName: 'Copy' };
const issueIcon: IIconProps = { iconName: 'Bug' };
const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

export class CommandBar extends React.Component<CommandBarProps, CommandBarState> {
    constructor(props) {
        super(props);
    }

    private doCompile() {
        compile(this.props.currentCode);
    }

    render(): JSX.Element {
        return (
            <Stack horizontal styles={stackStyles}>
              <CommandBarButton
                iconProps={runIcon}
                text="Compile"
                onClick={() => compile('')}
              />
              <CommandBarButton iconProps={copyIcon} text="Copy" />
              <CommandBarButton iconProps={issueIcon} text="Issue" />
            </Stack>
          );
    }
}

function mapStateToProps(state: AppStates): Partial<CommandBarProps> {
    return { currentCode: state.main.sqlCode };
}

function mapDispatchToProps(dispatch: (action: Action) => any): Partial<CommandBarProps> {
    return {};
}

export const CommandBarContainer = connect(mapStateToProps, mapDispatchToProps)(CommandBar)