---
title: "數位產品開發的通識課：Design System"
cover: ""
category: "Design"
date: "2021-10-10"
excerpt: "從設計師轉換到工程師，嘗試結合兩邊的觀點來分享 Design System。"
language: "zh_Hant"
published: true
featured: true
tags:
  - UX/UI
  - Design System
  - Frontend
  - Material Design
  - Ant Design
  - Product Design
  - 產品設計
  - 數位產品開發的通識課
---

延續[系列文](/tags/數位產品開發的通識課)的想法，這篇文章的促成也是源自我在公司內部的技術分享內容，主要是想讓工程師或是剛踏入數位產品領域的人了解 design system。

## Design System

### 何謂 Design System？

在網路上搜尋到的[文章](https://www.robertcreative.com/blog/what-is-a-design-system)，給出這樣的介紹來：

> A design system is a collection of UI components bound together by design principles and an overarching UX strategy. They are often presented with guidelines on how each component lives inside the larger user experience.

簡單來理解的話，design system 可以說是一套設計原則，用來規範所有 UI 元件並使產品呈現出一致的使用者體驗。

舉個例子，許多人在中學的時候都有在課堂上聽過[永字八法](https://zh.wikipedia.org/wiki/%E6%B0%B8%E5%AD%97%E5%85%AB%E6%B3%95)，這是書法家練習楷書的運筆技法
，書法練習者可以藉由這一套技法寫出楷書的字，這就算是 design system 的概念。

![永字八法](https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yong%27s_skeleton.png/300px-Yong%27s_skeleton.png)

在數位產品的 design system 可能包含定義：

- 按鈕顏色、邊角圓弧
- 元件與元件之間的距離
- 按下按鈕後得到的提示字眼

以上這些內容都可藉由在 design system 事前定義，接著工程師按照這些準則來開發產品，來達到最終產品視覺或體驗上的一致性。

而生為開發者的我們也不見得需要從頭到尾建立一套 design system，就如同書法領域已經存在各種不同字體一樣，現在也有許多公開的 design system 可以讓開發者直接套用，所以接著來介紹幾個目前最常使用的 design system。

### [Material Design](https://material.io/design) （以下簡稱 Material）

Material 是 Google 的 design system，其中包含許多被認為是良好、通用性高的經典設計原則。

> Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web.

Material 很佛心的在 Figma 上釋出了 UI Kit：

- [@materialdesign – Figma](https://www.figma.com/@materialdesign)

### [Ant Design](https://ant.design/) （以下簡稱 Antd）

Antd 是螞蟻集團推出的，是在中文圈裡內容豐富又完整的一套 system。

> 螞蟻集團的企業級產品是一個龐大且復雜的系統，數量多且功能復雜，而且變動和並發頻繁，常常需要設計者與開發者能快速做出響應。同時這類產品中有存在很多類似的頁面以及組件，可以通過抽象得到一些穩定且高復用性的內容。

### 其他 Design System

除了上述兩個 design system 以外，許多大公司都有一套自己的 design system，例如：

- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [Microsoft Design](https://www.microsoft.com/design/fluent/#/)

其中，Material 和 Antd 這兩個是最被廣泛使用在 Web App 上，而我本身是網頁開發者，所以本文也會主要拿這兩個 design system 來討論。

接下來會以部分常見內容來個別討論，如果需要更深的了解可以直接參考各大 design system 的官網。

<!-- ### Fun Facts

Material 說

> Use our most popular design and development resources to jumpstart your latest project

Antd 說

> The world's second most popular React UI framework -->

## Layout 佈局

### The Grid System

Grid system 是一種平面設計的方法，最早被廣泛應用在印刷上，像是下圖這種在報章雜誌上才看到的排版，就是透過白線條來對齊，達到工整簡潔的視覺效果。

![A page layout grid (shown in white lines) composed of a series of intersecting vertical and horizontal grid lines. The text (content) is not part of the grid. The text content is applied to a particular page using the grid "flush left" along the bottom sides and right-hand sides of grid lines. The same grid may be applied to multiple pages using different types of content or different styles of the same content type.
](https://i.imgur.com/ICkMJ2I.png)

後來這套系統也被應用在 Web design，而最早將其發揚光大的應該是 [Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/)，網頁設計師及開發者可以透過 grid system 來整齊又有序地安排元件在畫面上的位置，像是這樣配置：

![Bootstrap: Grid system](https://i.imgur.com/HoV8DsG.png)

接著 grid system 就被廣泛地使用於各種 design system，而 Material 和 Antd 也是用這樣的系統來處理 layout。

順帶一提，很多時候工程師會為了讓成果有 Responsive Web Design (RWD) 的效果，所以使用 grid system，但是當不需要做 RWD 的時候就不用 grid，但這樣很容易讓畫面元素產生一種不協調感。其實如果考量到要讓各元素在畫面中呈現出協調性，那即使不做 RWD 也應該用 grid system。

再來，來看看 Antd 是如何運用 grid system 的。

<!--
#### Material

Material 的 responsive layout grid 有三個組成要素：

1. Columns：用來放內容的
2. Gutters：column 與 column 之間的空間，用來區分內容
3. Margins：頁面左右邊的空間，用來區隔內容和螢幕邊緣

![The responsive layout grid is made up of three elements: columns, gutters, and margins.](https://lh3.googleusercontent.com/_rKc6ogXgmiQWxZQ7u3XvV_PSGUr4FmQvqBapHhuNyyWTGeQ68tWB8xZJC9FS1duQGSEPl6Q6TNK23OeWFy6qKFiLtboumotsZMQng=w1064-v0)
-->

#### Antd

由於 Material 和 Antd 兩邊的 grid 概念差不多，我選擇語言隔閡比較小的 Antd 來分享這一部份。

常見的 grid system 是將畫面分成 12 等分，而 Antd 的 grid 是把畫面劃分為 24 等分，按他們的說法是因為要解決畫面呈現大量資訊的問題。

![Antd grid](https://i.imgur.com/fGdTE6F.png)

關於設計師與工程師之間的溝通，他們的作法也值得參考：

> 對開發者而言柵格是實現動態佈局的手段，而設計師對於柵格的理解源自平面設計中的柵格。在具體落地中視角的不同就容易造成偏差，最終影響還原度，繼而增加溝通成本。
> Ant Design 的設計師通過 4 點來實現設計過程中和工程師的溝通：
>
> 1. 清晰的定義動態佈局范圍
> 1. 盡量保持偶數思維
> 1. 關鍵數據的交付（Gutter、Column）
> 1. 區塊的定義要從 column 開始到 column 結束

#### 其他比較

Column 數量比較：

- Antd：24
- Bootstrap：12
- Material：12
- Semantic：16

斷點比較：

```
|          | xs  | sm    | md    | lg     | xl     | xxl    |
| -------- | --- | ----- | ----- | ------ | ------ | ------ |
| Material | 0   | 600px | 960px | 1280px | 1920px |        |
| Antd     | 0   | 576px | 768px | 992px  | 1200px | 1600px |
```

### Spacing

這邊指的是元素之間的間距，可用來避免元素碰在一起，而造成使用者識別元素的困難。一般會由設計師事先設定數值，到開發階段的時候工程師再由事先設定的內容來切版。

例如 Antd 是設定三種 size：

- `small`：8px
- `middle`：16px
- `large`：24px

另外 Material 也有提到同個 component 裡，各個元素之間的規劃：

![Button with plus icon and padding](https://i.imgur.com/6k8LbDu.png)

## Font 字體

### Font Family

#### Material

關於字體部分，Antd 和 Material 的作法差別就比較大了，先看 Material：

> Powered by Google Fonts, the type scale generator is a tool for creating type scales and corresponding code. Any font you choose is automatically resized and optimized based on Material typography guidance for readability.
>
> - [The type system - Material Design](https://material.io/design/typography/the-type-system.html#type-scale)

簡單來說就是他們有大量的字體庫（Google Fonts），開放給開發者合法使用。

#### Antd

再來看看 Antd 的方式：

> 優秀的字體系統首先是要選擇合適的字體家族。Ant Design 的字體家族中優先使用系統默認的界面字體，同時提供了一套利於屏顯的備用字體庫，來維護在不同平台以及瀏覽器的顯示下，字體始終保持良好的易讀性和可讀性，體現了友好、穩定和專業的特性。
>
> - [字體 - Ant Design](https://ant.design/docs/spec/font-cn)

由此可知 Antd 處理字體的方式是以系統預設字體為優先考量。

#### 整理

- Antd
  - 優先選用系統默認的字體
  - 預設字體：`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...`
- Material
  - 提供一大堆字體（Google Fonts）任君挑選
  - 預設字體：`Roboto`

#### 通用性高的字體組合

這邊額外補充一個我查資料時看到的[文章](https://www.gushiciku.cn/pl/g4vy/zh-tw)，作者整理出通用性最高的字體組合，附在下方供參考：

```css
 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
    Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji,
    segoe ui symbol;
}
```

1. `system-ui`，使用各個支援平臺上的預設系統字型
1. `-apple-system`， 在一些稍低版本 Mac OS X 和 iOS 上，它針對舊版上的 Neue Helvetica 和 Lucida Grande 字型，升級使用更為合適的 San Francisco Fonts
1. `BlinkMacSystemFont`，針對一些 Mac OS X 上的 Chrome 瀏覽器，使用系統預設字型
1. `segoe ui`，在 Windows 及 Windows Phone 上選取系統預設字型
1. `Roboto`，面向 Android 和一些新版的的 Chrome OS
1. `Helvetica`,`Arial`，在針對不同作業系統不同平臺設定採用預設系統字型後，針對一些低版本瀏覽器的降級方案
1. `sans-serif`，兜底方案，保證字型風格統一，至少也得是無襯線字型

### Spec

這部分是關於文字的設定，包括字體大小、字體粗細、行高等等。

#### Material

Material 以文字功能區分，分別定義：

- 6 種 headline
- 2 種 subtitle
- 2 種 body
- 1 種 button
- 1 種 caption
- 1 種 overline

其中 caption 用在圖片註解；overline 用在 headline 的上標（例如 breadcrumbs ）。

在定義這些文字類別後，再設定 size, weight...等性質。

![The Material Design type scale. (Letter spacing values are compatible with Sketch.)](https://lh3.googleusercontent.com/GhGMLbfqPXdUgmnflT52VWNSned4U5jLOpTIXZWEDQfwvZGZC2EI0iO0wKxptigoYW79v2PhIdmjTjWDgfdHF8TzcldhSc9pA4BBLhE=w1064-v0)

#### Antd

Antd 則是定義 10 個不同尺寸的字體以及與之相對應的行高，再將這些值給予不同功能的文字。

![Ant Design：不同尺寸的字體以及與之相對應的行高](https://gw.alipayobjects.com/zos/rmsportal/iFjgfIBExksqCqGMwUlw.png)

其中有 Antd 有特別提到：

> 建議在一個系統設計中（展示型頁面除外），字階的選擇盡量控制在 3-5 種之間，保持克制的原則。

## Icon 圖標

兩個 design system 都有滿多繪製 icon 需要注意的事項，但本文不會提太多細節，因為那些內容算是工作有牽涉到 UI design 的人需要特別去了解的，再有興趣請自行參考：

- [圖標 - Ant Design](https://ant.design/docs/spec/icon-cn)
- [System icons - Material Design](https://material.io/design/iconography/system-icons.html#design-principles)

這邊只提幾個工程師和設計師都需要注意的點：

- icon 的檔案一般都是 svg
- 圖檔都要是正方形的
- 內容盡量填滿靠近邊緣，但要留有 Padding (如下圖)
- 內容置於正方形中間（上下左右置中）

![icon 出血位](https://gw.alipayobjects.com/zos/rmsportal/FNXMpWnyvYfydiSnPCYg.png)

## Color 色彩

Material 和 Antd 都有 color system，這一套系統可以幫助我們建立一套色彩主題，用來反應出品牌/產品的風格。

Material 是預設以下幾種顏色：

- 主色（primary）及次色（secondary）。
- 主色及次色的變化（variant）。
- 其他，例如用於背景、錯誤訊息、字體的顏色。

Antd 則是預設以下幾種顏色：

- 品牌色：用以體現產品特性，應用場景包括關鍵行動點、操作狀態、重要信息高亮、圖形化等場景。
- 功能色：用來表明訊息以及狀態，比如成功、出錯、失敗、提醒、鏈接等
- 中性色：大量地用在介面的文字上，此外也常用在背景、邊框、分割線等場景。

Color system 比較多需要視覺呈現才方便理解的，我這篇文章就不截取太多圖片來放，推薦大家直接到官網看他們的介紹：

- [The color system - Material Design](https://material.io/design/color/the-color-system.html#color-theme-creation)
- [色彩 - Ant Design](https://ant.design/docs/spec/colors-cn)

總結一下，Material 和 Antd 都強調事前先設定好產品會用到的顏色，在開發過程中就直接從中選用相應的顏色。

## 結語

我想各位看到這邊應該對 design system 有初步的了解，但實際上還有許多內容是我沒有提到的，我認為 design system 對於一間公司給人的品牌形象是非常重要的，也因此現在許多知名公司都會建立屬於自己品牌的 design system。

我雖然沒有建立 design system 的經驗，但我認為開發者或設計師有這樣的念頭的話，可以在初期先選用一套合適順眼的 design system （例如 Material 或 Antd），在使用的過程慢慢嘗試藉由改變 theme 來做出自己產品的特色，像是我現在的[個人網站](https://arsenekuo.com)就是使用 Material 再改變 theme 來建立自己的網站風格。

##### Ref

- [What is a Design System? (A Free 2021 Guide)](https://www.robertcreative.com/blog/what-is-a-design-system)
- [【CSS】886- 你該知道的字型](https://www.gushiciku.cn/pl/g4vy/zh-tw)
- [Material Design](https://material.io/design)
- [Ant Design](https://ant.design/)
- [The Grid System: Building a Solid Design Layout | Interaction Design Foundation (IxDF)](https://www.interaction-design.org/literature/article/the-grid-system-building-a-solid-design-layout)
- [Grid (graphic design) - Wikipedia](<https://en.wikipedia.org/wiki/Grid_(graphic_design)>)
