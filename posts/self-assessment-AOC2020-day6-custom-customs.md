---
title: "菜雞自評 - 2020 AOC Day6 Custom Customs"
cover: ""
category: "Algorithm"
date: "2020-12-06"
excerpt: "最近聖誕節快到了，每年都有的 AOC 解題活動也開始進行，這次來看一下 Day 6 的內容 Custom Customs。"
published: true
featured: true
tags:
  - self-assessment
  - AdventOfCode
  - 中文
---

## 前言

AOC 是每年 12/1 到 12/25 都天會有的解題活動，題目內容有點故事性，只要輸入答案對了就通過，所以基本上沒有限定解題過程，即使你要暴力徒手紙筆解也是沒問題的。

想了解更多介紹，可參考 [重拾程式解題的樂趣 - Advent of Code](https://13h.tw/2019/12/04/adventofcode.html)。

今天是第六天了，我也打算偶爾紀錄一下解題的過程，所以就從今天開始吧。

---

## 題目

首先，先把題目 po 上來：

### --- Day 6: Custom Customs ---

As your flight approaches the regional airport where you'll switch to a much larger plane, customs declaration forms are distributed to the passengers.

The form asks a series of 26 yes-or-no questions marked a through z. All you need to do is identify the questions for which anyone in your group answers "yes". Since your group is just you, this doesn't take very long.

However, the person sitting next to you seems to be experiencing a language barrier and asks if you can help. For each of the people in their group, you write down the questions for which they answer "yes", one per line. For example:

```
abcx
abcy
abcz
```

In this group, there are 6 questions to which anyone answered "yes": a, b, c, x, y, and z. (Duplicate answers to the same question don't count extra; each question counts at most once.)

Another group asks for your help, then another, and eventually you've collected answers from every group on the plane (your puzzle input). Each group's answers are separated by a blank line, and within each group, each person's answers are on a single line. For example:

```
abc

a
b
c

ab
ac

a
a
a
a

b
```

This list represents answers from five groups:

- The first group contains one person who answered "yes" to 3 questions: a, b, and c.
- The second group contains three people; combined, they answered "yes" to 3 questions: a, b, and c.
- The third group contains two people; combined, they answered "yes" to 3 questions: a, b, and c.
- The fourth group contains four people; combined, they answered "yes" to only 1 question, a.
- The last group contains one person who answered "yes" to only 1 question, b.

In this example, the sum of these counts is 3 + 3 + 3 + 1 + 1 = 11.

For each group, count the number of questions to which anyone answered "yes". What is the sum of those counts?

[input](https://adventofcode.com/2020/day/6/input)

#### --- Part Two ---

As you finish the last group's customs declaration, you notice that you misread one word in the instructions:

You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!

Using the same example as above:

```
abc

a
b
c

ab
ac

a
a
a
a

b
```

This list represents answers from five groups:

In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
In the second group, there is no question to which everyone answered "yes".
In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
In the fourth group, everyone answered yes to only 1 question, a.
In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.
In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.

For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?

[input](https://adventofcode.com/2020/day/6/input)

---

## 解題

### Part 1

題目都是有情境描述的所以內容看起來很長，但簡單來說 part 1 要求的內容就是 input 裡面有很多 group，每個 group 都是用空行來分隔，而每個 group 裡有分不同行，要把每一行的 a-z 出現過的字母給加總，要注意的是看字母而不是看次數，如果 a 出現 2 次而 b 出現 1 次，那還是會記數量為 2 表示出現 a 和 b 兩種字母。

在貼解法之前先說我用的工具，我是將解法寫在下方 `solve` 這個 function 裡，然後把 input 放在另個 `input.txt` 檔案，接著在 terminal 跑 `cat input.txt | node AOC.js`。

```js
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on("line", function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on("close", function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  // 解法
}
```

廢話不多說了，直接貼我的解法。

```js
function solve(lines) {
  let count = 0;
  let arr = [[]]; // 定義一個 array 首先裡面還有一個空的 array
  for (let line of lines) {
    // 如果該行沒有內容，代表是空行也就是接下來是另一個 group
    if (line === "") {
      count++;
      arr[count] = []; // 在 array 裡面新增一個空的 array
      continue; // 跳到下個迴圈，以下內容不執行
    }

    // 如果是同個 group，迴圈跑該行的每個內容
    for (item of line) {
      // 如果 array 裡的個別 array 沒有該 item，那就放該 item
      if (arr[count] && !arr[count].includes(item)) arr[count].push(item);
    }
  }
  // 數 array 每一個個別 array 的內容個數
  console.log(arr.reduce((ac, item) => (ac += item.length), 0));
}
```

### Part 2

接下來看 part 2，input 是一樣的只是這次要求的是每個 group 裡字母在每一行都有出現。

```js
function solve(lines) {
  let count = 0;
  let arr = [{ peopleNum: 0 }];

  // 把每個 group 的行數還有字母出現次數記錄下來
  for (let line of lines) {
    if (line === "") {
      count++;
      arr[count] = { peopleNum: 0 };
      continue;
    }
    for (item of line) {
      if (!arr[count][item]) {
        arr[count][item] = 0;
      }
      arr[count][item]++;
    }
    arr[count]["peopleNum"]++;
  }

  // 記錄行數和字母出現次數一樣
  let result = arr.reduce((ac, group) => {
    let num = 0;
    for (item in group) {
      if (item !== "peopleNum") {
        // 確認
        if (group[item] === group["peopleNum"]) {
          num += 1;
        }
      }
    }
    return (ac += num);
  }, 0);
  console.log(result);
}
```

這次解題用上 reduce, for in, for of 等內容，答案有算出來但總是落落長，接下來看看別人的解法。

### 他人解

參考我的老師 Huli 的解法

#### Part 1

```js
var lines = document.querySelector("pre").innerText.split("\n");
var count = 0;
var groups = [""];
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === "") {
    count++;
    groups[count] = "";
    continue;
  }
  groups[count] += lines[i];
}
console.log(
  groups.map((str) => new Set(str).size).reduce((sum, n) => sum + n, 0)
);
```

參考 Huli 的解法讓我更了解 [Set](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set) 這個東西。

Set 類似 array 但是只能放入為一值，所以不會有重複的內容，其實一直知道它但很不熟，之後要試著用它來解類似的狀況。

#### Part 2

```js
var lines = document.querySelector("pre").innerText.split("\n");
var count = 0;
var groups = [""];
var sizeOfGroup = [0];
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === "") {
    count++;
    groups[count] = "";
    sizeOfGroup[count] = 0;
    continue;
  }
  sizeOfGroup[count]++;
  groups[count] += lines[i];
}
console.log(
  groups
    .map((str, idx) => {
      return [...new Set(str)].filter(
        (char) => str.match(new RegExp(char, "gi")).length === sizeOfGroup[idx]
      ).length;
    })
    .reduce((sum, n) => sum + n, 0)
);
```

Part 2 的內容又更難懂一點，Huli 是先把每個 group 的每一行放進 groups 裡的字串，當換新 group 時就加一個新的空字串，接著之後再重複以上動作。

再把每個 group 放到 Set 然後用 filter 把字母出現次數和行數相同的流下來，最後再用 reduce 把數字加總。

---

## 結語

自己解完題再看別人的解法總能學個幾招，期許自己越來越強啊...
