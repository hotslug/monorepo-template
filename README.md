# Monorepo Template: Frontend + Backend

This is a fullstack monorepo project built with:

- **Frontend**: Vite + React + TypeScript + TailwindCSS
- **Backend**: Express + TypeScript + MongoDB (Mongoose)
- **Git Hooks**: Husky + Commitlint (optional)

> **Note**: This is a template repository. If you've created a new repository from this template, it won't receive automatic updates. To update your repository with changes from this template, you'll need to manually merge the changes.

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

**Install all dependencies (frontend, backend, and root):**

```bash
# From root directory
npm install
```

**To add a package to a specific workspace:**

```bash
# Add to frontend
npm install <package> -w frontend

# Add to backend
npm install <package> -w backend
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

**Security Note**: For better security, consider storing sensitive environment variables in 1Password:

1. Create a new item in 1Password
2. Add your environment variables as fields
3. Use 1Password CLI or browser extension to access these values when needed
4. Never commit `.env` files to version control

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
