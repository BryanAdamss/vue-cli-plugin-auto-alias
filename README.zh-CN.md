# vue-cli-plugin-auto-alias

> 根据`rootDirName`自动为其下的文件夹生成别名

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
      // 生成别名的根目录名
      rootDirName: 'src',
      // 自定义别名，
      alias: {
        // 像设置webpack.resolve.alias一样设置即可
        // views:path.resolve(__dirname,'views')
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
      rootDirName: 'src',
      alias: {
        Public: path.resolve(__dirname, 'public'),
      },
    },
  },
}
```

- 生成的别名结果

```javascript
{
   resolve: {
    alias: {
      '@': 'D:\\Workspace\\web-front-report\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',

      // according to the rootDirName generated alias
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

## npm 包

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
