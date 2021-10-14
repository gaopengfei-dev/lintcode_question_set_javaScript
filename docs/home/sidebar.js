/*
 * @Description: 首页侧边栏
 * @Author: 武明琴
 * @Date: 2021-01-14 16:40:51
 * @EditAuthor: jiangze
 * @LastEditTime: 2021-10-14 10:30:06
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
      },
      {
        title: '第二阶段',
        path: '/home/novice/second'
      },
      {
        title: '第三阶段',
        path: '/home/novice/third'
      },
      {
        title: '第四阶段(字符串与循环)',
        path: '/home/novice/fourth'
      },
      {
        title: '第五阶段(栈与队列)',
        path: '/home/novice/fifth'
      },
      {
        title: '第六阶段(简单递归)',
        path: '/home/novice/sixth'
      }
    ]
  },
  {
    title: '常见数据结构题',
    collapsable: true,
    sidebarDepth: 3,
    children: [
      {
        title: '链表',
        path: '/home/data/list'
      },
      {
        title: '常规题',
        path: '/home/data/routine'
      },
      {
        title: '字符串',
        path: '/home/data/string'
      },
      {
        title: '数组',
        path: '/home/data/array'
      },
      {
        title: '动态规划',
        path: '/home/data/dynamic'
      },
      {
        title: '排序',
        path: '/home/data/sort'
      },
      {
        title: '查询',
        path: '/home/data/search'
      }
    ]
  }
];
