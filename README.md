# monaco-editor-bracket-pair-colorizer
* Monaco Editor extension: bracket pair colorizer
* The plugin references this extension to modify:https://github.com/CoenraadS/Bracket-Pair-Colorizer-2
* See link above for effect

# Usage
```javascript
var editor = monaco.editor.create(document.getElementById('container'), {
  value: ""
  language: 'javascript'
});

require('bracket_colorizer').init(editor,monaco);
```

# Finished product preview
Apply to the Cocos Creator built-in editor plug-in: https://forum.cocos.org/t/topic/99871
