# GitHub Profile Viewer - README

This HTML and JavaScript code provide a simple web application to view GitHub user profiles. Below are the key concepts used in this code:

1. **HTML Structure**: The code is written in HTML, defining the basic structure of the webpage, including headings, input fields, buttons, and a container div to display the user's GitHub profile.

2. **Fetching GitHub API**: The application uses the GitHub API (https://api.github.com/users/{username}) to retrieve user profile information based on the provided GitHub username.

3. **JavaScript Functions**: JavaScript is used to create functions for fetching and displaying the GitHub profile data.

4. **Event Handling**: The "onclick" event handler is attached to the "Get Profile" button, triggering the "fetchProfile()" function when clicked.

5. **Input Validation**: The code checks if the GitHub username input field is empty before making the API request. If empty, an alert is displayed to prompt the user to enter a username.

6. **Promises**: The code utilizes Promises with the "then" and "catch" methods to handle the asynchronous "fetch" API request and response.

7. **GitHub Personal Access Token**: To use the GitHub API, a Personal Access Token is required. Users should obtain their own GitHub token and replace "YOUR-GITHUB-TOKEN" in the code with their actual token.

8. **Template Literals**: The data from the API response is dynamically inserted into the HTML using template literals (backticks).

9. **Error Handling**: The code includes error handling using the "catch" method to display an error message if the API request fails or encounters any issues.

10. **Dynamic Profile Display**: The fetched data, including the user's name, login, location, followers, following, public repositories, and avatar image, is displayed dynamically on the webpage.

**Note to Users**: Before using this application, ensure you have obtained your GitHub Personal Access Token and replace "YOUR-GITHUB-TOKEN" in the JavaScript code with your actual token. This is necessary for proper functioning and to avoid API rate-limiting issues.
