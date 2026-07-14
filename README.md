# Smart Trip Planner

A full-stack trip planning web application that allows users to search for countries or cities, view weather and nearby attractions, save destinations, and securely manage their saved places through user authentication.

---

# Features

- Search destinations by **country** or **city**
- View country information
- View city details
- Current weather information
- Nearby attractions
- User registration and login
- JWT-based authentication
- Save and remove destinations
- Saved destinations linked to individual user accounts
- Responsive user interface

---

# Tech Stack

## Frontend

- React
- Vite
- React Router
- Context API
- Custom React Hooks
- Tailwind CSS

## Backend

- Node.js
- Express.js
- SQLite
- JWT Authentication
- bcrypt

## APIs

- REST Countries API
- Open-Meteo Weather API
- Open-Meteo Geocoding API
- Wikipedia Geosearch API

---

# Project Structure

```text
TRIP/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── middleware/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/mania-ali/Smart-trip.git
```

```bash
cd Smart-trip
```

---

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Install Backend Dependencies

Open a new terminal.

```bash
cd server
npm install
```

---

## Environment Variables

Inside the `server` folder, create a `.env` file.

```env
JWT_SECRET=your_secret_key
```

---

## Run the Backend

```bash
cd server
npm start
```

The backend will start on:

```
http://localhost:5000
```

---

## Run the Frontend

Open another terminal.

```bash
cd frontend
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

# Screenshots

(Add screenshots here)

---

# Future Improvements

- AI itinerary generation
- Interactive maps
- Hotel recommendations
- Flight information
- Budget planner
- User profile management
- Trip sharing
- Trip history
- Email verification
- Password reset

---

# Author

**Mania Ali**