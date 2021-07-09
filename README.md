[![Netlify Status](https://api.netlify.com/api/v1/badges/1451682c-2b8c-4e35-ba38-d599ba7f3fb4/deploy-status)](https://app.netlify.com/sites/arsenekuo/deploys)

## Todo

### feature

- Dark mode
  - [網頁黑暗模式 Dark Mode 設計技巧](https://jason-memo.dev/posts/dark-mode-tips/)
- Category & Tag 文章過多時分頁（Blog renderPaging 拉出來）
- Post page side navbar
- Post page 的 link 增加一種可以直接開新網頁的方式，且後面加一個小 icon
- Blog 的 category 總覽分類頁
- Work 頁面
- Index testimonials
- main container RWD 調整 padding
- Facebook app id
- siteRssTitle
- 串 IG API
- emoji
- 時間軸（展示網站歷程和文章列表）
- [[CSS] 使用 scroll-behavior 達成免用 js 的平滑滾動效果 | DeTools 工具死神](https://tools.wingzero.tw/article/sn/224?fbclid=IwAR3oqPU-JZcC-ifIGxQuaHOazuTtgDnyidY8ew6uJ-61gkq1aCa_TPrFLW4)

#### later

- post 的 featured 和 draft 機制
  - [Creating Markdown Drafts with Gatsby | TinaCMS Blog](https://tina.io/blog/creating-markdown-drafts/)
  - draft 和 archived 文章目前利用 .gitignore 擋掉上傳
  - featured post 用 GraphQL 篩選出 (2021/03/06)
- post 的圖片置中，若有 caption 的話也置中
  - 圖片置中已解決，caption 未解 (2021/03/07)
- SEO
  - 移除未使用的 JavaScript
  - robot.txt
  - XML Sitemap
  - Google mobile friendly test tool + Google Search Console 行動裝置可用性
  - GA：全站網頁平均下載速度（standard: PC 8 sec, mobile 5 sec）
  - Schema.org

#### done

- 加入指定摘要 (2021/03/04)
- post 裡面加上 PostInfo(date, timeToRead, category) (2021/03/04)
- RWD Typography (2021/03/05)
  - [Responsive font sizes - Material-UI](https://material-ui.com/customization/typography/#responsive-font-sizes)
  - [responsiveFontSizes() - Material-UI](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme)
- 404 Pages (2021/03/06)
- about this site (2021/03/07)
- 加 Logo (2021/03/08)
- Disqus (2021/03/11)
- Google Analytics (2021/03/12)
  - [Not updated for New Google Analytics · Issue #27627 · gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby/issues/27627)
  - [Support for App + Web property Google Analytics Measurement ID in gatsby-plugin-google-tagmanager · Issue #25359 · gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby/issues/25359)
  - [Adding Google Tag Manager and Google Analytics to a Gatsby site | Aj](https://www.articlejobber.com/enable-google-tag-manager-google-analytics-for-gatsby-site)
- Post page 上下個文章鈕 (2021/04/04)
- modify Post HMTL tag to be semantic (2021/05/16)

---

### bug

- code block 的 plain text 字體變色
  - [gatsby-remark-highlight-code | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-remark-highlight-code/)
  - [DeckDeckGo | Documentation](https://docs.deckdeckgo.com/components/code/)
- Post page 裡的 table 隔線
  - [HTML Table 表格邊框顏色與樣式設計 - Wibibi](https://www.wibibi.com/info.php?tid=441)
- 手機看網頁有 cache?
- local dev 時 url 日期和文章日期不同

#### later

- post markdown highlight 的文字沒有底色
  - 暫時用 Content 這個 styled-component 設置風格解決 (2021/03/04)

#### done

- category 產生的問題： JavaScript 會生產 java-script 的 category
- Disqus 失效 (2021/04/06)

---

### others

- PostListing 裡面的 component 拉出放到 components folder
- Post 相關的 component 放到 Post 這個 folder
- About page 的 tag 抽出來當 component 讓 Post page 可用
- Header 拿不到 globalThis.location
  - [Location Data from Props | Gatsby](https://www.gatsbyjs.com/docs/location-data-from-props/)

#### done

- Post page url 用 date + file name (2021/03/02)
- Post 的 code block 字體加大 (2021/03/06)
- Primary, Secondary color 重新評估 (2021/03/07)
- lighthouse performance (2021/03/07)
- 相容不同瀏覽器的字型
- tag, category 都改成轉小寫 (2021/05/01)

---

## Blog

### categories

- Front-end
- Back-end
- JavaScript
- Python
- Web
- React
- Algorithm
- Data-Structure
- Learning
- Design
- Experience
- Others
