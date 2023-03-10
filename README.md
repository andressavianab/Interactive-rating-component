# 🧮 [Interactive rating component solution](https://andressavianab.github.io/Interactive-rating-component/)

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

- To save user feedback to localStorage and change color of selected button.

```css
.feedback-btn:focus {
    background-color: var(--Light-Grey);
    color: var(--White);
}
```
```js

function saveFeedback(btn) {
    const rate = {
        'rate': btn
    }
    localStorage.setItem('feedBack', JSON.stringify(rate))
    functionCalled = true
}

function tyCardVisible() {
    let getfeedBacklS = localStorage.getItem('feedBack')
    let feedBack = JSON.parse(getfeedBacklS)
    tyCard.style.visibility = 'visible'
    feedBackText.innerHTML = 'You selected ' + feedBack.rate + ' out of 5'
}

```

### Useful resources

- [W3 schools](https://www.w3schools.com/jsref/default.asp) - This helped me for sintax e DOM reason. I really liked this site and will use it going.

## Author

- Frontend Mentor - [@andressavianab](https://www.frontendmentor.io/profile/andressavianab)
- github - [@andressavianab](https://github.com/andressavianab)
