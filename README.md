## Todo

### feature

- Primary, Secondary color 重新評估
- Dark mode
- Category & Tag 文章過多時分頁（Blog renderPaging 拉出來）
- Post page 上下個文章鈕
- Post page side navbar
- Blog 的 category 總覽分類頁
- Work 頁面
- SEO
- Index testimonials
- main container RWD 調整 padding
- about this site
- 加 Logo
- Disqus
- Post link 後面加一個小 icon
- 串 IG API
- post 的圖片置中，若有 caption 的話也置中

#### later

- post 的 featured 和 draft 機制
  - [Creating Markdown Drafts with Gatsby | TinaCMS Blog](https://tina.io/blog/creating-markdown-drafts/)
  - draft 和 archived 文章目前利用 .gitignore 擋掉上傳
  - featured post 用 GraphQL 篩選出（3/6）

#### done

- 加入指定摘要 (3/4)
- post 裡面加上 PostInfo(date, timeToRead, category)（3/4）
- RWD Typography（3/5）
  - [Responsive font sizes - Material-UI](https://material-ui.com/customization/typography/#responsive-font-sizes)
  - [responsiveFontSizes() - Material-UI](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme)
- 404 Pages（3/6）

### bug

- code block 的 plain text 字體變色
  - [gatsby-remark-highlight-code | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)
  - [DeckDeckGo | Documentation](https://docs.deckdeckgo.com/components/code/)
- Post page 裡的 table 隔線
  - [HTML Table 表格邊框顏色與樣式設計 - Wibibi](https://www.wibibi.com/info.php?tid=441)
- 手機看網頁有 cache

#### later

- post markdown highlight 的文字沒有底色
  - 暫時用 Content 這個 styled-component 設置風格解決（3/4）

#### done

- category 產生的問題： JavaScript 會生產 java-script 的 category

### others

- PostListing 裡面的 component 拉出放到 components folder
- Post 相關的 component 放到 Post 這個 folder
- About page 的 tag 抽出來當 component 讓 Post page 可用
- Header 拿不到 globalThis.location
  - [Location Data from Props | Gatsby](https://www.gatsbyjs.com/docs/location-data-from-props/)
- 相容不同瀏覽器的字型

#### done

- Post page url 用 date + file name (3/2)
- Post 的 code block 字體加大 (3/6)

---

## Blog

### categories

- Front-end
- Back-end
- JavaScript
- Web
- React
- Algorithm
- Learning
- Experience
- Others
