"use strict";function $(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"one";return"one"===o?document.querySelector(e):"two"===o?document.querySelectorAll(e):void 0}function debounce(n){var s,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20,i=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];return function(){var e=this,o=arguments;var t=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||n.apply(e,o)},r),t&&n.apply(e,o)}}var elements={book:$(".book"),wcidSection:$(".section-wcid"),featureBoxOne:$(".feature-box","two")[0],featureBoxTwo:$(".feature-box","two")[1],svgPen:$(".feature-box__svg--pen"),svgLap:$(".feature-box__svg--laptop")},posTriggers={book:elements.book.parentElement.offsetTop,bookParentSize:elements.book.parentElement.offsetHeight,featureBoxOne:elements.featureBoxOne.offsetTop+elements.wcidSection.offsetTop+elements.featureBoxOne.offsetHeight/2,featureBoxTwo:elements.featureBoxTwo.offsetTop+elements.wcidSection.offsetTop+elements.featureBoxTwo.offsetHeight/2};function checkSlide(e){var o=window.scrollY+window.innerHeight/2,t=window.scrollY+window.innerHeight;600<=screen.width&&(o>posTriggers.book?elements.book.classList.add("book--active"):elements.book.classList.remove("book--active")),t>=posTriggers.featureBoxOne&&elements.svgPen.classList.add("feature-box__svg--pen-active"),t>=posTriggers.featureBoxTwo&&elements.svgLap.classList.add("feature-box__svg--laptop-active")}window.addEventListener("scroll",debounce(checkSlide));