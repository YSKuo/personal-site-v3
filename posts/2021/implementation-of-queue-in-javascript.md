---
title: "用 JavaScript 實作佇列（Queue）"
cover: ""
category: "Data-Structure"
date: "2021-12-11"
excerpt: "介紹資料結構的佇列（Queue），並以 JavaScript 來實作。"
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
- 資料結構 Singly Linked List

以上內容不會在本文說明，如果想了解可以參考以下外部連結

- JavaScript Class 語法，可參考 [[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation，可參考[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)

另外我有寫過 Singly Linked List 的文章，可以參考

- [Singly Linked List](/post/2021/10/11/implementation-of-singly-linked-list-in-javascript)

## 什麼是 Queue？

資料像排隊一樣，在隊伍（Queue）中，最晚到的會排在最後面，處理資料則會從最先排入的開始進行。

先追加的數據先處理的特性是 **「先進先出」**，即`「First In First Out」`縮寫「FIFO」。

---

## 解說

### 應用

Queue 的特性就是依序處理資料，舊的資料優先處理是很直觀的事情，使用情境如：

- 背景執行的工作
- 上傳資料
- 列印
- 注重先後順序的待辦事項

### 實作

JavaScript 本來就具有 [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 這個 data type，其實就可以直接拿來實現 queue，像是利用 array 的 push 放入 data 到最後一個 index，要取出資料時用 shift 就可取出之前最先加入的 data。

```js
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

queue.shift();
```

push 這個 method 的 Big O 是 O(1)，但是 shift 這個 method 會改變 array 裡其他元素的順序，因此 Big O 是 O(n)。

---

## Object Property

這部分用物件導向的方式來實作，一個 queue 由數個 node 組成，他們各自是一種 object。

node 具有：

- value
- pointer to next node（指向下一個 node 或 null）

Queue 具有：

- first node
- last node
- size

因此可以用 OOP 物件導向的方式來定義他們：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
```

## Object Method

Doubly Linked List 具有以下 method：

- [Enqueue](#enqueue)
- [Dequeue](#dequeue)

### Enqueue

> enqueue 是增加 node 到 queue 的最前面

Pseudocode：

1. function 要接收一個 value
2. 利用 function 接收的 value 來建立一個新的 node
3. 如果 queue 沒有 node，則把 first 與 last 都設為剛建立的新 node
4. 如果 queue 裡有 node 的話
   - last 的 next 設為新 node
   - 把 last 設為新 node
5. 將 queue 的 size 增加 1

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
}
```

### Dequeue

> dequeue 是將 queue 最前面的 node 取出

Pseudocode：

1. 如果 queue 沒有 node，則 return null
2. 如果 queue 有 node
   - 把 first 放入一個新變數 target node
   - 如果 first 和 last 是同一個 node，則設 last 為 null
   - 將 target node 的 next 設為新的 first
   - stack 的 size 減 1
   - return target node 的 value

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  ...

  dequeue() {
    if (this.size === 0) return null;
    const targetNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = targetNode.next;
    this.size--;
    return targetNode.val;
  }
}
```

---

## 總結

最終關於 Queue 的定義會是這樣：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const targetNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = targetNode.next;
    this.size--;
    return targetNode.val;
  }
}
```

### Queue 的 Big O

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N

和 stack 一樣，queue 的追加和刪除資料 O(1)，因為這兩個 method 都只要處理兩個 node 之間的關聯。

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
- [【資料結構】佇列(Queue)介紹與使用 – 程式設計教育農場 by 陳富國](https://fgchen.com/wp/%E3%80%90%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E3%80%91%E4%BD%87%E5%88%97queue%E4%BB%8B%E7%B4%B9%E8%88%87%E4%BD%BF%E7%94%A8/)
