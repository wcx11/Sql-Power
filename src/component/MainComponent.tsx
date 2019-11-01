import * as React from 'react';
import {compile} from '../sql/SqlConsumer';
export class MainComponent extends React.Component<any, any> {
    private inputRef: HTMLInputElement;
    render(): JSX.Element {
        return (<div>
            <input ref={ref => { this.inputRef = ref; }} ></input>
            <button onClick={() => compile(this.inputRef.value)}>click</button>
        </div>);
    }
}