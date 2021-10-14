<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-14 10:30:14
 * @LastEditTime: 2021-10-14 16:44:28
-->

# 1、广度优先遍历

## 1、从上到下打印二叉树

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

给定二叉树: [3,9,20,null,null,15,7],

     3
    / \
    9 20
      / \
     15  7

#### 代码

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  // 创建队列，并将根节点入队
  const queue = [root];
  const res = [];
  while (queue.length) {
    // 获取根节点，根节点出队
    const n = queue.shift();
    // 添加值
    res.push(n.val);
    // 队头的子节点依次入队
    n.left && queue.push(n.left);
    n.right && queue.push(n.right);
  }
  return res;
};
```

## 2、从上到下打印二叉树 II

给定二叉树: [3,9,20,null,null,15,7],

     3
    / \
    9 20
      / \
     15  7

    返回其层次遍历结果：

    [
    [3],
    [9,20],
    [15,7]
    ]

#### 代码

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    // 定义个子数组
    let temp = [];
    for (let i = queue.length; i > 0; i--) {
      let item = queue.shift();
      temp.push(item.val);
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    res.push(temp);
  }
  return res;
};
```

## 3、从上到下打印二叉树 III

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],

     3
    / \
    9 20
      / \
     15  7

返回其层次遍历结果：

[
[3],
[20,9],
[15,7]
]

#### 代码

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  // 定义层级
  let level = 0;
  let res = [];
  while (queue.length) {
    res[level] = [];
    let levelNum = queue.length;
    while (levelNum--) {
      const item = queue.shift();
      // 方法一 判段从头进还是从尾进
      if (level % 2 === 0) {
        res[level].push(item.val);
      } else {
        res[level].unshift(item.val);
      }
      // 方法二
      res[level].push(item.val);
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    // 方法二 反转
    if (level % 2 !== 0) {
      res[level].reverse();
    }
    level++;
  }
  return res;
};
```

## 4、使用广度优先方法遍历 dom 树

#### 代码

```js
function breadthFirstSearch(node) {
  if (!node) return [];
  // 初始化个队列，将node赋值进去
  let queue = [node];
  // 定义个结果数组
  let res = [];
  // 遍历队列
  while (queue.length) {
    // 出队
    let item = queue.shift();
    // 插入结果数组
    res.push(item);
    let childs = item.children;
    // 遍历子节点
    for (let i = 0; i < childs.length; i++) {
      // 入队
      queue.push(childs[i]);
    }
  }
  return res;
}
```

## 5、使用深度优先算法遍历 dom 树

```js
function deepFirstSearch(node, nodeList) {
  // 第二个参数传空数组
  if (node) {
    nodeList.push(node);
    let childs = node.chileren;
    for (let i = 0; i < childs.length; i++) {
      return deepFirstSearch(childs[i], nodeList);
    }
  }
  return nodeList;
}
```

## 6、深度优先算法遍历 dom 树非递归

```js
function deepFirstSearch(node) {
  let nodes = [];
  if (node) {
    let stack = [node];
    while (stack.length) {
      let item = stack.pop();
      nodes.push(item);
      let childs = item.children;
      for (let i = childs.length - 1; i >= 0; i--) {
        stack.push(childs[i]);
      }
    }
  }
  return nodes;
}
```

## 7、寻找两个 dom 节点的共同父节点

```js
function commonParentNode(node1, node2) {
  // 方法一 递归
  if (node1.contains(node2)) {
    return node1;
  } else {
    return commonParentNode(node1.parentNode);
  }
  // 方法二 循环
  while (1) {
    if (node1.contains(node2)) {
      return node1;
    } else {
      node1 = node1.parentNode;
    }
  }
}
```
