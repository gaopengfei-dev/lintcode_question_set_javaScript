<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-30 10:49:59
 * @LastEditTime: 2021-09-30 15:35:41
-->

## 30、转换字符串到整数（容易版）

#### 描述

给一个字符串, 转换为整数。你可以假设这个字符串是一个有效整数的字符串形式， 且范围在 32 位整数之间 (-231 ~ 231 - 1)。

#### 题解

```js
export class Solution {
  stringToInteger(target) {
    // write your code here
    return Number(target);
  }
}
```

## 31、大小写转换 II

#### 描述

将一个字符串中的小写字母转换为大写字母。不是字母的字符不需要做改变。

#### 题解

```js
export class Solution {
  /**
   * lowercaseToUppercase2
   *
   * @param str: A string
   * @return: A string
   */
  lowercaseToUppercase2(str) {
    // write your code here
    return str.toUpperCase();
  }
}
```

## 32、字符串查找

#### 描述

对于一个给定的 source 字符串和一个 target 字符串，你应该在 source 字符串中找出 target 字符串出现的第一个位置(从 0 开始)。如果不存在，则返回 -1。

#### 题解

```js
export class Solution {
  strStr(source, target) {
    // Write your code here
    return source.indexOf(target);
  }
}
```

## 33、转换成小写字母

#### 描述

实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

#### 题解

```js
export class Solution {
  toLowerCase(str) {
    // Write your code here
    return str.toLowerCase();
  }
}
```

## 34、两字符串和

#### 描述

给定两个仅含数字的字符串，你需要返回一个由各个位之和拼接的字符串

- A 和 B 是由数字组成的字符串

#### 样例

    示例1:
    输入:
    A = "99"
    B = "111"
    输出: "11010"
    解释: 因为 9 + 1 = 10, 9 + 1 = 10, 0 + 1 = 1,连接之后的结果是 "11010"

    示例2:
    输入:
    A = "2"
    B = "321"
    输出: "323"
    解释: 因为 1 + 2 = 3, 2 + 0 = 2, 3 + 0 = 3,连接之后的结果是 "323"

#### 题解

```js
export class Solution {
  SumofTwoStrings(A, B) {
    // Write your code here
    // 我们先获取到最长的字符串
    let len = A.length > B.length ? A.length : B.length;
    A = A.padStart(len, '0'); // 为字符串进行头部补全，限制长度为len。所以只会为短的字符补0
    B = B.padStart(len, '0');
    let res = [];
    // 循环按位相加
    for (let i = 0; i < len; i++) {
      res[i] = Number(A[i]) + Number(B[i]);
    }
    return res.join(''); // 转化为字符串
  }
}
```

## 35、首字母大写

#### 描述

输入一个英文句子，将每个单词的第一个字母改成大写字母

- 这个句子可能并不是一个符合语法规则的句子。
- 句子长度小于等于 100。

#### 样例

    输入: s =  "i want to get an accepted"
    输出: "I Want To Get An Accepted"

    输入: s =  "i jidls    mdijf  i  lsidj  i p l   "
    输出: "I Jidls Mdijf I Lsidj I P L "

#### 题解

```js
export class Solution {
  capitalizesFirst(s) {
    // Write your code here
    return s.replace(/\b\w/g, (v) => v.toUpperCase());
  }
}
```

## 36、回文数

#### 描述

- 判断一个正整数是不是回文数。

- 回文数的定义是，将这个数反转之后，得到的数仍然是同一个数。

#### 样例

    输入：11
    输出：true
    输入：1232
    输出：false
    解释：
    1232!=2321

#### 题解

```js
export class Solution {
  isPalindrome(num) {
    // write your code here
    return (
      num ===
      Number(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      )
    );
  }
}
```

## 37、最长单词

#### 描述

给一个词典，找出其中所有最长的单词。

    样例 1:
        输入: {
            "dog",
            "google",
            "facebook",
            "internationalization",
            "blabla"
            }
        输出: ["internationalization"]
    样例 2:
        输入: {
            "like",
            "love",
            "hate",
            "yes"
            }
        输出: ["like", "love", "hate"]

::: tip 说明
本题没有 JavaScript 运行环境
:::

```js
function longestWords(arr) {
  let long = arr[0].length;
  arr.forEach((v) => {
    if (v.length > long) {
      long = v.length;
    }
  });
  return arr.filter((v) => v.length === long);
}
```

## 38、最后一个单词的长度

#### 描述

- 给定一个字符串， 包含大小写字母、空格 ' '，请返回其最后一个单词的长度。
- 如果不存在最后一个单词，请返回 0 。

#### 样例

    输入："Hello World"
    输出：5

    输入："Hello LintCode"
    输出：8

:::tip 说明
本题没有 JavaScript 运行环境
:::

```js
function lengthOfLastWord(str) {
  let arr = str.split(' ');
  return arr.length ? arr[arr.length - 1].length : 0;
}
```

## 39、最大字母

#### 描述

- 给定字符串 S，找到最大的字母字符，其大写和小写字母均出现在 S 中，则返回此字母的大写，若不存在则返回"NO"。

  输入: S = "admeDCAB"
  输出: "D"

  输入: S = "adme"
  输出: "NO"

#### 题解

```js
export class Solution {
  largestLetter(s) {
    // Write your code here
    // 节省性能
    let lowerS = s.toLowerCase();
    let upperS = s.toUpperCase();
    if (s == lowerS || s == upperS) return 'NO';
    // 替换掉小写字母
    s = s.replace(/[a-z]/g, '');
    let res = s[0];
    for (let i = 0; i < s.length; i++) {
      if (s[i] > res) {
        res = s[i];
      }
    }
    return res;
  }
}
```

## 40、旋转字符串

#### 描述

- 给定一个字符串 str 和一个偏移量，根据偏移量原地旋转字符串(从左向右旋转)。
- 对于不同的语言，str 将以不用的形式给出，例如对于字符串 "abc" ，将以下面的形式给出

#### 样例

##### 样例 1

    str = "abcdefg"
    offset = 3
    输出：
    "efgabcd"

##### 样例 2

    输入：
    str = "abcdefg"
    offset = 0
    输出：
    "abcdefg"

##### 样例 3

    输入：
    str = "abcdefg"
    offset = 10
    输出：
    "efgabcd"

::: tip 说明
此题没有 JavaScript 运行环境
:::

```js
function rotateString(str, offset) {
  let arr = str.split('');
  for (let i = 0; i < offset; i++) {
    arr.unshift(arr.pop());
  }
  return arr.join('');
}
```
