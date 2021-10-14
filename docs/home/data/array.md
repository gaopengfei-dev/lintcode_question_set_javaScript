<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-13 08:47:48
 * @LastEditTime: 2021-10-13 10:14:30
-->

## 1、数组中重复的数字

来源：剑指 offer

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3

#### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 这里我们使用hash表来实现，hash表中没有的我们像其中添加属性，有的直接return
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
};
```

## 2、在排序数组中查找数字 I

来源：剑指 offer

统计一个数字在排序数组中出现的次数。

示例 1:

    输入: nums = [5,7,7,8,8,10], target = 8
    输出: 2

示例  2:

    输入: nums = [5,7,7,8,8,10], target = 6
    输出: 0

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 方法一 使用filter
  return nums.filter((v) => v === target).length;
  // 方法二 利用题给的有序数组  使用双指针。
  let l = 0,
    r = nums.length - 1;
  while (nums[l] < target) l++;
  while (nums[r] > target) r--;
  return r - l >= 0 ? r - l + 1 : 0;
  // 方法三 hash 方法
  let hash = {};
  for (let v of nums) {
    v in hash ? hash[v]++ : (hash[v] = 1);
  }
  return hash[target] ? hash[target] : 0;
};
```

## 3、 0 ～ n-1 中缺失的数字

来源：力扣（LeetCode）剑指 offer

一个长度为 n-1 的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围 0 ～ n-1 之内。在范围 0 ～ n-1 内的 n 个数字中有且只有一个数字不在该数组中，请找出这个数字

示例 1:

    输入: [0,1,3]
    输出: 2

示例 2:

    输入: [0,1,2,3,4,5,6,7,9]
    输出: 8

#### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 使用二分法
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = (low + high) >> 1;
    // 判断中间值是否为对应值，若相等说明缺少的数在右侧，不相等，说明在左侧
    if (nums[mid] === mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
```

## 4、二维数组中的查找

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

    现有矩阵 matrix 如下：

    [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
    ]

    给定 target = 5，返回 true。

    给定 target = 20，返回 false。

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  // 方法一 粗暴方式 性能还不错
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(target)) {
      return true;
    }
  }
  return false;
  // 坐标系方法，将二维数组想象成一个平面直角坐标系，起始点为0，0，即为18，判断当前值是否大于target，大于则向上移动，否则平移
  /* 
    1, 4, 7, 11, 15
    2, 5, 8, 12, 19
    3, 6, 9, 16, 22
    10, 13, 14, 17, 24
    18, 21, 23, 26, 30
  */
  if (!matrix.length) return false;
  let [y, x] = [0, matrix.length - 1];
  while (x >= 0 && y < matrix[0].length) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }
  return false;
};
```

## 5、旋转数组的最小数字

来源：力扣（LeetCode）剑指 offer

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。

示例 1：

    输入：[3,4,5,1,2]
    输出：1

示例 2：

    输入：[2,2,2,0,1]
    输出：0

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  // 方法一 常规解法
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return numbers[i + 1];
    }
  }
  return numbers[0];
  // 二分法 利用中间值判断是否大于右侧值，若大于右侧值，说明结果在右侧，否则结果在左侧，若等于，在右侧值减1再判断
  let [l, r] = [0, numbers.length - 1];
  while (l < r) {
    let mid = (l + r) >> 1;
    if (numbers[mid] > numbers[r]) {
      l = mid + 1;
    } else if (numbers[mid] < numbers[r]) {
      r = mid;
    } else {
      r--;
    }
  }
  return numbers[l];
};
```
