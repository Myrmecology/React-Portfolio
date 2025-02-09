React Portfolio

Table of Contents

Description

User Story

Acceptance Criteria

Technologies Used

Installation Instructions

Features

Usage

Deployment

License

Contact

Description

This is a single-page React portfolio application designed for web developers. It showcases the developer’s work samples, includes a contact form, and provides sections such as About Me, Portfolio, Contact, and Resume. The application is fully responsive, easy to navigate, and allows users to view the developer’s projects, download a resume, and get in touch via a contact form.

User Story
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

Acceptance Criteria
Header: Displays the developer's name and navigation with titles corresponding to different sections of the portfolio.
Navigation: Includes sections for About Me, Portfolio, Contact, and Resume. The title of the current section is highlighted.
About Me Section: Displays a photo/avatar and a short bio about the developer.
Portfolio Section: Shows six applications with links to the deployed app and the corresponding GitHub repository.
Contact Section: Contains a form with name, email, and message fields. It validates the email format and shows notifications for required fields.
Resume Section: Provides a downloadable resume and a list of proficiencies.
Footer: Includes links to GitHub, LinkedIn, and a third platform (e.g., FreeCodeCamp).
Technologies Used
React
JavaScript (ES6+)
CSS (Custom Styles)
HTML
React Router (for navigation)
Form Validation (for the contact form)
Netlify (for deployment)
Installation Instructions
Clone the repository:



git clone (https://github.com/Myrmecology/React-Portfolio)
Navigate to the project directory:



cd react-portfolio
Install the required dependencies:



npm install
Start the application locally:
sql


npm start
Visit http://localhost:3000 in your browser to view the portfolio.

Features
Single-page navigation: Smooth transitions between sections (About Me, Portfolio, Contact, Resume) without page reloads.
Responsive Design: The application adapts to different screen sizes for an optimal user experience on desktop, tablet, and mobile.
Contact Form: Includes form validation for required fields and email format.
Portfolio Showcase: Displays a grid of projects with links to deployed applications and GitHub repositories.
Downloadable Resume: Provides a link to download a PDF of the developer’s resume.
Usage
Once the application is running, you can:

Navigate between sections using the top navigation menu.
Click on portfolio project images to view the deployed apps or GitHub repositories.
Fill out the contact form to get in touch with the developer.
Download the resume via the Resume section.
Deployment
This application has been deployed on Netlify. To deploy your own version:

Push your project to a GitHub repository.
Log in to Netlify and click on "New Site from Git".
Connect your GitHub repository and follow the prompts to deploy.
License
This project is licensed under the MIT License. (Massachusetts Institute of Technology License)

Contact
For any questions, feel free to reach out to me via email zooecostudy@yahoo.com
You can also find me on:

GitHub https://github.com/Myrmecology
LinkedIn https://www.linkedin.com/in/justin-deines-70a10125/


Being a web developer means being part of a community. You'll need a place to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future projects.

React Portfolio
Now that you've completed multiple projects, your task is to create a portfolio, using your new React skills to help set you apart from other developers whose portfolios don’t use the latest technologies.

For this module challenge, you’ll need to deploy this application to NetlifyLinks to an external site.. Follow the instructions found in activity 27-Evr_Git-Deploy to create a build that you can deploy.

User Story
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
Acceptance Criteria
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

Getting Started
The application that you built for this module will help you know where to start when building your portfolio. You’ll use Create Vite just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:

A single Header component that appears on multiple pages

A single Navigation component within the header that will be used to render the different sections of your portfolio

A single Project component that will be used multiple times in the Portfolio section

A single Footer component that appears on multiple pages

note
The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few modules.

In the meantime, consider adding your email address and phone number on the Contact page.

Projects
For each project you feature in your portfolio, you should include the following:

An image of the deployed application (either a GIF or a screenshot)

The title of the project

A link to the deployed application

A link to the corresponding GitHub repository

Design
As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

Use mobile-first design.

Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like CoolorsLinks to an external site. or another color scheme generator to help you create something that will stand out.

Make sure the font size is large enough to read and that the colors don't cause eye strain.

Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

Grading Requirements
note
If a Challenge assignment submission is marked as "0", it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Application must use React to render content.

Application has a single Header component that appears on multiple pages, with a Navigation component within it that uses react-router-dom to render About Me, Portfolio, Contact, and Resume sections.

Application has a single Project component that’s used multiple times in the Portfolio section.

Application has a single Footer component that appears on multiple pages.

Application must be deployed to Netlify.

Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

Application Quality: 15%
User experience is intuitive and easy to navigate.

User interface style is clean and polished.

Application uses a color scheme other than the default Bootstrap color palette.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project.

GitHub https://github.com/Myrmecology
LinkedIn https://www.linkedin.com/in/justin-deines-70a10125/

Have fun and happy coding