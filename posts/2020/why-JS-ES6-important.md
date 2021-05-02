---
title: "JavaScript - 為什麼 ES6 總是特別拿出來提？"
cover: ""
category: "JavaScript"
date: "2020-06-26"
excerpt: "這篇簡述為什麼 ES6 在 JavaScript 這個程式語言如此重要。"
published: true
featured: true
tags:
  - Frontend
  - ES6
  - JavsScript history
---

## 前言

身為一個 JavaScript 初學者，總會看到各種教材會特別把 ES6 拿出來獨立當一個章節，甚至去求職網上看網頁工程師的職缺，許多對於求職者的要求條件也會寫上要會 ES6 語法。

那 ES6 是什麼意思？先來了解一下。

---

## ES6 是啥意思？

ECMAScript (ES)是 JavaScript 的規格標準，可以想成是 JavaScript 的使用說明書，又可以想成這是 JavaScript 聖經，裡面的內容是最正確最完善且不容質疑的。

ECMAScript 會隨著時代演進而更新內容（例如新增語法、功能），而這篇文章要討論的 ES6 就代表 ECMAScript 第六版本的意思。順帶一提，ES6 的官方正式名稱是 ECMAScript 2015 (ES2015)，不過一般還是會講 ES6。

---

OK，現在我知道 ES6 就是新版規格的意思，那裡面新增許多功能可以使用。但我又有個疑問，為什麼這東西要特別拿出來講？

既然 ECMAScript 會更新，那為什麼不是拿更新的版本出來講？例如更新版本的 ES7 或 ES8 甚至今年六月推出 ECMAScript 2020 的版本。

想要了解這樣的問題，我認為應該可以從 JavaScript 的發展歷史得到答案，所以就看了一些資料整理了一下這篇文章。這篇文章主要內容參考下面這個連結的內容。

