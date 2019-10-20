import * as React from 'react';
import {compile} from '../sql/SqlConsumer';
export class MainComponent extends React.Component<any, any> {
    render(): JSX.Element {
        return (<div>
            <button onClick={compile}>click</button>
        </div>);
    }
}