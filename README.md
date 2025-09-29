# Reconrabbit 🐇  
**Your Life OS** — organize work, school, and personal life into focused workspaces with AI assistance.

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Node%20%7C%20Postgres-informational)

> **TL;DR:** Frontend runs with `npm run dev`. Backend runs with `npx nodemon server.js` inside `backend/`. Postgres schema is in `db/schema.sql`. pgAdmin bookmarks live in `infra/pgadmin/servers.json` (no passwords).

---

##  Features

- **Life Workspaces:** Separate “Work”, “School”, “Personal”, “Freelance”.
- **Personal Intelligence:** AI-assisted capture, organization, and planning.
- **Unified Hub:** Quick access to email, notes, tasks, links.
- **Analytics:** Time/use dashboards per workspace.
- **Fast UX:** Vite + React + Tailwind.
- **Postgres-first:** Clear schema dump; easy local setup.

---

## 🗂️ Repo Layout


Features

- Life Workspaces: Separate “Work”, “School”, “Personal”, “Freelance”.
- Personal Intelligence: AI-assisted capture, organization, and planning.
- Unified Hub: Quick access to email, notes, tasks, links (extensible).
- Analytics: Time/use dashboards per workspace.
- Fast UX: Vite + React + Tailwind (snappy, keyboard-first).
- Postgres-first: Clear schema + migrations ready; reproducible local dev.

## Start
1. Clone
  git clone https://github.com/<you>/reconrabbit.git
  cd reconrabbit
  cp .env.example .env   # then open .env and set local values

2. Database options
  - Install PostgreSQL.
  - Create DB: psql -U postgres -c "CREATE DATABASE appdb;"
  - Restore schema: psql -U postgres -d appdb -f db/schema.sql
  - Import pgAdmin servers: pgAdmin → File → Import/Export Servers… → Import infra/pgadmin/servers.json

3. Run the app
   Frontend:
       npm install
       npm run dev
  Backend:
        cd backend
        npm install
        npx nodemon server.js

## Tech Stack
  Frontend: Vite + React (+ Tailwind / shadcn/ui optional)
  Backend: Node + Express (or Fastify)
  Database: PostgreSQL
  Tooling: pgAdmin, (optional) Docker Compose

License
MIT © Reconrabbit. See LICENSE for details.
