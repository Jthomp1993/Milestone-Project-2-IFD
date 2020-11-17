# Testing 
[Back to README.md](https://github.com/Jthomp1993/Milestone-Project-1-UCFD/blob/master/README.md)

## Contents 

* [W3C Validators](#w3c-validators)
* [Google chrome develeoper tools](#google-chrome-developer-tools)
* [User stories from UX section](#user-stories-from-ux-section)
    * [User goals](#user-goals) 
* [Testing EmailJS](#emailjs)
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

## User stories from UX section 

* User goals 

    * As a user, I want to visit the website to keep up to date with the latest news about Tourist. 
        * When the user arrives on the home page the user can scroll down to the news section where they will be able to keep up to date with all the latest news regarding Tourist.
        * As a future release I would add my own news articles to a news page so the user would be able to access the news section from the navbar.  

    * As a user, I want to find out the dates and locations of Tourist’s upcoming gigs and buy tickets. 
        * When the user arrives on the website they will be able to select Live from the navbar. This will take them to the live page where they will be presented with a hero image that will encourage them to scroll down.
        * The user will then be provided with the dates and locations of all upcoming gigs. 
        * They will have the opportunity to buy tickets via the button provided and can view the location of the venue on the google map. 

    * As a user, I want to find out where I can find and follow Tourist on social media. 
        * It is common practice that social media links are added to the footer section of websites so people naturally tend to head to look there first.
        * The footer section is featured on every page throughout the website giving the user the opportunity to see them at all times. 
    
    * As a user, I want to be able to easily navigate through the website and information to be provided in a clear and informative manner.
        * As the navbar is fixed to the top of the screen the user will always have access to every page of the website.
        * The page names a clearly written within the nav bar and this collapses into a hamburger menu for mobile users. 
        * In the footer section there is a back to top button to enable the user to quickly navigate back to the top of the page. 
        * The layout of the content in this website has been carefully designed to ensure no areas are overcrowded and the information architecture looks organised and professional. 

    * As a user, I want to get in touch with Tourist to enquire about booking him to play a show at my venue. 
        * When the user arrives at the website they can select contact from the navigation bar which will take them to the contact page. 
        * Here the user will be presented with a hero image which will encourage them to scroll down where they will find the contact form. 
        * Once here the user is able to give there details and send an email stating their interest in booking tourist for a gig.
        * Upon submitting their email the user will be presented with a modal informing them that their message has been sent and Tourist will be in touch with them as soon as possible.

    * As a user, I want to test my knowledge of my favourite musician. 
        * When the user arrives at the website they will be able to select quiz from the navigation bar which will take them to the quiz. 
        * The user will then be presented with a hero image which will encourage them to scroll down to where the will find the quiz. 
        * The user will then be taken through a series of multiple choice questions and upon submitting their answers the will be provided with their results and feedback on how they did.
        * Then if the user wishes they are able to click the try again button which refreshes the page so they can have another go. 

    * As a user, I want to browse through Tourist’s catalogue of music and buy an album. 
        * When the user arrives at the website they will be able to select music from the navigation bar which will take them to the music page. 
        * Here the user will be presented with a hero image which will encourage them to scroll down to where they will find Tourist music discography. 
        * From here the user is able to click on any music they wish which will provide them with the track list and a buy now button which enables them to buy the music from apple music. 

## Browser compatibility

I did some testing to ensure that my website was compatible with the following browsers and I also made sure that the website was responsive across all screen sizes on each browser. 

* [Google chrome](https://www.google.co.uk/chrome/?brand=FHFK&gclid=Cj0KCQiAhs79BRD0ARIsAC6XpaXtnVdUu9Wvwx0hOb8w-DRPsxzQPpxNQviJm4RW6xn8j_s3EeQOskAaAj3JEALw_wcB&gclsrc=aw.ds)
* [Mozilla firefox](https://www.mozilla.org/en-GB/firefox/new/)
* [Safari](https://www.apple.com/uk/safari/)

## Testing the functionality of all links 

I carried out the following tests to ensure all links were working properly: 

* I clicked on each news article on the home page to make sure it opened the correct link and opened in a new window.

* I clicked on each album on the music page to make sure it provided the correct information for that album and clicked the buy now link to make sure it was the correct link and opened in a new window. 

* I clicked on each buy tickets anchor in the live page to make sure it was the correct link and opened in a new window. 

[Back to top](#contents)

