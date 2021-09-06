const lazyJsContent = `import React, { memo, lazy, Suspense } from 'react'

const LazyTemplateName = lazy(() => import('./TemplateName'))

const TemplateName = memo(
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