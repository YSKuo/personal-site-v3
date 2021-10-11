---
title: "用 JavaScript 實作單向連結串列（Singly Linked List）"
cover: "https://i.imgur.com/IlV1NBw.png"
category: "Data-Structure"
date: "2021-10-11"
excerpt: "介紹資料結構的單向連結串列（Singly Linked List），並以 JavaScript 來實作。"
language: "zh_Hant"
published: true
featured: true
tags:
  - Data Structure
  - OOP物件導向
  - JavaScript
  - 以 JavaScript 學習演算法與資料結構
---

最近開始複習演算法與資料結構，所以會將一系列我的筆記作為文章發表於此，又因為我主要使用的程式語言是 JavaScript，所以文章內容也是基於 JS 來撰寫，本系列主要參考自以下資料：

- _石田保輝_ 和 _宮崎修一_ 的 **演算法圖鑑**
- _Colt Steele_ 的 **JavaScript Algorithms and Data Structures Masterclass**

這些資料對我理解演算法與資料結構幫助很大，沒業配純推薦。

## 預備知識

了解本文內容之前需要具備的 prerequisite：

- JavaScript 基礎知識及 ES6 語法
- 物件導向觀念
- Big O Notation
- 資料結構的基礎理解

## 什麼是 Singly Linked List？

Singly Linked List 的數據會排列成一直線，每個單位會有數據和指標，指標會指向下一個數據在記憶體中的位址。

![Singly Linked List](https://i.imgur.com/IlV1NBw.png)

---

## Object Property

一個 Singly Linked List 由數個 node 組成，他們各自是一種 object。

node 具有：

- value
- pointer（指向下一個 node 或 null）

Singly Linked List 具有：

- head node
- tail node
- length

接著我們用 OOP 物件導向的方式來定義他們：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

## Object Method

Singly Linked List 具有以下 method：

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
4. 如果 list 有 head 的話，則將 tail node 的 next 設為新的 node，並且把 list 的 tail node 設為新的 node
5. 將 list 的 length 增加 1
6. return 該 list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
```

寫完之後也可以自己測試一下功能是否有達成，例如：

```js
var list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
```

#### 補充

可以額外定義一個 print 來方便我們檢視整個 list 的排列狀況

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

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

### Popping

> pop 是將 list 的最後一個 node 移除

Pseudocode：

1. 如果 list 裡沒有 node，則 return undefined
2. 如果 list 有 node 則 loop 整個 list，直到找到 tail node
3. 把倒數第二個 node （即 tail 的前一個）的 next 定義為 null
4. 把倒數第二個 node 定義為 tail
5. list length 減 1
6. return 被移除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  pop() {
    if (this.length === 0) return undefined
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
}
```

### Shifting

> shift 是將 list 的第一個 node 移除

Pseudocode：

1. 若 list 沒有 node 則 return undefined
2. 將 head node 存在一個變數中
3. 將 head node 設為當前 head 下一個 node
4. 將 list 的 length 減 1
5. return 被移除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
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
4. 如果 list 有 head，則將新 node 的 next 設為現在的 head
5. 將新 node 設為 list 的 head
6. list length 增加 1
7. return list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
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
3. 如果輸入的 index 合格，則 loop 整個 list 直到找到位於該 index 的 node，並 return 該 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
```

### Set

> set 用來在 list 中改變特定 index 的 node 值

Pseudocode：

1. function 會接收一個 value 和一個 index
2. 使用 get 這個 function 去找到特定 index 的 node
3. 如果沒有找到 node 則 return false
4. 如果找到 node，將該 node 的值設定為傳入的 value，並 return true

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  set(index, val) {
    let setNode = this.get(index);
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
5. 若非上面兩種情況，則使用 get 取得 index - 1 的 node
6. 將該 node 的 next 設為新加入的 node
7. 將該 node 原本的 next node 設在新 node 的 next 上
8. list length 增加 1
9. return true

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }
}
```

其中判斷式的部分還可以簡化成這樣

```js
...
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
...
```

可以這樣寫是因為

```js
!list.push(100); // false
!!list.push(100); // true
```

### Remove

> remove 可用來刪除特定 index 的 node

Pseudocode：

1. function 接收一個 index
2. 如果 index 小於 0 或大於等於 list 的 length，則 return undefined
3. 如果 index 等於 length - 1，則使用 pop
4. 如果 index 為 0，則使用 shift
5. 若非上面兩種情況，則使用 get 取得 index - 1 的 node
6. 將該 node 的 next 設為目標 index 的 next
7. list length 減 1
8. return 被刪除的 node

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
}
```

### Reverse

> reverse 可將整個 list 的順序調換

Pseudocode：

1. 定義一個變數 next
2. 定義一個變數 prev 為 null
3. 定義一個變數 node，初始值為 head node
4. 交換 head 和 tail 的值
5. 開始 loop 整個 list
6. 將 node 變數的 next 值放入 next 變數
7. 將 prev 變數的值 放入 node 變數的 next
8. 將 node 變數的值放入 prev 變數
9. 將 next 變數的值放入 node 變數
10. 結束 looping 就 return list

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  ...

  reverse() {
    let next;
    let prev = null;
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    for (let i=0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
```

---

## 總結

最終關於 Singly Linked List 的定義會是這樣：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let shiftedNode = this.head;
    this.head = shiftedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let currentNode = this.head;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    let setNode = this.get(index);
    if (!setNode) return false;
    setNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let next;
    let prev = null;
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
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

### Singly Linked List 的 Big O

- Insertion - O(1)
- Removal - O(1) or O(N)
- Searching - O(N)
- Access - O(N)

追加和刪除資料則只需改變兩個指標的指向，如果都是在最前端和最尾端增加資料，時間是 O(1)。

但刪除資料就不一樣，在最前端刪除資料只要改變 head 至其下一個 node，所以是 O(1)；在最尾端刪除資料則要取得最尾端的前一個 node，將之設為新的 tail 並將其 next 指標設為 null，所以會是 O(n)。

假設儲存於 list 的資料有 n 個，而存取資料時必須從 list 的最前端開始（線性搜尋），那最差的情況就是 O(n) 的時間。

### 重點

- 和 Array 相比，Singly Linked List 在資料結構中最前面的位置插入或移除資料都會更有效率
- Array 裡面的資料有 index，而 List 沒有
- 了解 List 是由 node 所組成的，這樣的概念將有助於理解其他資料結構，如 Stack 和 Queue

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
