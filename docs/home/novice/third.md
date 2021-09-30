<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-09-27 17:18:10
 * @LastEditTime: 2021-09-30 08:52:11
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

## 16、寻找素数

#### 描述

输出 n 以内所有的素数。（保证 n 是 100 以内的整数。）

#### 样例

    输入：5
    输出：[2, 3, 5]

#### 题解

```js
export class Solution {
  /**
   * prime
   *
   * @param n: an integer
   * @return: return all prime numbers within n.
   */
  prime(n) {
    // Write your code here
    let arr = []; // 先定一个空数组
    for (let i = 2; i <= n; i++) {
      let a = 0; // 定义个判别条件
      for (let k = 2; k < i; k++) {
        if (i % k === 0) {
          // 判断是否可被整除
          a++; // 更改条件
          break; // 结束本层循环，提高性能
        }
      }
      if (a === 0) {
        arr.push(i); // 判别条件不变时插入i
      }
    }
    return arr;
  }
}
```

## 17、寻找最大值

#### 描述

寻找 n 个数中的最大值。（保证列表里的所有数字都在 int 范围内。）

#### 样例

    输入：[1, 2, 3, 4, 5]
    输出：5

::: tip 说明
之前已有类似题目，不编写过多方法
:::

#### 题解

```js
export class Solution {
  maxNum(nums) {
    // write your code here
    return Math.max(...nums);
  }
}
```

## 18、旋转数组

#### 描述

给定一个数组，将数组向右移动 k 步，其中 k 为非负数。

#### 样例

    输入: [1,2,3,4,5,6,7], k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右旋转 1 步: [7,1,2,3,4,5,6]
    向右旋转 2 步: [6,7,1,2,3,4,5]
    向右旋转 3 步: [5,6,7,1,2,3,4]

#### 题解

```js
export class Solution {
  rotate(nums, k) {
    // Write your code here
    // 第一种
    return nums.splice(nums.length - k).concat(nums);
    // 第二种
    // for (let i = 0; i < k; i++) {
    //   nums.unshift(nums.pop());
    // }
    // return nums;
  }
}
```

## 19、回文数

#### 描述

判断一个非负整数 n 的二进制表示是否为回文数（我们保证 0 <= n <= 2^32 - 1）

#### 样例

    输入: n = 3
    输出: True
    解释:
    3 的二进制表示为：11。

    输入: n = 4
    输出: False
    解释:
    4 的二进制表示为：100。

#### 题解

```js
export class Solution {
  isPalindrome(n) {
    // Write your code here
    return (
      n.toString(2) ===
      n
        .toString(2) // 获取二进制值
        .split('') // 转换数组
        .reverse() // 反转数组
        .join('') // 转字符串
    );
  }
}
```

## 20、杨辉三角

#### 描述

给一整数 n, 返回杨辉三角的前 n 行

- 0 <= n <= 20
- 杨辉三角也被叫做帕斯卡三角形. --(Wikipedia)

#### 样例

    输入 : n = 4
    输出 :
    [
      [1]
      [1,1]
      [1,2,1]
      [1,3,3,1]
    ]

#### 题解

```js
export class Solution {
  calcYangHuisTriangle(n) {
    // write your code here
    let arr = [];
    for (let i = 0; i < n; i++) {
      if (arr.length > 1) {
        // 数组的长度大于1是
        let nums = [1];
        // 遍历上层二级数组
        arr[i - 1].forEach((v, index) => {
          if (index < arr[i - 1].length - 1) {
            nums.push(v + arr[i - 1][index + 1]);
          }
        });
        nums.push(1);
        arr.push(nums);
      } else {
        // 长度为0或1时
        arr.length === 1 ? arr.push([1, 1]) : arr.push([1]);
      }
    }
    return arr;
  }
}
```

## 21、反转数组

#### 描述

原地翻转给出的数组 nums

#### 题解

```js
export class Solution {
  reverseArray(nums) {
    // write your code here
    return nums.reverse();
  }
}
```

## 22、移动零

#### 描述

给一个数组 nums 写一个函数将 0 移动到数组的最后面，非零元素保持原数组的顺序(必须在原数组操作)

#### 样例

    输入: nums = [0, 1, 0, 3, 12],
    输出: [1, 3, 12, 0, 0]

#### 题解

```js
export class Solution {
  moveZeroes(nums) {
    // write your code here
    let len = nums.length;
    nums = nums
      .join()
      .replace(/0,/g, '') // 或者使用replaceAll(lintcode编辑器不支持)
      .split(',')
      .map((v) => Number(v));
    nums = nums.concat(new Array(len - nums.length).fill(0));
    return nums;
  }
}
```

## 23、数组第二大数

#### 描述

在数组中找到第二大的数。

