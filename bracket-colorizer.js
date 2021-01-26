/* 
面板扩展
功能: 括号颜色化
*/
'use strict';

let COLOR = [
    "rgba(104,208,254,1)",
    "rgba(255,255,64,1)",
    "rgba(255,127,255,1)",
]
let styleText = `
	.cus_bracket_line{
		border-style: ridge;
		border-width: 0px 0px 1px 0px;
		border-color: rgba(101, 142, 177, 1);
	}
`

module.exports = {


	init(vs_editor,monaco){
		this.vs_editor = vs_editor;
		if(this.bracketColorObj){
			return
		}
		let bracketPair = require('./bracket-pair-colorizer/src/index.js');
		let args  = {colours:COLOR,debounce:200}
		this.bracketColorObj = bracketPair.bracketColorDecorate(this.vs_editor,monaco,args);
		
		// 鼠标选中时显示的样式
		let dom = this.vs_editor._domElement;
		var style = document.createElement("style");
		style.innerHTML = styleText;
		if (dom) {
			dom.appendChild(style);
		}
		this.styleSheet = style;
	},

	destoryBracketColor(){
		if(this.bracketColorObj){
			this.bracketColorObj.destroy()
			this.styleSheet.remove()
			delete this.bracketColorObj;
		}
	},
	
};