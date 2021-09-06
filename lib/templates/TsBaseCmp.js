const jsContent = `import React, { memo } from 'react'
import styles from './index.module.scss'

interface ITemplateNameProps {}

const TemplateName = memo<ITemplateNameProps>(
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