# UI Application with Authentication

This project is a simple UI application that includes a login page. Users can log in with predefined credentials, and a welcome overlay is displayed upon successful authentication. The backend is implemented using Python and Flask to handle the authentication logic.

## Pre-requisites

- Python 3.12.3 (or any compatible version)
- Node.js and npm (for any frontend build tools if needed)
- A web browser (Chrome, Firefox, etc.)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

- git clone <your-repo-url>
- cd <your-repo-directory>

### 2. Setting Up the Backend

Make sure you have Python 3.12.3 installed. You can download it from the official Python website.

a. Install Dependencies

Install the required Python packages using pip:

- pip install flask
- pip install flask_cors

b. Run the Flask Application

Navigate to the directory where you have your authenticator.py file and start the Flask application by running the following command:

- python '.\REST API\authenticator.py'

If all is okay, you should see:

- Serving Flask app 'authenticator'
- Debug mode: on
  WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
- Running on http://127.0.0.1:5000
  Press CTRL+C to quit
- Restarting with stat
- Debugger is active!
- Debugger PIN: 140-790-179

You can download the REST API file from -> https://drive.google.com/file/d/1f7ogsElPFmA0k4aMGy5NTq2IMB8cvOwx/view?usp=sharing

### 3. Setting Up the Frontend

Navigate to the frontend directory and follow these steps:

a. Open index.html
Simply open index.html in your preferred web browser.

### 4. Using the Application

Enter one of the predefined username-password pairs on the login page:

- User123 - Pass123
- User456 - Pass456
- User789 - Pass789
- Press Enter or click the "Log In" button to authenticate.
- Upon successful authentication, you will see the "Добредојде!" overlay.

## Notes

- The "Запомни ме" checkbox does not introduce any additional behavior.
- The Google/Apple/TikTok authentication buttons are non-functional placeholders.

## Project Structure

### Frontend

- index.html: The main HTML file.
- style.css: The main CSS file for styling the application.
- main.js: The main JavaScript file for handling frontend logic.
- storage.js: Handles session storage.
- discussionsCards.js: Handles discussions card rendering and interactions.
- videoHandler.js: Handles video interactions.
- storage.js: Handles session storage.
- informationCards.js: Handles information cards rendering and interactions.
- images/: Directory for images.
- video/: Directory for videos.

### Backend

The backend script authenticator.py is used for handling authentication using Flask. Ensure you run this script from the directory where it is located on your machine.

## Design Considerations

This project is based on a Figma design that provided two specific sizes for the UI elements. To make the application more responsive, the implementation does not follow the exact height and width from the Figma design. Instead, it ensures the UI looks similar while being adaptable to different screen sizes. These changes make the interface more flexible and user-friendly across various devices, and it will be easier to add more responsiveness in future updates.

## Troubleshooting

If you encounter issues, please ensure:

- You have followed all the steps correctly.
- Your Python and pip installations are working properly.
- Flask and flask_cors are installed.

For any further assistance, please feel free to contact the project maintainer.

Thank you for using our UI application!