[Brief History of JavaScript](https://roadmap.sh/guides/history-of-javascript)

## JavaScript 的發展簡史

### JavaScript 問世

在 1995 年，JavaScript 由 NetScape 公司的 Brendan Eich 創造。起初命名為 `Mocha`，後來 NetScape 決定將之取名為 `JavaScript`，目的是想要利用 `Java` 廣大的名氣來吸引人們使用。

這樣取名方式類似現在常講的沾光、蹭熱度或裝熟（？，而這也造成日後許多人的誤會：儘管 `JavaScript` 和 `Java` 兩者語言並沒有任何關聯，不少人還是以為這兩種語言有關，甚至有人以為兩個都是在講 Java 這個語言。

### JavaScript 標準化：推出 ES1、ES2 及 ES3

在 1996 年，Netscape 想要讓 JavaScript 標準化所以送交 ECMA International（註），而後在 1997 年產生初版的標準規範 `ECMAScript`(ES1)。在推出初版規範後，又分別在 1998 推出 `ECMAScript 2`(ES2)及 1999 推出 `ECMAScript 3`(ES3)等新版本規範。

註：ECMA International 是協助制訂標準的組織，詳細介紹可參考 [ECMA International - Wikipedia](https://zh.wikipedia.org/wiki/Ecma%E5%9B%BD%E9%99%85)。

### 十年沉寂：捨棄 ES4

ES3 推出之後，ECMAScript 大約有整整十年時間沒有官方更動。原先計畫於 2008 年推出 ES4，但因為 ES4 內容的複雜性而與瀏覽器/入口網站開發商出現意見分歧，最後推出 ES4 的計畫直接被放棄，所以沒有所謂 ES4 版本。但即便官方沒有增修 JavaScript 的特性，這段期間仍有許多非官方的擴充功能被推出，使用者會利用 Polyfills 來解決不同瀏覽器之間相容性問題。

註：Polyfills 是一段程式碼，主要用來讓新的語法功能可以應用在尚未支援新功能的舊瀏覽器上；Polyfill 就是填充物的意思，所以可以想成新功能和舊瀏覽器之間的補土，補起來後就可以讓舊瀏覽器觸及新功能啦。詳細內容可參考 [Polyfills - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)。

### 打破沉寂：推出 ES5

在 2009 年 ES5 被推出，其基礎來自於被放棄的 ES4 部分內容，主要被用來解決相容性以及資安等問題。但是 ES5 新增的內容過於保守，導致 ES5 的推出並沒有激起太多迴響，此時許多開發者仍在使用 ES3 甚至不知道有 更現代 的版本。

### 眾望所歸：推出 ES2016 (ES6)

在 ES5 釋出幾年後， TC39（註 1.）持續致力於下個版本的 ECMAScript (ES6)。起初這個版本被稱為 `ES Harmony`，但後來釋出時以 `ES2015` 為此版本的正式名稱。

`ES2015` 新增許多 重要的特性 以及 **syntactic sugar** （註 2.）以便開發複雜的應用軟體，其中包括 Let and Const、Modules、Destructuring Assignment、Arrow Functions、Template Literals、Promise、Class…等等。

當時支援 ES6 的瀏覽器仍然很稀少，但是開發者透過 Transpiling（註 3.）可將所有 ES6 的程式碼轉換成 ES5（甚至更舊）的形式。隨著 ES6 的推出，TC39 也決定往後每年要推出新版本的 ECMAScript 以確保最新的功能能即時加入規範，開發者也不用像過去一樣必須經過漫長等待才盼到新功能的到來，此後每年六月的時候推出新版本的 ECMAScript。

註：

1. TC39 是 ECMA international 下的技術委員會，主要負責制定 ECMAScript 標準。
2. syntactic sugar 中文稱 語法糖，程式語言中添加的語法，這種語法對原本的功能沒有影響，但是可讓開發者更方便使用，詳細資訊可參考 [語法糖 - Wikipedia](https://zh.wikipedia.org/wiki/%E8%AF%AD%E6%B3%95%E7%B3%96)。
3. Transpiling 可用來將某程式碼轉換成特定語言的程式碼。

### ECMAScript 每年更新

由於 ES6 的推出，TC39 將制定標準的過程精簡化。TC39 藉由一個運作於 Github 的組織來接受來自各方的提案以更新 ECMAScript。現在任何人都可以遞交提案來參與 ECMAScript 的修改，每個提案在真正加入官方標準前都會經過四個不同的階段。

關於提案過程在這不詳述了，有興趣的可以看文章：[[译] TC39，ECMAScript 和 JavaScript 的未来（Part 1）](https://medium.com/@justjavac/tc39-ecmascript-proposals-future-of-javascript-386b12149880)。

---

## 結論

由此可知 ES6 的推出可算是 JavaScript 的一大進步，例如 let 和 const 宣告變數的方式解決變數內容被覆蓋、Promise 解決 callback hell 還有各種語法糖讓程式碼更好寫且易讀等等，因此 ES6 在 JavaScript 才會一直被拿出來提。而後更新版本的 ES 雖然也讓開發更方便，但改變並不像 ES6 這麼巨大。

如果還是不懂為啥 ES6 特別被關注，可以看看以下亂比喻內容（？。

## 亂比喻

大概可以把 ES6 想成遊戲公司 Capcom 底下的知名遊戲 `惡靈古堡2 重製版`，原版的 `惡靈古堡2` 是在 1998 年推出的遊戲，這款遊戲實在太受歡迎了以至於 10 年後還有人喜歡玩，但遊戲世代已經進入高畫質時代，1998 年遊戲的低像素及低擬真度讓玩家玩得有點痛苦。

可是官方又遲遲不肯推出高清重製版本，於是有非官方的遊戲開發者利用新的遊戲引擎製作 `惡靈古堡2` 的還原影片，甚至有獨立工作室宣布製作 `高清版惡靈古堡2` 的計畫，後來遊戲公司 Capcom 終於要推出官方的 `惡靈古堡2 重製版` 並收納各方意見來改善原版 `惡靈古堡2` 的缺點。

而後 `惡靈古堡2 重製版` 推出果然大受歡迎，甚至被部分玩家讚譽 `惡靈古堡2 重製版` 是重製遊戲的標竿，真香啊~

亂比喻完啦，總之希望這篇文章對大家有幫助。

---

參考資料：

1. [Brief History of JavaScript](https://roadmap.sh/guides/history-of-javascript)
2. [ECMA International - Wikipedia](https://zh.wikipedia.org/wiki/Ecma%E5%9B%BD%E9%99%85)
3. [Polyfills — MDN](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
4. [什麼是 Polyfills？](https://medium.com/@tsoen/%E4%BB%80%E9%BA%BC%E6%98%AF-polyfills-89f98f45caf5)
5. [前端“黑話”polyfill](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/)
6. [ES6 new features](http://es6-features.org/#Constants)
7. [Transpiling](https://riptutorial.com/zh-TW/javascript/topic/3778/transpiling)
8. [語法糖 — Wikipedia](https://zh.wikipedia.org/wiki/%E8%AF%AD%E6%B3%95%E7%B3%96)
9. [[译] TC39，ECMAScript 和 JavaScript 的未来（Part 1）](https://medium.com/@justjavac/tc39-ecmascript-proposals-future-of-javascript-386b12149880)
10. [ECMAScript 6 会重蹈 ECMAScript 4 的覆辙吗？](https://www.zhihu.com/question/24715618)
