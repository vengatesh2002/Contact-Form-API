# Contact Form API

This is a simple Express.js API built to handle contact form submissions. It connects to a MongoDB database and is deployed live for testing or integration with frontend forms.

## 🔗 Live Link

[Visit Live API](https://contact-form-api-zjl5.onrender.com)

> You should see `API is running...` when visiting the root route.

## 🛠 Features

- Accepts POST requests from contact forms
- Stores submissions in MongoDB
- Built with Express.js
- CORS enabled
- Environment-based configuration using `.env`

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- dotenv
- CORS

## 📁 Project Structure

contact-form-api/ ├── index.js ├── models/ │ └── Contact.js ├── .env ├── package.json └──

## ⚙️ Environment Variables

Create a `.env` file and add the following:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000

📦 Install Dependencies
npm install

▶️ Run Locally
npm start
The server should start on http://localhost:5000

