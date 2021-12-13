---
title: "用 JavaScript 實作雙向鏈接串列（Doubly Linked List）"
cover: "https://i.imgur.com/9Ke66wY.png"
category: "Data-Structure"
date: "2021-10-17"
excerpt: "介紹資料結構的雙向鏈接串列（Doubly Linked List），並以 JavaScript 來實作。"
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

這些資料對我理解演算法與資料結構幫助很大，沒業配純推薦。

此外，如果想以圖像的方式了解資料結構及演算法，也很推薦參考 [VisuAlgo](https://visualgo.net/en/list)。

## 預備知識

了解本文內容之前需要具備的 prerequisite：

- JavaScript 基礎知識及 ES6 語法
- 物件導向觀念
- Big O Notation
- 資料結構的基礎理解
- Singly Linked List

以上內容不會在本文說明，如果想了解 Singly Linked List 可以參考我先前寫的內容：[Singly Linked List](/post/2021/10/11/implementation-of-singly-linked-list-in-javascript)。

此外，這邊推薦其他人寫的文章：

- JavaScript Class 語法，可參考 [[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation，可參考[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)

## 什麼是 Doubly Linked List？

![Doubly Linked List](https://i.imgur.com/9Ke66wY.png)

Doubly Linked List 幾乎和 [Singly Linked List](/post/2021/10/11/implementation-of-singly-linked-list-in-javascript) 一樣，只是 Doubly Linked List 的每個 node 都具備有額外的 pointer 來指向前一個 node。

比起 Singly Linked List，Doubly Linked List 在空間上會消耗更多記憶體，但是在搜尋 node 時也更省時間。

---

## Object Property

一個 Doubly Linked List 由數個 node 組成，他們各自是一種 object。

node 具有：

- value
- pointer to next node（指向下一個 node 或 null）
- pointer to previous node（指向前一個 node 或 null）

Doubly Linked List 具有：

- head node
- tail node
- length

因此可以用 OOP 物件導向的方式來定義他們：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

## Object Method

Doubly Linked List 具有以下 method：

- [Pushing](#pushing)
- [Popping](#popping)
- [Shifting](#shifting)
- [Unshifting](#unshifting)
- [Get](#get)
- [Set](#set)
- [Insert](#insert)
- [Remove](#remove)
- [Reverse](#reverse)

下面會在各個 method 裡

1. 講述該 method 會達到的功能
2. 附上 pseudocode
3. 附上 solution

讀者可以在這過程裡自己練習，可以先看看功能然後思考怎麼達成，如果沒有想法可以再看看 pseudocode，再不行可以參考 solution。

### Pushing

> push 即增加一個 node 到 list 的最後

Pseudocode：

1. function 要接收一個 value
2. 利用 function 接收的 value 來建立一個新的 node
3. 如果 list 沒有 head，則把 head 與 tail 都設為剛建立的新 node
4. 如果 list 有 head 的話，則將 tail node 的 next 設為新的 node
5. 把新的 node 的 prev node 設為 tail
6. 把 list 的 tail node 設為新的 node
7. 將 list 的 length 增加 1
8. return 該 list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
```

### Popping

> pop 是將 list 的最後一個 node 移除

Pseudocode：

1. 如果 list 裡沒有 node，則 return undefined
2. 如果 list 有 node 則將 tail 存在一個變數裡，以便後續 return 這個值
3. 如果 list length 是 1，則將 head 和 tail 設為 null
4. 如果 list length 不是 1
   - 將 tail 的 prev node 設為新的 tail
   - 將新的 tail 的 next node 設為 null
   - 將舊的 tail 的 prev 設為 null
5. list length 減 1
6. return 被移除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
```

### Shifting

> shift 是將 list 的第一個 node 移除

Pseudocode：

1. 若 list 沒有 node 則 return undefined
2. 如果 list 有 node 則將 head 存在一個變數裡，以便後續 return 這個值
3. 如果 list length 是 1，則將 head 和 tail 設為 null
4. 如果 list length 不是 1
   - 將 head 的 next node 設為新的 head
   - 將新的 head 的 prev node 設為 null
   - 將舊的 head 的 next 設為 null
5. list length 減 1
6. return 被移除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
}
```

### Unshifting

> unshift 是在 list 的最前面加入新的 node

Pseudocode：

1. function 要接收一個 value
2. 由傳入的 value 來建立一個新 node
3. 如果 list 沒有 head，則將新的 node 設為 list 的 head 與 tail
4. 如果 list 有 head
   - 將現在的 head 的 prev 設為新 node 的 next
   - 將新 node 的 next 設為現在的 head
   - 將新 node 設為 list 的 head
5. list length 增加 1
6. return list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
```

### Get

> get 是用來取得 list 裡位於某個 index 的 node

Pseudocode：

1. function 接收一個 index
2. 如果輸入的 index 小於 0 或大於等於 list 的 length，則 return null
3. 若輸入的 index 小於等於 list length 的一半
   - 以 head 為起始往 list 中間位置開始 loop list
   - 找到目標 node 就 return
4. 若輸入的 index 大於 list length 的一半
   - 以 tail 為起始往 list 中間位置開始 loop list
   - 找到目標 node 就 return

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      };
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode
  }
}
```

### Set

> set 用來在 list 中改變特定 index 的 node 值

Pseudocode：

1. function 會接收一個 value 和一個 index
2. 使用 get 這個 function 去找到特定 index 的 node，並設一個變數來存放這個 node
3. 如果沒有找到 node 則 return false
4. 如果找到 node，將該 node 的值設定為傳入的 value，並 return true

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  set(index, val) {
    const setNode = this.get(index);
    if (!setNode) return false;
    setNode.val = val;
    return true;
  }
}
```

### Insert

> insert 是在特定 index 插入一個新的 node

Pseudocode：

1. function 接收一個 index 和一個 value
2. 如果 index 小於 0 或大於 list 的 length，則 return false
3. 如果 index 等於 length，則使用 push 加入新 node 到 list 的最後面
4. 如果 index 為 0，則使用 unshift 增加新 node 到 list 的最前面
5. 若非上面兩種情況
   - 以傳入的 value 建立新的 node
   - 使用 get 取得 index - 1 的 node 並設為一個新的變數
   - 位於 index 的 node 也設為一個新的變數
   - 讓新的 node 和位於 index - 1 以及 index 的 node 互相關聯
6. list length 增加 1
7. return true

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
}
```

### Remove

> remove 可用來刪除特定 index 的 node

Pseudocode：

1. function 接收一個 index
2. 如果 index 小於 0 或大於等於 list 的 length，則 return undefined
3. 如果 index 等於 length - 1，則使用 pop
4. 如果 index 為 0，則使用 shift
5. 若非上面兩種情況，則使用 get 取得 index 的 node
   - 位於 index - 1 以及 index + 1 的 node 互相關聯
   - 將位於 index node 的 prev 和 next 設為 null
6. list length 減 1
7. return 被刪除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}
```

### Reverse

> reverse 可將整個 list 的順序調換

Pseudocode：

1. 把 head 放在一個變數 current 裡
2. 定義一個變數名為 prevNode 初始值為 null
3. 把 head 和 tail 的值對調
4. 開始 loop 整個 list
   - 將 current node 的 next 放在一個變數 nextNode 裡
   - 將 current node 的 prev 和 next 對調
   - 將 nextNode 變數的值放入 current node
5. 結束 looping 就 return list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    [this.head, this.tail] = [this.tail, this.head];

    for (let i = 0; i < this.length; i++) {
      let nextNode = currentNode.next;
      [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];
      currentNode = nextNode;
    }
    return this;
  }
}
```

---

## 總結

最終關於 Doubly Linked List 的定義會是這樣：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, currentNode;
    if (index <= this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    const setNode = this.get(index);
    if (!setNode) return false;
    setNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode;
    [this.head, this.tail] = [this.tail, this.head];
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      [currentNode.prev, currentNode.next] = [
        currentNode.next,
        currentNode.prev,
      ];
      currentNode = nextNode;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
```

### Doubly Linked List 的 Big O

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

追加資料和 Singly Linked List 一樣只需改變兩個指標的指向，如果都是在最前端和最尾端增加資料，時間是 O(1)。

刪除資料則和 Singly Linked List 不同，因為每個 node 都有前後兩個指標，所以在最前端和最尾端刪除資料都是 O(1)。

search 和 access 其實是 O(N/2)，因為可以判斷該從頭或尾開始找，但 Big O 的係數是直接忽略的，所以最終仍是 O(N)。

### 重點

- Doubly Linked List 幾乎和 [Singly Linked List](/post/2021/10/11/implementation-of-singly-linked-list-in-javascript) 一樣，除了其中每個 node 都具備有額外的 pointer 來指向前一個 node
- 在搜尋 node 時會比 Singly Linked List 還省時，只需要花費一半的時間
- 雖然尋找特定 node 比較省時，但相對的 Doubly Linked List 也比較耗空間，因為需要多紀錄 pointer
- Doubly Linked List 可用來實作其他資料結構，以及某些類型的 cache

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
