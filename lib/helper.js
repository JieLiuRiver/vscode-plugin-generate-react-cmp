
const { 
  REACT_TYPE1_SELECTS, 
  TS_Base_Component,
  TS_Lazy_Component,
  TS_ForwardRef_Component,
  JS_Base_Component,
  JS_Lazy_Component,
  JS_ForwardRef_Component, } = require('./constants')
const vscode = require('vscode')
const templates = require('./templates')

const getCustomInputData = async () => {
  const cmpName = await vscode.window.showInputBox({
    placeHolder: 'please enter component name',
  })
  if (!cmpName) {
    return  {
      name: cmpName,
      type: ''
    }
  }
  const pickType = await vscode.window.showQuickPick(REACT_TYPE1_SELECTS)
  return {
    name: cmpName,
    type: pickType
  }
}

const getJsSuffixByType = (type) => {
  if (!type) return null
  const idx = type.indexOf('TS')
  if (idx !== -1) {
    return '.tsx'
  } else {
    return '.jsx'
  }
}

const getTemplateByType = (type) => {
  switch(type) {
    case TS_Base_Component:
      return templates.TsBaseCmp
    case TS_Lazy_Component:
      return templates.TsLazyCmp
    case TS_ForwardRef_Component:
      return templates.TsForwardRefCmp
    case JS_Base_Component:
      return templates.JsBaseCmp
    case JS_Lazy_Component:
      return templates.JsLazyCmp
    case JS_ForwardRef_Component:
      return templates.JS_ForwardRef_Component
    default:
      return templates.TsBaseCmp
  }
}

const getCustomTemplatePath = () => vscode.workspace.getConfiguration().get("customTemplatePath")

module.exports = {
  getJsSuffixByType,
  getTemplateByType,
  getCustomInputData,
  getCustomTemplatePath
}