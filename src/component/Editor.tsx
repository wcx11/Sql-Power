import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { MainStates } from '../store/MainStates';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { codeChangeAction } from '../actions/MainActions';

export interface EditorProps {
    language: 'sql' | 'powerquery';
    theme: 'vs-dark' | 'vs';
    onChange(code: string): void;
}
export interface EditorState {
    code: string;
}

export class Editor extends React.Component<EditorProps, EditorState> {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        }
        this.onChange = this.onChange.bind(this);
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    onChange(newValue, e) {
        this.props.onChange(newValue);
        console.log('onChange', newValue, e);
    }
    render(): JSX.Element {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                height="100%"
                language={this.props.language}
                theme={this.props.theme}
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}

function mapStateToProps(state: MainStates): Partial<EditorProps> {
    return {};
}

function mapDispatchToProps(dispatch: (action: Action) => any): Partial<EditorProps> {
    return {
        onChange: (code: string) => dispatch(codeChangeAction({ code }))
    }
} 

export const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);