```js
export class Solution {
  secondMax(nums) {
    // write your code here
    // 方法很多，来个性能好的
    // 使用冒泡排序，遍历两次，上浮的倒数第二个数即为第二大数。
    for (let i = 0; i < 2; i++) {
      for (let k = 0; k < nums.length - i - 1; k++) {
        if (nums[k] > nums[k + 1]) {
          [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]];
        }
      }
    }
    return nums[nums.length - 2];
  }
}
```

## 24、分解质因数

#### 描述

将一个整数分解为若干质因数之乘积。

#### 样例

    输入：10
    输出：[2, 5]

    输入：660
    输出：[2, 2, 3, 5, 11]

#### 题解

```js
export class Solution {
  primeFactorization(num) {
    // write your code here
    let val = 2; // 设置初始值
    let res = [];
    if (num < 2) return res;
    let limit = Math.sqrt(num);
    while (val <= num) {
      if (num % val === 0) {
        num /= val;
        res.push(val);
      } else {
        val += 1;
      }
      if (val > limit) {
        res.push(num);
        break;
      }
    }
    return res;
  }
}
```

## 25、冰雹猜想

#### 描述

数学家们曾提出一个著名的猜想——冰雹猜想。
对于任意一个自然数 N，如果 N 是偶数，就把它变成 N / 2；
如果 N 是奇数，就把它变成 3 \* N+1。
按照这个法则运算下去，最终必然得 1。
试问，该数通过几轮变换，会变成 1 呢？

#### 样例

样例 1：

    输入：
    4
    输出：
    2
    解释：
    第一轮：4/2=2
    第二轮：2/2=1
    答案为 2

#### 题解

```js
export class Solution {
  getAnswer(num) {
    // Write your code here
    // 方法一 递归
    if (num > 1) {
      if (num % 2 === 0) {
        return 1 + this.getAnswer(parseInt(num / 2));
      } else {
        return 1 + this.getAnswer(3 * num + 1);
      }
    } else {
      return 0;
    }

    // 方法二 while循环
    let count = 0;
    while (num !== 1) {
      num = num % 2 ? num * 3 + 1 : parseInt(num / 2);
      count++;
    }
    return count;
  }
}
```

## 26、翻转字符串

#### 描述

给定一个字符串，逐个翻转字符串中的每个单词。

:::warning 注
此题没有 js 编译环境
:::

#### 题解

```js
function reverseWords(s) {
  return s
    .split(' ')
    .reverse()
    .join(' ');
}
```

## 27、数组剔除元素后的乘积

#### 描述

- 给定一个整数数组 A。
- 定义 B[i] = A[0] _ ... _ A[i-1] _ A[i+1] _ ... \* A[n-1]B[i]=A[0]∗...∗A[i−1]∗A[i+1]∗...∗A[n−1]， 计算 B 的时候请不- 要使用除法。请输出 B。

#### 样例

    输入：
    A = [1,2,3]
    输出：
    [6,3,2]

#### 题解

```js
function productExcludeItself(nums) {
  let B = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    for (let k = 0; k < nums.length; k++) {
      if (k !== i) {
        temp *= nums[k];
      }
    }
    B.push(temp);
  }
}
```

## 28、 主元素

#### 描述

给定一个整型数组，找出主元素，它在数组中的出现次数大于数组元素个数的二分之一。

#### 样例

    输入：
    数组 = [1, 1, 1, 1, 2, 2, 2]
    输出：
    1
    解释：
    数组中1的个数大于数组元素的二分之一。

#### 题解

```js
function majorityNumber(nums) {
  // 方法一
  // 先使用reduce返回个对象，数组的个元素作为对象的属性，值为出现的次数
  let obj = nums.reduce((pre, cur) => {
    if (cur in pre) {
      ++pre[cur];
    } else {
      pre[cur] = 1;
    }
    return pre;
  }, {});
  let res = null;
  // 获取最大次数
  for (let k in obj) {
    if (obj[k] > parseInt(nums.length / 2)) {
      res = k;
      break;
    }
  }
  return res;
  // 方法二
  let marjor = nums[0];
  let count = 1; // 定义次数
  for (let i = 0; i < nums.length; i++) {
    if (count < 1) {
      marjor = nums[i]; // 次数降到小于1时，重新赋值
    }
    if (marjor === nums[i]) {
      count++; // 增加次数
    } else {
      count--;
    }
  }
  return marjor;
}
```

## 29、Fizz Buzz 问题

#### 描述

- 给定整数 n ，按照如下规则打印从 1 到 n 的每个数：
- 如果这个数被 3 整除，打印 fizz。
- 如果这个数被 5 整除，打印 buzz。
- 如果这个数能同时被 3 和 5 整除，打印 fizz buzz。
- 如果这个数既不能被 3 整除也不能被 5 整除，打印数字本身。

#### 题解

```js
export class Solution {
  fizzBuzz(n) {
    // write your code here
    let arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        arr.push('fizz buzz');
      } else if (i % 3 === 0) {
        arr.push('fizz');
      } else if (i % 5 === 0) {
        arr.push('buzz');
      } else {
        arr.push(String(i));
      }
    }
    return arr;
  }
}
```
