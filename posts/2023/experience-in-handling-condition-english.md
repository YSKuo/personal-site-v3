---
title: "Methods for Handling Conditional Statements in Front-End Development"
cover: ""
category: "Experience"
date: "2023-06-14"
excerpt: "After two years in the field, I would like to share some insights and techniques I have learned in handling conditional statements in front-end development."
language: "zh_Hant"
published: true
featured: true
tags:
  - JavaScript
  - React
  - Frontend
---

All programmers should be familiar with conditional statements, as they are encountered in various fields.

This article primarily shares the conditional handling methods I have learned as a frontend engineer and JS user over the years.

## Executing the Same Action for Multiple Cases

The most basic way to handle this is by using `if` and logical OR `||`, for example:

```js
if (key === "a" || key === "b" || key === "c") {
  /* do something */
}
```

Some people use `switch` to group these cases within the same code block:

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

However, my current preferred method is to use `Array.prototype.includes()`:

```js
if (["a", "b", "c"].includes(key)) {
  /* do something */
}
```

Since the `includes` method checks each element in the array, if any of the elements match the key, it returns true. We can leverage this behavior to handle such situations.

## Assigning Values Based on Different Conditions

The most straightforward approach is to use `if` to write different code blocks:

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

Another option is to use `switch`, which is commonly learned by beginners:

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

The above approaches can solve the problem, but the code can become less concise and difficult to read when there are many conditions.

In fact, there is a simple way to handle such situations by using object literals. Objects are implemented based on hashmap, allowing us to retrieve different values based on different keys. We can use this feature to refactor the previous code:

```js
const result = {
  a: "A",
  b: "B",
  c: "C",
}[key];
```

If there is no matching condition but you want to assign a variable a default value, you can handle it like this:

```js
const obj = {
  a: "A",
  b: "B",
  c: "C",
  default: "DEFAULT",
};

const result = obj[key] || obj["default"];
```

Alternatively, you can use the nullish coalescing operator (??) like this:

```js
const result =
  {
    a: "A",
    b: "B",
    c: "C",
  }[key] ?? "DEFAULT";
```

## Rendering Different Content Based on Different Conditions

Let's consider a common example encountered in frontend development, where we often render different UI based on different conditions. For instance, when data from an API fetch has not yet returned, we may want to display a loading state. Previously, I would handle it like this (using React as an example):

```js
import useAxios from 'axios-hooks'

const App = () => {
  const [{ data, loading }, refetch] = useAxios(
    "https://example.com/api/users?id=1"
  );

  return loading ? <p>Loading...</p> ? <p>{data.name}</p>
}
```

Alternatively, you can write it like this:

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

Although this approach is intuitive, it can become difficult to read and maintain as the code grows larger. To address this issue, our team has adopted the use of [ts-pattern](https://github.com/gvergnaud/ts-pattern) to handle similar problems.

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

The ts-pattern library is not only useful for this situation but also helpful in handling nested conditional statements that beginners tend to write. For example:

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

The nested condition above can be rewritten as follows:

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

Alternatively, using ts-pattern, you can refactor it as:

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

These methods have been learned from my colleagues at work, and I have found that my current code is much more readable compared to a year or two ago. I wanted to share this progress with others.

I hope these insights are helpful to the readers. If you have any further discussions or questions, feel free to leave a comment.

References for further reading:

- [Replacing switch statements with Object literals - Ultimate Courses](https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals)
- [ts-pattern](https://github.com/gvergnaud/ts-pattern)
