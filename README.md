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

Follow the steps below to run the project locally.

Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* MongoDB
* A Browserbase account
* A Google Gemini API key