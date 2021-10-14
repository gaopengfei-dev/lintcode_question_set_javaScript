<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-08 11:58:00
 * @LastEditTime: 2021-10-08 13:52:58
-->

## 斐波那契数列

#### 描述

查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：

前 2 个数是 0 和 1 。
第 i 个数是第 i-1 个数和第 i-2 个数的和。
斐波纳契数列的前 10 个数字是：

0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

#### 题解

```js
export class Solution {
  /**
   * fibonacci
   *
   * @param n: an integer
   * @return: an ineger f(n)
   */
  fibonacci(n) {
    // write your code here
    /* lintcode中使用常规递归函数会超时 */
    if (n <= 1) return 1;
    if (n === 2) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    /* 2、使用es6解构赋值的方式 */
    let [a, b] = [0, 1];
    for (let i = 1; i < n; i++) {
      [a, b] = [b, a + b];
    }
    return a;
  }
}
```
