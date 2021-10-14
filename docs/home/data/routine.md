<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-10 12:44:32
 * @LastEditTime: 2021-10-11 10:22:31
-->

## 1、两数之和

#### 描述

给定一个整数数组 nums  和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那   两个   整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]

示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]

#### 代码

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法一 性能好
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    x = target - nums[i];
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
// 方法二 常规解法
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};
```
