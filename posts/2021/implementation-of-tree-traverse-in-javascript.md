---
title: "用 JavaScript 實作二元搜尋樹（Binary Search Tree）"
cover: ""
category: "Data-Structure"
date: "2021-12-13"
excerpt: "介紹資料結構的二元搜尋樹（Binary Search Tree），並以 JavaScript 來實作。"
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
- 資料結構 Singly Linked List
- 資料結構 Stack 與 Queue
- 資料結構 Tree

以上內容不會在本文說明，如果想了解可以參考以下內容

- JavaScript Class 語法：[[教學] 深入淺出 JavaScript ES6 Class (類別) | Shubo 的程式教學筆記](https://shubo.io/javascript-class/)
- Big O Notation：[【演算法】時間複雜度與空間複雜度 Time & Space Complexity - Jason Chen's Blog](https://jason-chen-1992.weebly.com/home/time-space-complexity)
- JavaScript 的遞迴：[JavaScript Recursion (with Examples)](https://www.programiz.com/javascript/recursion)

另外我有寫過 Singly Linked List、Stack、Queue 與 Tree 的文章，可以參考這些文章

- [Singly Linked List](/post/2021/10/11/implementation-of-singly-linked-list-in-javascript)
- [Stack](/post/2021/11/21/implementation-of-stack-in-javascript)
- [Queue](/post/2021/12/11/implementation-of-queue-in-javascript)
- [Tree](/post/2021/12/12/introduction-to-tree)

## 什麼是 Binary Search Tree？

Binary Search Tree（以下簡稱 BST）顧名思義也是 Tree 一種類型，它具有以下特徵：

- 每個 parent node 最多只有兩個 children nodes，且每一個 node 的值都不重複（這點是 Binary Tree 的特徵）
- 左側每個 children nodes 的值都小於它的 parent node 的值
- 右側每個 children nodes 的值都大於它的 parent node 的值

以上特徵會讓 BST 長得像這樣：

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png)
source: [二元搜尋樹 - 維基百科](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9)

## Object Property

一個 BST 由數個 node 組成。

node 具有：

- value
- left
- right

BST 具有：

- root

因此可以用 OOP 物件導向的方式來定義他們：

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
}
```

## Object Method

BST 具有以下 method：

- [Insert](#insert)
- [Find](#find)
- [Remove](#remove)

### Insert

> 插入一個 node 到 BST 中

整體的操作步驟是讓新加入的 newNode 從 root 開始比較大小，如果 newNode 比當前比較的 node 還小，那就往當前比較的 node 的 left 往下繼續比；反之，若比較大就是往 right 往下比較，直到找到適合它的位置。

Pseudocode：

1. function 接收一個 value
2. 利用這個 value 來建立一個新 node
3. 如果 tree 沒有 root，則讓 newNode 成為 root
4. 如果 tree 有 root，則以這個 root 為起始的對手 node 開始比較兩個 node 的值
   - 如果新 node 的值比較小
     - 確認對手 node 是否有左側的 child node
       - 如果有左側的 child，則其設為新的對手 node，並重複上述比較步驟
       - 如果沒有左側的 child，則將新 node 設為左側的 child
   - 如果新 node 的值比較大
     - 確認對手 node 是否有右側的 child node
       - 如果有右側的 child，則其設為新的對手 node，並重複上述比較步驟
       - 如果沒有右側的 child，則將新 node 設為右側的 child

#### 迭代解

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

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return undefined;
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // new node val > currentNode.val
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
}
```

#### 遞迴解

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

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    this.insertHelper(val, this.root);
    return this;
  }

  insertHelper(val, currentNode) {
    if (!currentNode) return;
    if (val === currentNode.val) return undefined;
    if (val < currentNode.val) {
      return !currentNode.left
        ? (currentNode.left = new Node(val))
        : this.insertHelper(val, currentNode.left);
    } else {
      // new node val > currentNode.val
      return !currentNode.right
        ? (currentNode.right = new Node(val))
        : this.insertHelper(val, currentNode.right);
    }
  }
}
```

寫完之後可以以下列例子來建立 BST 看看：

```js
//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
```

### Find

> 在 BST 中找出具有目標值的 node

從 root 開始找，如果目標值比當前比較的 node 小，那就往 left 下去找；反之，比當前比較的 node 還大，那就是往 right 去找。

Pseudocode：

1. function 接收一個 value
2. 如果 tree 沒有 root，則搜尋結束 return false
3. 如果 tree 有 root，則以這個 root 為起始的對手 node 開始比較值
   - 如果輸入值比較小
     - 確認對手 node 是否有左側的 child node
       - 如果有右側的 child，則其設為新的對手 node，並重複上述比較步驟
       - 如果沒有右側的 child，則搜尋結束 return false
   - 如果輸入值比較大
     - 確認對手 node 是否有右側的 child node
       - 如果有右側的 child，則其設為新的對手 node，並重複上述比較步驟
       - 如果沒有右側的 child，則搜尋結束 return false
   - 如果對手 node 的值與輸入值相等，則此對手 node 為搜尋目標，return 此 node

#### 迭代解

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

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }
}
```

