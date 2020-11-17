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
There was a few warnings about various things being available in ES6, however after doing some google research I know that these can be overlooked. The JQuery $ symbol was also being 
returned as an undefined variable which can also be overlooked. 

* [JSHint validator](https://jshint.com/)

## Chrome developer tools

Chromes Devtools was used extensively throughout the development process. Utilising this tool particularly helped me with making website fully responsive across different screen sizes. 

* It showed me that in the live page when viewed on mobile devices the test was too big and was overlaying the google map. To resolve this issue I made use of the bootstrap media 
  queries to make the text smaller when viewed on mobile devices.

* I noticed that on screen sizes smaller than desktops, the back to top button in the footer was slightly off centre. This was due to display: flex being added to the social media icons 
  above which was causing them all to bunch making the back to top button look off centre. 

* Dev tools really helped me to figure out the layout of the music section and how the albums would display across different screen sizes by using the bootstrap grid system. 

* Throughout the process of writing my Javascript code I would regularly console.log to make sure things were working as expected and to catch any unexpected bugs. 


