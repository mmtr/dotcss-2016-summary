!function e(r,t,n){function o(a,s){if(!t[a]){if(!r[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[a]={exports:{}};r[a][0].call(f.exports,function(e){var t=r[a][1][e];return o(t?t:e)},f,f.exports,e,r,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,t){"use strict";Reveal.initialize({controls:!1,history:!0,transition:"convex"}),Reveal.addEventListener("ready",function(e){hljs.initHighlightingOnLoad()}),Reveal.addEventListener("fragmentshown",function(e){var r=parseInt(e.fragment.dataset.example);switch(r){case 1:document.querySelector(":root").style.setProperty("--color","green")}}),Reveal.addEventListener("fragmenthidden",function(e){var r=parseInt(e.fragment.dataset.example);switch(r){case 1:document.querySelector(":root").style.setProperty("--color","red")}})},{}]},{},[1]);