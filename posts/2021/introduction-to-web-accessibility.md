---
title: "Introduction to Web Accessibility"
cover: ""
category: "Front-end"
date: "2021-08-21"
excerpt: "If you don't know Web Accessibility yet, maybe this article can help you gain preliminary understanding about it."
language: "en"
published: true
featured: true
tags:
  - Web Accessibility
  - UI
  - Semantic HTML
  - ARIA
  - Real-World Case
---

## What is Accessibility?

### In general

> Accessibility can be viewed as the "ability to access" and benefit from some system or entity. The concept focuses on enabling access for people with disabilities, or enabling access through the use of assistive technology; however, research and development in accessibility brings benefits to everyone.
>
> - [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)

![A wheelchair accessible taxi with a rear ramp](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Taxi_wheelchair.jpg/1280px-Taxi_wheelchair.jpg)

### Let's narrow down to Web Accessibility

> Web accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites on the World Wide Web by people with physical disabilities, situational disabilities, and **socio-economic restrictions on bandwidth and speed**.
>
> - [Web accessibility - Wikipedia](https://en.wikipedia.org/wiki/Web_accessibility)

## How disabilities surf the Web?

- [Using a Screen Reader to Read An Accessible Website](https://www.youtube.com/watch?v=7Rs3YpsnfoI&t=141s&ab_channel=TheDOITCenter)
- [Using a Screen Reader to Read An Inaccessible Website](https://www.youtube.com/watch?v=7Rs3YpsnfoI&t=194s&ab_channel=TheDOITCenter)

## Why should we care about Web Accessibility (a11y)?

- For social justice
  - To make the use of technology less challenging for those with disabilities.
- For business
  - To encourage more people to use our services/products.

> For example, although we tend to center our discussion of accessibility on users with physical impairments, we can all relate to the experience of using an interface that is not accessible to us for other reasons. Have you ever had a problem using a desktop site on a mobile phone, or seen the message "This content is not available in your area", or been unable to find a familiar menu on a tablet? Those are all accessibility issues.
>
> - [Accessibility  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/accessibility)

### An example from Google Web Developer Guides

#### Before

![a form with poor accessibility](https://developers.google.com/web/fundamentals/accessibility/imgs/pooraccess.jpg)

> - The text is low contrast, which is hard for low-vision users to read.
> - Having labels on the left and fields on the right makes it hard for many people to associate them, and almost impossible for someone who needs to zoom in to use the page; imagine looking at this on a phone and having to pan around to figure out what goes with what.
> - The "Remember details?" label isn't associated with the checkbox, so you have to tap or click only on the tiny square rather than just clicking the label; also, someone using a screen reader would have trouble figuring out the association.

#### After

> Now let's wave our accessibility wand and see the form with those issues fixed. We're going to make the text darker, modify the design so that the labels are close to the things they're labeling, and fix the label to be associated with the checkbox so you can toggle it by clicking the label as well.

![a form with improved accessibility](https://developers.google.com/web/fundamentals/accessibility/imgs/betteraccess.jpg)

## As a web developer, what can I do?

### Four principles

According to [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#guidelines), there are four principles (often called by the acronym _POUR_):

> - **Perceivable**: Can users perceive the content? This helps us keep in mind that just because something is perceivable with one sense, such as sight, that doesn't mean that all users can perceive it.
> - **Operable**: Can users use UI components and navigate the content? For example, something that requires a hover interaction cannot be operated by someone who can't use a mouse or touch screen.
> - **Understandable**: Can users understand the content? Can users understand the interface and is it consistent enough to avoid confusion?
> - **Robust**: Can the content be consumed by a wide variety of user agents (browsers)? Does it work with assistive technology?
>
>   [Accessibility  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/accessibility)

### Approaches

- Semantic HTML
- ARIA

#### Semantic HTML

> Using meaningful tags to describe your content.

![Div Soup vs Semantic HTML](https://www.jungledisk.com/blog/content/images/blog/div-soup-vs-semantic-html.png)
[source](https://www.jungledisk.com/blog/2017/12/04/should-i-bother-with-semantic-html/)

Using these HTML tag to wrap our content instead of `<div>`:

- `<header>`
  - Header of our website
  - It is usually used to wrap website title, logo and man navigation.
- `<nav>`
  - Navigation of our website
  - `<nav>` often accompanies list tag (i.e. `<ul>` and `<ol>`)
- `<main>`
  - Main content
- `<aside>`
  - Commercial ads and sidebar can be put inside `<aside>`.
- `<article>`
  - In most cases, an `<article>` contains one article.
- `<section>`
  - At least one heading in `<section>`, or it will be untitled section.
  - When we want to wrap more descriptions, then `<section>` can be a good alternative of `<div>`.
- `<footer>`
  - It is usually used to wrap contact info, links, copyright notice...etc.

In addistion to make our pages more accessible, semantic tags can improve search engine optimization (SEO) as well.

#### ARIA

> The [Web Accessibility Initiative's Accessible Rich Internet Applications specification](https://www.w3.org/TR/wai-aria/) (WAI-ARIA, or just ARIA) is good for bridging areas with accessibility issues that can't be managed with native HTML. It works by allowing you to specify attributes that modify the way an element is translated into the accessibility tree.
>
> - [Introduction to ARIA  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)

##### An example from Google Web Developer Guides

```html
<li tabindex="0" class="checkbox" checked>
  Receive promotional offers
</li>
```

```html
<li tabindex="0" class="checkbox" role="checkbox" checked aria-checked="true">
  Receive promotional offers
</li>
```

## Real-world case

Now, let's take a look at a real-world case.

At this part, I am gonna addressing some accessibility issues of my personal website.

### The analysis tool I used: Lighthouse

> Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.
>
> - [Lighthouse  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/lighthouse)

### First analysis

![1st Lighthouse analysis](https://i.imgur.com/8bwmoVb.png)

## Addressing Lighthouse's issues

#### Contrast

![Lighthouse raised a contrast issue](https://i.imgur.com/rdaTud2.png)

This issue is raised because of the low-contrast text on my header navigation, and we can solve it easily by changing the text color (or background color of the header).

- before
  ![header navigation before changing its color](https://i.imgur.com/WxmTsmT.png)
- after
  ![header navigation after changing its color](https://i.imgur.com/12dhPnf.png)

#### Internationalization and localization

![Lighthouse raised a localization issue](https://i.imgur.com/lvJRrtn.png)

> If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly.

This issue is also simple, we just need to put `lan` attribute on `<html>` tag.

```html
<html lang="en" />
```

#### Tables and lists

![Lighthouse raised a tables and lists issue](https://i.imgur.com/z8gIDS4.png)

This issue is raised because I wraped button links in `<ul>` without list item `<li>`, and we can fix it by adding `<li>` or removing `<ul>`. In this situation, I choose removing `<ul>` because it is redundant tag.

- before

```javascript
<Toolbar disableGutters>
  <List>
    {tabLinks &&
      tabLinks.map((link) => (
        <NavLink
          button
          $active={isTabActive(link)}
          key={link.title}
          href={link.url}
        >
          {link.title}
        </NavLink>
      ))}
  </List>
</Toolbar>
```

- after

```javascript
<Toolbar disableGutters>
  {tabLinks &&
    tabLinks.map((link) => (
      <NavLink
        button
        $active={isTabActive(link)}
        key={link.title}
        href={link.url}
      >
        {link.title}
      </NavLink>
    ))}
</Toolbar>
```

### Second analysis

After addressing Lighthouse's issues, I used the tool again:

![2nd Lighthouse analysis (after fixing Lighthouse's issues](https://i.imgur.com/OgTAL3k.png)

As you can see, the score is better than that of the first time, and which probably means my website is more accessible.

---

After reading and handling these stuffs, I believe that we have a preliminary understanding of **Web Accessibility**. However, all of these cannot make our products or services fully accessible, so we need to keep it in mind, consider more about the usage scenarios, and practice more when we are developing applications.

If you are interested in getting know more about Web Accessibility, you can check [Google's Udacity course on Accessibility](https://www.udacity.com/course/web-accessibility--ud891).

##### Ref

- [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)
- [Computer accessibility - Wikipedia](https://en.wikipedia.org/wiki/Computer_accessibility)
- [Web accessibility - Wikipedia](https://en.wikipedia.org/wiki/Web_accessibility)
- [Web Accessibility 的重要性](https://blog.techbridge.cc/2019/10/13/web-accessibility-intro/)
- [Accessibility | Web | Google Developers](https://developers.google.com/web/fundamentals/accessibility)
- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/#guidelines)
- [HTML Sematic Tags: Should I Bother With Semantic HTML? | Jungle Disk Blog](https://www.jungledisk.com/blog/2017/12/04/should-i-bother-with-semantic-html/)
- [Introduction to ARIA | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)
- [WAI-ARIA basics - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Web Accessibility | Udacity Free Courses](https://www.udacity.com/course/web-accessibility--ud891)
