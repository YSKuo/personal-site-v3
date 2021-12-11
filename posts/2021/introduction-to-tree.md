---
title: "資料結構 樹 (Tree)"
cover: ""
category: "Data-Structure"
date: "2021-12-12"
excerpt: "介紹資料結構領域的樹（Tree）。"
language: "zh_Hant"
published: true
featured: true
tags:
  - 資料結構
  - 以 JavaScript 學習演算法與資料結構
---

如先前文章所言，本系列文章會[以 JavaScript 學習演算法與資料結構](/tags/以-java-script-學習演算法與資料結構)為主題來撰寫。

這篇會講解 Tree 這種資料結構，然後因為 Tree 的類型有很多種，所以實作部分會在之後的文章進行。

## 什麼是 Tree？

Tree 可看作是 Graph 的其中一種形式，是一種具有多個 node 資料結構，且這些 node 之間有 **parent / child** 關係。

![Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Treedatastructure.png/300px-Treedatastructure.png)
source: [樹 (資料結構) - 維基百科](<https://zh.wikipedia.org/wiki/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)>)

## 樹的解析

### 術語

- Root：tree 最上層的 node
- Child：與另個 node 連結但離 root 比較遠的為 child node
- Parent：與另個 node 連結但離 root 比較近的為 parent node
- Siblings：有同一個 parent node 的 nodes
- Leaf：沒有 children node 的 node
- Edge：node 和 node 之間的連結

### 應用

Tree 的例子包含但不限於：

- HTML DOM
- 網路的路由機制
- 程式語言的語法
- 人工智慧的狀況處理以及行為等等（decision tree）
- 作業系統中的資料夾機制
- JSON
- 電腦的資料夾系統

由以上的例子可知 Tree 其實早就用我們常使用的功能中，也可以想成是有分歧路線的 list。

---

## 常見的 Tree

接下來會用

- [Binary Tree](#binary-tree)
- Binary Search Tree
- Binary Heap

Binary Search Tree 和 Binary Heap 這兩種樹，我會在之後寫成另篇文章來介紹。

### Binary Tree

Binary Tree 的特徵是每個 node 最多含有兩個 children，且每一個 node 的值都不重複。

![Binary Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png)
source: [二元樹 - 維基百科](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91#%E7%B7%9A%E7%B4%A2%E4%BA%8C%E5%8F%89%E6%A8%B9)

##### Ref

- [樹 (資料結構) - 維基百科](<https://zh.wikipedia.org/wiki/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)>)
- [二元樹 - 維基百科](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91#%E7%B7%9A%E7%B4%A2%E4%BA%8C%E5%8F%89%E6%A8%B9)
