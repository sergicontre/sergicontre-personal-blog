---
title: "Web Components: Seamlessly interoperable."
date: 2019-04-19
tags:
  - web components
layout: layouts/post.njk
language: en
---
Since I’ve been working with Web Components and I’ve been trying to help evangelize the technology inside my company and in the developer community, the issue of interoperability with frameworks and libraries has fascinated me 😍. To try to explain this, I have created a small laboratory where, through examples, I try to demonstrate how Web Components can work anywhere. At the end of the post you have the link to the examples in Glitch and the source code but before, a little introduction …


Web Components give developers the ability to define their own HTML elements. When coupled with [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/), [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) and [ES Modules specification](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system) , allows you defines the inclusion and reuse of JS documents in a standards based, modular and performant way.
> Web Components are based on web standards, and for this reason these elements should work on any HTML page.

<img src="../../img/images/pieces.jpeg" class="responsive"></img>

> Image by Steve Buissinne from Pixabay.

## Using Web Components as a platform-native component model

Adopting Web Components, allow the front-end development ecosystem to evolve in a way that is close to the standard and try over time community standardised.

The choice of using a certain Framework may meet all your needs but for large and medium organizations with multiple teams and disparate stacks, the possibility of reusing and interoperating new developments in existing applications or trying to standardize the use of multiple frameworks and libraries , choose Web Components is a huge win.

This makes them ideal for sharing UI elements within a large organization, publishing components for use anywhere on the web, or building UI design systems like Material Design.

Until the consolidation of the Web Components within the state of union of the all major browsers, the solution has been to use Frameworks and Libraries under their own component model.

* Angular: [https://angular.io/guide/architecture-components](https://angular.io/guide/architecture-components)

* Vue.js: [https://vuejs.org/v2/guide/#Composing-with-Components](https://vuejs.org/v2/guide/#Composing-with-Components)

* React: [https://reactjs.org/docs/react-component.html](https://reactjs.org/docs/react-component.html)

* Ember: [https://guides.emberjs.com/release/components/defining-a-component/](https://guides.emberjs.com/release/components/defining-a-component/)

At this point my question is: How easy is it to use components in these models defined by frameworks and libraries in applications built in different ones? 🤔

Angular (Angular Elements) or Vue.js for example, allow packaged their components as *custom elements*, in a framework-agnostic way,
but this approach to the standard in my opinion is not clean at all and the final result of the exported component from Angular or Vue.js includes more than it should.

## Using LitElement in my Web Components interoperability Lab.

[LitElement](https://lit-element.polymer-project.org/) is simple base class for creating fast, lightweight web components. It is part of a continuity of the [Polymer Project](https://www.polymer-project.org/) team to follow advocating for standards.

LitElement follows the [Web Components standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so your components will work with any framework.
> LitElement makes it easy to define Web Components — ideal for sharing elements across your organization or building a UI design system.

LitElement uses Custom Elements for easy inclusion in web pages, and Shadow DOM for encapsulation. There’s no new abstraction on top of the web platform.
> Use your components anywhere you use HTML: in your main document, a CMS, Markdown, or a framework like React or Vue.

You can also mix LitElement components with other Web Components, whether they’ve been written using vanilla web technologies or made with others tools like [Stencil](https://stenciljs.com/), [SkateJS](https://skatejs.netlify.com/) or the [Polymer library](https://polymer-library.polymer-project.org/).

The first thing for my tests is to create a simple web component with LitElement. The component allows you to receive the data of the credit card and if you click on the ‘Visa’ image, send a custom event with all the info on the card.

<img src="../../img/images/wc-example.png" class="responsive"></img>

<img src="https://cdn-images-1.medium.com/max/2060/1*ezMWvvD5ZG0vy9Ci2zlv1g.png" class="responsive"></img>


You can show the code here: [https://github.com/sergicontre/my-credit-card](https://github.com/sergicontre/my-credit-card)

Following the communication pattern where the Web Components receive the information through their properties and/or attributes and fire events to send information or report a change of state to other components, the tests check that the library/framework will let you do things like display your Web Components inside framework or library , bind data to it and listen for events.

<img src="https://cdn-images-1.medium.com/max/3200/0*IyEczANm3_PoUECV" class="responsive"></img>
> “Data down, events up” by Google’s Polymer team

You can see how to use my Web Component with LitElement and principal frameworks or libraries in the following link that I created in Glitch:

[https://glitch.com/@sergicontre/web-components-interoperability-lab](https://glitch.com/@sergicontre/web-components-interoperability-lab)

<img src="https://cdn-images-1.medium.com/max/3496/1*ww51eoxu2w9LaSpozPzguA.png" class="responsive"></img>

if you have any problem to run examples in Glitch, you can clone repos from my Github:
* [Vue.js quickstart project to test Web Components interoperability](https://github.com/sergicontre/vue-interop-wc)
* [React project to test Web Components interoperability](https://github.com/sergicontre/react-interop-wc)
* [Angular project to test Web Components interoperability](https://github.com/sergicontre/angular-interop-wc)
* [Ember quickstart project to test Web Components interoperability](https://github.com/sergicontre/ember-interop-wc)

@sergicontre