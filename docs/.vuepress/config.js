/*
 * @Author: jiangze
 * @Date: 2021-05-13 10:28:29
 * @LastEditTime: 2021-09-27 15:38:06
 * @LastEditors: Please set LastEditors
 * @Description: 配置文件
 * @FilePath: \quickly_build_platform\docs\.vuepress\config.js
 */
module.exports = {
  base: '/pf_git_pages/', // 部署地址，需要根据具体nginx代理名称设置有关
  // dest:'/dist/',
  title: 'lintCode_question_set',
  description: '基于javaScript语言的lintCode题解',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ], // 搜索框禁止放大
    [
      'meta',
      {
        name: 'keywords',
        content: 'js,lintCode,lintCode题解 js,javaScript lintCode'
      }
    ], // 搜索框禁止放大
    [
      'link',
      {
        rel: 'icon'
        // href: '/img/10.jpg'
      }
    ], // 添加浏览器图标
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      }
    ]
  ],
  plugins: require('./plugins'),
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar')
  }
};
