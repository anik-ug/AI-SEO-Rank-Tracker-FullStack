# 🔍 AI SEO Rank Tracker

An AI-powered full-stack SEO analyzer and keyword rank tracking platform built with **React, TypeScript, Node.js, Express.js, MongoDB, Gemini AI, and Browserbase**.

Analyze websites, identify SEO issues, track keyword rankings, evaluate content quality, and receive actionable AI-powered recommendations to improve search engine performance.

---

## 🚀 Features

- ⚡ Instant SEO audits for any website
- 📊 SEO performance and optimization scores
- 🔑 Keyword analysis and optimization insights
- 📈 Automated keyword rank tracking
- 🤖 AI-powered SEO and content quality analysis
- ✅ Actionable, step-by-step SEO recommendations
- 🔐 JWT-based authentication
- 👤 User registration and login
- 📋 SEO analysis history
- 🌐 Browser-based website analysis
- ⏰ Scheduled keyword rank tracking
- 📱 Responsive and modern user interface
- 🔒 Protected APIs and authenticated user workflows

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
- REST APIs
- JWT Authentication
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

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │      Browser        │
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
                    └──────┬────────┬─────┘
                           │        │
                ┌──────────┘        └──────────────┐
                ▼                                  ▼
       ┌─────────────────┐                ┌─────────────────┐
       │     MongoDB     │                │ AI & Automation │
       │    Database     │                │    Services     │
       └─────────────────┘                └────────┬────────┘
                                                   │
                                      ┌────────────┴────────────┐
                                      ▼                         ▼
                              ┌──────────────┐          ┌──────────────┐
                              │  Gemini AI   │          │  Browserbase │
                              └──────────────┘          └──────────────┘
```

---

## 📁 Project Structure

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
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm
- Git
- MongoDB / MongoDB Atlas
- Google Gemini API key
- Browserbase account and API credentials

---

### 1. Clone the Repository

```bash
git clone https://github.com/anik-ug/AI-SEO-Rank-Tracker-FullStack.git
cd AI-SEO-Rank-Tracker-FullStack
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

Open another terminal or navigate back to the project root:

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

The application requires environment variables for the frontend and backend.

> ⚠️ **Never commit `.env` files or API keys to GitHub.**

### Backend Environment Variables

Create:

```text
server/.env
```

Add the required configuration:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

BROWSERBASE_API_KEY=your_browserbase_api_key

BROWSERBASE_PROJECT_ID=your_browserbase_project_id
```

Replace each value with your actual credentials.

---

### Frontend Environment Variables

Create:

```text
client/.env
```

Add:

```env
VITE_API_URL=http://localhost:5000/api
```

If your frontend uses a different environment variable name, update this value according to the API configuration used in the project.

---

## ▶️ Running the Application

The frontend and backend run separately during local development.

### Start the Backend

From the project root:

```bash
cd server
npm run dev
```

The backend should start on:

```text
http://localhost:5000
```

---

### Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Vite will provide a local URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🔄 Application Workflow

The application follows the workflow below:

```text
User
 │
 ▼
Enter Website URL
 │
 ▼
SEO Analysis Request
 │
 ▼
Backend API
 │
 ├──────────────► Browserbase
 │                    │
 │                    ▼
 │              Website Analysis
 │
 ├──────────────► SEO Processing
 │
 ├──────────────► Gemini AI
 │                    │
 │                    ▼
 │              AI SEO Insights
 │
 ▼
Store Analysis
 │
 ▼
MongoDB
 │
 ▼
SEO Report + Recommendations
```

### Keyword Tracking Workflow

```text
User
 │
 ▼
Add Target Keywords
 │
 ▼
Create Tracking Configuration
 │
 ▼
Scheduled Background Job
 │
 ▼
Fetch Ranking Data
 │
 ▼
Store Rank History
 │
 ▼
