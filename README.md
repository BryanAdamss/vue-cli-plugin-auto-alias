# vue-cli-plugin-auto-alias

> A vue-cli plugin that automatically sets aliases. According to the `rootDirName` and then auto generated directory alias

English | [中文](https://github.com/BryanAdamss/vue-cli-plugin-auto-alias/blob/master/README.zh-CN.md)

## Install

```sh
vue add vue-cli-plugin-auto-alias

or

vue add auto-alias
```

## DefaultOptions

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    'vue-cli-plugin-auto-alias': {
      // rooot dir for auto gen alias
      rootDirName: 'src',
      // custom alias
      alias: {
        // just like a normal resolve in Webpack
        // test:path.resolve(__dirname,'test')
      },
    },
  },
}
```

## Examples

- If your directory structure as follows

```sh
|---node_modules
|---public
|---src/    # rootDir
    --- assets/
    --- components/
    --- router/
    --- store/
    --- views/
    --- custom-dir/
|--- package.json
|--- vue.config.js
```

- and the options as follows

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    'vue-cli-plugin-auto-alias': {
      // rooot dir for auto generated alias
      rootDirName: 'src',
      // custom alias
      alias: {
        Public: path.resolve(__dirname, 'public'),
      },
    },
  },
}
```

- and you will get webpack alias as follows

```javascript
// vue inspect > output.js
{
   resolve: {
    alias: {
      '@': 'D:\\Workspace\\web-front-report\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',

      // according to the rootDirName auto generated alias
      Assets: 'D:\\Workspace\\web-front-report\\src\\assets',
      Components: 'D:\\Workspace\\web-front-report\\src\\components',
      Router: 'D:\\Workspace\\web-front-report\\src\\router',
      Store: 'D:\\Workspace\\web-front-report\\src\\store',
      CustomDir: 'D:\\Workspace\\web-front-report\\src\\custom-dir',

      // custom alias
      Public: 'D:\\Workspace\\web-front-report\\public
    },
}
```

## NPM

- [vue-cli-plugin-auto-alias](https://www.npmjs.com/package/vue-cli-plugin-auto-alias)
- [@bryanadamss/drawing-board](https://www.npmjs.com/package/@bryanadamss/drawing-board)
- [@bryanadamss/num2chn](https://www.npmjs.com/package/@bryanadamss/num2chn)
- [ant-color-converter](https://www.npmjs.com/package/ant-color-converter)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [BryanAdamss@foxmail.com](https://github.com/BryanAdamss).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bryanadamss.github.io/"><img src="https://avatars3.githubusercontent.com/u/7441504?v=4" width="64px;" alt=""/><br /><sub><b>GuangHui</b></sub></a><br /><a href="#projectManagement-BryanAdamss" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
