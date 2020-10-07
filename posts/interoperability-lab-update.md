---
title: Applying Web Components to address interoperability
date: 2020-10-07
tags:
  - web components
  - architecture
layout: layouts/post.njk
language: en
---

The state of the art in software interoperability of UI Componentes and Frameworks will be of great value to software engineers when choosing a library or framework to build UI

<img src="../../img/images/designer__isometric.png" class="responsive"></img>


## 1. Interoperability concept

Is the ability of independently-developed software components to interact and exchange information with one another in either implementation or access, without restriction.

In the UI context your components will work with any web framework and no have new abstraction on top of the web platform.

## 2. UI Components Ecosystem 

The key difference between web components and proprietary component systems is interoperability. Because of their standard interface, you can use web components anywhere you'd use a built-in element like div , input or video tag.

It is important to choose frameworks and libraries that follow reconciling architectural models with component interoperability standards and standard design notations.

<img src="../../img/images/designer_panel.png" class="responsive"></img>


Because the Web Component interface is standard, can be implemeted and mixed in diferents frameworks and libraries. This fact helps future-proof your applications when you update your tech stack. Instead of a giant step-change between one framework and another, where you replace all of your components, you can update your components one at a time.


## 3. Why is interoperability important in UI?

It is fundamental to the production, quickly and at low cost, of goods and services and, at the same time, maintaining levels of quality and customisation

 - Increased levels of UI components reuse
 - Exploiting legacy web applications
 - A common component model instead proprietary solutions by frameworks.
 - Component-based software engineering

## 4. Approaches and actions to achieving UI interoperability

From an architectural point of view, we could organize the different approaches to interoperate components in different scenarios

<img src="../../img/images/diagram.png" class="responsive"></img>

### Integrated
The integrated approach ensures the global consistency and coherence of the system. Various components of the system are designed and implemented using a common format (or standard) so that the interoperability is seen as a designed-in quality (of the system's components). Interoperation between various parts can be obtained without any supplementary interfacing efforts. 

### Unified
With the unified approach a mapping mechanism at meta-level needs to be pre-defined. Standardisation is useful because it reduces the number of models to be mapped.

### Federated
This is an approach to the coordinated sharing and exchange of information which is organized by models, which are describing common concepts and behavior. The pattern emphasizes a controlled sharing and exchange of information among autonomous components by communication via messages. Highest possible autonomy shall be given to the different cooperating components. In return they are expected to adhere to common models by using defined interfaces.

From these three scenarios, we can obtain different actions to guarantee interoperability in UI layer:


 - Use Web Components as a component model 
 - Use standard architecture-specific frameworks
 - Provide clear interfaces in components 
 - Separate decisions about style & ui interaction with rest of system (build process, state managment, routing...)
 - Event-based integrations between ui components and system
 - Use wrapper components as adapter pattern

<img src="../../img/images/process_building_isometric.png" class="responsive"></img>


## 5. A tiny interoperability UI lab

I have updated my small laboratory in Glitch with the latest versions of the main frameworks and libraries of the web ecosystem.

#### Frameworks and libraries
- Angular 10 
- React 16.X
- Vue 3
- Eleventy (static site generator)


I have used a Web Component from [The Material Web Components](https://github.com/material-components/material-components-web-components) (MWC), a collection of Web Components maintained by Google that implement Material Design.

#### [mwc-slider](https://github.com/material-components/material-components-web-components/blob/master/packages/slider/README.md)

Sliders allow users to make selections from a range of values
<img src="../../img/images/discrete.gif" height="80.5px">

Example usage
```js
<mwc-slider
    step="5"
    pin
    markers
    max="50"
    value="10">
</mwc-slider>
```

#### Glitch

You can play [here](https://glitch.com/@sergicontre/material-web-components-interoperability-lab)

<img src="../../img/images/int-lab20.png" class="responsive"></img>


## 6. More resources

- [open-wc](https://open-wc.org/) provide the community with well-known and experience-tested recommendations for their web component projects.
- [Web Fundamentals](https://developers.google.com/web/fundamentals) provides primers on the basic web components APIs, and best practices for designing web components.
- [Web Dev](https://web.dev/) get web's modern capabilities on your own sites and apps with useful guidance and analysis.
- [LitElement](https://lit-element.polymer-project.org/) a simple base class for creating fast, lightweight web components that work in any web page with any framework


Illustrations from [manypixels](https://www.manypixels.co/gallery/?page=12&style=isometric)

@sergicontre
