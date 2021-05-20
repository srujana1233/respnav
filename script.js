'use strict';

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const background = document.querySelector('.background');

let nav = true;

const navLinks = document.querySelector('.nav-links');

const clickHandler = () => {
    if (nav) {
        line1.style.cssText = 'transform:rotate(45deg);'
        line2.style.cssText = 'transform:rotate(-45deg);margin-top: -6px;'
        line3.style.cssText = 'display:none;'

        navLinks.style.cssText = 'right :0; transition:all 0.3s ease-out;'
        background.style.cssText = 'transform:scale(50);'
        nav = !nav;


    } else {
        line1.style.cssText = 'transform:rotate(0deg);'
        line2.style.cssText = 'transform:rotate(0deg);'
        line3.style.cssText = 'display:block;'

        navLinks.style.cssText = 'right :70%; transition:all 0.3s ease-out;'
        background.style.cssText = 'transform:scale(1);'
    }
    nav = !nav;


};