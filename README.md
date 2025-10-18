# Kolawole Bilaal — HNG Stage 0 Task

This project implements a simple REST API endpoint `/me` that returns profile information and a dynamic cat fact.

## 🚀 Stack
- Node.js
- Express
- Axios

## 🧩 Endpoint
**GET** `/me`  
Returns:
```json
{
  "status": "success",
  "user": {
    "email": "kolawolebilaal13@gmail.com",
    "name": "Kolawole Bilaal",
    "stack": "Node.js(Express)"
  },
  "timestamp": "2025-10-18T12:00:00.000Z",
  "fact": "A Random cat fact"
}
