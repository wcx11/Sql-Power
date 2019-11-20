import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { AppStates } from '../store/AppStates';

export interface MEditorProps {
    theme: 'vs-dark' | 'vs';
    code: string;    
}
export interface MEditorState {
}

export class MEditor extends React.Component<MEditorProps, MEditorState> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }

    render(): JSX.Element {
        const code = this.props.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                height="100%"
                language='powerquery'
                theme={this.props.theme}
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}

function mapStateToProps(state: AppStates): Partial<MEditorProps> {
    return {code: state.main.mCode};
}

function mapDispatchToProps(dispatch: (action: Action) => any): Partial<MEditorProps> {
    return {
    }
} 

export const MEditorContainer = connect(mapStateToProps, mapDispatchToProps)(MEditor);