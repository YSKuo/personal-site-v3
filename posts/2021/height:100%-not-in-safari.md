---
title: "height: 100% 在 Safari 失效"
cover: ""
category: "Front-end"
date: "2021-03-11"
excerpt: "以這篇文章作為開始，隨意記錄開發時遇到的坑。"
published: true
featured: false
tags:
  - CSS
  - UI
  - Real-World Case
---

## 前言

以這篇文章作為開始，隨意記錄開發時遇到的坑。

## 問題描述

最近負責公司產品的一個 UI 切版，其中一部分的排版出了問題。

我在 CSS 設置 `height: 100%;`，在 Chrome 瀏覽器看到的狀況是這樣

![](https://i.imgur.com/rjb5X0H.png)

但是在 Safari 上看到的卻是這樣

![](https://i.imgur.com/L3ZnQHI.png)

很明顯下面那三塊（渠道資訊、訂閱狀態、國家）的下緣沒有貼齊，顯然是不同瀏覽器出現的差異。

---

## 過程

怎麼調整都調得不好，原本以為可能用 Grid 會有問題，所以換成 Flex 來排結果沒用，也嘗試調 word-wrap 和 word-break 一樣沒用。

沒辦法了，只好求助估狗大神，就看到這些文章

- [css - height:100% works in Chrome but not in Safari - Stack Overflow](https://stackoverflow.com/questions/43381836/height100-works-in-chrome-but-not-in-safari/43382986)
- [safari 中高度 100%失效問題及解決方案 | 程式前沿](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/755535/)

## 解法

這邊分享一下我大概的解法，我把下面出問題的那三塊以一個 div 包起來，然後在這個 div 設置 CSS：

```css
display: flex;
justify-content: space-between;
align-items: strech;
```

然後再將那三塊設定

```css
height: 100%;
flex: 1;
```

結果順利解決這問題啦～～

![](https://i.imgur.com/krE9gue.png)
