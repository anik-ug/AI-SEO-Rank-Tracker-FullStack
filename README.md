# 🔍 AI SEO Rank Tracker

An AI-powered SEO analyzer and keyword rank tracking platform built with **React, TypeScript, Node.js, Express, MongoDB, Gemini AI, and Browserbase**.

Analyze websites, identify SEO issues, track keyword rankings, and get actionable AI-powered recommendations to improve search engine performance.

---

## ✨ Features

- ⚡ Instant SEO audits for any website
- 📊 SEO performance and optimization scores
- 🔑 Keyword analysis and optimization insights
- 📈 Keyword rank tracking
- 🤖 AI-powered SEO and content quality insights
- ✅ Actionable, step-by-step SEO recommendations
- 🔐 JWT-based user authentication
- 👤 User registration and login
- 📋 SEO analysis history
- 🌐 Browser-based website analysis
- ⏰ Automated keyword rank tracking
- 📱 Responsive and modern user interface

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- React Router
- Vite
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST APIs
- Node Cron

### AI & Automation

- Google Gemini API
- Browserbase

### Development Tools

- Git
- GitHub
- npm
- ESLint

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    │     Browser         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │   Vite + TypeScript │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │      Node.js        │
                    └──────┬───────┬──────┘
                           │       │
             ┌─────────────┘       └──────────────┐
             ▼                                    ▼
    ┌─────────────────┐                  ┌─────────────────┐
    │    MongoDB      │                  │  AI / Browser   │
    │   Database      │                  │    Services     │
    └─────────────────┘                  └────────┬────────┘
                                                  │
                                      ┌───────────┴───────────┐
                                      ▼                       ▼
                              ┌──────────────┐        ┌──────────────┐
                              │   Gemini AI  │        │  Browserbase │
                              └──────────────┘        └──────────────┘
```
### Project Struture
```text

AI-SEO-Rank-Tracker/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── cron/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── docs/
│   ├── CHANGELOG.md
│   └── CONTRIBUTING.md
│
├── .gitignore
├── README.md
└── LICENSE
```
###🚀 Getting Started
---
Follow the steps below to run the project locally.

Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* MongoDB
* A Browserbase account
* A Google Gemini API key
---
1. Clone the Repository
```text
git clone https://github.com/anik-ug/AI-SEO-Rank-Tracker-FullStack.git
```
Navigate into the project:
```text
cd AI-SEO-Rank-Tracker-FullStack
```
2. Install Dependencies
Frontend
```text
cd client
npm install
```
Backend
Open another terminal or navigate back to the project root:
```text
cd ../server
npm install
```
#🔐 Environment Variables
###The project uses separate environment variables for the frontend and backend.
##⚠️ Never commit .env files or API keys to GitHub.

Backend Environment Variables
Create a file:
```text
server/.env
```
Add the required variables:

```text
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

BROWSERBASE_API_KEY=your_browserbase_api_key

BROWSERBASE_PROJECT_ID=your_browserbase_project_id

```
Replace each value with your actual credentials.
Frontend Environment Variables
Create:
```text
client/.env
```
Add:
```text
VITE_API_URL=http://localhost:5000
```

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**AnikKumar** — [@anik-ug](https://github.com/anik-ug)

---

<div align="center">

⭐ If you found this project helpful, please give it a star on GitHub! ⭐

</div>
