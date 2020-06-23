/**
 * @author GuangHui
 * @description 问询
 */

module.exports = [
  {
    type: 'list',
    name: 'showDefaultOptions',
    message:
      'Do you want to view defalut `vue-cli-plugin-auto-alias` options ?',
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
