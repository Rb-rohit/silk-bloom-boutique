# Silk Bloom Boutique

Silk Bloom Boutique is a modern boutique e-commerce website for premium sarees and apparel. The app includes a customer storefront, product browsing, wishlist/cart flows, and an admin dashboard for managing products.

## Overview

This project is split into two main parts:

- Frontend: React + Vite + React Router
- Backend: Express + MongoDB

The storefront lets customers browse products, view details, add items to cart or wishlist, and complete purchase-related pages. The admin section allows adding, editing, and deleting products through the API.

## Features

- Responsive storefront landing page and category browsing
- Product listing and product detail pages
- Wishlist and cart flows
- Checkout, order tracking, and account pages
- Admin dashboard for managing inventory
- MongoDB-backed product API
- Vercel-friendly frontend configuration with API URL override

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Axios
- Lucide React

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS and dotenv

## Project Structure

```bash
silk-bloom-boutique/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express API
│   ├── models/
│   ├── routes/
│   ├── seedProducts.js
│   ├── server.js
│   └── package.json
└── README.md              # Project overview (optional at root level)
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+
- npm
- MongoDB instance or MongoDB Atlas connection string

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/silk-bloom-boutique
```

If you are running the frontend against a local backend, also set the frontend API URL before starting the client:

```bash
cd client
set VITE_API_URL=http://localhost:5000
```

On macOS/Linux use:

```bash
export VITE_API_URL=http://localhost:5000
```

## Installation

### 1. Install frontend dependencies

```bash
cd client
npm install
```

### 2. Install backend dependencies

```bash
cd ../server
npm install
```

## Running the App

### Start the backend

```bash
cd server
npm run dev
```

The API will run on the port defined in your `.env` file.

### Start the frontend

Open a new terminal:

```bash
cd client
npm run dev
```

Then open the local URL shown by Vite in the browser.

## Seed Sample Data

To populate MongoDB with demo products:

```bash
cd server
npm run seed
```

## Production Build

Build the frontend for production:

```bash
cd client
npm run build
```

## Admin Access

The app includes an admin interface under the following routes:

- `/admin`
- `/admin/add-product`
- `/admin/products`
- `/admin/edit-product/:id`

## API Endpoints

The backend exposes product data through:

- `GET /api/products`
- `POST /api/products`
- `GET /api/products/:id`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Notes

- The frontend defaults to the deployed Render API in `client/src/config/api.js` when no `VITE_API_URL` is defined.
- For local development, overriding `VITE_API_URL` is the easiest way to point the client at your local Express server.

## License

This project is for demo and learning purposes.
