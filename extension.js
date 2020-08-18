/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-08-18 09:33:19
 * @FilePath: \web-temp\extension.js
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const mian = require('./src/index.js');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


exports.activate = mian;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate: mian,
	deactivate
}
