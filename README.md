# URL Shortener Backend
This is a URL shortening project backend built with Node.js, Express, and MongoDB.

# Features
1. Shorten long URLs into short, easy-to-share links.

2. Track the number of clicks for each shortened URL.

3. Ensure unique short URLs using nanoid.

4. Store URLs securely in MongoDB.

# Tech Stack
Node.js – JavaScript runtime environment.

Express.js – Web framework for Node.js.

MongoDB – NoSQL database for URL storage.

Mongoose – ODM library for MongoDB.

Nanoid – Generate unique URL identifiers.

# Project Structure

`|-- models`

`|-- routes`

`|-- controllers`

`|-- utils`

`|-- .env`

`|-- server.js`

`|-- package.json`


# API Endpoints (Tested on Postman)

1. Create Short URL
POST /api/url/createUrl

2. Redirect to Original URL
GET /:shortUrlId

3. Delete a Short URL
DELETE /api/url/deleteUrl

4. Check Server Status
GET /
