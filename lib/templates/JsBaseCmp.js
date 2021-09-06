const jsContent = `import React, { memo } from 'react'
import styles from './index.module.scss'

const TemplateName = memo(
  function TemplateName() {
    return (
      <div className={styles.TemplateName}>
        TemplateName Component
      </div>
    )
  }
)
export default TemplateName
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