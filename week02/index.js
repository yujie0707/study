/**
 * 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListNode = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/**
 * 第k大的数 快排思路
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const { length } = nums;
  let [left, right] = [0, length - 1];

  while (left < right) {
    let i = left;
    let j = right;
    let flag = left;

    while (i < j) {
      while (i < j && nums[j] >= nums[flag]) {
        j--;
      }

      [nums[j], nums[flag]] = [nums[flag], nums[j]];
      flag = j;

      while (i < j && nums[i] <= nums[flag]) {
        i++;
      }

      [nums[i], nums[flag]] = [nums[flag], nums[i]];
      flag = i;
    }

    if (flag === length - k) return nums[flag];
    if (flag > length - k) {
      right = flag - 1;
    } else {
      left = flag + 1;
    }
  }

  return nums[left];
};

/**
 * 第k大的数 堆排序思想
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function findKthLargest(nums, k) {
  let heap = nums.slice(0, k);
  makeMinHeap(heap);
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      heapAdjust(heap, 0, k);
    }
  }
  return heap[0]
}

function makeMinHeap(arr) {
  let startIndex = arr.length >> 1;
  for (let i = startIndex; i >= 0; i--) {
    heapAdjust(arr, i, arr.length)
  }
}

function heapAdjust(arr, s, m) {
  let temp = arr[s]
  for (let i = s * 2 + 1; i < m; i = i * 2 + 1) {
    if ((i + 1) < m && arr[i + 1] < arr[i]) {
      i++
    }
    if (temp < arr[i]) {
      break
    } else {
      arr[s] = arr[i]
      s = i
    }
    arr[s] = temp
  }
}

/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function(s) {
  let result = 0;
  if (!s) return result;
  let map = new Map();
  let cur = 0;
  let start = -1;

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (!map.has(str) || map.get(str) < start) {
      cur++;
    } else {
      start = map.get(str);
      cur = i - start;
    }
    map.set(str, i);
    result = Math.max(cur, result);
  }

  return result;
};


