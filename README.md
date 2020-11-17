# Milestone project 2 - Tourist 
View the live project <a href=""> here

***
## Contents
* [What is the purpose of this project?](what-is-the-purpose-of-this-project?)
* [User experience](#user-experience)
    * [User stories](#user-stories)
    * [Design](#design)
        * [Font](#font)
        * [Colours](#colours)
        * [Wireframes](#wireframes)
* [Technologies used](#technologies-used)
* [Features](#features)
    * [Existing features](#existing-features)
    * [Future features](#future-features)
* [Testing](#testing)
* [Deployment](#deployment)
    * [Cloning](#cloning)
* [Credits](#credits)
* [Media](#media)
* [Acknowledgements](#acknowledgements)
* [Special thanks](#special-thanks)
***

***
## **What is the purpose of this project?**
This project is my second milestone project where I have developed an interactive front end website for an electronic musician called Tourist. 
The aim of this website was to create a platform where fans of Tourist can go to keep up to date with the latest news, buy music, view upcoming gigs, 
buy tickets, get in touch with the artist and even test their knowledge of the musician with a quiz. 
The main requirements for this project were to create an interactive front end website whilst implementing all of the technologies that I have learnt 
so far on the Full Stack Software Development course. The technologies used are HTML5, CSS3 and Javascript which work together to create an intuitive interactive website.
The Bootstrap CSS library was used to create the structure of my website using the grid system, which enabled me to make the website fully responsive across a range of different 
screen sizes including mobile, tablet and desktop. The JQuery framework was also implemented in certain parts of my Javascript code. 

## **User Experience**
<div style="text-align:center"><img src="assets/images/responsive/responsive.png" alt="Tourist Am I Responsive image"></div>

### User stories: 

* User goals: 
    * As a user, I want to visit the website to keep up to date with the latest news about Tourist. 
    * As a user, I want to find out the dates and locations of Tourist’s upcoming gigs and buy tickets. 
    * As a user, I want to find out where I can find and follow Tourist on social media. 
    * As a user, I want to be able to easily navigate through the website and information to be provided in a clear and informative manner.
    * As a user, I want to get in touch with Tourist to enquire about booking him to play a show at my venue. 
    * As a user, I want to test my knowledge of my favourite musician. 
    * As a user, I want to browse through Tourist’s catalogue of music and buy some. 

* The website is designed to meet these user requirements by:
    * On the home page the website provides a news section which contains links to articles on the latest news about Tourist. When an article is clicked the link opens in a new tab enabling the user to easily get back to where they left off. 
    * By providing a live music section where the user is able to view the dates of upcoming gigs. The google maps API is utilised in this section to enable the user to see the exact location of each venue. 
    * The footer section of each page provides links to all of Tourist’s social media pages.
    * By providing a navigation bar which remains at the top of the page at all times so the user can easily navigate between pages. The footer section contains a button to bring the user back to the top of the page. The information is provided in a tidy manner and no areas are overcrowded.  
    * By giving the user the opportunity to contact the artist directly on the contact page. 
    * By providing an intuitive quiz where the user can have a go at answering some trivial questions about Tourist. 
    * By presenting all of Tourist’s music on the music page where the user is able to view the title, artwork and track list as well as being able to follow a link to purchase the music. 

#### Design 

##### Font 
For this website I decided to only use one font to keep it simple and maintain consistency throughout. The font that I chose to use was Raleway which I imported into my style.css file from 
Google Fonts. I made use of font weights in the design process to promote hierarchy among elements such as headings and make them stand out. I used Sans Serif as a fall back font should the Raleway font not be imported correctly. 

##### Colours 
For me it was really important that I chose a palette of colours that were not only pleasing to the eye but also worked together to ensure that content would stand out as clearly as possible maximising readability for the user. 

Colours used: 

* ![#176073](https://placehold.it/15/176073/000000?text=+) #176073 - Nav bar colour (Blumine)
* ![#323232](https://placehold.it/15/323232/000000?text=+) #323232 - Background colour (Mine shaft grey)
* ![#002D47](https://placehold.it/15/002D47/000000?text=+) #002D47 - Text colour (Prussian Blue)
* ![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) #FFFFFF - Text and icon colour (White)
* ![#545454](https://placehold.it/15/545454/000000?text=+) #545454 - Footer colour (Emperor grey)
* ![#38C1E4](https://placehold.it/15/38C1E4/000000?text=+) #38C1E4 - Social media icons hover colour (Picton blue)

The green colour (176073) was used for the navbar through every page of the website. I wanted to use quite a dark shade that would allow the white text for the logo and nav bar buttons to really stand out and be easy for the user to read.<br>
The dark grey colour (323232) was used as  a background colour for various elements throughout the website. The dark shade of this colour really helps the content to stand out.<br> 
The colour (002D47) is a dark shade of blue that I decided to use for my font colour for any text that was against a white background to make it stand out, this was mainly the headings.<br> 
I used white (FFFFFF) for any text that was against the dark grey (323232) background so it would stand out nice and clearly for the user.<br> 
The light blue colour (38C1E4) was used for the social media icons when the user hovers over them indicating that the button can be interacted with. 

##### Wireframes 

The first stage of the process to developing my website was creating my wireframes on Figma which enabled me to sketch out the design and bring my ideas to life.<br> 
Having these wireframes really helped me with the development process as I had a detailed plan to follow. The final website was pretty much identical to the wireframes with just a few minor design changes. 

[You can view the Figma wireframes project here](https://www.figma.com/file/lutlDKHHKEswS3FiS79B1s/Milestone-Project-2?node-id=0%3A1)

[Back to Top](#contents)

## **Technologies used**

#### Languages 

* [HTML5](https://en.wikipedia.org/wiki/HTML5) - This language was used to build the core structure of the website.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - This language was used to style the HTML5 elements.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - This language was used to provide interactive functionality

#### Libraries, frameworks and editors

* [Boostrap](https://getbootstrap.com/) - The bootstrap grid system was used extensively throughout my website to create the structure and ensure responsiveness across all screen sizes. I also made use of the bootstrap CSS framework for various elements throughout the website. 
* [EmailJS](https://www.emailjs.com/) - EmailJS was used to enable the user to send an email from the contact page. 
* [Font Awesome](https://fontawesome.com/) - This was used to import the arrow symbol use on the buy tickets link on the Live page. 
* [Github](https://github.com/) - This was used to store the repository for my website and host it on Github pages.
* [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) - Throughout the development of my website I made use of Git version control to ensure all changes and additions to my code were added to the repository. 
* [Gitpod](https://gitpod.io/) - This was used to write all code for the website. 
* [JQuery](https://jquery.com/) - I used JQuery to write some of the Javascript code for the website. 
* [Google images](https://www.google.com/imghp?hl=EN) - This was used to find all of the images for the website. 

#### Tools 

* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) - This was used to resize images.
* [Am I Responsive](http://ami.responsivedesign.is/) - This was used to show how my website is responsive across all screen sizes. 
* [Free Online HTML Formatter](https://www.freeformatter.com/html-formatter.html) - This was used to format my HTML code to improve readability. 
* [Free Online CSS Formatter](https://www.freeformatter.com/css-beautifier.html) - This was used to format my CSS code to improve readability.
* [Free Online JavaScript Formatter](https://www.freeformatter.com/javascript-beautifier.html) - This was used to format my Javascript code to improve readability.
* [Figma](https://www.figma.com/) - This was used to create the wireframes. 
* [Google](https://www.google.com/) - Google was used extensively throughout the design and development process for images, researching solutions to coding issues and information to use in my website. 
* [Google maps](https://www.google.co.uk/maps/) - This was used to get the coordinates of the music venues. 
* [Google developers](https://developers.google.com/) - This was used to implement the Google Maps API. 
* [Name that colour](https://chir.ag/projects/name-that-color/#38C1E4) - This was used to get the names of the colours I used. 
* [Place hold it](https://place-hold.it/) - This was used for the colour placeholders in README.

[Back to Top](#contents)

## **Features**

#### Existing features 

* Navbar - Bootstrap was used to create the navbar which is featured across every page of the website. It has a navbar brand logo for Tourist and features links to all 
  pages of the website. The navbar remains fixed at the top of the screen enabling the user to access all other pages at any moment they desire. On smaller screen sizes the navbar collapses into a hamburger menu.

* Hero images - All pages feature a hero image at the top of the page which looks visually pleasing and helps draw in the users attention. 

* Footer - The footer section is featured across every page on the website. This consists of links to all of Tourist’s social media pages which are represented by their icons which change colour when hovered over. 
  The footer also has a button to take the user back to the top of page to improve navigation. 

* Home page  - This page is the first place the user will find themselves after entering the website. It has a full width hero section at the top of the page displaying an image of Tourist, a bio section which 
  informs the user who Tourist is, a news section where users will be able to keep up to date with the latest news and a tour dates section displaying the locations and dates of upcoming gigs and also giving the user the opportunity to buy tickets. 

* Music page - This page allows the user to browse Tourists full discography of music and view the track list of any album or single by clicking on them. The user also has the opportunity to buy any of the music by clicking the buy now button which will 
  take them to Apple Music where they may make a purchase if they wish. 

* Live page - This page allows the user to view the dates and locations of all of Tourist’s upcoming gigs. I have implemented the Google maps API on this page which enables the user to view the location of each venue which is displayed on the map with a marker. 
  The user is also presented with the opportunity to buy tickets for any of the gigs by clicking on buy tickets.

* Contact page - This page gives the user the opportunity to get in touch with Tourist regarding bookings, remixes or any other general enquiries. EmailJS has been implemented on this feature allowing the user to send a direct email to the artist. 
  Upon submitting their email the user will be presented with a modal informing them that their message has been sent and to let them know that Tourist will be in touch as soon as possible. 

* Quiz page - This page gives users the opportunity to test their knowledge of Tourist. The quiz contains of 5 questions which each have a multiple choice selection of three answers. After submitting their answers the user will then be provided with the results 
  and a message on how they have done. The user then has the option of clicking the try again button which refreshes the page. 

#### Future releases

* On the Live page I would like to add a feature where the user could enter their home address to find out the location of the nearest gig. 

* On the music page I would like to implement the Soundcloud API so the user could listen to the songs. 

* At the moment the news section is just links to other news articles on the web but I would like to create my own articles in the future. 

* In the future I would also like to add a shop section where users would be able to purchase music and merchandise. 

[Back to Top](#contents)

## **Testing**

The testing for this project can be found [here](https://github.com/Jthomp1993/Milestone-Project-1-UCFD/blob/master/testing.md)

## **Deployment** 

#### Hosting the project on Github pages 

* Firstly you want to log into your Github account and open the repository that you are wanting to host on Github pages. 

* Then you need to go to the settings tab and click on that 

* You then need to scroll down and locate the Source section within the Github pages section. 

* From the dropdown menu you then need to click on ‘Master branch’ and then click save.  

* Now your repository is hosted on Github pages it can be viewed at http://<username>.github.io<repository-name>.

#### Cloning 

If you would like to deploy your own version of my project and develop it even further use the following steps:

* Visit my repository on ‘Github pages’

* Click on the green code and download button and then copy the http link which is provided

* Open the terminal within your chosen IDE

* Using the terminal change your root directory to the location where you would like the cloned directory to be stored.

* Then you need to enter git clone into the terminal followed by the http link that you copied earlier. 

* Now all you need to do is press enter and doing so will create your local clone which you can work on yourself. 

[Back to Top](#contents)

## **Credits**

#### Content

The bio section on the home page was taken from Tourist’s Wikipedia page, all other content on the website was written by myself. 

#### Code 

* The bootstrap CSS library was used extensively to help me create an intuitive and fully responsive website.

* Inspiration for the layout of the news section on the home page and the music section were taken from my first [milestone project](https://github.com/Jthomp1993/Milestone-Project-1-UCFD).

* For the Google maps API I used the documentation to help me understand how to correctly implement it and I also received some additional guidance from tutor support after struggling to get the map to render correctly. 

* For the implementation of EmailJS in my contact page I used documentation provided on their website. I was later advised by Kevin from tutor assistance to use the new EmailJS method rather than the old method that I was using. 

* I used this [repository](https://github.com/mkthewlis/Milestone-Project-2) that my mentor sent me for inspiration on how to write the code for my quiz.

* For the Javascript code for my music page I had originally created a function for each individual album but Tim from tutor assistance helped me simplify it by just using one function for all of them. 

* For inspiration on how to structure my README file I used this [repository](https://github.com/Gregory4321/milestone-project-2#design) that was sent to me by my mentor.  

## **Acknowledgements**

* [Code institute](https://codeinstitute.net/)

* [W3schools](https://www.w3schools.com/)

* [Geeks for geeks](https://www.geeksforgeeks.org/) 

* [Stack overflow](https://stackoverflow.com/)

* [Slack](https://slack.com/intl/en-gb/)

* [Tourist](http://www.touristmusic.com/)

* [Wikipedia](https://en.wikipedia.org/wiki/Tourist_(musician))

## **Special thanks**

* My mentor Seun Owonikoko, for all of the support and guidance that she has given me throughout my milestone 2 project. 

* Tutor assistance for answering any questions I had and providing guidance on how to tackle any issues I was having. 

[Back to Top](#contents)







