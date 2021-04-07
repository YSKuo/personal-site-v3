---
title: "建立技術 Blog 前的比較"
cover: ""
category: "Experience"
date: "2021-04-07"
excerpt: "來說說為什麼我用 Gatsby 來建個人網站。"
published: true
featured: true
tags:
  - 中文
  - Own-Site-Builder
  - Writing
  - Blogging
---

## 前言

建立個人網站（部落格）一段時間了，這次來說說為什麼我用 Gatsby 來建個站。

## 釐清

在開始動手前總要先釐清問題（需求）是什麼？

### 動機

原本我所學和從事的領域不是資訊產業，後來轉到資訊產業是由於對 UX 產生興趣，而注意到 UX 是因為看了 [Kaiting](https://kaitinghuang.com/) 的文章。受到前輩們的影響，所以有了建立個人網站的念頭

相關領域的作品越看越多，開始注意到許多設計師會用個人網站呈現自己的作品，有個人網站似乎才顯得專業，於是在心中埋下了想要建立個站的種子。

不過呢...現在建立個人網站有很多簡單的工具/服務，所以 `個人網站 = 專業` 是不成立的。

話雖如此，還是喜歡做個網站放自己的東西，所以學了網頁開發之後還是花了點時間處理它。

### 需求

這邊用 User Story 來描述我自己的需求：

1. 身為一個網站經營者，我想要網站具備擴充性，讓我往後能按自己想法擴充功能。
2. 身為一個網站經營者，我想要網站能夠長久經營下去，讓我的網站不受平台倒閉波及。
3. 身為一個網站經營者，我想要網站有部落格功能可以放置文章，讓我記錄工作或生活上的心得。
4. 身為一個網站經營者，我想要花費的成本越低越好，讓我不用花費太多的金錢經營。

再簡易條列一下，我想要的個人網站有以下特點：

1. 不受平台影響

   - 呼應 User Story **1.** **2.**

2. 可擴充功能

   - 呼應 User Story **1.** **3.**

3. 免費

   - 呼應 User Story **4.**

## 候選與評估

這邊會一併討論專注於部落格功能的選項，以下都屬於我的主觀看法。

候選名單：

- [Medium](#medium)
- [CoderBridge](#CoderBridge)
- [Hexo](#Hexo)
- [Gatsby](#Gatsby)

### [Medium](https://medium.com/)

#### 優點

- SEO

  - 建立個人網站/部落格很令人煩惱的一點是曝光率，如果沒處理好 SEO 的話，就算你的文章寫得很好，若是其他人搜尋不到文章，那就非常可惜，因此依附在知名平台例如 Medium 上的一大好處，就是別人比較容易搜尋到你的文章。

- 完善的 CMS

  - 有 CMS（內容管理系統）就不用煩惱文章該放置在哪裡，也不用想著寫完文章後要轉換成 HTML 還得自己調整 CSS 樣式。

- 使用者多

  - 作為目前最熱門的部落格平台，Medium 使用者很多是無庸置疑的，而這也意味著不管是對於官方或是使用者，都是有利可圖的，也因此這個生態系會促使 Medium 不斷改善。

#### 缺點

##### 不支援 Markdown

Medium 對我來說最大的缺點就是官方沒有支援 Markdown，這是一個很簡單卻又好用的標記語言，簡單來說就是用來寫文章的語言，如果想了解這個語言的話可以看看 [Markdown 語法說明](https://markdown.tw/) 這篇文章的介紹。

我自從學了 Markdown 之後，基本都是使用它來做筆記及寫文章，但是 Medium 不支援 Markdown，也就是說我沒法先寫好 Markdown 格式的內容，再直接貼在 Medium 上轉成相應的格式，這一點對我來說真的非常不方便。不過也有人研究相應的解法，有興趣請參考 [如何在 Medium 使用 Markdown 語法](https://tsoen.medium.com/%E8%AD%AF-%E5%A6%82%E4%BD%95%E5%9C%A8-medium-%E4%BD%BF%E7%94%A8-markdown-%E8%AA%9E%E6%B3%95-5da7bf012eb5)。

##### 程式碼呈現方式不優

Medium 呈現程式碼的方式不是很理想，雖然可在文章顯示 code block，如下圖這樣：

![Medium's code block](https://i.imgur.com/PpBD2Iq.png)

嗯...就是看起來非常 `plain` 的樣式 。

其實樣式單調也不是罪大惡極的缺點，畢竟程式碼最重要的就是清晰，但如果能針對程式碼內容（例如宣告變數之類）弄出不同的顏色，肯定能更方便讀者快速理解。

針對這點，有的人會運用 Github 的功能在 Medium 上呈現程式碼（參考：[如何在 Medium 嵌入程式碼](https://medium.com/noguess/%E5%A6%82%E4%BD%95%E5%9C%A8medium%E5%B5%8C%E5%85%A5%E7%A8%8B%E5%BC%8F%E7%A2%BC-215689a12397)），但對我來說也是多一道功夫，很不方便。

#### 小結

就純粹寫文章的角度來看，近幾年使用 Medium 可能還是最好的選擇，我也會持續使用 Medium，不過只會放一些比較非技術類型的文章。

---

### [CoderBridge](https://www.coderbridge.com/)

#### 優點

##### 支援 Markdown

之前使用 CoderBridge 一段時間，它是個滿方便的平台，可以直接貼上 Markdown 格式的內容，介面就像下圖呈現的：

![CoderBridge's editor](https://i.imgur.com/Jv73jRw.png)

而且可以把程式碼呈現得很好，讀者實際看到的 code block 像是這樣：

![CoderBridge's code block](https://i.imgur.com/VuqsNsF.png)

可以看得出來這平台對於顯示程式碼很友善，會根據其內容而對字元標色，讓閱讀文章的人可以一目瞭然哪些是保留字等等。

##### 其他優點

我使用 CoderBridge 的時間並不長，所以不是非常了解這個平台，所幸網路上還有其他介紹這平台的文章，像是引我入門的資深工程師 Huli，他寫的文章 [寫技術部落格不需要那麼大費周章](https://hulitw.medium.com/tech-blog-coderbridge-to-the-rescue-2ba5b52d8bcd#a879) 就把 CoderBridge 介紹得很好，而且也有評比技術部落格的選擇，起初我也是透過他的推薦而使用 CoderBridge 的。

#### 小結

雖然 CoderBridge 是個不錯的技術部落格平台，但它還是用來寫文章為主，無法滿足擴充功能的條件。

---

以上兩個是依附平台的方式，接下來討論自己架設的方式：

### [Hexo](https://hexo.io/zh-tw/)

Hexo 是個部落格框架，我並不算是真的有使用過，只有嘗試在 local 端建置來看看效果。

#### 優點

這邊引述官網首頁呈列的 feature：

- 超級快速

  - Node.js 帶給您超級快的檔案產生速度，上百個檔案只需幾秒就能建立完成。

- Markdown 支援

  - Hexo 支援所有 GitHub Flavored Markdown 的功能，您甚至能在 Hexo 使用大部份的 Octopress 外掛。

- 一鍵部署

  - 您只需要一個指令就能把網站部署到 GitHub Pages, Heroku 或其他網站。

- 豐富的外掛

  - Hexo 有強大的外掛系統，您可安裝外掛讓 Hexo 支援 Jade, CoffeeScript。

我自己試用過後的確是很方便，如果懶得自己設定樣式的話，官網上呈列許多主題供人使用，現在（2021.04.07）的資料是共有 334 個主題：

![Hexo's themes](https://i.imgur.com/ymIcqhq.png)

前面說到的資深工程師 Huli，他自己也有用 Hexo 架設 [技術部落格](https://blog.huli.tw/)；此外，近幾年熱門的前端框架之一 Vue 的 [官網](https://vuejs.org/)，同樣是用 Hexo 建立的。

如果想了解更多範例，可以看官方 repo 的 [showcases](https://github.com/hexojs/awesome-hexo#showcases)。

#### 小結

Hexo 這邊沒寫缺點，並不是因為沒缺點，只是我不算真的有使用過這個框架，所以寫不出什麼缺點來。

簡單來說，最後沒有使用它的原因是 Gatsby 的應用更全面，Hexo 相較之下較局限於部落格功能，如果只是想建立個人部落格且不想依賴在其他平台的話，我想 Hexo 是絕對足夠，也是最方便的！

若有興趣嘗試用 Hexo 建立個人部落格的話，這篇文章 [如何搭建個人 Blog 使用 Hexo + Gitpage](https://medium.com/@bebebobohaha/%E4%BD%BF%E7%94%A8-hexo-gitpage-%E6%90%AD%E5%BB%BA%E5%80%8B%E4%BA%BA-blog-5c6ed52f23db) 有簡易又完整的教學，可能只要稍微懂一點 command line 就能順利建置了。

---

### [Gatsby](https://www.gatsbyjs.com/)

再來就介紹我選擇的方式，我最終選擇使用 Gatsby 來架設自己的網站， 這邊節錄五倍紅寶石的文章 [快打造靜態網站的利器？Gatsby！](https://5xruby.tw/posts/static-site-generator-gastbyjs) 的介紹：

> GatsbyJS 是一套靜態網站生成器，主要使用程式語言 JavaScript 的開源專案。前端框架則使用了時下熱門的 ReactJS。靜態網站生成器的工具通常會提供樣版設置的地方，可以快下載樣板後速進行套版。同時也會在本機運行一個伺服器即時對網頁的變動，編譯後反應內容讓我們可以看到變動後的內容。

接下來說說我評估的優缺點：

#### 優點

##### 資源多

使用 Gatsby 的網站和開發者非常多，從官網的 [Showcase](https://www.gatsbyjs.com/showcase/) 可以看到，連現在最熱門的前端框架之一 React 的官網，還有近幾年很多設計師愛用的設計工具 Figma 官網都是使用 Gatsby 製作的。

![Gatsby's showcases](https://i.imgur.com/ltLvt9X.png)

使用的人多也因此建立一個持續進步的生態，所以有許多資源可以使用，官方目前（2021.04.07）有列出 434 個 Starter。

你可以把 Starter 想成是模板，套用這個 Starter 可幫助開發者迅速建立網站。

![Gatsby's Starters](https://i.imgur.com/OeP2zJr.png)

##### 自由度

要製作前面討論的部落格絕對沒問題，像是前端狀態管理工具 Redux 的作者 Dan Abramov，他的 [個人部落格](https://overreacted.io/) 也是用 [Gatsby Starter Blog](https://gatsbystarterblogsource.gatsbyjs.io/) 建立的，而且官方網站上也有提供許多 plugin，想要把 Markdown 格式的文章自動 HTML 或是想對網站 SEO 調整，這些都有 plugin 方便開發者完成。

此外，想建立電商網站、公司形象官網或個人作品集，這些都不是問題，且也有提供相應的 Starter，使用這些 Starter 後可再按自己喜好來更改樣式或網站結構。

##### 免費

Gatsby 是一個開源專案，也就是它是完全免費的，如果想要串連其他付費服務（例如 WordPress 或 Shopify）也沒問題。

#### 缺點

最主要的缺點就是前端技能的門檻稍微高點，如果不會 React 的話應該很難用 Gatsby 來建立網站，此外還要會 GraphQL 來獲得所需的資料。

#### 小結

這邊比較下來很明顯 Gatsby 是最符合我需求的，它滿足了我列的三個需求（`不受平台影響`、`可擴充功能` 以及 `免費`），所以最後就選它了。

---

### 其他選擇

除了上述的選擇外，還有一些資源是可以使用的，但我也不算真的很了解它們，所以直接放在最後這邊簡述一下：

#### [Notion](https://www.notion.so/)

Notion 被當作筆記軟體，但它具備許多功能及 template，所以要深度使用它來作為個人部落格，我想應該也是可行的。

我記得前陣子在台灣很紅的 ClubHouse，它的官方說明頁面就是直接寫在 Notion 供人閱讀。

#### [WordPress](https://wordpress.com/)

WordPress 應該許多人知道，可用它建立免費網站或網誌，不過當免費仔能用的功能絕對是最陽春的；如果狠下心使用付費方案，若不是專職作家又不常寫文章，往往容易荒廢，最後為了停止支出，進而選擇關閉網站。

---

## 結論

最後總結一下各個選擇適合的使用者：

- Medium
  - 適合一般大眾
- CoderBridge
  - 適合技術寫手
- Hexo
  - 適合想自己架部落格卻不想要太多其他功能的開發者
- Gatsby
  - 適合想自己架網站且希望應用性廣泛的開發者

雖然最後選擇 Gatsby 看似毫無懸念，但當時也是掙扎滿久的，原因是用它建站的確比較麻煩...

決定用 Gatsby 之後，要選擇哪個 Starter 也是令我苦惱了一陣子。選好 Starter 之後開始調整 CSS 和網站結構，又花了我大概三週的時間，直到現在做完網站已經一個多月了，還有一些功能沒完成呢。

總之，對我來說自己建站是一條不歸路，但做了一個自己滿意的網站當然是滿有成就感也滿爽的，可能之後再來分享我的製作過程。
