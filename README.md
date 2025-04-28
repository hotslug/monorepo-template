# Monorepo Template: Frontend + Backend

This is a fullstack monorepo project built with:

- **Frontend**: Vite + React + TypeScript + TailwindCSS
- **Backend**: Express + TypeScript + MongoDB (Mongoose)
- **Git Hooks**: Husky + Commitlint (optional)

---

## 🏗 Project Structure

```
/monorepo-template
 ├── /frontend   # Vite + React client
 ├── /backend    # Express server with MongoDB
 ├── /.husky     
 ├── package.json
 ├── .gitignore
 └── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/monorepo-template.git
cd monorepo-template
```

### Install Dependencies

**Install frontend and backend dependencies:**

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

**(Optional)** Install root dev dependencies if using Husky:

```bash
# From root
npm install
```

---

## 🛆 Running the Project

**Start the backend server:**

```bash
cd backend
npm run dev
```

Backend will run on `http://localhost:3000`

**Start the frontend dev server:**

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173` (with proxy setup for API calls).

---

## 🔒 Authentication

- Users can **register** and **login**.
- Authentication uses **JWT tokens** stored in localStorage.
- Protected routes on both backend and frontend.

---

## ⚙️ Environment Variables

Create `.env` files in `/backend` (and optionally `/frontend` if needed).

Example `/backend/.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🧹 Git Hooks and Commit Linting (Optional)

- **Husky** handles pre-commit hooks.
- **Commitlint** enforces commit message standards.

To activate hooks:

```bash
npm run prepare
```

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

---

## 🚀 Deployment (Coming Soon)

Instructions for deploying frontend (Vercel/Netlify) and backend (Render/Heroku) will be added.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
