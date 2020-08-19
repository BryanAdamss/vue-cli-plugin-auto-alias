const fs = require('fs')
const path = require('path')

const changeCase = require('./case')

const pluginName = require('./package.json').name
const defaultOptions = require('./default-options')

const resolve = (dir) => path.resolve(process.cwd(), dir)

module.exports = (api, projectOptions) => {
  const pluginOptions =
    projectOptions && projectOptions.pluginOptions
      ? projectOptions.pluginOptions
      : {}

  const aliasOptions = pluginOptions[pluginName]
    ? {
        ...defaultOptions,
        ...pluginOptions[pluginName],
      }
    : defaultOptions

  const autoSetAlias = (config, rootDirName) => {
    const dirs = fs.readdirSync(resolve(rootDirName))

    dirs.forEach((v) => {
      const stat = fs.statSync(resolve(`${rootDirName}/${v}`))
      if (stat.isDirectory())
        config.resolve.alias.set(
          `${changeCase(v, aliasOptions.case)}`,
          resolve(`${rootDirName}/${v}`)
        )
    })
  }

  const setCustomAlias = (config, aliasObj) => {
    Object.keys(aliasObj).forEach((key) => {
      if (key && aliasObj[key]) config.resolve.alias.set(key, aliasObj[key])
    })
  }

  api.chainWebpack((config) => {
    // 自动为rootDirName目录下的文件夹生成别名
    autoSetAlias(config, aliasOptions.rootDirName)

    // 自定义alias
    const customAlias = aliasOptions.alias
    if (!customAlias) return

    setCustomAlias(config, customAlias)
  })
}
