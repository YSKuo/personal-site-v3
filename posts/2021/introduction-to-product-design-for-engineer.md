---
title: "數位產品開發的通識課：產品設計流程"
cover: ""
category: "Design"
date: "2021-09-11"
excerpt: "從設計師轉換到工程師，嘗試結合兩邊的觀點來分享產品設計流程。"
language: "zh_Hant"
published: true
featured: false
tags:
  - UX/UI
  - Flowchart
  - Product Design
  - User Flow
  - 產品設計
  - 數位產品開發的通識課
---

進入現在的公司後，發現我們的工程師不太熟悉數位產品開發的設計階段，而我們的設計師也較難以和大家交流這樣的知識。

剛好我是從設計師轉換到工程師，所以在一次內部的技術分享上，和工程師們分享產品設計的內容，而這篇文章就是由那次內部分享的內容編寫的。

如上所述，這篇文章的目標群眾是想了解產品設計的工程師，但如果你不是數位產品領域的人，或許也可以透過這個文章對產品設計有一些了解。

## 淺談產品設計

通常在工程師開發之前，會由產品經理和設計師一起討論產品功能，有的公司還會經過 UX research 確定需求，總之每家公司的做法並不會完全一樣，這篇文章討論的設計流程可能也和你們公司的不一樣。

但是團隊要是有踏實地走過這些設計流程，必定能減少許多工程師開發時會遇到的障礙，也比較能夠避免開發完之後，產品經理才發現功能的方向錯誤。

