const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
export default function activate(context) {
  const scriptions = context.subscriptions.push
  const regCom = vscode.commands.registerCommand
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "web-template" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  scriptions(regCom('web-template.cc', function () {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage('Cary, welcome here');
  }))

  /**
   * 创建 vue 模板
   */
  scriptions(regCom('web-template.vue', function () {
    // The code you place here will be executed every time your command is executed
    
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from web-template!');
  }))
}