---
title: "Using styled-components to build a corporate landing page"
cover: ""
category: "Front-end"
date: "2021-07-09"
excerpt: "Recently, I took the job of renewing our corp landing page, and I think there are something deserved to be recorded at this moment."
language: "en"
published: true
featured: true
tags:
  - CSS Animation
  - UI
  - Real-World Case
  - styled-components
---

I am a front-end engineer of [OmniSegment](https://www.linkedin.com/company/omniscient-cloud-technologies-inc-/), and our team are dedicated to improving marketing effectiveness of our customers.

Recently, I took the job of renewing our corp landing page. Although building a static web page is not complicated, there are something deserved to be recorded at this moment, and perhaps this post can help others in the future.

## CSS Style

Our team mainly used inline style to manage CSS style in our products.

### inline style

We used inline style in this way:

```js
class Button extends PureComponent {
  render() {
    ...

    return (
      <div className="button" style={Styles.button}>
        ...
      </div>
    );
  }
}

const Styles = {
  button: {
    position: "absolute",
    top: "50%",
    right: "4rem",
    transform: "translate(0, -50%)",
  },
};
```

In the above example, `style={Styles.headerButton}` is inline style, and we cannot addressing responsive web design (RWD), pseudo-elements and pseudo-classes...etc in this situation, hence we must find another solution to to deal with RWD.

### styled-components

In order to solve the above issue, I introduced [styled-components](https://styled-components.com/docs) in our project.

According to official introduction, styled-components allows you to write actual CSS code to style your components, and here is a simple example:

```js
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;
```

#### Handle RWD with styled-components

How styled-components works is based on ES6 `template literal`, and therefore we can address RWD through styled-components like this:

```js
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
};

function breakpointAt(size) {
  return `@media screen and (min-width: ${breakpoints[size.toLowerCase()]}px)`;
}

const Container = styled.div`
  ... ${breakpointAt("md")} {
    flex-direction: row-reverse;
    padding: 0 1.5rem 0rem;
    margin-bottom: 0;
  }

  ${breakpointAt("lg")} {
    padding: 0 1.5rem 3rem;
  }

  ${breakpointAt("xl")} {
    max-width: 1200px;
    padding: 0 0 6rem;
  }
`;
```

#### Element state

Moreover, styled-components allow developers to use the ampersand (`&`) to refer back to the main component, so we can use `&` to modify pseudo-classes like this:

```js
const Button = styled.button`
  background-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  &:active {
    background: rgb(0, 0, 0);
  }
`;
```

#### Increase the specificity of rules

Since we use Semantic UI in our app, and therefore some styles might be overridden by semantic-ui style due to specificity.

For example, when we use [Semantic UI's Image](https://semantic-ui.com/elements/image.html), the component's style will just like this:

```css
.ui.image {
  max-width: 100%;

  ...;
}
```

Obviously, `.ui.image` has two classes, so if our styled-components only contains one class, the style will be overridden.

In order to override the style `max-width`, we must increase the specificity.

We can use `!important` in our style, but here is a simple and resilient solution to handle this problem, and the solution is using `&` three times in styled-components:

```js
const MainImage = styled(Image)`
  &&& {
    max-width: 200px;
    margin: 0 auto 1rem;
  }
`;
```

This solution will make the component's style like this:

```css
.oFSmX.oFSmX.oFSmX {
  max-width: 550px;
}
```

## Animation

We want to decorate our landing page with some animations, and styled-components can help us to achieve this request.

This is the original image:

![](https://i.imgur.com/msPOVRR.png)

We want to add some moving dots on the image:

![](https://i.imgur.com/vGvjFxX.png)
![](https://i.imgur.com/Rcl6dPO.png)

### Define movement trajectory

According to [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position), if we want to define the position of elements, the coordinate will be like this:

![](https://i.imgur.com/IW7H09e.png)

In order to define these position more easily, I name the blocks alphabetically:

![](https://i.imgur.com/tgoY0bZ.png)

Therefore, we can define how moving dots float between these positions.

For instance, I want a dot moving from A to B, so I should define the positions as below:

```
"A": left: 10.5%; top: 45.6%;
"B": left: 27%; top: 45.6%;
```

### CSS keyframes

#### Prerequisite knowledge

##### Original CSS

If we want to create animation by original CSS, here is an example:

```css
/* global.css */

div.dot {
  height: 100px;
  width: 100px;

  animation-name: animation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}

@keyframes animation {
  0% {
    height: 100px;
    width: 100px;
  }
  100% {
    height: 100px;
    width: 100px;
    opacity: 0.6;
  }
}
```

##### styled-components

As for styled-components, we can create animation in this way:

```js
const animation = keyframes`
 0% { height: 100px; width: 100px; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
```

After knowing these prerequisite knowledge, lets back to our landing page case.

In our case, I define two functions to help us define how dots moving:

```js
function pointCoordinate() {
  return {
    "A": `left: 10.5%; top: 45.6%;`,
    "B": `left: 27%; top: 45.6%;`,
    ...
  };
}

function movingAnimation(name) {
  switch (name) {
    case "a-b":
      return keyframes`
        from { ${pointCoordinate()["A"]} }
        to { ${pointCoordinate()["B"]} }
      `;
    ...

    default:
      return null;
  }
}
```

Next, I define component like this;

```js
const MovingSpot = styled.div`
  ...

  animation-duration: ${(props) =>
    props.animaDuration ? props.animaDuration : "12s"};
  animation-name: ${(props) =>
    props.animaName ? movingAnimation(props.animaName) : "none"};
  animation-iteration-count: infinite;
`;
```

The result will looks like this:
https://media.giphy.com/media/fK7uYVNkUaQtLZxKee/giphy.gif

Or you can just visit our [official website](https://omnisegment.com/).

##### Ref

- [Adding CSS Animations with Styled Components | by matt readout | Medium](https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba)
- [CSS 分层动画可以让元素沿弧形路径运动 | Alon's Blog](https://jinlong.github.io/2016/01/14/moving-along-a-curved-path-in-css-with-layered-animation/)
