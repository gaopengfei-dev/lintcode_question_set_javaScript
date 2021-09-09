<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-09 16:41:46
 * @LastEditTime: 2021-09-09 17:17:25
-->

# 新手必刷 50 题

## 第一阶段

### 1、反转一个三位整数

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
    return Number(number.toString().split('').reverse().join(''));
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
