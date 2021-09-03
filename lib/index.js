
const { getCustomInputData, getJsSuffixByType, getTemplateByType, getCustomTemplatePath } = require('./helper')
const { existsSync, outputFileSync, copySync } = require('fs-extra')
const path = require('path')
const vscode = require('vscode')
const replace = require('replace')


const initReactCmpWork = async(doc) => {
  try {
    let { name, type } = await getCustomInputData()
    if (!doc || !name || !type) return
    const componentDir = doc.path + `/${name}` 
    const isexistsDir = existsSync(componentDir)
    if (isexistsDir) {
      vscode.window.showErrorMessage( `${name} already exists in this path "${doc.path}".`)
      return
    } else {
      const suffix = getJsSuffixByType(type)
      const jsPath = `${componentDir}/${name}${suffix}`
      const lazyJsPath = `${componentDir}/${name}.lazy${suffix}`
      const cssPath = `${componentDir}/${name}.module.scss`
      const template = getTemplateByType(type)
      if (!template) return
      template.lazyJs && outputFileSync(lazyJsPath, template.lazyJs.content)
      template.js && outputFileSync(jsPath, template.js.content)
      template.css & outputFileSync(cssPath, template.css.content)
      replace({
        regex: 'TemplateName',
        replacement: name,
        paths: [jsPath, cssPath, template.lazyJs ? lazyJsPath : undefined],
        recursive: false,
        silent: true,
      })
      vscode.window.showInformationMessage('generate success !!')
   }
  } catch (error) {
    console.log(error)
    vscode.window.showErrorMessage('generate fail !!')
  }
 }

 const initCustomCmpWork = async(doc) => {
  try {
    if (!doc) {
      return
    }
    const tempPath = getCustomTemplatePath()
    if (!tempPath) {
      vscode.window.showErrorMessage( `【setting-customTemplatePath】please configure  custom template path field.`)
      return
    }
    const tpRes = path.parse(tempPath)
    const componentDir = doc.path + `/${tpRes.name}`
    copySync(tempPath, componentDir)
    vscode.window.showInformationMessage('generate success !!')
  } catch (error) {
    console.log(error)
    vscode.window.showErrorMessage('generate fail !!')
  }
 }

 module.exports = {
  initReactCmpWork,
  initCustomCmpWork
 }