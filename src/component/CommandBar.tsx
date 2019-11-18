import * as React from 'react';
import { Stack, CommandBarButton, IStackStyles, IIconProps } from 'office-ui-fabric-react'
import {compile} from '../sql/SqlConsumer';

export interface CommandBarProps {
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