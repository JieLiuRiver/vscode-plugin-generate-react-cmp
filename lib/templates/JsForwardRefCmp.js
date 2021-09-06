const jsContent = `
import React, { RefForwardingComponent, useImperativeHandle, forwardRef } from 'react'
import styles from './index.module.scss'

const TemplateName = (
  props,
  ref,
) => {
  useImperativeHandle(ref, () => ({
    test() {
      alert('test');
    }
  }))
  return (
    <div className={styles.TemplateName}>ForwardRef Component</div>
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
    content: jsContent
  },
  css: {
    content: cssContent
  }
};