
const { getCustomInputData, getJsSuffixByType, getTemplateByType, getCustomTemplatePath } = require('./helper')
const { existsSync, outputFileSync, copySync } = require('fs-extra')
const path = require('path')
const vscode = require('vscode')
const replace = require('replace')
const { FILE_NAME } = require('./constants')

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
      const jsPath = `${componentDir}/${FILE_NAME}${suffix}`
      const lazyJsPath = `${componentDir}/${FILE_NAME}.lazy${suffix}`
      const cssPath = `${componentDir}/${FILE_NAME}.module.scss`
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
  }
 }

 module.exports = {
  initReactCmpWork,
  initCustomCmpWork
 }