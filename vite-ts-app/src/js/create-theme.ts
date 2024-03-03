import {EditorView} from '@codemirror/view';
import {Extension} from '@codemirror/state';
import {
    HighlightStyle,
    TagStyle,
    syntaxHighlighting,
} from '@codemirror/language';

interface Options {
    /**
     * Theme variant. Determines which styles CodeMirror will apply by default.
     */
    variant: Variant;

    /**
     * Settings to customize the look of the editor, like background, gutter, selection and others.
     */
    settings: Settings;

    /**
     * Syntax highlighting styles.
     */
    styles: TagStyle[];
}

type Variant = 'light' | 'dark';

interface Settings {
    /**
     * Editor background.
     */
    background: string;

    /**
     * Default text color.
     */
    foreground: string;

    fontSize: string;
    fontFamily: string;

    /**
     * Caret color.
     */
    caret: string;

    /**
     * Selection background.
     */
    selection: string;

    /**
     * Background of highlighted lines.
     */
    lineHighlight: string;

    /**
     * Gutter background.
     */
    gutterBackground: string;

    /**
     * Text color inside gutter.
     */
    gutterForeground: string;
}

const createTheme = ({variant, settings, styles}: Options): Extension => {
    const theme = EditorView.theme(
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            '&': {
                backgroundColor: settings.background,
                color: settings.foreground,
            },
            '.cm-content': {
                caretColor: settings.caret,
                fontSize: settings.fontSize,
                fontFamily: settings.fontFamily,
            },
            '.cm-cursor, .cm-dropCursor': {
                borderLeftColor: settings.caret,
            },
            "& .cm-selectionBackground": {
                // TODO: this color is activated when you move focus out of the editor
                backgroundColor: settings.selection,
            },
            "&.cm-focused .cm-selectionBackground, ::selection": {
                // TODO: this color is activated when selecting numbers
                backgroundColor: 'red',
            },
            '.cm-activeLine': {
                backgroundColor: settings.lineHighlight,
            },
            '.cm-gutters': {
                backgroundColor: settings.gutterBackground,
                color: settings.gutterForeground,
            },
            '.cm-activeLineGutter': {
                backgroundColor: settings.lineHighlight,
            },
        },
        {
            dark: variant === 'dark',
        },
    );

    const highlightStyle = HighlightStyle.define(styles);
    const extension = [theme, syntaxHighlighting(highlightStyle)];

    return extension;
};

export default createTheme;