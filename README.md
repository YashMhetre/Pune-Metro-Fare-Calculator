# 🚇 Pune Metro Fare Calculator

A full-stack web application that helps commuters calculate routes and fares for the Pune Metro system. Built with React.js and Node.js, this tool provides an intuitive interface for journey planning with real-time fare calculations and route visualization.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About The Project

This project was created to solve a common problem faced by Pune Metro commuters - understanding which stations are on their route and calculating the fare before their journey. The application provides:

- **Interactive Station Selection**: Easy-to-use dropdowns for selecting start and end stations
- **Intelligent Route Calculation**: Backend algorithm calculates the shortest path between stations
- **Dynamic Fare Calculation**: Automatic fare calculation based on distance traveled
- **Visual Route Display**: SVG-based metro map showing your route
- **Alternate Routes**: Displays multiple route options when available

## ✨ Features

### Core Features (MVP)
- ✅ Dual dropdown interface for station selection
- ✅ Shortest path calculation using BFS algorithm
- ✅ Dynamic fare calculation based on station distance
- ✅ Real-time route and fare display
- ✅ Passenger count support for group travel

### Bonus Features
- ✅ Visual route display on simplified metro map (SVG)
- ✅ Alternate route suggestions
- ✅ Responsive design for mobile and desktop
- ✅ Dark mode interface
- ✅ Toast notifications for user feedback
- ✅ Station swap functionality

## 🛠️ Tech Stack

### Frontend
- **React.js** (v19.2.0) - UI Framework
- **Bootstrap** (v5.3.8) - Styling & Responsiveness
- **React Router DOM** (v7.9.4) - Navigation
- **Axios** - HTTP Client
- **React Toastify** (v11.0.5) - Notifications
- **React Icons** (v5.5.0) - Icon Library

### Backend
- **Node.js** (v22.14.0) - Runtime Environment
- **Express.js** - Web Framework
- **CORS** - Cross-Origin Resource Sharing

### Algorithms
- **BFS (Breadth-First Search)** - Shortest path calculation
- **DFS (Depth-First Search)** - Alternate route finding

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v22.14.0 or higher
- **npm**: v10.9.2 or higher

Check your versions:
```bash
node -v
npm -v
```

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/YashMhetre/Pune-Metro-Fare-Calculator.git
cd dup-metro-project
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Environment Setup

#### Backend (.env)
Create a `.env` file in the `backend` folder:
```env
PORT=8080
```

#### Frontend (.env)
Create a `.env` file in the `frontend` folder:
```env
REACT_APP_API_URL=http://localhost:8080/api
```

## 🎮 Usage

### Running the Application

#### 1. Start the Backend Server
```bash
cd backend
npm run dev
```
The backend will run on **http://localhost:8080**

#### 2. Start the Frontend Application
Open a new terminal:
```bash
cd frontend
npm start
```
The frontend will run on **http://localhost:3000**

### Using the Application

1. **Select Starting Station**: Choose your departure station from the first dropdown
2. **Select Destination Station**: Choose your destination from the second dropdown
3. **Set Passenger Count**: Adjust the number of passengers (default: 1)
4. **Calculate Route**: Click the "Calculate Route" button
5. **View Results**: 
   - See the shortest route highlighted on the map
   - Check the fare breakdown
   - Explore alternate routes if available

## 🔌 API Endpoints

### Base URL: `http://localhost:8080/api`

#### 1. Get All Stations
```http
GET /stations
```
**Response:**
```json
{
  "success": true,
  "stations": ["PCMC", "Sant Tukaram Nagar", ...],
  "count": 22
}
```

#### 2. Get Metro Map Data
```http
GET /metro-map
```
**Response:**
```json
{
  "success": true,
  "metroMap": {
    "PCMC": ["Sant Tukaram Nagar"],
    ...
  }
}
```

#### 3. Calculate Route
```http
POST /calculate-route
Content-Type: application/json

{
  "from": "PCMC",
  "to": "Swargate",
  "passengers": 2
}
```
**Response:**
```json
{
  "success": true,
  "from": "PCMC",
  "to": "Swargate",
  "shortestPath": ["PCMC", "Sant Tukaram Nagar", ...],
  "alternateRoutes": [[...], [...]],
  "fareDetails": {
    "stationsTravelled": 8,
    "passengers": 2,
    "farePerPassenger": 150,
    "totalFare": 300
  }
}
```

## 📁 Project Structure

```
dup-metro-project/
├── backend/
│   ├── controllers/
│   │   └── fareController.js      # Route and fare logic
│   ├── data/
│   │   └── metroData.js           # Metro map and fare rules
│   ├── routes/
│   │   └── fareRoutes.js          # API route definitions
│   ├── .env
│   ├── .gitignore
│   ├── index.js                   # Express server setup
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ActionButtons.jsx
│   │   │   ├── AlternateRoutes.jsx
│   │   │   ├── FareDisplay.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MetroMap.jsx
│   │   │   ├── PassengerCounter.jsx
│   │   │   └── StationSelector.jsx
│   │   ├── data/
│   │   │   └── frontend-data.js   # Station coordinates
│   │   ├── pages/
│   │   │   ├── PuneMetroCalculator.jsx
│   │   │   └── customcss.css
│   │   ├── services/
│   │   │   └── metroApi.js        # Axios API calls
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🧮 Fare Structure

| Stations Travelled | Fare per Passenger |
|-------------------|-------------------|
| 1-2 stations      | ₹50              |
| 3-5 stations      | ₹100             |
| 6-8 stations      | ₹150             |
| 9+ stations       | ₹200             |

## 🗺️ Metro Lines Covered

The application currently covers the following Pune Metro lines:
- **Purple Line**: PCMC to Swargate
- **Aqua Line**: Vanaz to Ramwadi
- Includes 22 stations with interconnection points

## 🧠 Algorithm Implementation

### Shortest Path Calculation
The application uses the **Breadth-First Search (BFS)** algorithm to find the shortest path between start and end stations:

- **Why BFS?**: BFS guarantees finding the shortest path in an unweighted graph (metro network)
- **Time Complexity**: O(V + E) where V is vertices (stations) and E is edges (connections)
- **Space Complexity**: O(V) for the visited set and queue

**How it works:**
1. Starting from the source station, BFS explores all neighboring stations
2. It marks each visited station to avoid cycles
3. Uses a queue to maintain the order of exploration
4. Stops when the destination station is found
5. Returns the complete path from start to end

### Alternate Routes
The application also implements **Depth-First Search (DFS)** to find all possible paths:
- DFS explores all routes between two stations
- Routes are sorted by length (number of stations)
- Top 3 shortest routes are displayed to the user

---

## 👤 Contact

**Yash Mhetre**

- GitHub: [@YashMhetre](https://github.com/YashMhetre)
- LinkedIn: [Yash Mhetre](https://www.linkedin.com/in/yash-mhetre-b775352b6/)

- Below is my Project Output

  Image - 1
  <img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/c93dad3f-f4f1-447e-8bd9-f7f7850d433b" />
  
  Image - 2
  <img width="1896" height="971" alt="image" src="https://github.com/user-attachments/assets/51bfd189-5198-4a98-b817-3ef43abfc09b" />

  Image - 3
  <img width="1914" height="909" alt="image" src="https://github.com/user-attachments/assets/c49eb4ce-5a6f-4207-a476-e3bde5b4d52a" />

  Image - 4
  <img width="1896" height="902" alt="image" src="https://github.com/user-attachments/assets/54ea1d16-35cc-4d3b-94f1-f3abf373d798" />

