---
title: "運用資料結構/演算法的實作 Tree View"
cover: ""
category: "Front-end"
date: "2022-02-20"
excerpt: "用資料結構與演算法的概念來實作常見 UI Component: Tree View。"
language: "zh_Hant"
published: true
featured: true
tags:
  - 演算法
  - 資料結構
  - JavaScript
  - React
  - Real-World Case
---

## 預備知識

了解本文內容之前需要具備的 prerequisite：

- JavaScript 基礎知識及 ES6 語法
- 物件導向
- 遞迴
- [Tree](/post/2021/12/12/introduction-to-tree)
- [Tree Traversal](/post/2021/12/25/implementation-of-tree-traversal-in-javascript)

## 前言

近年來有許多人轉職當軟體工程師，其中網頁前端又是最熱門的選項，而前端工程師的工作內容多是處理 UI 切版、串 API 以及優化效能等等，所以有許多人認為前端不需要懂演算法與資料結構。

我在自學演算法與資料結構原先也覺得這只是用來面試的知識，直到最近在處理工作上的事情時實際運用到相關內容，這才了解到學習演算法與資料結構的優點。

這篇文章會實作一種常見的 UI Component: Tree View，藉此來分享如何將電腦科學的基礎知識實際運用在實務上。

## Tree View 介紹

這篇要實作的 UI component 是 [Tree View](https://mui.com/components/tree-view/)，它是一種能夠展現分層結構的列表，而我需要實作出這樣的 Tree View 來：

![Treeview](https://i.imgur.com/YbRmK8u.png)

條列一下基本的規則及需求

- Tree View 上每個單位都是一個節點
- 每一個節點的值都是字串
- 若字串結尾有 `/` 則稱為類別節點
- 若不是類別節點的話，則稱之為單位節點
- 若有一個節點的字串內容為某類別節點的內容和其他內容的組合，則視此節點為該類別節點的子節點
- 點擊類別時可以收攏或展開其底下所有的子節點

舉例說明：

```
Sample/       -> 類別節點

Sample/A/     -> 類別節點
Sample/A/A    -> 單位節點

Sample/B/     -> 類別節點
Sample/B/B    -> 單位節點

Sample/A      -> 單位節點
Sample/B      -> 單位節點
Sample/C      -> 單位節點
```

## 實作

### 前置作業

把上述例子的字串整理成一個 node layer 的 hash table 出來，用來表明各個節點底下一層的子節點，整理完會像這樣：

```js
const nodeLayers = {
  "Sample/": ["Sample/A/", "Sample/B/", "Sample/A", "Sample/B", "Sample/C"],
  "Sample/A/": ["Sample/A/A"],
  "Sample/B/": ["Sample/B/B"],
  "Sample/B/B": [],
  "Sample/A": [],
  "Sample/B": [],
  "Sample/C": [],
};
```

### 定義 object

接著運用 JS ES6 的 [Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 來定義 tree 的結構，這邊運用 Depth First Search (DFS) 來產生節點及子節點。

```js
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

class Tree {
  constructor(topNode, nodeLayers = {}) {
    this.root = new Node(topNode);
    this.dfs(this.root, nodeLayers);
  }

  dfs(node, nodeLayers) {
    if (!nodeLayers[node.name]) return;

    nodeLayers[node.name].forEach((child) => {
      const childNode = new Node(child);
      node.children.push(childNode);
      this.dfs(childNode, nodeLayers);
    });
  }
}
```

### 定義 component

定義完 object 之後就來實際建立 UI component，這邊我用 React 的語法來寫，並省去樣式設定以及一些 function 等細節。

```js
const tree = new Tree("Sample/", {
  "Sample/": ["Sample/A/", "Sample/B/", "Sample/A", "Sample/B", "Sample/C"],
  "Sample/A/": ["Sample/A/A"],
  "Sample/B/": ["Sample/B/B"],
  "Sample/B/B": [],
  "Sample/A": [],
  "Sample/B": [],
  "Sample/C": [],
});

const TreeNode = ({ node }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <TreeNodeWrapper>
      {node.children.length ? (
        <>
          <CategoryWrapper>
            <Checkbox />
            <CategoryName onClick={() => setIsShow((prev) => !prev)}>
              {node.name}
            </CategoryName>
          </CategoryWrapper>
          {isShow && (
            <ChildrenWrapper>
              {node.children.map((child, idx) => (
                <TreeNode key={idx} node={child} />
              ))}
            </ChildrenWrapper>
          )}
        </>
      ) : (
        <Checkbox label={node.name} />
      )}
    </TreeNodeWrapper>
  );
};

const TreeView = ({ tree }) => (
  <TreeWrapper>
    <TreeNode node={tree.root} />
  </TreeWrapper>
);
```

其中 `TreeNode` 這個 component 一樣是運用 DFS 的概念，以便長出節點底下的 children，並用 `isShow` 這個狀態來處理類別節點收攏/展開子節點的狀況，如此一來就完成 Tree View 的實作了。

## 結論

在實作這個需求之後，讓我覺得演算法/資料結構更有趣了，畢竟誰不希望自己所學的東西是真的有所運用呢？

如果讀者有興趣了解其他演算法及資料結構內容，歡迎閱讀我寫的系列文章：

- [演算法](/categories/algorithm)
- [資料結構](/categories/data-structure)
