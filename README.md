# CrypText Website

[View the live project here.](https://danvm94.github.io/cryptext/)

Cryptext is a versatile website that enables you to encrypt text messages using two different encryption methods: Caesar and Vigenere. The website provides a user-friendly interface where you can input your text and select the desired encryption method. Encrypting your text messages offers several advantages, including enhanced security and privacy. Cryptext simplifies the encryption process, allowing you to protect your messages with just a few clicks.

<h2 align="center"><img src="./readme/responsive.png"></h2>

## User Experience (UX)

- ### User stories

  - #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about Cryptext.
    2. As a First Time Visitor, I want to be able to navigate through the site easily and find the desired information.
    3. As a First Time Visitor, I want to quickly find and use the encryption methods available.

  - #### Returning Visitor Goals

    1. As a Returning Visitor, I want to explore different encryption methods and discover their applications.
    2. As a Returning Visitor, I want to decrypt my previously encrypted texts.
    3. As a Returning Visitor, I want to check for any updates or new features added to Cryptext since my last visit.

  - #### Frequent User Goals
    1. As a Frequent User, I want to experiment with different encryption keys or parameters to enhance my security.
    2. As a Frequent User, I want to easily share encrypted texts with others or recommend Cryptext to friends and colleagues.

- ### Design

  - #### Colour Scheme

    The colors palette used in this project was selected and viewed using the Colormind website.

    ![colormind](./readme/colormind.png)

    1. ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`: This black colour is used as the background colour for the website, creating a sleek and modern look.
    2. ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) `#ffffff`: This pure white colour is used for text and content, ensuring clarity and readability.
    3. ![#92939d](https://placehold.co/15x15/92939d/92939d.png) `#92939d`: This medium grey colour is used for buttons and certain elements, adding contrast and a modern touch to the design.
    4. ![#3e4357](https://placehold.co/15x15/3e4357/3e4357.png) `#3e4357`: This deep, dark blue is used as the background colour for the overall website, creating a sleek and sophisticated look.
    5. ![#938d96](https://placehold.co/15x15/938d96/938d96.png) `#938d96`: This muted grey colour is selectively used for specific elements to add detailed styling and enhance the overall design aesthetics.

  - #### Typography

    - The main font used for the website is "Roboto" from Google Fonts. It is a clean and modern sans-serif typeface that enhances the overall readability and visual appeal of the content.

    ![roboto](./readme/roboto.png)

  - #### Imagery

    - Imagery plays a vital role in capturing users' attention and creating an engaging visual experience on the Cryptext website. Both website pages feature a prominent top icon that includes an image of a lock and the text "CrypText". This visual element serves as the identity of the website and project, representing the focus on encryption and security. It provides a recognizable and cohesive branding throughout the website, reinforcing the purpose and theme of the project.

    ![logo](./readme/logo.png)

### Wireframes

Balsamiq Wireframe software was utilized to design the initial wireframe for the website, outlining the conceptual layout and structure. While some modifications were made during the development process, the wireframe served as a foundation for the final website design.

![index.html](./readme/index-wireframe.png)
![about.html](./readme/about-wireframe.png)

The wireframe visually represents the placement of various elements, such as navigation, content sections, and other components, providing a clear blueprint for the website's overall structure and user interface.

## Features

- Responsive Design: It is designed to be fully responsive, ensuring optimal viewing and functionality across various device sizes. Whether accessed from a desktop computer, tablet, or smartphone, users can enjoy a seamless and immersive experience.

- Interactive Elements: It incorporates interactive elements to enhance user engagement. Interactive forms and buttons, the website offers a dynamic and interactive interface, allowing users to easily interact with the encryption functionality and explore the content.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Java Script](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [BEM Methodology:](https://getbem.com/introduction/)
   - BEM Methodology was used for structuring and organizing the CSS codebase, providing a modular and scalable approach to styling components.
1. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
   - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

## Testing

### Code Testing

The W3 HTML Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3 HTML Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdanvm94.github.io%2Fpaulista-dishes%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdanvm94.github.io%2Fcryptext%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Lighthouse Testing

The Google Chrome built-in Lighthouse testing tool was utilized to assess the performance, accessibility, best practices and SEO aspects of the two available website pages. Below are the results obtained for each page, considering both the desktop and mobile versions.

#### index.html

##### Desktop

![Report](./readme/index-desktop.png)

- [Full Report](https://danvm94.github.io/cryptext/readme/index-desktop.html)

##### Mobile

![Report](./readme/index-mobile.png)

- [Full Report](https://danvm94.github.io/cryptext/readme/index-mobile.html)

#### about.html

##### Desktop

![Report](./readme/about-desktop.png)

- [Full Report](https://danvm94.github.io/cryptext/readme/about-desktop.html)

##### Mobile

![Report](./readme/about-mobile.png)

- [Full Report](https://danvm94.github.io/cryptext/readme/about-mobile.html)

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals
  - As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about Cryptext.
    1. Upon entering the CrypText website, users are immediately greeted with the prominent CrypText logo, which serves as the visual identity of the website. The CrypText logo is strategically positioned, and when clicked, it redirects users to the index.html (home page), providing a seamless and intuitive navigation experience. This allows users to easily return to the main page.
    2. Below the CrypText logo, users will find an informative "About" section that offers a comprehensive overview of the website's purpose and the available encryption methods, namely Caesar and Vigenere. Additionally, there is a link within the "About" section that redirects users to the about.html page, where they can find more detailed information about both encryption methods. This allows users to delve deeper into the concepts and gain a better understanding of how the encryption process works.
  - As a First Time Visitor, I want to be able to navigate through the site easily and find the desired information.
    1. The navigation is seamless and user-friendly, ensuring that users never feel trapped or lost within the site. At the top of every page, users will find the CrypText logo, which serves as a clickable link that redirects them back to the home page (index.html). This feature provides a convenient and intuitive way for users to navigate back to the main page of the website, ensuring easy access to the core content and functionality.
    2. Directly below the "About" section, you will find an interactive radio button selector. This user-friendly element allows users to choose between encryption direction, The options are accompanied by an informative text that provides guidance and clarification on the purpose and functionality of it.
  - As a First Time Visitor, I want to quickly find and use the encryption methods available.
    1. After selecting the encryption direction, user will be presented with two additional options to choose from. These options correspond to the encryption type, specifically Caesar and Vigenere. Similar to the previous selection, the options are accompanied by an informative text that assists users in making an informed decision. 
    2. After selecting the encryption direction and encryption type, users will be presented with four new interactive elements. 
    
    The first element allows users to enter the shift number (for Caesar encryption) or the encryption key (for Vigenere encryption). This interactive element is accompanied by informative text that explains its purpose and provides instructions on how to use it effectively.

    The second element is an input text area where users can enter the text they want to encrypt or decrypt. The input text area includes a placeholder text that guides users on what information they should enter.

    The third element is a submit button that triggers the website to process the provided information and generate the encrypted or decrypted text. The result will be displayed after the input text area.

    The fourth element is a clear button that allows users to easily clear all the text entered in the input text area and reset the encryption process.

    These interactive elements provide a user-friendly interface for seamless interaction and facilitate the encryption and decryption process.

- #### Returning Visitor Goals
  - As a Returning Visitor, I want to explore different encryption methods and discover their applications.
    1. Users can easily find information on how to use both encryption methods, Caesar and Vigenere, on the CrypText website. The instructions are available in two convenient locations.

    Firstly, on the main index.html page, users can navigate thru the Encryption buttons and select the available options where they will find comprehensive information about it.

    Secondly, users can access more in-depth information about the encryption methods on the about.html page. This dedicated page delves deeper into the intricacies of both Caesar and Vigenere encryption, providing additional examples, tips, and guidance for users who want a more thorough understanding.

- As a Returning Visitor, I want to decrypt my previously encrypted texts.
  1. Users can easily decrypt previously encrypted messages by navigating through the main page of the CrypText website.

- As a Returning Visitor, I want to check for any updates or new features added to Cryptext since my last visit.
  1. The available encryption methods are displayed straightforwardly after selecting the encryption direction.

- #### Frequent User Goals
  - As a Frequent User, I want to experiment with different encryption keys or parameters to enhance my security.
  1. Users can easily interact with the encryption key or text presented on the screen.
  - As a Frequent User, I want to easily share encrypted texts with others or recommend Cryptext to friends and colleagues.
  1. The user can easily check the encryption key they are using and view the encrypted message, which they can then share with others.
