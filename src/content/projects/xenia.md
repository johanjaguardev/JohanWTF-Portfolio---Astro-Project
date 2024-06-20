---
title: 'Xenia, Library of Classic Studies - Universidad Nacional'
description: '“Desktop Application to show and read the digital library, Backend application to convert, manage and expose the PDF library by a CMS”'
images: [{
  url: 'test.jpg',
  alt: 'uno'
}]
skills: [
"PHP",
"RESTful API",
"WordPress",
"MySQL",
"Angular"
]
---

## Challenge

The challenge in your project was likely to create a seamless user experience for accessing the digital library. This involved integrating Angular for the client-side search functionality and ensuring smooth communication with the backend (built using PHP and WordPress CSS).

![Xenia Desktop Size](/xenia-desktop-1.png)

## Opportunity

The opportunity here was to enhance the university’s digital library system, making it more user-friendly, efficient, and accessible. By providing a robust search feature and improving the overall interface, you contributed to a better learning experience for students and researchers.


![Xenia Desktop Size](/xenia-desktop-2.png)


## Solution

1. Data Normalization and Enrichment:

I created a system within our Angular CMS to upload books. When a book was uploaded, I ensured that essential fields (such as author, URL, year, and genre) were stored in the database.
Additionally, I worked on the existing PDF library. Using batch scripts, I standardized book names and extracted any available fields. For books with missing details, I manually completed the necessary information in the WordPress database through our CMS.

2. Angular Client-Side Application:

I exposed endpoints to interact with the complete database. These endpoints were implemented in an Angular client-side application.
When users searched the catalog, my application looked for matching results. Upon clicking a book, it displayed additional information and allowed online reading.

3. Integration and User Experience:

To ensure seamless communication between the Angular frontend and the WordPress backend, I used RESTful APIs.
I also focused on enhancing the user experience. This included real-time updates, responsive design, and accessibility features.

![Xenia Desktop Size](/xenia-desktop-3.png)
![Xenia Desktop Size](/xenia-desktop-4.png)
