# Testing 
[Back to README.md](https://github.com/Jthomp1993/Milestone-Project-1-UCFD/blob/master/README.md)

## Contents 

* [W3C Validators](#w3c-validators)
* [Google chrome develeoper tools](#google-chrome-developer-tools)
* [User stories from UX section](#user-stories-from-ux-section)
    * [User goals](#user-goals) 
* [Browser compatibility](browser-compatibility)
* [Testing the functionality of all links](#testing-the-functionality-of-all-links)
***

## W3C HTML Validator

For music.html there are two errors returning as there is an anchor element that is missing an href attribute and an image element that is missing a 
src attribute but this is because they are being appended in with Javascript. 

* [W3C HTML Validator](https://validator.w3.org/#validate_by_input)

## W3C CSS Validator 

The CSS validator returned an error for 3 lines of code all for the same reason. I had accidentally set the property to margin-block-end instead of 
margin-bottom and it stated that 2rem was not a valid property for margin-block-end. 

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## JSHint Validator

After running my javascript code through JSHint there were a few minor warnings returned. First was a few missing semi colons in certain places which I amended. 
There was a few warnings about various things being available in ES6, however after doing some google research I know that these can be overlooked. The JQuery $ symbol was also being returned as an undefined variable which can also be overlooked. 

* [JSHint validator](https://jshint.com/)

## Chrome developer tools
