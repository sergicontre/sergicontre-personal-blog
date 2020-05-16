---
title: Reasons Web Components are perfect for a big company.
date: 2019-03-27
tags:
  - web components
layout: layouts/post.njk
language: en
---

Once you decide to choose which framework or library is the best one to build an front-end architecture in a big company there are many questions and unknowns that appear.

Imagine the following big company 🙄: +2000 developers, apps in 11 countries, mobile and web, use of different frameworks and technology to develop the front-end…

<img src="https://cdn-images-1.medium.com/max/2000/0*8fwhjF8TUZD7MRUa.jpg" class="responsive"></img>

At this point there are multiple options that apparently exist, but analyzing the frontend ecosystem, needs and trends, the architecture team decided to use Web Components.

## Web Components.
> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML

[https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction)

With this definition we will try to argue some reasons why this option may end up being the right way.

## 1. Be standard and framework agnostic

Web Components are standardized technology, and are natively supported in modern browsers. Following the Web Component standards, you can create versatile new components with encapsulated functionality that can be reused wherever you like without fear of code collisions.

By using a consistent set of web standards, Web Components are not dependent on a specific front-end framework and liberate us from the highly volatile landscape of front-end frameworks and tooling in which we currently live. 

Being close to the standards helps to evolve together with the technology in a simple way and avoiding high costs in refactoring with the evolution of technology.

## 2. Sharing components across company

Web Components is ideal for sharing elements across your organization or building a UI design system.

Have a collection of components that front-end developers can use in their projects like puzzle pieces to build apps, is important to avoid build the same components several times.

<img src="https://cdn-images-1.medium.com/max/2392/1*WJx8boz8Vo9SL1Ahu8WwBA.png" class="responsive"></img>


This catalog of building blocks, allows to reuse code and functionality between the different applications and countries of the company, considerably improving the time-to-market in the different locations. In many cases, the time it takes for the solutions to be in customers’ hands can be reduced by 50%. And the cost of developing these solutions is up to 40% lower.

<img src="https://cdn-images-1.medium.com/max/2560/1*NWGi4U8OyZ8-nxdIta6w1Q.gif" class="responsive"></img>


## 3. Seamlessly interoperable

Web Components use a set of standardized APIs that are natively supported in all modern browsers and run on nearly all mobile devices and desktop browsers today. With Web Components, you can create and share custom elements that work on any site, interoperate seamlessly with the browser’s built-in elements, and play nicely with frameworks of all kinds.

Basically this ability allows something great things:

* Use Web Components anywhere you use HTML: in your main document, a CMS, Markdown, or a framework like Angular, Ember or Vue.

* Allow to establish progressive change strategies, allowing you to incrementally incorporate new functionalities with Web Components in existing or legacy applications without having to maintain code on concrete frameworks or libraries.

* Breaking your app up into right-sized components helps make your code cleaner and less expensive to maintain.

<img src="https://cdn-images-1.medium.com/max/2560/1*vowXExs_gyDITnKz1pLItw.gif" class="responsive"></img>


## 4. Simplicity and easy adoption

The simplicity of Web Components makes development faster and easier. Here, libraries like [LitElement](https://lit-element.polymer-project.org/), from Polymer team of Google, make Web Components easier to use and highlight best practices, helping you get great results.

To build Web Components with LitElement you only need to have skills of JavaScript (or TypeScript), HTML and CSS. Any front-end web developer with experience in a JavaScript framework or library like Angular, Ember, Vue or React can quickly use LitElement in a simple way, so the learning curve is very simple.

This is an example of implementing a Web Component with LitElement:

<img src="https://cdn-images-1.medium.com/max/5384/1*QFFB71sqFXh4Yavz-5usKQ.png" class="responsive"></img>


This is the way to declare it in HTML document:

<img src="https://cdn-images-1.medium.com/max/3968/1*cUaIrTFriq8hEPzbGfbeoA.png" class="responsive"></img>


You can see the code in this basic example:

https://stackblitz.com/edit/bbva-web-component


## 5. Simple to customize

Web Components by definition facilitate customizable contexts. In a big company, where each country, location or app context can have differences, visual or functional, with respect to others, this capacity in technology is of great value to avoid having very similar components but repeated again and again in each country, location or app.

<img src="https://cdn-images-1.medium.com/max/2560/1*CD8um9PGXB1ER313Nc9t3A.gif" class="responsive"></img>


We find two groups within the customization:

* Customization at component level: look and feel (colors, icons, images …) and/or functionality.

* Customization at app level to driven user-experiences: configure the layout of the components of an app depending on the type of user, country or whatever. At this point the flexibility and versatility is very great. Imagine being able to connect the definition of your apps to AI systems to show one configuration or another depending on certain rules.

@sergicontre
