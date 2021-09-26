/*
 * @Description: 首页侧边栏
 * @Author: 武明琴
 * @Date: 2021-01-14 16:40:51
 * @EditAuthor: jiangze
 * @LastEditTime: 2021-09-26 17:20:02
 */
module.exports = [
  {
    title: '简介',
    collapsable: false,
    sidebarDepth: 0,
    children: [
      {
        title: 'test',
        path: '/home/brife/brife'
      }
    ]
  },
  {
    title: '新手50题',
    collapsable: true,
    sidebarDepth: 3,
    children: [
      {
        title: '第一阶段',
        path: '/home/novice/first'
      }
    ]
  }
];
