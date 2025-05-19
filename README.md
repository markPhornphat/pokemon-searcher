# Pokémon Search App 🔍

A simple React-based web application to search for Pokémon and display their details — including name, image, types, and evolutions — using the [GraphQL Pokémon API](https://graphql-pokemon2.vercel.app/).  
This project uses **Apollo Client**, **TypeScript**, **Jest**, and **React Testing Library**.

---

## 🚀 Features

- Search for Pokémon by name
- Display Pokémon image, types (e.g., Grass, Poison), and evolutions
- Responsive and styled UI
- Unit and integration testing using Jest

---

## 🛠️ Tech Stack

- **Framework:** React (with TypeScript)
- **GraphQL Client:** Apollo Client
- **API:** [graphql-pokemon2.vercel.app](https://graphql-pokemon2.vercel.app/)
- **Testing:** Jest, React Testing Library
- **Styling:** TailwindCSS

---

## 📦 Installation

```bash
git clone https://github.com/your-username/pokemon-search-app.git
cd pokemon-search-app
npm install
```

---

## 🧪 Running Tests

To run tests (including input interaction and rendering):

```bash
npm test
```

Sample tests cover:

- Inputting a Pokémon name and verifying the result
- Confirming the types (e.g., Grass and Poison for Bulbasaur)
- Ensuring components render correctly via `@testing-library/react`

> You can find tests in `app/app.test.tsx`.

---

## ▶️ Running the Application

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---
