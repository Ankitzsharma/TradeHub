# TradeHub

A full‑stack trading platform composed of three apps:

- `backend`: Node.js/Express server with MongoDB (Mongoose) for holdings, positions, and orders.
- `dashboard`: React trading UI showing holdings/positions, charts, and basic order entry.
- `frontend`: React landing/marketing site with pages like Home, Pricing, Support, and a placeholder Signup.

The intended user flow: users visit the landing site, sign up/sign in, and then access the dashboard. At present, the signup page is a placeholder and dashboard access is not gated by authentication.

---

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Roadmap](#roadmap)

---

## Project Description
TradeHub aims to provide a clean, responsive interface for retail traders to view holdings and positions, visualize data with charts, and place basic orders. A public landing site communicates the brand and funnels users to sign up.

- Backend provides REST APIs for reading holdings/positions and creating orders. MongoDB stores data via Mongoose schemas.
- Dashboard consumes backend APIs to render tables and charts. Order placement is wired to the backend.
- Frontend is the marketing site and currently includes a `/signup` page placeholder.

### Project Structure
```
TradeHub/
├── backend/            # Express + Mongoose server
│   ├── index.js
│   ├── model/
│   └── schemas/
├── dashboard/          # React trading dashboard (CRA)
│   └── src/
└── frontend/           # React landing site (CRA)
    └── src/
```

---

## Installation
Prerequisites:
- Node.js 18+ and npm
- A running MongoDB instance (local or cloud) and a connection string

Install dependencies for each app:

```bash
# Backend
cd backend
npm install

# Dashboard
cd ../dashboard
npm install

# Frontend (landing site)
cd ../frontend
npm install
```

---

## Usage
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   - Server listens on `PORT` from `.env` (defaults to `3002`).
   - Connects to MongoDB via `MONGO_URL`.

2. Start the dashboard app:
   ```bash
   cd dashboard
   npm start
   ```
   - Opens the trading dashboard in the browser (default CRA dev port).
   - Holdings are fetched from the backend; positions may be static until aligned to the API.

3. Start the landing site:
   ```bash
   cd frontend
   npm start
   ```
   - Visit `/signup` to see the placeholder signup page.

### Data seeding (optional)
There are commented routes in `backend/index.js` to seed sample holdings and positions. You may temporarily uncomment `/addHoldings` and `/addPositions` for local seeding, call them once, then re‑comment.

---

## Configuration
### Backend `.env`
Create a `.env` file in `backend/` with:
```
PORT=3002
MONGO_URL=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
```
Optional (future authentication):
```
JWT_SECRET=replace-with-a-strong-secret
```

### CORS
Restrict CORS origins in production to your landing and dashboard domains. If you later use cookie‑based auth, enable credentials and set secure cookie flags.

### Frontend/Dashboard API base URL
Current code references `http://localhost:3002` directly. For flexibility, you can introduce an env variable and shared axios client:
```
REACT_APP_API_URL=http://localhost:3002
```
Then use `axios.create({ baseURL: process.env.REACT_APP_API_URL, withCredentials: true })` and replace hardcoded URLs.

---

## API Reference
Base URL: `http://localhost:3002`

- `GET /allHoldings`
  - Returns an array of holding objects: `{ name, qty, avg, price, net, day }`.

- `GET /allPositions`
  - Returns an array of position objects: `{ product, name, qty, avg, price, net, day, isLoss }`.

- `POST /newOrder`
  - Creates a new order.
  - Body (JSON):
    ```json
    { "name": "TCS", "qty": 1, "price": 3194.8, "mode": "BUY" }
    ```
  - Response: `200 OK` with confirmation (consider returning `201 Created` and the created resource).

> Planned: `/auth/signup`, `/auth/login`, `/auth/logout`, `/auth/me` to gate dashboard access to registered users.

---

## Contribution Guidelines
- Fork the repo and create feature branches (`feature/auth`, `fix/cors`, etc.).
- Add tests for new features when applicable; avoid introducing breaking changes without discussion.
- Keep changes focused; prefer small, reviewable pull requests.
- Follow existing code style; use descriptive names and avoid secrets in code.
- Document environment requirements and update this README when adding new configuration.
- Write clear commit messages (imperative mood, short subject, optional body).

---

## License
This project uses the ISC license (as specified in `backend/package.json`). If you intend to distribute the project, add a top‑level `LICENSE` file with the full ISC text and ensure all packages reflect the same license.

---

## Roadmap
- Implement authentication (JWT httpOnly cookies or `passport` sessions) and protect dashboard routes.
- Add input validation (`zod`/`joi`), error handling, and standardized response codes.
- Replace hardcoded API URLs with env‑driven config; centralize axios client with `withCredentials` when using cookies.
- Align positions view to backend API and add loading/error states.
- Improve Mongoose schemas (required fields, defaults, indexes) and connect DB before server starts.
- Add logging (`morgan`) and minimal observability.
- Add unit/integration tests and CI to run them.
- Consider migrating CRA apps to Vite or align React version for stability.

---

## Acknowledgements
- Built with Express, Mongoose, React, Chart.js, Axios, and React Router.