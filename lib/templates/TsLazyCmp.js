const lazyJsContent = `import React, { memo, lazy, Suspense } from 'react'
import { ITemplateNameProps } from './index'
const LazyTemplateName = lazy(() => import('./index'))

const TemplateName = memo<ITemplateNameProps>(
  function TemplateName(props) {
    return (
      <Suspense fallback={null}>
        <LazyTemplateName {...props} />
      </Suspense>
    )
  }
)
export default TemplateName
`

const jsContent = `import React, { memo } from 'react'
import styles from './index.module.scss'

export interface ITemplateNameProps {}

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
  lazyJs: {
    content: lazyJsContent
  },
  js: {
    content: jsContent
  },
  css: {
    content: cssContent
  }
};