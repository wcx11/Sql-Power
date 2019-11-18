import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

export interface EditorProps {
    language: 'sql' | 'powerquery';
    theme: 'vs-dark' | 'vs';
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
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
    editor.focus();
    }
        onChange(newValue, e) {
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