一般來說，常見的產品設計流程有以下內容，這邊引用一位資深的設計師 [Akane](https://blog.akanelee.me/posts/686437-ui-design-process/) 的文章內容：

![產品設計流程](https://img.akanelee.me/20160328-1.jpg)

1. User Story
2. Functional Map
3. Flowchart
4. UI Flow
5. Wireframe
6. Mockup
7. Prototype

而我自己做過的內容是 User Story, Flowchart, Wireframe, Prototype，所以下面主要會講這幾個流程的內容。

### User Story

從使用者的角度來思考，我（使用者）想要什麼功能，來幫助我達到什麼事情（好處）。

> `身為一個___，我想要___，因為___。`

之前做一個線上教育平台的 side project，剛好有使用 user story 來幫助團隊思考功能，這邊提供幾個範例：

- 身為一個訪客，我想在首頁看到所有課程，因為我想知道有哪些課程可以選擇。
- 身為一般會員，我想直接購買喜歡的課程，這樣才能擁有觀看課程的權限。
- 身為站方管理員，我想在管理後台查看所有會員的資料，因為這方便我管理會員/發促銷廣告信。

### Flowchart

經由 user story 定義需求和功能之後，就會需要思考使用者流程（user flow），這個階段就可以用 flowchart 來處理。

Flowchart 是一種表現工作流程的圖，這種圖早在上個世紀就被使用，最早是用在工業工程上。

常見的 flowchart 會不同的方塊圖來代表一個步驟，引用 [Wikipedia](https://zh.wikipedia.org/wiki/%E6%B5%81%E7%A8%8B%E5%9B%BE#%E5%B8%B8%E7%94%A8%E7%AC%A6%E8%99%9F) 的內容：

![flowchart 符號](https://i.imgur.com/PA29iVC.png)

每種方塊圖的形狀有特別的意義，像是菱形的作用就像是程式語言會用到的 if 判斷式。

這邊提供一個登入功能的 flowchart 範例：

![登入流程的 flowchart](https://i.imgur.com/7Kcf79X.png)

順帶一提，flowchart 可以廣泛使用在各種流程確認，我過去曾在製鞋工廠待過，當時的高階管理層想改善公司內部的業務流程，於是聘請管理顧問公司的人來協助改善，當時該些顧問和我就是一起用 flowchart 來找出流程的改善點。

### Wireframe

在理清流程之後，可以用 wireframe 來製作畫面並展示功能與畫面的前後關係。

Wireframe 是一種線稿，用最簡單的線條或符號等元素來呈現網頁的 UI，在這個階段通常也不會有精美的 icon 或給畫面上的元素上色，簡單來說就是用徒手在白紙或白板上畫圖就是一個 wireframe。

這邊引用 [ProductPlan 文章](https://www.productplan.com/glossary/wireframe/) 的圖，典型的 wireframe 會像是這樣：

![Wireframe 範例](https://balsamiq.com/assets/learn/articles/account-setup-wireframe.png)

### Mockup

在 wireframe 之後，會有一個流程叫做 mockup，也就是製作視覺稿，在這階段設計師會切圖並放上 Zeplin 或是直接讓工程師開 Figma 看圖。

我想這個是最常見且工程師也比較了解的一個階段，因為前端工程師就是從設計師那邊接到圖之後來切版的，所以這部分不贅述。

### Prototype

大多數公司的開發狀況都是設計師交付圖檔之後，工程師就開始根據圖檔和規格來工作，但其實在設計流程還有一個步驟叫作 prototype。

Prototype 指的是原型，原本就是在工業製造上的一個環節，舉例來說某個車廠要量產新車款之前，會製作一個 prototype 來做測試，接著確保設計沒問題之後才開始量產。

而數位產品的 prototype 也是同樣概念，設計師可以透過一些工具來製作擬真的產品出來，並且用 prototype 來進行測試或是展示給同事等。

像 Google 這樣的大公司甚至會有 UX engineer 這樣的角色，和設計師合作一起在設計階段就寫程式做出 prototype，這樣的 prototype 有可能是有樣子但只有部分功能，也可能是有完整功能但使用者體驗或介面尚未優化。

## 結語

這篇介紹了設計階段的皮毛，但如我開頭所說的，這些東西不見得存在於你的公司，就我所知大多數的公司可能都沒有完整的設計流程。

總結一下重視設計階段的幾個優點：

- 建立一個符合直覺的體驗
- 評估現有產品的體驗
- 展示產品給顧客和同事

如果你是工程師，但是開發過程會遇到需求定義不明確、流程規劃有問題等障礙，那或許可以和設計師討論一下，看看設計階段是不是遇到一些溝通困難。

順帶一提，當時我分享這些內容時，我們團隊的有些工程師會擔憂引入更完整的設計流程之後，開發過程就不夠**敏捷**了，但就我了解其實更完善的前置作業並不違反[敏捷原則](https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-%E6%95%8F%E6%8D%B7%E5%AE%A3%E8%A8%80-12-%E5%8E%9F%E5%89%87-64ad7d592087)，我覺得在工程師開發之前的規劃更完善的話，更能有效加速開發流程。

##### Ref

- [讀者來信：UI 設計流程 · 嫁給 RD 的 UI Designer](https://blog.akanelee.me/posts/686437-ui-design-process/)
- [什麼是 User Story? – ihower { blogging }](https://ihower.tw/blog/archives/2090)
- [Flowchart - Wikipedia](https://en.wikipedia.org/wiki/Flowchart)
- [Wireframe 是什麼？認識網站 UI 設計排版草圖與資訊架構｜ ALPHA Camp Blog](https://tw.alphacamp.co/blog/wireframe)
- [Wireframe | Definition and Overview](https://www.productplan.com/glossary/wireframe/)
- [Prototype - Wikipedia](https://en.wikipedia.org/wiki/Prototype)
- [Prototyping User Experience :: UXmatters](https://www.uxmatters.com/mt/archives/2019/01/prototyping-user-experience.php#:~:text=the%20design%20process.-,The%20goal%20of%20a%20prototype%20is%20to%20test%20the%20flow,iteratively%20based%20on%20user%20feedback.)
- [敏捷宣言 12 原則](https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-%E6%95%8F%E6%8D%B7%E5%AE%A3%E8%A8%80-12-%E5%8E%9F%E5%89%87-64ad7d592087)
