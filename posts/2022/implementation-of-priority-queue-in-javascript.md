---
title: "用 JavaScript 實作優先佇列（Priority Queue）"
cover: ""
category: "Data-Structure"
date: "2022-04-05"
excerpt: "介紹資料結構的優先佇列（Priority Queue），並以 JavaScript 來實作。"
language: "zh_Hant"
published: true
featured: false
tags:
  - 資料結構
  - OOP物件導向
  - JavaScript
  - 以 JavaScript 學習演算法與資料結構
---

如先前文章所言，本系列文章會[以 JavaScript 學習演算法與資料結構](/tags/以-java-script-學習演算法與資料結構)為主題來撰寫。

本系列主要參考自以下資料：

- _石田保輝_ 和 _宮崎修一_ 的 **演算法圖鑑**
- _Colt Steele_ 的 **JavaScript Algorithms and Data Structures Masterclass**

此外，如果想以圖像的方式了解資料結構及演算法，也很推薦參考 [VisuAlgo](https://visualgo.net/en/list)。

## 預備知識

了解本文內容之前需要具備的 prerequisite：

- JavaScript 基礎知識及 ES6 語法
- 物件導向觀念
- Big O Notation
- 資料結構的基礎理解
- 遞迴
- Binary Search Tree
- Tree Traversal
- Heap

以上內容不會在本文說明，如果想了解可以參考以下內容

- JavaScript Class 語法：[[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation：[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)
- JavaScript 的遞迴：[JavaScript Recursion (with Examples)](https://www.programiz.com/javascript/recursion)

其他可以參考我寫的文章

- [Binary Search Tree](/post/2021/12/13/implementation-of-bst-in-javascript)
- [Tree Traversal](/post/2021/12/25/implementation-of-tree-traversal-in-javascript)
- [Heap](/post/2022/01/29/implementation-of-heap-in-javascript)

## 什麼是 Priority Queue？

Priority Queue （以下簡稱 PQ）中的每個 element 都有各自的 priority
- priority 高的元素會比 priority 低的先被處理
- 若有兩個 priority 相同的 elements，則按照它們各自在 priority queue 中的順序決定先後順序，即 queue 的特性「先進先出」

因為有利用 priority 來決定排序的特性，所以 PQ 也往往會用 heap 來實現。

## Object Property

實作的方式和 heap 幾乎一樣，只不過 PQ 的資料多了一個 priority 的 property，所以可以在 node 上記錄 priority 和 value 後再放進 priority queue：

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
}
```

以下會用 Min Binary Heap 來實作，其中 priority 的值越低表示有越高層級的優先級別

任意 index 的 node，如果它的 index 是 n，則 
- left child 的 index 是 `2n + 1`
- right child 的 index 是 `2n + 2`
- parent 的 index 是 `(n-1)/2` (小數無條件捨去)


## Object Method

PQ 具有以下 method：
- Enqueue
- Dequeue

此部分可以直接參考 heap 的 insert/remove，只是把判斷數值大小的部分改成判斷 priority 而已：

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.values.length > 1 && this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    const { values } = this;
    while (values[idx].priority < values[parentIdx]?.priority) {
      [values[idx], values[parentIdx]] = [values[parentIdx], values[idx]];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  dequeue() {
    const lastIdx = this.values.length - 1;
    [this.values[0], this.values[lastIdx]] = [
      this.values[lastIdx],
      this.values[0],
    ];
    const extractedNode = this.values.pop();
    this.values.length > 1 && this.sinkDown();
    return extractedNode;
  }

  sinkDown() {
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    const { values } = this;
    while (
      values[idx].priority > values[leftIdx]?.priority ||
      values[idx].priority > values[rightIdx]?.priority
    ) {
      if (values[rightIdx]?.priority < values[leftIdx]?.priority) {
        [values[idx], values[rightIdx]] = [values[rightIdx], values[idx]];
        idx = rightIdx;
      } else {
        [values[idx], values[leftIdx]] = [values[leftIdx], values[idx]];
        idx = leftIdx;
      }
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }
  }
}
```

可以自己寫個 example 看看結果是否如預期：

```
let PQ = new PriorityQueue();
PQ.enqueue(1, 0);
PQ.enqueue(2, 2);
PQ.enqueue(3, 1);
PQ.enqueue(4, 3);
PQ.enqueue(5, 0);
PQ.enqueue(6, 2);
PQ.dequeue();
PQ.dequeue();
```

此外提供另種寫法：

```
const defaultCmp = (x, y) => x < y;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(compareFunc = defaultCmp) {
    this.values = [];
    this.cmp = compareFunc;
  }

  enqueue(val, priority) {
    const { values, cmp } = this;
    values.push(new Node(val, priority));
    let index = values.length - 1,
      parentIdx;
    while (index) {
      parentIdx = (index - 1) >> 1;
      if (!cmp(priority, values[parentIdx].priority)) return;
      swap(values, index, parentIdx);
      index = parentIdx;
    }
  }

  dequeue() {
    const { values, cmp } = this;
    if (!values.length) return null;
    swap(values, 0, values.length - 1);
    const node = values.pop();
    const { length } = values;
    let index = 0,
      exchange = 2 * index + 1,
      right;
    while (exchange < length) {
      right = 2 * index + 2;
      if (
        right < length &&
        cmp(values[right].priority, values[exchange].priority)
      ) {
        exchange = right;
      }

      if (!cmp(values[exchange].priority, values[index].priority)) break;
      swap(values, index, exchange);
      index = exchange;
      exchange = 2 * index + 1;
    }

    return node;
  }
}
```

### 總結

PQ 的特性和實作和 heap 都差不多，只是它主要利用 priority 來排序，因此常應用在任務排程上，例如 worker 處理 task 的先後順序。

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
- [優先佇列 - 維基百科](https://zh.wikipedia.org/wiki/%E5%84%AA%E5%85%88%E4%BD%87%E5%88%97)