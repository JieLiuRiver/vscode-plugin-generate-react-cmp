const vscode = require('vscode');
const { initReactCmpWork , initCustomCmpWork} = require('./lib')

function activate(context) {
  let disposable1 = vscode.commands.registerCommand('grc.ReactCmp', initReactCmpWork);
	let disposable2 = vscode.commands.registerCommand('grc.CustomTemp', initCustomCmpWork);
  context.subscriptions.push(disposable1, disposable2)
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
