---
title: "讓包覆在 Material-UI Hidden 的內容順利產生 snapshot"
cover: ""
category: "Front-end"
date: "2021-08-14"
excerpt: "最近開始花心思研究前端測試，於是拿我的個人網站動手寫測試，這次文章描述的狀況是關於 Snapshot Testing。"
published: true
featured: false
tags:
  - 前端測試
  - testing
  - Snapshot Testing
  - Material-UI
  - Real-World Case
---

## 前言

最近開始花心思研究前端測試，而手邊可以拿來練習的好對象就是我的個人網站，於是開始拿它來動手寫測試。

關於寫測試，我自己選擇的工具主要是：

- Jest
- React Testing Library

我這邊就不深入介紹這些工具了，直接進入正題吧。

## Snapshot Testing

這次文章描述的狀況是關於 Snapshot Testing：

> Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
>
> - [Snapshot Testing · Jest](https://jestjs.io/docs/snapshot-testing)

簡單來說，我們可以透過相關工具來產生 UI 的 snapshot，而這些 snapshot 代表的意義就是當下你的 UI 在 DOM tree 上呈現的樣子，所以他們也應該要被 git 給記錄版本。

如果之後你的 UI 變動了，就可以透過這些 snapshot 來察覺兩者差異，以避免開發者在開發過程中不小心動到 UI 卻沒注意到。

### 測試對象

我這次要用 Jest 來產生 Header 的 snapshot，你可以在我的[Github 連結](https://github.com/YSKuo/personal-site-v3/blob/master/src/components/Header/Header.jsx)看這個 component 完整的內容，而它的部分內容如下：

```js
<Container>
  <StyledToolbar component="nav" disableGutters>
    <SiteName color="textPrimary" variant="h5" href="/" underline="none">
      {siteTitle}
    </SiteName>
    ...
    <Hidden xsDown>
      <Toolbar disableGutters>
        {tabLinks &&
          tabLinks.map((link) => (
            <NavLink
              $active={isTabActive(link)}
              key={link.title}
              href={link.url}
            >
              {link.title}
            </NavLink>
          ))}
      </Toolbar>
    </Hidden>
  </StyledToolbar>
</Container>
```

其中 `<Hidden>` 是 [Material-UI](https://material-ui.com/components/hidden/) 提供 components，我們可以透過它讓內容在某些 screen width 下隱藏，而這邊 `<Hidden xsDown>` 的意思就是當螢幕寬度在 xs 以下的時候，其中的內容會隱藏。

### 動手寫測試

這邊的寫法有參考 Kent C. Dodds 的[文章](https://kentcdodds.com/blog/test-isolation-with-react)，先寫一個 render component 的函數，然後在每個 test 裡面 call function 就不用每次都用 beforeEach 產生 render，這兩種作法都行只是我覺得 call function 比較好懂。

`__tests__/header`

```js
import React from "react";
import { render } from "@testing-library/react";

import Header from "../Header";
import { theme } from "../../constants/theme";
import config from "../../../data/SiteConfig";

function renderHeader(props) {
  const utils = render(<Header config={config} theme={theme} />);

  const header = utils.getByRole("banner");
  return { ...utils, header };
}

test("Header snapshot", () => {
  const { header } = renderHeader();
  expect(header).toMatchSnapshot();
});
```

就這樣直接跑測試，產生的 snapshot 會像這樣：

`__tests__/__snapshots__/header`

```js
exports[`Header snapshot 1`] = `
<header
  class="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary sc-gsTCUz lbsyTM mui-fixed MuiPaper-elevation4"
  style="webkit-transform: none; transform: none; webkit-transition: -webkit-transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms; transition: transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;"
>
  <div
    class="MuiContainer-root MuiContainer-maxWidthLg"
  >
    <nav
      class="MuiToolbar-root MuiToolbar-regular sc-dlfnbm cZnpQH"
    >
      <a
        class="MuiTypography-root MuiLink-root MuiLink-underlineNone sc-bdfBwQ ckOduL MuiTypography-h5 MuiTypography-colorTextPrimary"
        href="/"
      >
        Arsene's Alibi
      </a>
    </nav>
  </div>
</header>
`;
```

從 snapshot 來看是沒有 header 右邊的 nav 連結，也就是上面我提到用 `<Hidden>` 包覆的內容。

這樣的話 snapshot 就不能發揮它的用處，因為之後要是更改包在 `<Hidden>` 的內容的話，snapshot 一樣察覺不到差異。

我猜測是因為跑測試時不會真的有 `window.innerWidth` 因此沒有 render。

### 改寫

所幸 Material UI 有提供設定 `initialWidth` 的[方法](https://material-ui.com/customization/breakpoints/#withwidth-options-higher-order-component)，另外我再參考 React Testing Library 的 [Custom Render](https://testing-library.com/docs/react-testing-library/setup#custom-render) 寫法，為測試寫了一個 utils：

`test-utils`

```js
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { render } from "@testing-library/react";
import { theme } from "../constants/theme";

const SizeWrapper = ({ children }) => {
  const initTheme = createMuiTheme({
    props: { MuiWithWidth: { initialWidth: "lg" } },
  });

  return (
    <MuiThemeProvider theme={initTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: SizeWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
```

這個 utils 預設 width 是 lg，並把 ThemeProvider 也一起當 Wrapper，省去每次寫測試時都要另外傳 theme 進去。

再來改寫我的測試檔：

`__tests__/header`

```js
import React from "react";

import Header from "../Header";
import config from "../../../data/SiteConfig";
import { render } from "../../utils/test-utils";

function renderHeader(props) {
  const utils = render(<Header config={config} />);

  const header = utils.getByRole("banner");
  return { ...utils, header };
}

test("Header snapshot at lg screen width", () => {
  const { header } = renderHeader();
  expect(header).toMatchSnapshot();
});
```

改完之後，產生的 snapshot 會像這樣：

```js
exports[`Header snapshot at lg screen width 1`] = `
<header
  class="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary sc-gsTCUz lbsyTM mui-fixed MuiPaper-elevation4"
  style="webkit-transform: none; transform: none; webkit-transition: -webkit-transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms; transition: transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;"
>
  <div
    class="MuiContainer-root MuiContainer-maxWidthLg"
  >
    <nav
      class="MuiToolbar-root MuiToolbar-regular sc-dlfnbm cZnpQH"
    >
      <a
        class="MuiTypography-root MuiLink-root MuiLink-underlineNone sc-bdfBwQ HrXuG MuiTypography-h5 MuiTypography-colorTextPrimary"
        href="/"
      >
        Arsene's Alibi
      </a>
      <div
        class="MuiToolbar-root MuiToolbar-regular"
      >
        <a
          aria-disabled="false"
          class="MuiButtonBase-root MuiButton-root MuiButton-text sc-hKgILt xTIhp"
          href="/"
          tabindex="0"
        >
          <span
            class="MuiButton-label"
          >
            Home
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </a>
        <a
          aria-disabled="false"
          class="MuiButtonBase-root MuiButton-root MuiButton-text sc-hKgILt blgYtI"
          href="/about"
          tabindex="0"
        >
          <span
            class="MuiButton-label"
          >
            About
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </a>
        <a
          aria-disabled="false"
          class="MuiButtonBase-root MuiButton-root MuiButton-text sc-hKgILt blgYtI"
          href="/blog"
          tabindex="0"
        >
          <span
            class="MuiButton-label"
          >
            Blog
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </a>
      </div>
    </nav>
  </div>
</header>
`;
```

很明顯地，這次有順利把 `<Hidden>` 的內容給 render 出來了，順利解決！

##### Ref

- [React Hidden component - Material-UI](https://material-ui.com/components/hidden/)
- [Breakpoints - Material-UI](https://material-ui.com/customization/breakpoints/)
- [Test Isolation with React](https://kentcdodds.com/blog/test-isolation-with-react)
- [reactjs - How to test Material-UI's Responsive UI (e.g. Hidden, Grid, Breakpoints) in React with Enzyme or React Testing Library - Stack Overflow](https://stackoverflow.com/questions/63116406/how-to-test-material-uis-responsive-ui-e-g-hidden-grid-breakpoints-in-reac)
- [Setup | Testing Library](https://testing-library.com/docs/react-testing-library/setup#custom-render)
