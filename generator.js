/**
 * @author GuangHui
 * @description 生成器
 */

const pluginName = require('./package.json').name
const defaultOptions = require('./default-options')

module.exports = (api, options, rootOptions) => {
  if (!options.showDefaultOptions) return

  api.extendPackage({
    vue: {
      pluginOptions: {
        [pluginName]: defaultOptions,
      },
    },
  })

  api.exitLog(`Now, you can set '${pluginName}' in your vue.config.js`, 'done')
}
