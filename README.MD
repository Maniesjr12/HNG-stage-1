Here's the comprehensive README.md

## README.md

---

# Person API

Manage person entities with ease using this RESTful API. Create, retrieve, update, and delete person records with simple HTTP requests.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installing](#installing)
4. [Running the Tests](#running-the-tests)
5. [API Endpoints](#api-endpoints)

## Getting Started

Clone this repository to get a copy of the Person API on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB (assuming Mongoose is being used)

### Installing

1. Clone the repository:

```
git clone https://github.com/Maniesjr12/HNG-stage-1.git
cd person-api
```

2. Install the required dependencies:

```
npm install
```

3. Start the MongoDB server (refer to MongoDB documentation based on your OS).

4. Adjust the database configurations if necessary in the DB setup files.

5. Start the API server:

```
npm start
```

6. The API will be accessible at `https://hng-stage-1s.vercel.app/`.

## Running the Tests

    ```
    npm test
    ```

## API Endpoints

- **POST** `/persons`: Create a new person.
- **GET** `/persons/:id`: Retrieve a person by ID.
- **PUT** `/persons/:id`: Update a person by ID.
- **DELETE** `/persons/:id`: Delete a person by ID.

For more detailed usage and examples, refer to the API documentation.

## UML Diagrams

Link to UML diagrams for this project:

(https://lucid.app/lucidchart/1e9b0b51-86dc-4a85-8b13-76cd42737b86/edit?viewport_loc=-1203%2C-1020%2C2522%2C1214%2C0_0&invitationId=inv_f548936d-bfd9-4827-866a-7d49a96aa659)
