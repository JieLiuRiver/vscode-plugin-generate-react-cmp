const jsContent = `import React, { memo, useEffect } from 'react'
import styles from './TemplateName.module.scss'

interface ITemplateNameProps {}

const TemplateName = memo<ITemplateNameProps>(
  function TemplateName() {
    useEffect(() => {
      // TODO...
    }, [])
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