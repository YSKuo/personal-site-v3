---
title: "這幾年我學到的前端處理條件判斷的方法"
cover: ""
category: "Experience"
date: "2023-06-13"
excerpt: "入行兩年，分享一些我在前端領域學到的處理條件判斷。"
language: "zh_Hant"
published: true
featured: true
tags:
  - JavaScript
  - React
  - Frontend
---

所有會寫程式的人，應該都對條件判斷不陌生，不論什麼領域都常遇到。

這篇文章主要分享我作為前端工程師暨 JS 使用者，在這幾年學會的條件判斷處理方式。

## 多種情況執行同個動作

最基礎的處理方式就是利用 `if` 和邏輯或 `||` 來處理，例如

```js
if (key === "a" || key === "b" || key === "c") {
  /* do something */
}
```

也有人會用 `switch` 來把那些狀況放在同個 code block

```js
switch (key) {
  case "a":
  case "b":
  case "c":
    /* do something */
    break;
  default:
  /* do something */
}
```

不過我目前比較喜歡的方式是用 `Array.prototype.includes()` 來處理

```js
if (["a", "b", "c"].includes(key)) {
  /* do something */
}
```

因為 `includes` 這個 method 會檢查 array 中的每個 element，只有有其中一個 element 符合 key 那就會得到 `true`，所以我們可以利用這個特性來處理這種狀況。

## 根據不同狀況賦值

最直白的寫法一樣是用 if 寫出不同的 block

```js
let result;
if (key === "a") {
  result = "A";
} else if (key === "b") {
  result = "B";
} else if (key === "c") {
  result = "C";
} else {
  /* do something */
}
```

再來我們也可利用 switch 來處理，應該是 js 初學者也常學習到的處理方式

```js
let result;
switch (key) {
  case "a":
    result = "A";
    break;
  case "b":
    result = "B";
    break;
  case "c":
    result = "C";
    break;
  default:
  /* do something */
}
```

上述方式都可以解決問題，但是寫法就是不俐落，而且狀況一旦變多就難以閱讀。

其實有種簡單的方式適合處理這類狀況，那就是利用 object literals；object 是根據 hashmap 實作的，也就是我們可以用不同的 key 來取得其中不同的 value，於是我們可以利用這個特性來改變上述內容。

```js
const result = {
  a: "A",
  b: "B",
  c: "C",
}[key];
```

如果沒有符合的條件，但又希望給變數賦值一個預設內容，則可以這樣處理

```js
const obj = {
  a: "A",
  b: "B",
  c: "C",
  default: "DEFAULT",
};

const result = obj[key] || obj["default"];
```

或是這樣

```js
const result =
  {
    a: "A",
    b: "B",
    c: "C",
  }[key] ?? "DEFAULT";
```

## 根據不同狀況渲染不同內容

再來看看前端常遇到的例子，我們時常會根據不同情況渲染不同的 UI，例如 fetch 的東西還沒回來，所以現在應該顯示 loading 狀態，以前我會這樣處理（這邊以 React 為例）

```js
import useAxios from 'axios-hooks'

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  return loading ? <p>Loading...</p> ? <p>{data.name}</p>
}
```

或是這樣

```js
import useAxios from "axios-hooks";

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  if (loading) return <p>Loading...</p>;
  return <p>{data.name}</p>;
};
```

這樣寫雖然很直覺，可是也同樣地若內容變多就難以閱讀，也會造成程式碼難以維護，所以後來我們團隊習慣使用 [ts-pattern](https://github.com/gvergnaud/ts-pattern) 來幫助我們處理類似問題。

```js
import useAxios from "axios-hooks";
import { match, P } from "ts-pattern";

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  return match(loading)
    .with(true, () => <p>Loading...</p>)
    .with(false, () => <p>{data.name}</p>)
    .exhaustive();
};
```

ts-pattern 這個套件也不只是可用在這個狀況，也可處理一些初學者容易寫成巢狀的條件判斷，例如

```js
import useAxios from "axios-hooks";

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  if (loading) {
    return <p>Loading...</p>;
  } else {
    if (!data.length) {
      return <p>No data</p>;
    } else {
      return (
        <div>
          {data.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      );
    }
  }
};
```

上述巢狀情形可以先改寫成

```js
import useAxios from "axios-hooks";

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No data</p>;

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
```

或是可以利用 ts-pattern 將它改寫成

```js
import useAxios from "axios-hooks";
import { match, P } from "ts-pattern";

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  return match({ loading, hasData: data.length })
    .with({ loading: true }, () => <p>Loading...</p>)
    .with({ hasData: false }, () => <p>No data</p>)
    .otherwise(() => (
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    ));
};
```

## 總結

這些方法都是我在工作時從同事學來的，看自己現在與一兩年前的寫法在可讀性上進步許多，非常有感而想寫出來分享。

希望這些內容對讀者能有所幫助，如果有任何想討論的，都歡迎留言。

參考資料如下，分享給有興趣閱讀的朋友看看：

- [Replacing switch statements with Object literals - Ultimate Courses](https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals)
- [ts-pattern](https://github.com/gvergnaud/ts-pattern)
