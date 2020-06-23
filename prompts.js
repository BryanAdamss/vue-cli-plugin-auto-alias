/**
 * @author GuangHui
 * @description 问询
 */

module.exports = [
  {
    type: 'list',
    name: 'showDefaultOptions',
    message:
      'Do you want to get defalut `vue-cli-plugin-auto-alias` options in `vue.config.js`?',
    choices: [
      {
        name: 'Yes',
        value: true,
      },
      {
        name: 'No',
        value: false,
      },
    ],
  },
]
