<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-09 16:41:46
 * @LastEditTime: 2021-09-27 17:17:53
-->

# 新手必刷 50 题

## 1、反转一个三位整数

::: tip 描述
反转一个只有 3 位数的整数。你可以假设输入一定是一个只有三位数的整数，这个整数大于等于 100，小于 1000。
:::

#### 样例 1：

    输入：
    number = 123
    输出：
    321

    输入：
    number = 900
    输出：
    9
    反转数字

#### 题解

```js
export class Solution {
  /**
   * reverseInteger
   *
   * @param number: A 3-digit number.
   * @return: Reversed number.
   */
  // 解法一 使用数组的reverse方法。现将数值转为字符串，再转为数组后反转，将数组转为字符串再转为数值
  reverseInteger(number) {
    // write your code here
    return Number(
      number
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }
  // 解法二 （不推荐）
  /* 
    1、先获取到个位数 再乘100 得到结果的百分位
    2、再求余100并减去个位数得到10分位
    3、最后将number除100 得到结果的个位
  
  */
  reverseInteger1(number) {
    // write your code here
    return (
      (number % 10) * 100 +
      (number % 100) -
      (number % 10) +
      parseInt(number / 100)
    );
  }
}
```

## 2、a + b 问题

::: tip 描述
使用位运算符的情况下
给出两个整数 a 和 b , 求他们的和并以整数（int）的形式返回。
:::

#### 样例 1：

    输入：
    a = 1
    b = 2
    输出：
    3

    输入：
    a = -1
    b = 1
    输出：
    0

#### 题解

```js
export class Solution {
  /**
   * aplusb
   *
   * @param a: An integer
   * @param b: An integer
   * @return: The sum of a and b
   */
  aplusb(a, b) {
    // write your code here
    if (b === 0) return a;
    let sum = a ^ b;
    let carry = (a & b) << 1;
    return this.aplusb(sum, carry);
  }
}
```

## 3、巴什博弈

::: tip 描述
你正在和朋友玩一个游戏：桌子上有一堆石头，每一次你们都会从中拿出 1 到 3 个石头。拿走最后一个石头的人赢得游戏。游戏开始时，你是先手。
假设两个人都绝对理性，都会做出最优决策。给定石头的数量，判断你是否会赢得比赛。
举例：有四个石头，那么你永远不会赢得游戏。不管拿几个，最后一个石头一定会被你的朋友拿走
:::

#### 样例 1：

    输入：n = 4
    输出：False
    解析：先手取走1,2或者3，对方都会取走最后一个

#### 样例 2:

    输入：n = 5
    输出：True
    解析：先手拿1个，必胜

#### 题解

```js
export class Solution {
  /**
   * canWinBash
   *
   * @param n: an integer
   * @return: whether you can win the game given the number of stones in the heap
   */
  //  接替描述
  /* 根据举例
      因为每次可以拿1-3个石头，所以拿第四个石头的必输，由此发现给出在剩四个石头的时，对方先拿，则我方必输
      所以题目可以理解成n!==4 或4的倍数
     */
  canWinBash(n) {
    // Write your code here
    return n % 4 !== 0;
  }
}
```

## 4、计算圆的周长和面积

::: tip 描述

给定一个整数 r 代表一个圆的半径。

你的任务是返回一个数组。

其中数组的第一个元素代表圆的周长，数组的第二个元素代表圆的面积。
:::

#### 样例

    输入 : r = 2
    输出 : [12.56, 12.56]

#### 题解

```js
class Solution {
  calculate(r) {
    return [2 * Math.PI * r, Math.PI * r ** 2].map((v) => +v.toFixed(2));
  }
}
```
