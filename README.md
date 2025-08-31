# Slack Clone

A full-stack Slack clone built with Node.js (Express) for the backend and React (Vite) for the frontend. This project demonstrates real-time chat, authentication, channel management, and more.

## Features
- User authentication
- Real-time messaging
- Channel creation and management
- Invite users to channels
- Pinned messages
- Video calls (if supported)
- Error handling and loading states

## Tech Stack
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Vite
- **Styling:** CSS
- **Other:** Stream Chat API, Axios

## Project Structure
```
backend/
MIT

---

# API Endpoints

## Backend Endpoints

### General
- `GET /` — Health check, returns "Hello World!"
- `GET /debug-sentry` — Throws a test error for Sentry debugging

### Authenticated Chat Endpoints
- `GET /api/chat/token` — Get a Stream Chat token for the authenticated user
   - Requires authentication (Clerk)

### Inngest Event Endpoints
- `POST /api/inngest` — Inngest event handler (user created/deleted)
   - Used for syncing users between Clerk, MongoDB, and Stream Chat

## Middleware
- Clerk authentication middleware (`clerkMiddleware`)
- Custom route protection (`protectRoute`)

## Models
- `User` (MongoDB): email, name, image, clerkId

---

# Features

## Core Features
- User authentication (Clerk)
- Real-time messaging (Stream Chat)
- Channel creation (public/private)
- Channel management (invite, join, leave)
- Direct messages (DMs)
- Pinned messages
- Video calls (Stream Video)
- Error handling (Sentry, custom loaders)
- Invite users to channels
- Members list and selection
- Custom channel headers and previews
- Responsive UI and custom themes

## Frontend Features
- Auth page (login/signup)
- Home page (chat, channel list, members)
- Call page (video calls)
- Modals for creating channels, inviting members, viewing pinned messages
- Inline error and loader components

---

# Documentation

## Environment Variables

### Backend `.env`
- `PORT` — Server port
- `MONGO_URI` — MongoDB connection string
- `NODE_ENV` — Environment (development/production)
- `CLERK_PUBLISHABLE_KEY` — Clerk frontend key
- `CLERK_SECRET_KEY` — Clerk backend key
- `STREAM_API_KEY` — Stream Chat API key
- `STREAM_API_SECRET` — Stream Chat API secret
- `SENTRY_DSN` — Sentry DSN for error tracking
- `INNGEST_EVENT_KEY` — Inngest event key
- `INNGEST_SIGNING_KEY` — Inngest signing key
- `CLIENT_URL` — Frontend URL

### Frontend `.env`
- `VITE_API_BASE_URL` — Backend API base URL
- `VITE_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `VITE_STREAM_API_KEY` — Stream Chat API key
- `VITE_SENTRY_DSN` — Sentry DSN

## How Authentication Works
- Uses Clerk for user management and JWT authentication
- Axios interceptors attach tokens to requests
- Backend checks authentication via Clerk middleware

## How Channels Work
- Users can create public or private channels

## How Direct Messages Work
- DMs are created between two users
- Channel ID is generated from user IDs
- DMs are not shown in the channel list if they match DM criteria

## How Video Calls Work
- Video calls are started from channel header
- Generates a call URL and sends a message in the channel
- Uses Stream Video SDK for call management

## Error Handling
- Sentry is used for error tracking (frontend and backend)
- Custom error messages and loaders are shown in the UI

## Deployment
- Both frontend and backend are ready for Vercel deployment
- See `vercel.json` in each folder for config

## Useful Code References

### Backend
- `src/server.js` — Express server setup
- `src/config/env.js` — Environment config
- `src/config/db.js` — MongoDB connection
- `src/config/stream.js` — Stream Chat API integration
- `src/config/inngest.js` — Inngest event functions
- `src/controllers/chat.controller.js` — Chat token controller
- `src/middleware/auth.middleware.js` — Route protection
- `src/models/user.model.js` — User schema
- `src/routes/chat.route.js` — Chat routes

### Frontend
- `src/App.jsx` — Main app and routing
- `src/pages/AuthPage.jsx` — Auth page
- `src/pages/HomePage.jsx` — Main chat UI
- `src/pages/CallPage.jsx` — Video call UI
- `src/components/` — UI components (modals, headers, previews, etc.)
- `src/hooks/useStreamchat.js` — Stream Chat hook
- `src/lib/api.js` — API calls
- `src/lib/axios.js` — Axios setup
- `src/providers/AuthProvider.jsx` — Auth context
- `src/styles/` — Custom CSS and themes

---

## Example API Usage

### Get Stream Token (Frontend)
```js
    models/        # Mongoose models
    routes/        # Express routes
  instrument.mjs   # Instrumentation script
  package.json     # Backend dependencies
  vercel.json      # Vercel deployment config


### Create Channel (Frontend)
```js
frontend/
  src/
    components/    # React components

---

## License
MIT
    hooks/         # Custom hooks
    lib/           # API and Axios setup
    pages/         # Page components
    providers/     # Context providers
    styles/        # CSS files
  public/          # Static assets
  package.json     # Frontend dependencies
  vite.config.js   # Vite config
  vercel.json      # Vercel deployment config
```

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in `.env`.
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm run dev
   ```

## Deployment
Both frontend and backend are configured for Vercel deployment. See `vercel.json` in each folder for details.

## License
MIT
