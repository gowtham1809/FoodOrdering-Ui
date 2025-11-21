# Food Ordering — Frontend

Short description: React + Vite frontend for a simple food-ordering web app (menu, cart, table booking, order history).

This repository contains the frontend client for a local food-ordering application built with React and Vite. The app provides a menu browsing experience, cart management, table booking, and an order history view.

**Features:**

- Browse categorized menu items with images and prices.
- Add/remove items to/from the cart with quantity management.
- Table booking flow with basic booking form.
- View past orders in an order history page.
- Responsive layout with a top navigation and footer.

**Tech Stack:**

- React (JSX)
- Vite as the dev server and build tool
- Plain CSS modules and component-level styles
- Context API for cart state (`src/context/cartContext.jsx`)

Quick Start

1. Install dependencies

   ```powershell
   cd frontend
   npm install
   ```

2. Run the dev server

   ```powershell
   npm run dev
   ```

3. Open the app in your browser at the URL printed by Vite (usually `http://localhost:5173`).

Build for production

```powershell
npm run build
```

Project Structure (key files)

- `src/main.jsx` — App entry
- `src/Routes.jsx` — Route definitions
- `src/App.jsx` — Main layout + routing wrapper
- `src/components` — Reusable UI components (`Cart.jsx`, `Navbar`, `Footer`, `OrderHistory`, `TableBooking`)
- `src/context/cartContext.jsx` — Cart state management

Environment / API

The frontend expects an API for order submission and (optionally) authentication. Update `src/api.js` to point to your backend endpoints or mock them during development.

Contributing

- Fork the repo and open a pull request with a clear description of your changes.
- Follow existing styling and component structure.

Suggested GitHub repository description (one-liner)

`React + Vite frontend for a local food-ordering app with cart, table booking and order history.`

Suggested GitHub topics/tags: `react`, `vite`, `food-ordering`, `restaurant`, `javascript`, `frontend`



Contact

For questions or improvements, open an issue or a PR in this repository.