#### 遞迴解

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

  find(val) {
    if (!this.root) return false;
    return this.findHelper(val, this.root);
  }

  findHelper(val, currentNode) {
    if (!currentNode) return false;
    if (val === currentNode.val) return currentNode;
    return val < currentNode.val
      ? this.findHelper(val, currentNode.left)
      : this.findHelper(val, currentNode.right);
  }
}
```

### Remove

> 在 BST 中移除具有目標值的 node

Remove 的實作比較難，主要有以下幾種情況要注意：

- 刪除的 node 沒有 children，那刪除 node 完就可以了
- 刪除的 node 只有一個 child，那刪除完 node 之後要把 child 移上來
- 刪除的 node 有兩個 children，在刪除完 node 之後從右側 children 裡找出值最小的 node 移上來（也可以找左側 children 中值最大的 node）

Pseudocode：

1. function 接收一個 value
2. 由 root 開始往下找目標
3. 當 value 不等於當前 node 值
   - 若 value 小於當前 node 值時，往該 node 的 left child 接著尋找
   - 若 value 大於當前 node 值時，往該 node 的 right child 接著尋找
4. 當 value 等於當前 node 值
   - 當前 node 即為目標，這邊稱之為 removedNode
     - 如果 removedNode 沒有 children，則移除 removedNode 即可
     - 如果 removedNode 只有一個 child，則讓該 child 取代 removedNode
     - 如果 removedNode 有兩個 children
       - 找 removedNode 右側 children 裡值最小的 node，這邊稱之為 successor node（在 `removedNode 有兩個 children` 的情況，也可以找左側 children 裡值最大的 node 來處理）
       - 將 successor 的值取代 removedNode 的值
       - 移除 successor，此時原先 successor 的位置空了，重複以上移除步驟

#### 遞迴解

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

  remove(val) {
    if (val == null) return undefined;
    this.root = this.removeHelper(val, this.root);
  }

  removeHelper(val, currentNode) {
    if (!currentNode) return undefined;
    if (val < currentNode.val) {
      currentNode.left = this.removeHelper(val, currentNode.left);
      return currentNode;
    } else if (val > currentNode.val) {
      currentNode.right = this.removeHelper(val, currentNode.right);
      return currentNode;
    }
    // val === currentNode.val
    if (!currentNode.left && !currentNode.right) {
      // no children
      return null;
    } else if (!currentNode.left) {
      // has right child only
      return currentNode.right;
    } else if (!currentNode.right) {
      // has left child only
      return currentNode.left;
    } else {
      // has two children
      let minRightChildNode = this.findMinValue(currentNode.right);
      currentNode.val = minRightChildNode.val;
      currentNode.right = this.removeHelper(
        minRightChildNode.val,
        currentNode.right
      );
      return currentNode;
    }
  }

  findMinValue(node) {
    if (node.left) {
      return this.findMinValue(node.left);
    }
    return node;
  }
}
```

