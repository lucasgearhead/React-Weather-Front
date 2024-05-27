# Weather App

This is a React application to search for the weather of a city and save the request history. The application has a login and password system, where only registered and logged-in users can delete items from the search history.

## Prerequisites

- Node.js installed (https://nodejs.org/)
- NPM or Yarn installed (NPM comes with Node.js)
- Clone and run the specific API available at: [Django-Weather-Api](https://github.com/lucasgearhead/Django-Weather-Api). The front-end will connect to the API on port `:8000`.

## Cloning and Starting the App

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lucasgearhead/React-Weather-Front
   cd React-Weather-Front
   ```

2. **Install dependencies:**

   - Using NPM:
     ```bash
     npm install
     ```
   - Using Yarn:
     ```bash
     yarn install
     ```

3. **Start the application:**

   - Using NPM:
     ```bash
     npm start
     ```
   - Using Yarn:
     ```bash
     yarn start
     ```

4. **Access the application:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Connecting to the API

This application requires the Django-Weather-Api to be running on port `:8000`. Be sure to follow the instructions in the [Django-Weather-Api](https://github.com/lucasgearhead/Django-Weather-Api) repository to set it up and start it before using the application.

## Features

- **Login and Registration:**
  - Allows users to register and log in.
- **Search Weather:**
  - Allows searching for the weather of a specific city.
- **Search History:**
  - Saves the history of weather searches.
  - Only logged-in users can delete items from the history.

## Warning

It is necessary to run the specific API available at [Django-Weather-Api](https://github.com/lucasgearhead/Django-Weather-Api), as the front-end connects to the API on port `:8000`.

---

### Project Structure

- `src/`: Contains the React source files.
  - `components/`: Reusable React components.
  - `pages/`: Main application pages.

---

### Contact

If you have any questions or issues, feel free to open an issue in the repository or get in touch.
