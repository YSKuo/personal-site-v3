---
title: "比對兩個 array 的 element"
cover: ""
category: "Algorithm"
date: "2021-03-14"
excerpt: "工作上遇到的問題，討探比對兩個 array 該怎樣做才有比較好的效率。"
language: "zh_Hant"
published: true
featured: false
tags:
  - 演算法
  - Real-World Case
---

## 問題描述

工作上遇到的問題，狀況是使用者有個管理顧客資料的頁面，可以在那裡編輯顧客的 tag，所以在更新資料的時候要比對新的 tag list 和舊的 tag list 兩者內容，以傳遞正確的資訊回去給資料庫。

新的 tag list 是一個 array，這個 array 只有單純的 tag name，像是這樣：

```js
["aaa", "bbb", "ccc", "ddd"];
```

另外有一個前一狀態（舊的）tag list ，這個 list 記錄著更多訊息，包括每個 tag 的 id、名稱以及數量等等，並以 JSON 格式儲存：

```JSON
"[
  {"id":1,"name":"aaa","count":3},
  {"id":2,"name":"bbb","count":1},
  {"id":3,"name":"ccc","count":5}
]"
```

原本的編輯功能沒有做好，使用者編輯完 tag 後按下 `確認` 後會更新 tag list，但是更新後的 tag list 把原本 tag count 都記錄成 1 了：

```js
handleAddTag = (id) => (e) => {
  const currentTagNameList = this.state.tagData;

  // 把每個 tag 弄成 object，並把頭尾空白去掉
  let newTagDataList = currentTagNameList.map((t) => {
    return { name: t.trim() };
  });

  // 把更新後的 new tag list 傳遞出去
  this.props.editProfile(id, newTagDataList);
};
```

這個錯誤的原因就是沒有把舊 tag list 的資料給拿來處理，以下只探討怎麼確認新舊資料是否吻合，並將舊的詳細資料塞進 newTagDataList。

## 解法

### 最先想到的解法

```js
const currentTagNameList = this.state.tagData;

// 把舊資料拿出來並 parse JSON
const prevTagDataList = JSON.parse(this.state.prevTagData);
// 做成一個新的 list 但只有 tag 的名字
const prevTagNameList = prevTagDataList.map((tag) => tag.name);

// map 的時候新舊兩相對照，
// 如果在新的 list 裡發現和舊的 tag 名字一樣，那就把舊的詳細資料塞進來
let newTagDataList = currentTagNameList.map((t) => {
  if (prevTagNameList.includes(t)) {
    return prevTagDataList.find((tag) => tag.name === t);
  }
  return { name: t.trim() };
});
```

這樣是可以把資料塞進來，但效率就是差，因為 map 裡面還塞了 includes，而 includes 裡又有 find，所以是 O(n^3)。

### 優化解

最近在看演算法的內容，學到了如果排序不是重點的話，用 object 來處理資料會是比較好的做法，所以就從這個方向來改。

```js
const currentTagNameList = this.state.tagData;

// 一樣拿舊資料出來
const prevTagDataList = JSON.parse(this.state.prevTagData);
// 建立一個可以比對舊 tag list 的 tag name 和 index 的 Map
let prevTagNameIndexMap = {};
prevTagDataList.forEach(
  (tag, index) => (prevTagNameIndexMap[tag.name] = index)
);

let newTagDataList = currentTagNameList.map((t) => {
  const tagName = t.trim();
  // 如果新的 tag list 裡的 tag 可以在舊的 list 找到，那就把舊的資料塞進來
  if (tagName in prevTagNameIndexMap) {
    return prevTagDataList[prevTagNameIndexMap[tagName]];
  }
  return { name: tagName };
});
```

這邊優化的重點在於將 tag name 當作 key 而 index 當作 value 做出一個可以舊資料的 Map，所以要從舊資料找特定 tag 時可以直接用 index 去 access，這樣優化過後就變成 O(n)。
