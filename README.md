# 99Tech
# 1. Install dependencies:
  npm i
# 2. Run the server api
  npm run dev
  Server will run on: http://localhost:3080 
# Problem 5 api document
  Create User 
    POST /api/users
      {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "phone": "0359537659",
        "description": "user test"
      }

  Get list users
    GET /api/users

  Get detail user by id
    GET /api/users/:id
  
  Update user by id 
    PUT /api/users/:id
      {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "phone": "0359537659",
        "description": "user test"
      }
  Delete user by id
    DELETE /api/users/:id
  
