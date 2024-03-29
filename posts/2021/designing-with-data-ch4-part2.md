---
title: "Designing with Data - 第四章 定義階段 Part 2"
cover: ""
category: "Design"
date: "2021-05-30"
excerpt: "在試驗框架中的定義階段，我們會框定試驗的目標以及發想測試中使用的假設。"
language: "zh_Hant"
published: true
featured: false
tags:
  - 讀書心得
  - Designing with Data
  - Experimentation
  - Reading
  - Data Driven Design
---

## 前言

最近我在讀 `Designing with Data｜善用數據幫你打造好設計` 這本書，因此有一系列的記錄，想直接參考這系列所有文章請看[系列文連結](/tags/designing-with-data)。

這篇文章接續[前篇文章](/post/2021/05/22/designing-with-data-ch-4-part-1)，這一章剛好有官方的線上資源可以參考，連結[在這](https://www.oreilly.com/library/view/designing-with-data/9781449334925/ch04.html)。

## 章節簡介

第三章提到了試驗框架的基礎，包含定義、執行、分析三個階段，而這接下來的章節就是談論各個階段的細節。

這一章是講解 `定義階段` 的內容，我們會框定試驗的目標以及發想測試中使用的假設。

![定義階段](https://www.oreilly.com/library/view/designing-with-data/9781449334925/assets/dwda_0401.png)

## 發散的重要性

實際上，定義階段的工作流程會像下圖這樣：

![把一個關鍵目標拆解為數個可以影響目標的問題/機會領域，並且各自生成數個假設。](https://www.oreilly.com/library/view/designing-with-data/9781449334925/assets/dwda_0412.png)

我們應該把一個關鍵目標拆解為數個可以影響目標的問題/機會領域，並且各自生成數個假設。

要注意的是發想過程應該要是一件輕鬆且不拘束的事情，並不需要把來自直覺的假設給去除掉，也就是說不該太早束縛各個團隊成員的創意。

### 專注新舊使用者

書中提到，**假設**需要隨企業規模變化並與時俱進，如果企業已趨近成熟，並且已經達到市場飽和，則應該專注現有使用者；反之，如果企業在成長階段，則應該專注於新的使用者。一個 Facebook 的例子：

最初 Facebook 發行時只提供給幾所大學的學生使用，後來漸漸開放給所有人，而在企業發展過程中，Facebook 也發現許多企業會在它們的平台上宣傳，所以 Facebook 創立粉絲頁功能。

Facebook 的這些改變即展示新的假設形式會隨時間演進而出現，因此有潛力成功的假設也會隨時間改變，即使團隊沒有要馬上再次嘗試這些已經測試過的改變，也應該保留下這些舊假設的記錄，以便未來再次使用它們。

## 選擇假設

### 考慮潛在影響力

一個為假設排出優先順序的簡單方式，即粗估這些假設個別的潛在影響力。

### 運用過去經驗

團隊成員不僅可以一起打造假設，還可以一起選擇假設，因為團隊成員各自有不同專業領域的知識和經驗，因此可以一同剔除不適合的假設並為其他可行的假設排出順序。

在進行討論時，可以透過以下問題來開啟對話：

- 我們過去是否有對相似的假設進行過研究？
- 相似的使用者或使用者類群？相似的改變？相似的期待行為？相似的理由？
- 這類假設過去表現得如何？
- 過去有什麼樣的改變成功影響這些指標？
- 在過去相似的研究有什麼樣的發現？是否有機會可以和過去的發現連結或強化過去的發現？
- 在相似的研究中有看過什麼令人驚訝的結果？我們嘗試這個假設是否會有助於釐清過去的發現？

在討論過程要保持開放的態度，因為有些過去的測試顯示出不相關的資訊，或許對現在進行的假設很有意義。同時，要謹記人們可能會有**確認偏誤**，即人會傾向尋找證據來確認自己的想法或信仰。

### 運用其他方法來評估假設

一個方法是使用問卷調查，這可以讓我們從使用者身上收集小量到中量的數據，

再進一步來看，也可打造低擬真（low-fidelity）的仿製品（mocks）或原型（註 1）來快速檢查我們的假設，這是在實際進行 A/B Test 之前先獲得洞見的好方法。這些仿製品不需要和最後 A/B Test 使用的設計一模一樣，但他們應該要能傳達你想傳達的假設，這樣才能在投資於 A/B Test 之前先獲得一些快速的回饋。

註 1：原型（prototype），像是線框、素描或是 InVision 製作的原型。

## 考量測試的現實

### 檢定力

檢定力是指進行測驗而有相應的效應時，我們可以量測到它的能力。如果我們的 A/B Test 沒有足夠的檢定力，也就不會知道結果是因為測試項目和控制組真的沒有差別，還是只是因為我們沒有足夠大的放大鏡可以看到它。

簡而言之，進行測驗之前應該先考量你的假設可以製造多少可被量測的影響？

### 平衡學習與速度

#### 考量需要多久時間來取得學習的結果

要將使用者帶來試驗需要時間，因為進行試驗的最佳實踐（best practice）是一次只對使用者群體中的一小部分進行。

假設我們需要 1000 人的樣本，又因為要遵循最佳實踐故我們決定要把 1% 的使用者移至試驗條件。但如果我們網站每天只有 1000 個獨立訪客，那我們就只會取到 10 個使用者到測試項目，這樣就得 100 天才能收集到足夠的樣本數並得出結論。

因此我們要問自己：

- 是否有足夠的時間等待結果來做出結論？
- 是否有足夠的使用者讓團隊在短時間內收集到足夠的數據？

如果以上答案皆「否」，那可能得先擱置這個假設。

#### 考量需要讓測試者群體待在測試體驗中多久

要讓使用者行為改變通常需要時間，且取決於我們想要影響的行為及測試中的細節，可能需要或長或短的時間。

如果有一些指標會花費比較長的時間，則可考慮挑選一個好的代理指標來幫助縮短測試時間。

#### 考量試驗是否需執行至少一個商業週期以最小化抽樣偏誤

需考量這點的原因是根據不同的產品，可能在商業週期的不同階段會有不同的使用方式，例如在平日和週日的不同。

如果週末的使用者和平日不同，那只在平日進行測驗也很可能會產生偏誤。

## 心得

看完這個章節，我認為 `定義階段` 可能會是整個試驗週期裡最重要的階段，尤其是定義重點指標的部分尤其重要。

在資訊產業，我們往往使用敏捷開發，用快速迭代的方式來進行開發產品，鼓勵團隊不斷試錯並改進，可是在進行試驗這一塊範疇，如果能在所謂的 `定義階段` 多花點心思，不要急著捲起袖子去做後續的測試，或許能減少團隊往錯誤的方向進行研究的機會，進而讓團隊進行更多種不同的試驗，並更有機會得到更好的成果。
