# Orbital CLI 🚀

**Orbital CLI** is a developer-focused toolkit combining a web client (Next.js) and a Node.js CLI backend to provide device-flow authentication and AI-powered command-line interactions.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Quickstart (Local Development)](#quickstart-local-development)
- [Database & Prisma](#database--prisma)
- [CLI Usage](#cli-usage)
- [Development Notes](#development-notes)
- [Contributing](#contributing)

---

## Project Overview

Orbital CLI aims to unify a web-based frontend with a command-line experience that supports device-flow authentication and AI interactions (chat, tool calls, and agent modes).

- Frontend: `client/` — Next.js + TypeScript app (UI components under `client/components`)
- Backend / CLI: `server/` — Node.js CLI + Express auth endpoints, Prisma ORM, and CLI commands under `server/src/cli`

---

## Key Features ✅

- Device-Flow OAuth login via the CLI
- Token management (store, logout, whoami)
- AI interactions from the CLI (chat, tool calls, agentic mode)
- Full Next.js web client for device verification and additional UI

---

## Repository Structure 🔧

Top-level folders:

- `client/` — Next.js application (dev: `npm run dev`, build: `npm run build`)
- `server/` — Node.js project with CLI entrypoint (`bin: orbital`) and Prisma DB schema
- `server/prisma/` — Prisma schema & migrations

---

## Prerequisites 💡

- Node.js 18+ (recommended)
- npm (or your preferred package manager)
- A database supported by Prisma (e.g., PostgreSQL, SQLite for quick tests)

---

## Quickstart (Local Development) ⚙️

1. Clone the repo:

```bash
git clone <repo-url>
cd orbital-cli
```

2. Install dependencies for client and server (run in two terminals):

```powershell
# Terminal 1 - client
cd client
npm install
npm run dev

# Terminal 2 - server
cd server
npm install
npm run dev
```

- The Next.js client runs via `next dev` (`client` scripts).
- The backend/CLI dev mode uses `nodemon` to restart on changes (`server` scripts).

> Note: Set `PORT` and other env vars in `server/.env` before starting the server (see next section).

---

## Database & Prisma 🗄️

1. Create a `.env` file in `server/` with at least the following environment variables:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
PORT=3005
GITHUB_CLIENT_ID=your_github_client_id
```

2. Run Prisma migrations and generate the client:

```powershell
cd server
npx prisma migrate dev --name init
npx prisma generate
```

(If there are existing migrations in `server/prisma/migrations`, running `npx prisma migrate deploy` may be appropriate for a production-like setup.)

---

## CLI Usage 📟

The server exposes a CLI binary named `orbital` (configured in `server/package.json` via the `bin` field). You can use it locally by linking the package:

```powershell
cd server
npm link
# now run from anywhere:
orbital --help
orbital login       # start device-auth flow
orbital logout      # clear stored token
orbital whoami      # show authenticated user
orbital wakeup      # start AI interactions
```

Sample command flows:
- `orbital login` — requests a device code and optionally opens the browser for device verification
- `orbital wakeup` — once logged in, start a chat, tool-calling mode, or agent mode

---

## Contributing 🤝

- Open issues for bugs or feature requests.
- Fork the repo, create a feature branch, and send a pull request with a clear description and tests (if applicable).
- Please add documentation or update this README when changing behavior or adding major features.
