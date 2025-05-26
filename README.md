# Music Collection App

A modern single-page web application that allows users to explore and favourite music tracks. Featuring full user authentication and responsive design, users can search, register and manage their **own** collection all in one place.

## Features

  - **Homepage:** Automatically fetches and displays popular songs on initial load
  - **Search:** Users can search for songs by pressing *Enter* or clicking the search icon, results are displayed on the Search Page which will be redirected to after searching.
  - **Favourting:**
      - Songs can be favourited or unfavourited via the heart icon
      - Favourited songs show a filled heart
      - Unanthenticated users will be asked to log in when they try to favourite or access the favourite page
  - **Favourites Page:** Displayes all songs the user has favourited, users can remove favourites directly
  - **User Registration:**
      - Alerts if username is already taken
      - "Register" button is disabled if passwords do not match
  - **Authentication:**
      - JWT and HttpOnly cookies for secure login sessions
      - Redux stores access token and auth state
  - **SPA Routing:** Built with React Router v6.4+.
  - **Responsive Design** Fully responsive across mobile, tablet and desktop

## Technologies

### Frontend

- React + Vite
- React Router v6.4+
- Redux Toolkit
- RTK Query
- CSS Modules

### Backend

- Node.js + Express
- MongoDB Atlas
- JWT Authentication
- HttpOnly Cookie for refresh token
- Middleware for protected routes (check token)
## Live Demo

Live demo can be viewed [here](https://jolly-belekoy-ae780b.netlify.app/)

## Screenshot

![project](https://github.com/user-attachments/assets/d07184c1-b4c8-45f1-8ddc-8b61a582491f)

## Disclaimer

Due to licensing restrictions of the free public music APIs used in this project, the app can only retrieve **royalty-free** or **independent/original** music tracks. Commercial music may not be available through the search feathure.

However, the application is designed to fully demontrate key features such as:

  - Real-time search and display of track data
  - Interactive favouriting system
  - Authentication and user-based data handling
  - Responsive, singled-page application flow
