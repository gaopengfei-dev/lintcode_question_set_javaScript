<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-27 17:15:53
 * @LastEditTime: 2021-09-30 09:16:34
-->

## 5、简易计算器

#### 描述

给出两个整数 a , b ,以及一个操作符 opeator

    +, -, *, /

返回结果 a operator b

#### 样例

    // 输入
    a = 1
    b = 2
    operator = +
    // 输出
    3

解释：

返回 1 + 2 的结果

#### 题解

```js
export class Calculator {
  /**
   * calculate
   *
   * @param a: An integer
   * @param operator: A character, +, -, *, /.
   * @param b: An integer
   * @return: The result
   */
  calculate(a, operator, b) {
    // write your code here
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return '运算符错误';
    }
  }
}
```

## 6、求三个数中的最大值

::: tip 说明
方法太多，不过多编写
:::

#### 题解

```js
export class Solution {
  /**
   * maxOfThreeNumbers
   *
   * @param num1: An integer
   * @param num2: An integer
   * @param num3: An integer
   * @return: an interger
   */
  maxOfThreeNumbers(num1, num2, num3) {
    // write your code here
    return Math.max(num1, num2, num3);
  }
}
```

## 7、大小写转换

#### 描述

将一个字符由小写字母转换为大写字母

#### 题解

```js
export class Solution {
  /**
   * lowercaseToUppercase
   *
   * @param character: a character
   * @return: a character
   */
  lowercaseToUppercase(character) {
    // write your code here
    return character.toUpperCase();
  }
}
```

## 8、判断数字与字母字符

#### 描述

给出一个字符 c，如果它是一个数字或字母，返回 true，否则返回 false。

#### 题解

```js
export class Solution {
  /**
   * isAlphanumeric
   *
   * @param c: A character.
   * @return: The character is alphanumeric or not.
   */
  isAlphanumeric(c) {
    // write your code here
    return /[a-z]|[A-Z]|\d/.test(c);
  }
}
```

## 9、月份天数

#### 描述

给定年份和月份，返回这个月的天数。

    1≤year≤10000
    1≤month≤12

#### 题解

```js
export class Solution {
  /**
   * getTheMonthDays
   *
   * @param year: a number year
   * @param month: a number month
   * @return: return the number of days of the month.
   */
  getTheMonthDays(year, month) {
    // write your code here
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 2:
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
          ? 29
          : 28;
      default:
        return 30;
    }
  }
}
```

## 10、闰年

#### 描述

判断给出的年份 n 是否为闰年. 如果 n 为闰年则返回 true

::: 说明
闰年是包含额外一天的日历年. 如果年份可以被 4 整除且不能被 100 整除 或者 可以被 400 整除, 那么这一年为闰年
:::

```js
export class Solution {
  /**
   * isLeapYear
   *
   * @param n: a number represent year
   * @return: whether year n is a leap year.
   */
  isLeapYear(n) {
    // write your code here
    return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
  }
}
```
