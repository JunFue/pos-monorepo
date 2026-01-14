# POS Monorepo

Welcome to the POS Monorepo! This project is a centralized repository for the POS system, including the Admin dashboard and the POS application.

## Project Structure

This monorepo uses `pnpm` workspaces and `Turbo` for efficient management and builds.

- `apps/admin`: The Admin dashboard (Next.js).
- `apps/pos`: The Point of Sale application (Next.js).
- `packages/ui`: Shared UI components.
- `packages/utils`: Shared utility functions.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Monorepo Tools**: [pnpm](https://pnpm.io/) & [Turbo](https://turbo.build/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pos-monorepo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Applications

You can run both applications simultaneously using Turbo:

```bash
pnpm dev
```

#### Running Specific Applications

If you want to run only one application, you can use the `--filter` flag:

**Admin Dashboard:**
```bash
pnpm --filter junlink-admin dev
```
The Admin dashboard will be available at `http://localhost:3000` (or the next available port).

**POS Application:**
```bash
pnpm --filter pos-next dev
```
The POS application will be available at `http://localhost:3001` (or the next available port).

### Building the Applications

To build all applications:
```bash
pnpm build
```

To build a specific application:
```bash
pnpm --filter <app-name> build
```

## Developer Guide

### Adding Dependencies

- **Shared Dependencies**: Add to the root `package.json` if the dependency is used by multiple apps/packages.
  ```bash
  pnpm add <package-name> -w
  ```
- **App-Specific Dependencies**: Add to the specific app's `package.json`.
  ```bash
  pnpm --filter <app-name> add <package-name>
  ```

### Creating Shared Packages

If you have logic or components that should be shared, create a new package in the `packages/` directory and link it in the `apps/` `package.json`.

## Best Practices

- Keep the root `package.json` clean and only for shared dependencies.
- Use `turbo` for all build and dev scripts to leverage caching.
- Ensure all new components are added to `packages/ui` if they are reusable.
