# url_shortener

The URL Shortener is a Node.js project that provides URL shortening functionality. It allows users to create short links, redirect to the original URL, and view analytics such as the number of clicks and IP addresses for each click.

## Features

- **URL Shortening**: Submit a long URL, and the API will generate a short, unique ID to access it.

- **Redirect**: Accessing a short URL will redirect you to the original long URL.

- **Analytics**: Retrieve analytics for a short URL, including the number of clicks and associated IP addresses.

## Endpoints

### POST /url

- Accepts a request body with a URL and generates a short ID for storage in the database.

### GET /:id

- Redirects to the original URL associated with the provided short ID.

### GET /:id/alt

- Provides analytics for the given short URL, including the number of clicks and associated IP addresses.

## Prerequisites

- Node.js
- MongoDB
- npm packages: express, nanoid^3.0.0, mongoose, dotenv, ip
  
The reason for using nanoid version 3 is because of here: https://github.com/ai/nanoid/issues/364. Alternatively, you can consider using another npm package for the same purpose, such as "shortid."

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/bm9avan/url_shortener.git
   ```

2. Navigate to the project directory:

   ```shell
   cd url_shortener
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file with the following content and replace `<YOUR_MONGODB_URI>` with your MongoDB connection URI:

   ```shell
   MONGODB_URI=<YOUR_MONGODB_URI>
   ```

5. Start the Node.js server:

   ```shell
   npm start
   ```

6. Use the provided endpoints to interact with the URL shortener.

## Configuration

- The MongoDB connection URI should be specified in the `.env` file.

## Technologies Used

- Node.js
- MongoDB

## Contact

For questions or feedback, please contact:

- Name: PAVAN
- Email: mggpavan@gmail.com
- GitHub: [bm9avan](https://github.com/bm9avan)
