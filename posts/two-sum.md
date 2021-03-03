---
title: "菜雞自評 - 解 Two Sum"
cover: "Algorithm"
category: "JavaScript"
excerpt: "訓練解題似乎是 junior 到 senior 的必經過程，所以偶爾也來練解題，這次要解的是 LeetCode 的經典入門題：Two-Sum。"
date: "2020-12-04"
published: true
featured: true
tags:
  - self-assessment
  - LeetCode
  - 中文
---

## 前言

可能會改變一下原本菜雞自評系列的模式，之前的做法比較像是我的筆記貼上來，但邏輯敘述比較少。

我覺得要複習應該有更好的方法，而自從認真跟 Lidemy 計畫的進度之後，後面基本上都沒練到解題，所以現在開始重拾解題。

---

## 說明

這篇主要是來解 LeetCode 的經典入門題：[Two-Sum](https://leetcode.com/problems/two-sum/)，先來看一下敘述吧。

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Constraints:

- 2 <= nums.length <= 103
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

簡單的說，就是輸入有一個 array 和一個目標數，要從 array 中找到兩個數字加起來值為目標數，然後輸出要是該兩數字個別的 index。

## 複習與自評

### 起手式：暴力解

暴力解就簡單粗暴，直接雙重迴圈跑每兩個數字加起來的值，我在其中再自作聰明地加了一些判斷式：

```js
var twoSum = function (nums, target) {
  if (nums.length === 2) {
    // 如果輸入的 array 只有兩個值，
    // 那答案必定是它們兩個，
    // 所以不用跑迴圈直接輸出。
    return nums;
  }

  // array 如果超過兩個值，那很不幸地得跑迴圈
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < target) {
      // 因為沒有負數的關係，
      // 所以兩個值必定都是個別小於 target
      for (let j = i + 1; i < nums.length; j++) {
        if (nums[j] < target) {
          if (nums[i] + nums[j] === target) {
            // 相加等於 target 就直接輸出該兩值的 index
            return [i, j];
          }
        }
      }
    }
  }
};
```

暴力解通常就是能解出答案，但會超出時間的，所以我送出這個結果果然是得到 `Time Limit Exceeded` 了。

### 善用 array method

要減少時間複雜度，當然得讓迴圈層數減少，於是我嘗試用 array method 來處理。

```js
var twoSum = function (nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length - 1; i++) {
    const arr = nums.slice(i + 1); // 切出一個新的 array 是當前 index
    const findAnswer = arr.filter((num) => target - num === nums[i]);
    // 用 filter 過濾出扣掉 target 等於第一層迴圈的數字

    if (findAnswer.length > 0) {
      // 如果過濾出來的內容是有解答的
      return [i, arr.indexOf(findAnswer[0]) + i + 1]; // 輸出答案
    }
  }
};
```

結果：

```
Runtime: 76 ms
Your runtime beats 92.01 % of javascript submissions.

Memory Usage: 38.8 MB
Your memory usage beats 76.94 % of javascript submissions.
```

另外還有看到網路上別人的解答，概念和我的解法類似：

來源：[LeetCode 1. Two Sum · 初學者練習 - LeetCode with Javascript](https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/1md.html)

```js
var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var v = nums[i];

    if (map[target - v] >= 0) {
      // 如果 target - v可以在map中找到值x，代表之前已經出現過值x， target = x + v
      // 因此回傳 x的位置與目前v的位置
      return [map[target - v], i];
    } else {
      // 使用map儲存目前的數字與其位置

      map[v] = i;
    }
  }
};
```

```
Runtime: 76 ms
Your runtime beats 92.01 % of javascript submissions.

Memory Usage: 38.6 MB
Your memory usage beats 93.32 % of javascript submissions.
```

這個解法花的時間和我差不多，但是空間比我得還少。

---

## 結語

很久沒解題了，其實這個花了我不少時間 XD，試到第八次才成功，真的還有得練呢。
