import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainComponent } from './component/MainComponent';

const pageRoot = document.getElementById('root');
ReactDOM.render(React.createElement(MainComponent, null), pageRoot);