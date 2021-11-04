import upperFirst from 'lodash.upperfirst'
import camelCase from 'lodash.camelcase'
import { App } from 'vue'

// Регистрируем компоненты по уникальному названию файла


export default (app: App<Element>) => {
  const requireComponent = require.context(
    './views',
    true,
    /[\w-]+\.vue$/
  )
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
      camelCase(
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    );  
    app.component(
      componentName,
      componentConfig.default || componentConfig
    );
  })
}