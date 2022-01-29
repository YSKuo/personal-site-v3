---
title: "用 JavaScript 實作堆積（Heap）"
cover: ""
category: "Data-Structure"
date: "2022-01-29"
excerpt: "介紹資料結構的堆積（Heap），並以 JavaScript 來實作。"
language: "zh_Hant"
published: true
featured: true
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

以上內容不會在本文說明，如果想了解可以參考以下內容

- JavaScript Class 語法：[[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation：[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)
- JavaScript 的遞迴：[JavaScript Recursion (with Examples)](https://www.programiz.com/javascript/recursion)

其他可以參考我寫的文章

- [Binary Search Tree](/post/2021/12/13/implementation-of-bst-in-javascript)
- [Tree Traversal](/post/2021/12/25/implementation-of-tree-traversal-in-javascript)

## 什麼是 Heap？

Heap 是一種 tree，常用來實現 Priority Queue（後續於另篇文章分享），每個 node 最多具有兩個 children，和 Binary Search Tree 很類似，差別在於 heap 的 parent 和 child 數值具有額外的規則，分有兩種：

- Max Heap：parent 的值大於 children 的值
- Min Heap：parent 的值小於 children 的值

由此可知，heap 的結構會比起 binary search tree 還簡潔，因為 parent 一定會被調整成為值比 children 還要小（或大），這樣就不會產生 binary search tree 結構一直往單支發展的樣子，此外在加入 node 時會先往 left 加入。

## Object Property

因為 heap 的特性是均衡堆疊資料，所以可以利用 List/Array 來儲存 heap 的資料：

![Storing a heap in a list/array](https://i.imgur.com/TYSMWY5.png)

以下用 Max Heap 作說明，初始的定義會是這樣：

```js
class MaxHeap {
  constructor() {
    this.values = [];
  }
}
```

任意 index 的 node，如果它的 index 是 n，則

- left child 的 index 是 `2n + 1`
- right child 的 index 是 `2n + 2`
- parent 的 index 是 `(n-1)/2` (小數無條件捨去)

## Object Method

Heap 具有以下 method：

- [Insert](#insert)
- [Remove](#remove)

### Insert

> 在 heap 上加入一個新的值。

首先會在尾端加入 node，然後這個新加入的值會和 parent 的值比較，如果大於 parent 則交換位置（這個動作稱為 bubble up），直到整個 heap 的狀態符合 parent 大於 children 的情況。

1. function 接收一個 value
2. 將 value 給 push 進 heap
3. 建立一個變數 index 為 heap 的 length - 1（即新加入資料的位置
4. 建立一個變數 parentIndex 為 (index - 1) / 2 的無條件捨去
5. 當位於 index 的值大於位於 parentIndex 的值時，進行 bubble up
   - 交換 parent 和 child 兩者資料的位置
   - 讓 index 設為 parentIndex 的值
   - 讓 parentIndex 設為 (index - 1) / 2 的無條件捨去
6. 重複 bubble up 直到 parent 大於 children

```js
class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (val === undefined) return val;
    this.values.push(val);
    this.values.length > 1 && this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[parentIdx]) {
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
}
```

### Remove

> 在 max heap 裡，removing 會拿出 heap 中最大的值，又稱為 extract max。

基本的步驟會是取出 root 的值，然後將順序最後的數值移到 root 的位置，接著讓這個值和 children 比較大小，如果小於 children 則交換位置（這個動作稱為 Sink Down），直到整個 heap 的狀態符合 parent 大於 children 的情況。

1. 將 heap 最前和最後的數值交換位置
2. 把數值最大的資料 pop 出來並存在變數 max 中
3. 以 index 為 0 的數值開始，當位於 index 的值小於 children 的值時，進行 sink down
   - 若 left 的值大於位在 index 的值時
     - 位於 index 的值與 left 的值交換數值
     - 將 index 設為 left 的 index
   - 若 right 的值大於位在 index 的值時
     - 位於 index 的值與 right 的值交換數值
     - 將 index 設為 right 的 index
   - 如果 left 或 right 的值都大於位在 index 的值，則取 left 和 right 其一比較大的和 index 的值進行交換
4. 重複 sink down 直到 parent 大於 children

```js
class MaxHeap {
  constructor() {
    this.values = [];
  }

  ...

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const max = this.values.pop();
    this.values.length > 1 && this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    while (
      this.values[idx] < this.values[leftIdx] ||
      this.values[idx] < this.values[rightIdx]
    ) {
      if (this.values[rightIdx] > this.values[leftIdx]) {
        [this.values[idx], this.values[rightIdx]] = [
          this.values[rightIdx],
          this.values[idx],
        ];
        idx = rightIdx;
      } else {
        [this.values[idx], this.values[leftIdx]] = [
          this.values[leftIdx],
          this.values[idx],
        ];
        idx = leftIdx;
      }
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }
  }
}
```

---

## 總結

最終關於 Max Heap 的定義會是這樣：

```js
class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (val === undefined) return val;
    this.values.push(val);
    this.values.length > 1 && this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[parentIdx]) {
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  extractMax() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const max = this.values.pop();
    this.values.length > 1 && this.sinkDown();
    return max;
  }

  sinkDown() {
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    while (
      this.values[idx] < this.values[leftIdx] ||
      this.values[idx] < this.values[rightIdx]
    ) {
      if (this.values[rightIdx] > this.values[leftIdx]) {
        [this.values[idx], this.values[rightIdx]] = [
          this.values[rightIdx],
          this.values[idx],
        ];
        idx = rightIdx;
      } else {
        [this.values[idx], this.values[leftIdx]] = [
          this.values[leftIdx],
          this.values[idx],
        ];
        idx = leftIdx;
      }
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }
  }
}
```

### Bridge pattern

另外分享用 bridge pattern 定義 min/max heap 的方式：

```js
const defaultCmp = (x, y) => x > y; // default is maxHeap

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
  constructor(compareFunc = defaultCmp) {
    this.values = [];
    this.cmp = compareFunc;
  }

  insert(val) {
    const { values, cmp } = this;
    values.push(val);
    let index = values.length - 1,
      parentIdx;
    while (index) {
      parentIdx = Math.floor((index - 1) / 2);
      if (!cmp(values[index], values[parentIdx])) return;
      swap(values, index, parentIdx);
      index = parentIdx;
    }
  }

  extract() {
    const { values, cmp } = this;
    if (!values.length) return null;

    swap(values, 0, values.length - 1);
    const res = values.pop();
    const { length } = values;
    let index = 0,
      exchange = 2 * index + 1,
      right;
    while (exchange < length) {
      right = 2 * index + 2;
      if (right < length && cmp(values[right], values[exchange])) {
        exchange = right;
      }
      if (!cmp(values[exchange], values[index])) break;
      swap(values, index, exchange);
      index = exchange;
      exchange = 2 * index + 1;
    }
    return res;
  }
}
```

用這個方法定義 heap 的話，只要傳入的 compare function 不同，就可以分別定義 min 或 max heap，例如

```js
const maxHeap = new Heap();
const minHeap = new Heap((x, y) => x < y);
```

### Heap 的 Big O

- Insertion - O(log n)
- Access Max/Min - O(1)
- Removal - O(log n)
- Searching - O(n)

因為 root 的數永遠是最小（或最大）的資料，所以不管資料有多少，要取得 heap 中最小值（或最大值）時間都是 O(1)。

此外，取出數據後重整結構時，必須將最尾端的資料移到 root，然後將它和 children 的值比較後再往下排序。執行時間會和樹狀結構的高成等比，如果資料有 n 個，高則會是 log n，所以重整時間會是 O(log n)。

而追加數據也和取出數據一樣，加入資料時必須加入到最尾端，然後再將新加入的資料和 parent 的數值比較並整理排序，時間也是 O(log n)。

搜尋的話是 O(n)，這是因為 heap 只有 parent 大於 children 的特性，而 children 之間的大小關係是不確定的，所以最差的情況得看過每個 node 才會找到目標。

### 重點

- 適合用來排序數據的一種資料結構
- 分為 Min Heap 與 Max Heap，分別適用於需要頻繁從中取出最小或最大值的情況
- 可以用 array 來儲放 heap 的內容
- Parent 的值必須小於或大於 children 的值，但 siblings 之間不保證有一定規律
- 常用來實踐 Priority Queue
- Dijkstra's Algorithm 也可使用 heap 來管理資料

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
- [VisuAlgo - Binary Heap (Priority Queue)](https://visualgo.net/en/heap)
- [堆積 - 維基百科](https://zh.wikipedia.org/wiki/%E5%A0%86%E7%A9%8D)
