---
title: "菜雞自評 - 解 Two Sum"
cover: "Algorithm"
category: "JavaScript"
date: "2020-12-04"
excerpt: "重新寫一遍 LeetCode 的經典入門題：Two-Sum，並分享一些簡單的算法觀念"
language: "zh_Hant"
published: true
featured: false
tags:
  - Self Assessment
  - LeetCode
---

## 前言

（2022/07/30 更新內容）

當初寫 Two Sum 這篇文章的時候，對於 JavaScript 內建函式的運作以及複雜度的評估都不太熟悉，所以原先的內容有許多錯誤的觀念。

後來從網站瀏覽數據發現這篇文章的瀏覽量是比較高的，估計有許多剛開始刷題的人們剛好看到我這篇，因此決定更新內容以免貽笑大方。

---

## 說明

這篇主要是來解 LeetCode 的經典入門題：[Two-Sum](https://leetcode.com/problems/two-sum/)，先來看一下敘述吧。

```
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.
```

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Constraints:

```
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
```

簡單的說，就是輸入有一個 array 和一個目標數，要從 array 中找到兩個數字加起來值為目標數，然後輸出要是該兩數字個別的 index。

## 複習與自評

### 起手式：暴力解

暴力解就簡單粗暴，直接雙重迴圈跑每兩個數字加起來的值：

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        // 相加等於 target 就直接輸出該兩值的 index
        return [i, j];
      }
    }
  }
};
```

這個解法的複雜度：

- Time: O(n^2)
  - 兩個迴圈所以 O(n^2)
- Space: O(1)
  - 沒有使用額外的空間故空間複雜度為常數

暴力解通常就是能解出答案，但會超出時間的，所以我送出這個結果果然是得到 `TLE`(Time Limit Exceeded) 了。

### 優化

上面的寫法顯然會使兩個數字都跑兩遍，那很顯然可以嘗試用空間來換取時間：

```js
var twoSum = function (nums, target) {
  const indexMap = new Map();
  // 定義一個 hash map 來儲存 number 與 index 的關係
  // 這邊也可以用初學者比較熟悉的 Object 來存

  for (let i = 0; i < nums.length; i++) {
    if (indexMap.has(target - nums[i])) {
      // 想找到的是可以和 nums[i] pair 加起來為 target 的數值
      // 所以如果 hash map 裡面有 target - nums[i] 那就是可以找到 pair 的對象了
      return [indexMap.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
    // 把 number 和 index 的關係存到 hash map 裡
  }
};
```

解釋一下為什麼這邊用 Map 來存而非 Object，是因為 Map 的 key 可以是 number 這種 type，而 Object 的 key 都是 string （或 symbol）。

雖然 js 是會自動轉型別，但我個人習慣是會盡量避免自動轉型的狀況，有興趣了解差異的可以參考 [Objects vs. Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)。

如果上面寫法用 Object 的話看起來會更簡潔：

```js
var twoSum = function (nums, target) {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in indexMap) {
      return [indexMap[target - nums[i]], i];
    }
    indexMap[nums[i]] = i;
  }
};
```

這個解法的複雜度：

- Time: O(n)
  - 算法降到只有一個迴圈，所以 O(n)
- Space: O(n)
  - 最差情況 Map 裡面會存 n-1 個內容，所以空間最多使用 O(n-1) 近似 O(n)

## 結語

內容都很入門但希望對閱讀者有幫助，謝謝閱讀。