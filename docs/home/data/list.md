<!--
 * @Description:
 * @Author: 郜鹏飞
 * @Date: 2021-10-10 12:18:18
 * @LastEditTime: 2021-10-10 12:32:41
-->

## 1、从头到位打印链表

    示例 1：

    输入：head = [1,3,2]
    输出：[2,3,1]

#### 代码

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let res = [];
  while (head != null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
};
```

## 2、反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

#### 代码

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  while (head) {
    let curr = head;
    // 修改head志向下一个
    head = head.next;
    // curr的指向改为prev
    curr.next = prev;
    // prev改为当前curr的志向
    prev = curr;
  }
  return prev;
};
```
