# Photo Albums: React Application

This application allows you to view information about users, their albums, and photos. All data is fetched from the API provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/). The app uses React and React Router for page navigation.

## Application Structure

The application consists of several pages and components:

- **Home page**: Redirects the user to the list of all users.
- **User list**: Displays all users and provides links to view information about each user.
- **User info**: Displays detailed information about a user and their album list.
- **Album list**: Displays a list of albums for a selected user.
- **Album photos**: Displays photos belonging to a selected album.

## Features

1. **View users**: On the home page, you can navigate to the list of users by clicking on their names.
2. **View user albums**: Each user has a list of albums that can be viewed by clicking on them.
3. **View album photos**: For each album, you can view the photos associated with it.

## Technologies

- **React**: A library for building user interfaces.
- **React Router**: For navigation between pages of the app.
- **CSS**: For styling the components.
- **Fetch API**: For loading data from the remote server.

## Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/eviillia/api
     ```
2. Navigate to the project:
   ```bash
   cd api-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the server:
   ```bash
   npm run dev
   ```
2. Open in browser:
   ```
   http://localhost:5173
   ```
