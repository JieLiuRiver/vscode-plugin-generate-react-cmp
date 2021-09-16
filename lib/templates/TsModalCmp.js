const jsContent = `
import React, { ForwardRefRenderFunction, useImperativeHandle, forwardRef } from 'react'
import { Modal } from 'antd'
import styles from './index.module.scss'

interface ITemplateNameProps {
  vm: [boolean, () => void]
}

type TemplateNameHandle = {
  test: () => void,
}

const TemplateName: ForwardRefRenderFunction<TemplateNameHandle, ITemplateNameProps> = (
  props,
  ref,
) => {
  const [visible, setVisible] = props.vm

  useImperativeHandle(ref, () => ({
    test() {
      alert('test');
    }
  }))

  return (
    <Modal
      title="标题"
      width={500}
      visible={visible}
      maskClosable={false}
      onCancel={() => setVisible(false)}
      onOk={() => {
        // TODO...
        setVisible(false)
      }}
    >
      <h1>Modal Content</h1>
    </Modal>
  )
}

export default forwardRef(TemplateName);
`

const cssContent = `
.TemplateName {

}
`

module.exports = {
  js: {
    content: jsContent,
  },
  css: {
    content: cssContent,
  },
}
