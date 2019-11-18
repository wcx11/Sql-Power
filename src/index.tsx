import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainComponent } from './component/MainComponent';
import './css/main.css';

const pageRoot = document.getElementById('root');
ReactDOM.render(React.createElement(MainComponent, null), pageRoot);