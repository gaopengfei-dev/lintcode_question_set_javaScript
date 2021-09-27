<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-27 17:18:10
 * @LastEditTime: 2021-09-27 17:18:11
-->

## 11、 生成给定大小的数组

#### 描述

给你一个大小 size,生成一个元素从 1 到 size 的数组

#### 样例

    样例 1:
      输入:  size = 4
      输出: [1, 2, 3, 4]

      样例解释:
      返回一个顺序填充1到4的数组。

    样例 2:
      输入:  size = 1
      输出: [1]

      样例解释:
      返回一个顺序填充1到1的数组

#### 题解

```js
export class Solution {
  /**
   * generate
   *
   * @param size: An integer
   * @return: An integer list
   */
  generate(size) {
    // write your code here
    let arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    return arr;
  }
}
```

## 12、交换数组两个元素

#### 描述

给你一个数组和两个索引，交换下标为这两个索引的数字

#### 样例 1

    输入:  [1, 2, 3, 4], index1 = 2, index2 = 3

    输出: 交换后你的数组应该是[1, 2, 4, 3]， 不需要返回任何值，只要就地对数组进行交换即可。
    样例解释: 就地交换，不需要返回值。

#### 题解

```js
export class Solution {
  /**
   * swapIntegers
   * @param A: An integer array
   * @param index1: the first index
   * @param index2: the second index
   * @return:
   */
  swapIntegers(A, index1, index2) {
    // write your code here
    // 方法一 这里我们使用解构赋值
    [A[index1], A[index2]] = [A[index2], A[index1]];
    return A;

    // 方法二 传统数值交换
    let temp = A[index1];
    A[index1] = A[index2];
    A[index2] = temp;
    return A;
  }
}
```

## 13、整数排序

#### 描述

给一组整数，按照升序排序，使用选择排序，冒泡排序，插入排序或者任何 O(n2) 的排序算法。

#### 题解

```js
export class Solution {
  /**
   * sortIntegers
   *
   * @param A: an integer array
   * @return:
   */
  sortIntegers(A) {
    // write your code here
    // 冒泡排序
    for (let i = 0; i < A.length; i++) {
      for (let k = 0; k < A - i - 1; k++) {
        if (arr[k] > arr[k + 1]) {
          [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        }
      }
    }

    // 选择排序
    for (let i = 0; i < A.length; i++) {
      let index = 0;
      for (let k = i; k < A.length; k++) {
        if (A[k] < A[index]) {
          index = k;
        }
      }
      [A[i], A[index]] = [A[index], A[i]];
    }

    // 插入排序
    for (let i = 1; i < A.length; i++) {
      let index = i;
      let temp = A[i];
      while (index >= 0 && A[index] > temp) {
        A[index + 1] = A[index];
        index--;
      }
      A[index + 1] = temp;
    }
  }
}
```

## 14、数组的最大值

#### 描述

给一个浮点数数组，求数组中的最大值。

#### 样例

    输入:  [1.0, 2.1, -3.3]
    输出: 2.1
    样例解释: 返回最大的数字

#### 题解

方法很多，写了两个简便的

```js
export class Solution {
  /**
   * maxOfArray
   *
   * @param A: An integer
   * @return: a float number
   */
  maxOfArray(A) {
    // write your code here
    // 方法
    // 使用es6 的拓展运算符配合Math.max方法
    return Math.max(...A);
    // 方法二
    return Math.max.apply(null, A);
  }
}
```

## 15、打印 X

#### 描述

输入一个正整数 N(1< N < 15)， 你需要按样例的方式返回一个字符串列表。

样例
样例 1：

    输入
    n = 1
    输出
    ["X"]

样例 2：

    输入
    n = 2
    输出
    ["XX","XX"]

样例 3：

    输入
    n = 3
    输出
    ["X X"," X ","X X"]

样例 4：

    输入
    n = 4
    输出
    ["X  X", " XX ", " XX ", "X  X"]

样例 5：

    输入
    n = 5
    输出
    ["X   X", " X X ", "  X  ", " X X ", "X   X"]
    图形
    X   X
     X X
      X
     X X
    X   X

#### 题解

```js
export class Solution {
  /**
   * printX
   *
   * @param n: An integer.
   * @return: A string list.
   */
  printX(n) {
    // write your code here
    let arr = []; // 定义个空数组
    for (let i = 0; i < n; i++) {
      let str = []; // 定义个保存字符串的数组
      for (let k = 0; k < n; k++) {
        str[k] = ' '; // 先为每个字符串赋空字符串
      }
      str[i] = 'X'; // 添加第一个X
      str[n - i - 1] = 'X'; // 添加最后一个X
      arr[i] = str.join(''); // 转化成字符串赋值给arr
    }
    return arr;
  }
}
```
