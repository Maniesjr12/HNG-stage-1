Here's my documentation in the requested format:

---

# Person API Documentation

This documentation provides details on the REST API for managing persons. The API allows you to create, retrieve, update, and delete person records based on their ID.

## Table of Contents

1. [API Endpoints](#api-endpoints)
2. [Request and Response Formats](#request-and-response-formats)
3. [Sample API Usage](#sample-api-usage)
4. [Setting up and Deploying the API](#setting-up-and-deploying-the-api)

## API Endpoints

The API provides the following endpoints:

- `POST /persons`: Create a new person.
- `GET /persons/:id`: Retrieve details of a person by specifying their ID.
- `PUT /persons/:id`: Update details of an existing person by specifying their ID.
- `DELETE /persons/:id`: Delete a person by specifying their ID.

## Request and Response Formats

### POST /persons (Create a New Person)

**Request:**

- Method: `POST`
- Endpoint: `/persons`
- Headers:
  - Content-Type: application/json
- Body (JSON): Person data.

**Response:**

- Status Code: 201 Created
- Body (JSON): Created person details.

### GET /persons/:id (Retrieve Details of a Person)

**Request:**

- Method: `GET`
- Endpoint: `/persons/:id`

**Response:**

- Status Code: 200 OK
- Body (JSON): Person details.

### PUT /persons/:id (Update Details of an Existing Person)

**Request:**

- Method: `PUT`
- Endpoint: `/persons/:id`
- Headers:
  - Content-Type: application/json
- Body (JSON): Updated person data.

**Response:**

- Status Code: 200 OK
- Body (JSON): Updated person details.

### DELETE /persons/:id (Delete a Person)

**Request:**

- Method: `DELETE`
- Endpoint: `/persons/:id`

**Response:**

- Status Code: 200 OK
- Body (JSON): Message indicating successful deletion.

## Sample API Usage

### Create a New Person

```bash
curl -X POST https://hng-stage-1s.vercel.app/persons -H "Content-Type: application/json" -d '{
  "name": "John Doe",
}'
```

### Retrieve Details of a Person

```bash
curl https://hng-stage-1s.vercel.app/persons/5f62d1c8950c230017409a60
```

### Update Details of an Existing Person

```bash
curl -X PUT https://hng-stage-1s.vercel.app/persons/5f62d1c8950c230017409a60 -H "Content-Type: application/json" -d '{
  "Name": "John Doe"
}'
```

### Delete a Person

```bash
curl -X DELETE https://hng-stage-1s.vercel.app/persons/5f62d1c8950c230017409a60
```
