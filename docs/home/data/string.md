<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-13 08:46:35
 * @LastEditTime: 2021-10-13 10:27:52
-->

## 1、左旋转字符串

来源：剑指 offer

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字 2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

    输入: s = "abcdefg", k = 2
    输出: "cdefgab"

示例 2：

    输入: s = "lrloseumgh", k = 6
    输出: "umghlrlose"

#### 代码

```js
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // 方法一 截取n以后的字符串拼接n以前的字符串
  let str = s.substring(n) + s.substring(0, n);
  return str;
  //   方法二 转数组，在添加
  let arr = s.split('');
  let res = arr.splice(0, n);
  return arr.concat(res).join('');
};
```

## 2、 第一个只出现一次的字符

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
示例 1:

    输入：s = "abaccdeff"
    输出：'b'

示例 2:

    输入：s = ""
    输出：' '

#### 代码

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  // indexOf方法 性能好
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    // 判断i之后还有没有
    if (s.indexOf(ch) == i && s.indexOf(ch, i + 1) == -1) {
      return s.charAt(i);
    }
    // 方法二
    if (s.indexOf(ch) === s.lastIndexOf(ch)) {
      return s.charAt(i);
    }
  }
  return ' ';
  //   方法三 使用hash
  let hash = Object.create(null);
  for (let v of s) {
    v in hash ? hash[v]++ : (hash[v] = 1);
  }
  for (let key in hash) {
    if (hash[key] === 1) return key;
  }
  return ' ';
};
```