Display Ranking Trends
```

---

## 🔑 Authentication

The application uses JWT-based authentication.

Supported workflows include:

- User registration
- User login
- JWT token-based authentication
- Protected API routes
- Authenticated SEO analysis
- User-specific analysis history
- Secure session handling

Authentication ensures that user-specific SEO reports and tracking configurations remain protected.

---

## 📊 SEO Analysis

The SEO analyzer evaluates websites across multiple areas, including:

- SEO configuration
- Website structure
- Content quality
- Keyword usage
- Metadata
- Performance-related signals
- Optimization opportunities

The generated analysis provides scores and actionable recommendations to help improve overall search performance.

---

## 🔑 Keyword Rank Tracking

Users can configure keywords for tracking and monitor their search ranking over time.

The platform supports:

- Keyword tracking
- Automated rank checks
- Scheduled background jobs
- Rank history
- Ranking trends
- Multiple tracked keywords

This allows users to monitor SEO performance continuously instead of performing manual checks.

---

## 🤖 AI-Powered SEO Insights

Google Gemini is used to analyze website content and SEO-related information.

The AI layer helps generate:

- SEO insights
- Content quality observations
- Optimization suggestions
- Actionable recommendations
- Potential improvement areas

The goal is to convert raw SEO analysis into practical recommendations that users can act on.

---

## 🌐 Browser-Based Analysis

Browserbase is used for browser-based website analysis.

This enables the application to interact with websites in a browser environment and collect information that may not be available through simple HTTP requests.

---

## 📡 API Overview

The backend exposes REST APIs for major application workflows.

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### SEO Analysis

```http
POST /api/analysis
GET /api/analysis
GET /api/analysis/:id
```

### Keyword Tracking

```http
POST /api/keywords
GET /api/keywords
DELETE /api/keywords/:id
```

> **Note:** Endpoint names may vary depending on the current implementation. Refer to the route files inside `server/routes/` for the complete API definition.

---

## 🧪 Development

Run the frontend and backend independently during development.

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
npm run dev
```

Before committing changes, make sure that:

- ESLint passes
- Environment variables are configured locally
- API requests work correctly
- Authentication flows are tested
- Sensitive credentials are not committed

---

## 🔒 Security

The project follows several security practices:

- JWT-based authentication
- Protected API routes
- Environment-based secret management
- Password protection through authentication workflows
- Input validation
- Separation of frontend and backend responsibilities
- No API credentials committed to source control

---

## 🚧 Future Improvements

Potential improvements include:

- 📈 Historical keyword ranking charts
- 🔔 Rank change notifications
- 📊 Advanced SEO dashboards
- 🏆 Competitor rank tracking
- 📑 Exportable SEO reports
- 🌍 Multi-location rank tracking
- ⚡ Improved background job processing
- 🧪 Automated backend and frontend testing
- 🐳 Docker-based deployment
- ☁️ Production cloud deployment

---

## 📸 Screenshots

Add screenshots of the main application screens here.

Recommended screenshots:

```text
docs/screenshots/
├── dashboard.png
├── seo-analysis.png
├── keyword-tracking.png
└── analysis-history.png
```

Then embed them:

```markdown
![Dashboard](docs/screenshots/dashboard.png)

![SEO Analysis](docs/screenshots/seo-analysis.png)

![Keyword Tracking](docs/screenshots/keyword-tracking.png)

![Analysis History](docs/screenshots/analysis-history.png)
```

---

## 🌍 Live Demo

Coming soon.

Once deployed, add your production URL here:

```text
https://your-live-domain.com
```

---

## 📚 Documentation

Additional project documentation is available in the `docs/` directory.

```text
docs/
├── CHANGELOG.md
└── CONTRIBUTING.md
```

---

## 🤝 Contributing

Contributions are welcome.

### 1. Fork the Repository

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/AI-SEO-Rank-Tracker-FullStack.git
```

### 3. Create a New Branch

```bash
git checkout -b feature/your-feature
```

### 4. Make Your Changes

Implement and test your changes locally.

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature"
```

### 6. Push Your Branch

```bash
git push origin feature/your-feature
```

### 7. Open a Pull Request

Open a Pull Request on GitHub with a description of your changes.

---

## 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

## 👨‍💻 Author

**Anik Kumar**

B.Tech -- Electronics & Communication Engineering  
Indian Institute of Information Technology, Ranchi

### Connect

- **GitHub:** [anik-ug](https://github.com/anik-ug)
- **LinkedIn:** [Anik Kumar](https://www.linkedin.com/in/anik-kumar-6a8397287/)

---

⭐ If you find this project useful, consider giving the repository a star!
