<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-08 09:44:49
 * @LastEditTime: 2021-10-08 11:53:42
-->

## 41、二阶阶乘

#### 描述

给定一个数 n，返回该数的二阶阶乘。在数学中，正整数的二阶阶乘表示不超过这个正整数且与它有相同奇偶性的所有正整数乘积。

    样例
    样例1:

    输入: n = 5
    输出: 15
    解释:
    5!! = 5 * 3 * 1 = 15
    样例2:

    输入: n = 6
    输出: 48
    解释:
    6!! = 6 * 4 * 2 = 48

#### 题解

```js
export class Solution {
  /**
   *   由于js数值在大于17位时会丢失精度。本题n在大于30时存在此类问题
   */
  doubleFactorial(n) {
    // Write your code here
    if (n <= 1) {
      return 1;
    } else {
      return n * this.doubleFactorial(n - 2);
    }
  }
}
```

## 42、实现一个栈

```js
class Stack {
  constructor() {
    this.self = [];
  }
  // 入栈
  push(n) {
    this.self.push(n);
  }
  // 出栈
  pop() {
    return this.self.pop();
  }
  // 栈顶
  top() {
    return this.self[this.self.length - 1];
  }
  // 检测空栈
  isEmpty() {
    return this.self.length === 0;
  }
  // 查看栈大小
  size() {
    return this.self.length;
  }
  // 清空栈
  clear() {
    this.self = [];
  }
  // 打印栈
  print() {
    console.log(this.self);
  }
}
```

## 43、实现个队列

```js
class MyQueue {
  constructor() {
    this.self = [];
  }
  // 入队
  enqueue(n) {
    this.self.push(n);
  }
  // 出队
  dequeue(n) {
    return this.self.shift();
  }
  // 判空
  isEmpty() {
    return this.self.length === 0;
  }
  // 返回队首
  front() {
    return this.self[0];
  }
  // 队列大小
  size() {
    return this.self.length;
  }
  // 清空队列
  clear() {
    this.self = [];
    return true;
  }
  // 打印队列
  print() {
    console.log(this.self);
  }
}
```

## 44、有效的括号序列

#### 描述

给定一个字符串所表示的括号序列，包含以下字符： '(', ')', '{', '}', '[' and ']'， 判定是否是有效的括号序列。

括号必须依照 "()" 顺序表示， "()[]{}" 是有效的括号，但 "([)]" 则是无效的括号。

    样例
    样例 1：

    输入："([)]"
    输出：False
    样例 2：

    输入："()[]{}"
    输出：True

#### 解题思路

    遍历字符串，先判断是否为左侧括号，如是则入栈，不是则判断栈顶元素是否对应当前元素，对应则出栈。

```js
export class Solution {
  isValidParentheses(s) {
    // write your code here
    let obj = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      if (i === 0) {
        if (!obj[s[i]]) return false;
        arr.push(s[0]);
        continue;
      }
      if (obj[arr[arr.length - 1]] === s[i]) {
        arr.pop();
        continue;
      }
      if (!obj[s[i]]) return false;
      arr.push(s[i]);
    }
    return arr.length === 0;
  }
}
```

## 45、小括号匹配（同上题相似）

#### 描述

给定一个字符串所表示的括号序列，包含以下字符： '(', ')'， 判定是否是有效的括号序列。

括号必须依照 "()" 顺序表示， "()" 是有效的括号，但 ")(" 则是无效的括号。

#### 题解

```js
export class Solution {
  /**
   * matchParentheses
   *
   * @param string: A string
   * @return: whether the string is valid
   */
  matchParentheses(string) {
    // Write your code here
    let str = string.split('');
    if (str[0] !== '(') return false;
    let obj = {
      '(': ')'
    };
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        arr.push(str[i]);
      } else if (str[i] === obj[arr[arr.length - 1]]) {
        arr.pop();
      } else if (!obj[str[i]]) {
        return false;
      }
    }
    return arr.length === 0;
  }
}
```
