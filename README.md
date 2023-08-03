# Carefinder - Find Hospitals in Nigeria

Carefinder is a simple web application that aims to help users find, export, and share hospitals within their region in Nigeria. It provides a convenient way to locate hospitals, access their contact details, and export the information for further use.

## Features

1. **Hospital Search:** Users can search for hospitals in their region by inputting their location or selecting from a list of nearby cities. The platform will present a list of hospitals with their contact details, including address, phone number, and email.

2. **Export Hospitals:** Carefinder allows users to export the list of hospitals to a CSV file, making it easy to save and share the information with others. The exported file can be used for offline reference or shared with colleagues, friends, or family.

3. **Share Hospitals:** Users can share the list of hospitals with others through email or by generating a shareable link. This feature facilitates collaboration and dissemination of hospital information across different platforms.

4. **User Authentication:** Admin users can create an account to access the platform's admin features. Firebase's built-in authentication feature is used to support multiple authentication methods, including email/password and social media logins.

5. **Markdown Support:** Admin users can write content, create hospital entries, and provide details using markdown. The platform offers a simple text editor that supports markdown syntax, enabling easy formatting, adding links, and inserting images.

## Implementation

Carefinder is built using modern web development practices and technologies to ensure scalability, maintainability, and a user-friendly experience.

- Frontend: The application is built using either Vue.js or React with TypeScript, ensuring type safety and improved developer productivity. The codebase follows proper linting and formatting guidelines with Prettier and Eslint.

- Backend: The backend is implemented using firebase, which allows storing user data and carrying out authentication. Firebase is used for user authentication and built-in file storage to export the list of hospitals as CSV files.

- Form Validation: The application enforces form validation to ensure that user inputs are accurate and complete, improving the overall user experience.

- Testing: The codebase includes at least 2 unit tests and 3 component tests to maintain code quality and prevent regressions during development.


Please note that some features, such as sharing hospitals and exporting hospitals, are currently under development. 
