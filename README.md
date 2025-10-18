# Kolawole Bilaal — HNG Stage 0 Task

A simple REST API that returns profile information along with a random cat fact. Built as part of the HNG Internship Stage 0 task.

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **Axios** — HTTP client for fetching cat facts
- **CORS** — Cross-Origin Resource Sharing middleware

## 📡 API Endpoint

### `GET /me`

Returns user profile information and a random cat fact.

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "kolawolebilaal13@gmail.com",
    "name": "Kolawole Bilaal",
    "stack": "Node.js(Express)"
  },
  "timestamp": "Current Timestamp",
  "fact": "A random cat fact"
}
```

**Status Code:** `200 OK`

## ⚙️ Local Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

**1. Clone the repository**
```bash
git clone https://github.com/bilaalk079/bilaal-hng-stage-0.git
cd bilaal-hng-stage-0
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
node server.js
```

The server will start at `http://localhost:5000`

**4. Test the endpoint**
```bash
curl http://localhost:5000/me
```

## 📦 Dependencies
```json
{
  "express": "^5.x.x",
  "axios": "^1.x.x",
  "cors": "^2.x.x"
}
```

Install all dependencies with:
```bash
npm install
```

## 🌐 Live Deployment

The API is deployed and accessible at:

**🔗 [https://bilaal-hng-stage-0.pxxl.click/me](https://bilaal-hng-stage-0.pxxl.click/me)**

Hosted on [Pxxl](https://pxxl.app)

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env` file in the root directory if you want to customize the port:
```env
PORT=5000
```

If not specified, the app defaults to port `5000` or uses Pxxl's provided `PORT` environment variable in production.

## 📁 Project Structure
```
bilaal-hng-stage-0/
├── server.js          # Main application file
├── package.json      # Project dependencies
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## 🧪 Testing

You can test the API using:

**cURL:**
```bash
curl https://bilaal-hng-stage-0.pxxl.click/me
```

**Browser:**  
Simply visit [https://bilaal-hng-stage-0.pxxl.click/me](https://bilaal-hng-stage-0.pxxl.click/me)

**Postman/Thunder Client:**  
Send a GET request to the `/me` endpoint

## 📝 Notes

- The cat fact is fetched from a public API and changes on each request
- CORS is enabled for all origins
- The timestamp reflects the server's current time in ISO 8601 format

## 👤 Author

**Kolawole Bilaal**  
📧 kolawolebilaal13@gmail.com

---

