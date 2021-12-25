---
title: "用 JavaScript 實作樹的遍歷（Tree Traversal）"
cover: ""
category: "Algorithm"
date: "2021-12-25"
excerpt: "介紹樹的遍歷（Tree Traversal），並以 JavaScript 來實作。"
language: "zh_Hant"
published: true
featured: true
tags:
  - 演算法
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
- 資料結構 Stack 與 Queue
- 資料結構 Tree 以及 Binary Search Tree

以上內容不會在本文說明，如果想了解可以參考以下內容

- JavaScript Class 語法：[[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation：[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)
- JavaScript 的遞迴：[JavaScript Recursion (with Examples)](https://www.programiz.com/javascript/recursion)

另外我有寫過 Stack、Queue、Tree 與 Binary Search Tree 的文章，可以參考這些文章

- [Stack](/post/2021/11/21/implementation-of-stack-in-javascript)
- [Queue](/post/2021/12/11/implementation-of-queue-in-javascript)
- [Tree](/post/2021/12/12/introduction-to-tree)
- [Binary Search Tree](/post/2021/12/13/implementation-of-bst-in-javascript)

## 什麼是 Tree Traversal？

Tree Traversal 指的是走訪 Tree 上的每一個 node，這邊的 tree 指的是所有種類的 tree，包括 Binary Tree、Binary Search Tree (BST) 等。

要走訪（遍歷）一個 Tree 有兩種常見方法：

- [Breadth First Search](#breadth-first-search)
- [Depth First Search](#depth-first-search)

以下為了方便解釋，就以之前文章實作過的 BST 來講解。

## Breadth First Search

有些人也會把這種搜尋方式稱為 Level-order Traversal

![BFS](https://i.imgur.com/AQZZQAk.png)

```
//      10
//   6     15
// 3  8      20

[10, 6, 15, 3, 8, 20]
```

1. 定義一個 queue 以及一個變數 visited，來儲放已經造訪過的 node 值
2. 把 root 放入 queue
3. 開始 loop queue，當 queue 有值的時候：
   - dequeue 一個 node，把這個 node 的值加入 visited
   - 檢查該 node 是否有 left child，有的話 enqueue 進 queue 裡
   - 檢查該 node 是否有 right child，有的話 enqueue 進 queue 裡
4. return 用來儲存造訪過的 node 值的變數 visited

```js
class Node {
  constructor(val) {
    this.val = val;
	this.left = null;
	this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
  	this.root = null;
  }

  ...

  BFS() {
    const queue = [];
    const visited = [];
    let checkNode;
    this.root && queue.push(this.root);
    while (queue.length > 0) {
      checkNode = queue.shift();
      visited.push(checkNode.val);
      checkNode.left && queue.push(checkNode.left);
      checkNode.right && queue.push(checkNode.right);
    }
    return visited;
  }
}
```

## Depth First Search

分為

- [PreOrder](#preorder)
- [PostOrder](#postorder)
- [InOrder](#inorder)

以下用 recursion 實作，但也可以用 stack 實作。

### PreOrder

```
//      10
//   6     15
// 3  8      20

[10, 6, 3, 8, 15, 20]
```

1. 定義一個變數 visited，來儲放已經造訪過的 node 值
2. 定義一個變數 currentNode 並把 root 放在這個變數中
3. 定義一個 helper function，這個 function 會接收一個 node
   - 把這個 node 的值加入 visited
   - 如果 node 有 left child，則將 left 作為參數 call helper function
   - 如果 node 有 right child，則將 right 作為參數 call helper function
4. return 用來儲存造訪過的 node 值的變數 visited

```js
class Node {
  constructor(val) {
    this.val = val;
	this.left = null;
	this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
  	this.root = null;
  }

  ...

  DFSPreOrder() {
    const visited = [];
    function helper(node) {
      visited.push(node.val);
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
    this.root && helper(this.root);
    return visited;
  }
}
```

### PostOrder

```
//      10
//   6     15
// 3  8      20

[3, 8, 6, 20, 15, 10]
```

實作方式和 PreOrder 只差一點，差別在於 PostOrder 是造訪的 node 值在最後才加入

1. 定義一個變數 visited，來儲放已經造訪過的 node 值
2. 定義一個變數 currentNode 並把 root 放在這個變數中
3. 定義一個 helper function，這個 function 會接收一個 node
   - 如果 node 有 left child，則將 left 作為參數 call helper function
   - 如果 node 有 right child，則將 right 作為參數 call helper function
   - 把這個 node 的值加入 visited
4. return 用來儲存造訪過的 node 值的變數 visited

```js
class Node {
  constructor(val) {
    this.val = val;
	this.left = null;
	this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
  	this.root = null;
  }

  ...

  DFSPostOrder() {
    const visited = [];
    function helper(node) {
      node.left && helper(node.left);
      node.right && helper(node.right);
      visited.push(node.val);
    }
    this.root && helper(this.root);
    return visited;
  }
}
```

### InOrder

```
//      10
//   6     15
// 3  8      20

[3, 6, 8, 10, 15, 20]
```

實作方式也和 PreOrder 只差一點，差別在於 InOrder 是造訪完 node left children 後再將值加入

1. 定義一個變數 visited，來儲放已經造訪過的 node 值
2. 定義一個變數 currentNode 並把 root 放在這個變數中
3. 定義一個 helper function，這個 function 會接收一個 node
   - 如果 node 有 left child，則將 left 作為參數 call helper function
   - 把這個 node 的值加入 visited
   - 如果 node 有 right child，則將 right 作為參數 call helper function
4. return 用來儲存造訪過的 node 值的變數 visited

```js
class Node {
  constructor(val) {
    this.val = val;
	this.left = null;
	this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
  	this.root = null;
  }

  ...

  DFSInOrder() {
    const visited = [];
    function helper(node) {
      node.left && helper(node.left);
      visited.push(node.val);
      node.right && helper(node.right);
    }
    this.root && helper(this.root);
    return visited;
  }
}
```

---

## 總結

最終 Tree Traversal 會是這樣：

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  ...

  BFS() {
    const queue = [];
    const visited = [];
    let checkNode;
    this.root && queue.push(this.root);
    while (queue.length > 0) {
      checkNode = queue.shift();
      visited.push(checkNode.val);
      checkNode.left && queue.push(checkNode.left);
      checkNode.right && queue.push(checkNode.right);
    }
    return visited;
  }

  DFSPreOrder() {
    const visited = [];
    function helper(node) {
      visited.push(node.val);
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
    this.root && helper(this.root);
    return visited;
  }

  DFSPostOrder() {
    const visited = [];
    function helper(node) {
      node.left && helper(node.left);
      node.right && helper(node.right);
      visited.push(node.val);
    }
    this.root && helper(this.root);
    return visited;
  }

  DFSInOrder() {
    const visited = [];
    function helper(node) {
      node.left && helper(node.left);
      visited.push(node.val);
      node.right && helper(node.right);
    }
    this.root && helper(this.root);
    return visited;
  }
}
```

### 重點

Breadth First Search 和 Depth First Search 兩種方法可以用來造訪 Tree 的每個 node，也因此會用來搜尋某個 node。

- Breadth First Search (BFS)
  - 具有從起點位置（root）開始廣泛搜尋的特性，因此如果目標離 root 很近的話，很快就會找到目標
- Depth First Search (DFS)
  - 具有從 root 開始一路下探到 leaf 的特性，所以若目標離 root 比較遠的話，則比起 BFS 會更快找到目標
  - InOrder 時常搭配 Binary Search Tree (BST) 使用，因為 BST 的特性會讓 InOrder 的呈現出由小排列到大的結果
  - PreOrder 的結果可視為 Tree 結構的輸出（copy），可以藉由這個結果來重現同樣結構的 Tree
  - PostOrder 常被用來刪除一個 Tree，因為這種搜尋方式是先走訪 Tree 的 leaf，而 tree 的 remove node 是移除沒有 children 的情況最容易處理，所以正好適合 PostOrder 來處理

##### Ref

- [Tree Traversals (Inorder, Preorder and Postorder) - GeeksforGeeks](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
