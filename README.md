# 🚀 Convo – A Modern Slack Clone

Live Demo 👉 [convo-one.vercel.app](https://frontend-convo-one.vercel.app)
Source Code 👉 [GitHub Repository](https://github.com/DEV0110010/slack-clone)

Convo is a **full-stack Slack clone** built with **Node.js (Express)** on the backend and **React (Vite)** on the frontend. It provides a real-time collaborative chat experience with **authentication, channel management, pinned messages, video calls, and more.**

---

## ✨ Features

* 🔑 **User Authentication** with Clerk
* 💬 **Real-time Messaging** using Stream Chat API
* 🏷️ **Channel Management** (public & private)
* 📌 **Pinned Messages** for quick reference
* 📹 **Video Calls** (Stream Video SDK)
* 👥 **Invite Members & Member List**
* 📩 **Direct Messages (DMs)**
* ⚡ **Error Handling & Loaders** with Sentry
* 🎨 **Custom Channel Headers & Responsive UI**

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express, MongoDB
* **Frontend:** React (Vite)
* **Auth:** Clerk
* **Real-time Chat & Video:** Stream Chat + Stream Video
* **Error Tracking:** Sentry
* **Deployment:** Vercel

---

## 📂 Project Structure

```
backend/
  src/
    config/      # Env, DB, Stream, Inngest setup
    controllers/ # Chat controllers
    middleware/  # Auth protection
    models/      # Mongoose schemas
    routes/      # Express routes
  vercel.json   # Vercel deployment config

frontend/
  src/
    components/  # UI components (headers, modals, etc.)
    hooks/       # Custom React hooks
    lib/         # API & Axios setup
    pages/       # Pages (Auth, Chat, Call)
    providers/   # Context providers
    styles/      # CSS + custom themes
  vercel.json   # Vercel deployment config
```

---

## 🔗 API Endpoints

### General

* `GET /` → Health check (Hello World!)
* `GET /debug-sentry` → Throws a test error

### Chat (Authenticated)

* `GET /api/chat/token` → Get Stream Chat token (Clerk protected)

### Inngest Events

* `POST /api/inngest` → Handle user created/deleted events

---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=
MONGO_URI=
NODE_ENV=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STREAM_API_KEY=
STREAM_API_SECRET=
SENTRY_DSN=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
CLIENT_URL=
```

### Frontend `.env`

```
VITE_API_BASE_URL=
VITE_CLERK_PUBLISHABLE_KEY=
VITE_STREAM_API_KEY=
VITE_SENTRY_DSN=
```

---

## 🧩 How It Works

* **Auth:** Clerk manages users & JWTs → Axios interceptors attach tokens → Backend validates with Clerk middleware
* **Channels:** Create public/private channels → Manage invites → Join/Leave
* **DMs:** Auto-generated channel ID between two users
* **Pinned Messages:** Store/retrieve from Stream Chat
* **Video Calls:** Channel header button → Generates call URL → Posts invite message
* **Error Handling:** Sentry for both frontend & backend

---

## ▶️ Getting Started

### Prerequisites

* Node.js (LTS)
* MongoDB (local/Atlas)
* npm or yarn

### Backend Setup

```sh
cd backend
npm install
npm start
```

### Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

---

## 🚀 Deployment

Both **frontend** and **backend** are ready to deploy on **Vercel** with included `vercel.json` configs.

---

## 📜 License

MIT License – Free to use & modify ✨
