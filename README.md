# Reconrabbit

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
       cd apps/web
       npm install
       npm run dev
  Backend:
        cd apps/api
        npm install
        # Ensure DATABASE_URL in your .env points to your Postgres
        npm run dev

## Tech Stack
  Frontend: Vite + React (+ Tailwind / shadcn/ui optional)
  Backend: Node + Express (or Fastify)
  Database: PostgreSQL
  Tooling: pgAdmin, (optional) Docker Compose

License
MIT © Reconrabbit. See LICENSE for details.
