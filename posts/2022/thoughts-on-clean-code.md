---
title: "Clean Code 讀後心得以及案例分享"
cover: ""
category: "Experience"
date: "2022-07-31"
excerpt: "分享一些 Clean Code 這本書的讀後感，並運用其中規則來重構程式。"
language: "zh_Hant"
published: true
featured: true
tags:
  - Clean Code
  - JavaScript
  - React
  - 讀書心得
---

最近看完 Clean Code 這本書，但其實嚴格來說也不算完整看完，因為本書是以 Java 當作基礎撰寫，且又有許多物件導向程式設計的概念，對目前的我來說並不是非常熟悉，所以有很多內容是直接跳過的或是似懂非懂地看過去；即使如此，還是從中吸收到許多觀念。

我認為這本書的精華是 Ch.12 `羽化` 以及 Ch.17 `程式碼的氣味與啟發`，如果時間不夠的人又想了解 Clean Code 這本書在說什麼，可以直接翻閱這兩章：

- Ch.12 羽化
  - 簡單設計四守則，包含 `執行完所有的測試`、`沒有重複的部分`、`表達程式設計師的本意` 以及 `最小化類別與方法的數量`。
- Ch.17 程式碼的氣味與啟發
  - 引用了 Martin Fowler 在重構這本書裡許多不同的 Code Smells，並加上本書作者 Robert 自己發現的 smells。

## 實際案例

簡單介紹完 Clean Code 書籍內容後，分享一下我在工作上遇到的實際案例，以下內容有包含 JavaScript 以及 React 的概念，如果你有相關經驗我相信不會太陌生，我在其中也有加入註解，希望可以幫助讀者更快理解。

這是一個處理匯入資料的 handler，原先是寫在 class component 裡面，所以內容有許多 `this`：

```js
handleImportContent = () => {
  const { I18N, dataType } = this.props;
  const { mergekey } = this.state;

  const fieldsMap = {};
  // 上傳檔內容比對匯入資料的 key to key map
  Object.keys(this.state.fieldsMap).forEach((ele) => {
    if (this.state.fieldsMap[ele].value) {
      fieldsMap[ele] = this.state.fieldsMap[ele].value;
    }
  });
  // 將 state 裡的內容拿出來存在 fieldsMap 這個變數裡

  if (dataType === "audience") {
    if (!mergekey) {
      document
        .getElementById("select_field")
        .scrollIntoView({ behavior: "smooth", block: "center" });
      // 如果 dataType 是 audience 但缺了 mergekey 這個資料就將畫面滑到特定位置

      this.setState({ isMergekeyMissing: true });
      // 這個 state 為 true 時會在畫面上顯示提示字
      return;
    }

    const isFieldsMissingMergeKey = Object.values(fieldsMap).includes(
      mergekey
    );
    // fieldsMap 裡的 values 是否具有 mergekey 這個值

    if (!isFieldsMissingMergeKey) {
      let mergekeyI18N;
      switch (mergekey) {
        case "member_sn":
          mergekeyI18N = I18N.memberSn;
          break;
        case "line_id":
          mergekeyI18N = I18N.line;
          break;
        case "email":
        case "phone":
          mergekeyI18N = I18N[mergekey];
          break;
        default:
          mergekeyI18N = mergekey;
      }
      // 用來決定 alert 內容的判斷式

      sendMessage("alert/add", {
        message: {
          type: "error",
          message: `${I18N.missingSpecifiedField} : ${mergekeyI18N}`,
        },
      });
      // 用來顯示 alert 的 function
      return;
    }
  }

  this.importContent(
    this.state.filename,
    fieldsMap,
    this.props.dataType,
    this.state.mergekey,
  );
  // 以上都通過了就 import

  this.setState({ mergekey: null });
  // 成功執行匯出後就初始化 state
};
```

當初在閱讀這個 function 的時候覺得可讀性不佳，在看懂之後就決定開始重構它，重構方向有以下幾點：

- 封裝條件判斷
- 函式只做一件事情
- 重新命名

另外再將原先的 class component 改成 function component，故所有相關的 props 或 state 都已經在上層處理成變數。

此外，原先的條件判斷以及 alert 都一併寫在 `handleImportContent` 裡，這邊直接將該些內容拿出來寫成另外的函數。

```js
function scrollToMissingMergekeyNotice() {
  document
    .getElementById("select_field")
    .scrollIntoView({ behavior: "smooth", block: "center" });
  setIsMergekeyMissing(true);
}

function sendFieldsNotMatchMergeKeyAlert() {
  // 對照原先 if (!isFieldsMissingMergeKey) 裡的內容
  
  const missingFieldText =
    {
      member_sn: I18N.memberSn,
      line_id: I18N.line,
      email: I18N[mergekey],
      phone: I18N[mergekey],
    }[mergekey] || mergekey;
  // 將原先以 switch 進行條件判斷的方式改以 hash map 呈現

  sendMessage("alert/add", {
    message: {
      type: "error",
      message: `${I18N.missingSpecifiedField} : ${missingFieldText}`,
    },
  });
}

function isTypeAudiencePass(newFieldsMap) {
  if (!mergekey) {
    scrollToMissingMergekeyNotice();
    return false;
  }

  const isFieldsMatchMergeKey = Object.values(newFieldsMap).includes(
    mergekey
  );
  if (!isFieldsMatchMergeKey) {
    sendFieldsNotMatchMergeKeyAlert();
    return false;
  }

  return true;
}
```

所以重構完之後本來的 handler 會變成這樣：

```js
const handleImportContent = () => {
  const newFieldsMap = Object.assign(
    {},
    ...Object.entries(fieldsMap).map(([key, { value }]) => {
      if (value) {
        return { [key]: value };
      }
      return null;
    })
  );
  // 對照原先 fieldsMap 的內容，
  // 這邊重新命名並以 functional programming 的方式處理 key to key map

  if (dataType === "audience" && !isTypeAudiencePass(newFieldsMap)) {
    // 這邊也可將 dataType === "audience" 封裝成變數 isAudienceDataType
    // 而原本裡面有一大塊 if 判斷的情況也封裝成 isTypeAudiencePass 來決定是否在此 return
    return;
  }

  importContent(filename, newFieldsMap, dataType, mergekey);
  // 對照原本的 this.props.importContent

  setMergekey(null);
  // 初始化 state
};
```

## 總結

我目前的狀態是入行一年半，在閱讀 Clean Code 的過程看到許多負面教材時，心裡頭就有 `wow 這種情況我也遇過` 的想法，在看完本書後我對於 Clean Code 的一個簡單領悟是 `不斷優化與重構你的程式碼`。

換句話說，寫完之後請重新審視自己寫的程式，是否有哪些地方可以重構？其中的演算法是否能夠優化？命名是否清晰表達其意義？...

在這不斷優化的過程中，我們寫出來的程式碼將會不斷趨近於 Clean Code。