#### 演示

```js
//      10
//   5     13
// 2  7  11  16

remove(2)
root node of 10 = removeHelper(2, root node of 10)
    => into 1st removeHelper
        // 2 < currentNode value: 10
        NodeOf10.left = removeHelper(2, NodeOf10.left)
                        => into 2nd removeHelper
                          // 2 < currentNode value: 5
                          NodeOf5.left = removeHelper(2, NodeOf5.left)
                                        => into 3rd removeHelper
                                            // 2 === currentNode value: 2
                                            // node of 2 has no children
                                            return null
                          // back to 2nd removeHelper
                          NodeOf5.left = null
                          return NodeOf5 (already removed left child of 2)
        // back to 1st removeHelper
        NodeOf10.left = NodeOf5 (already removed left child of 2)
        return NodeOf10;

remove(10)
root node of 10 = removeHelper(10, root node of 10)
    => into 1st removeHelper
        // 10 === currentNode value: 10
        // node of 10 has two children
        let minRightChildNode = findMinValue(currentNode.right); // found node of 11
        NodeOf10.val = NodeOf11.val
        // now current node value became 11
        // now the tree is like this
        //      11
        //   5     13
        //    7  11  16
        // so the next step is to remove node 13 left child of 11
        NodeOf11.right = removeHelper(11, NodeOf11.right)
                        => into 2st removeHelper
                            // ...
                            return NodeOf13 (already removed left child of 11)
        // back to 1st removeHelper
        // now the tree is like this
        //      11
        //   5     13
        //    7      16
        return NodeOf11;
```

---

## 總結

最終關於 Binary Search Tree 的定義會是這樣：

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

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) return undefined;
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        // new node val < currentNode.val
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }

  remove(val) {
    if (val === null || val === undefined) return undefined;
    this.root = this.removeHelper(val, this.root);
  }

  removeHelper(val, currentNode) {
    if (!currentNode) return undefined;
    if (val < currentNode.val) {
      currentNode.left = this.removeHelper(val, currentNode.left);
      return currentNode;
    } else if (val > currentNode.val) {
      currentNode.right = this.removeHelper(val, currentNode.right);
      return currentNode;
    }
    if (!currentNode.left && !currentNode.right) {
      return null;
    } else if (!currentNode.left) {
      return currentNode.right;
    } else if (!currentNode.right) {
      return currentNode.left;
    } else {
      let minRightChildNode = this.findMinValue(currentNode.right);
      currentNode.val = minRightChildNode.val;
      currentNode.right = this.removeHelper(
        minRightChildNode.val,
        currentNode.right
      );
      return currentNode;
    }
  }

  findMinValue(node) {
    if (node.left) {
      return this.findMinValue(node.left);
    }
    return node;
  }
}
```

### Binary Search Tree 的 Big O

- Insertion - O(log n) or O(n)
- Removal - O(log n) or O(n)
- Searching - O(log n) or O(n)
- Access - O(log n) or O(n)

如果 tree 上的 node 都只有一個 child，長成像 list 一樣，那 Big O 就會是 O(n)。

![BST with one child on every node](https://i.imgur.com/OAwrOh2.png)

### 重點

- Binary Search Tree 可以想成是用樹狀結構實現 Binary Search

##### Ref

- [JavaScript (JS) Algorithms and Data Structures Masterclass | Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
- [VisuAlgo - Binary Search Tree, AVL Tree](https://visualgo.net/en/bst?slide=1)
- [Binary Search Tree JavaScript implementation - remove function](https://stackoverflow.com/questions/27812367/binary-search-tree-javascript-implementation-remove-function)
- [Deletion from BST (Binary Search Tree) – Techie Delight](https://www.techiedelight.com/deletion-from-bst/)
