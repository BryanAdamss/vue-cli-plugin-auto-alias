/**
 * @author GaungHui
 * @description transform case
 */

module.exports = (text, letterCase) =>
  require('change-case')[letterCase || 'pascalCase'](text)
