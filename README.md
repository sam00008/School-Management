#  School Management Backend API

A simple backend system built with **Node.js**, **Express**, and **MySQL** to manage school data and perform operations like adding schools and retrieving them based on location.

---

##  Features

- Add new schools to the database
- Retrieve list of schools
- Sort schools based on user location 
- RESTful API structure
- MySQL database integration

---

##  Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2 library

---

##  Installation

```bash
git clone https://github.com/your-username/school-management.git
cd school-management
npm install


```
---

##  Database Schema

###  Table: `schools`

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
);

```
---

## Api Endpiont

### Base Url - https://school-management-1-9qot.onrender.com/api/v1

## POST /addSchool

## Request Body
```bash
{
  "name": "Thames Valley School",
  "address": "10 Downing St, London, UK",
  "latitude": 51.503364,
  "longitude": -0.127625
}

```
## Request Body

```
{
    "StatusCode": 201,
    "data": {
        "data": {
            "id": 3,
            "name": "Thames Valley School",
            "address": "10 Downing St, London, UK",
            "latitude": 51.503364,
            "longitude": -0.127625
        }
    },
    "message": "School added successfully",
    "success": true
}

```
## POST //listSchools?lat=40.730610&lng=-73.935242

## Request Body
```bash
{

}

```
## Request Body

```
{
    "StatusCode": 200,
    "data": {
        "schools": [
            {
                "id": 1,
                "name": "Modern Public School",
                "address": "Lucknow, UP",
                "latitude": "26.84670000",
                "longitude": "80.94620000",
                "distance": 440.4002136589942
            },
            {
                "id": 2,
                "name": "Greenwood High School",
                "address": "123 5th Ave, New York, NY 10001",
                "latitude": "40.71277600",
                "longitude": "-74.00597400",
                "distance": 8779.756576119387
            }
        ]
    },
    "message": "Schools fetched successsfully",
    "success": true
}

