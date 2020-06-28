# vue-cli-plugin-auto-alias

> 根据`rootDirName`自动为其下的文件夹生成别名

[English](https://github.com/BryanAdamss/vue-cli-plugin-auto-alias/blob/master/README.md) | 中文

## 安装

```sh
vue add vue-cli-plugin-auto-alias

or

vue add auto-alias
```

## 默认选项

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    'vue-cli-plugin-auto-alias': {
      // 需要自动生成别名的根目录名
      rootDirName: 'src',
      // 自定义别名，
      alias: {
        // 像设置webpack.resolve.alias一样设置即可
        // test:path.resolve(__dirname,'test')
      },
    },
  },
}
```

## 例子

- 目录结构如下

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

- 配置如下

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    'vue-cli-plugin-auto-alias': {
      rootDirName: 'src', // src目录下的文件夹会自动生成别名
      // 需要自定义的别名，此处别名会直接以字符串形式设置到alias上，不会做任何路径转换；
      // 所以要自己确保路径的正确性；
      alias: {
        Public: path.resolve(__dirname, 'public'),
      },
    },
  },
}
```

- 生成的别名结果

```javascript
// vue inspect > output.js
{
   resolve: {
    alias: {
      '@': 'D:\\Workspace\\web-front-report\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',

      // 根据rootDirName下目录自动生成的别名配置
      Assets: 'D:\\Workspace\\web-front-report\\src\\assets',
      Components: 'D:\\Workspace\\web-front-report\\src\\components',
      Router: 'D:\\Workspace\\web-front-report\\src\\router',
      Store: 'D:\\Workspace\\web-front-report\\src\\store',
      CustomDir: 'D:\\Workspace\\web-front-report\\src\\custom-dir',

      // 自定义别名
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

如果你觉得这个插件对你有帮助，请给一个小星星 ⭐️(star)

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
