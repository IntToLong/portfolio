# Frontend Developer Portfolio 

<img width="1920" height="919" alt="promo" src="https://github.com/user-attachments/assets/3c6723e8-0a50-4948-bbfc-7c7993ce965f" />

## About This Project

Welcome to my personal portfolio repository! This site serves as a comprehensive showcase of my skills, experience, and projects as a dedicated Frontend Developer.

The application is built as a clean, responsive single-page application using a modern stack, engaging animations, and a smooth user experience.

### Key Features

* **Dynamic Introduction:** The homepage features a dynamic, self-typing text animation to immediately introduce myself (`react-type-animation`).
* **Skills & Projects:** Clearly organized sections to detail my technical proficiencies and practical work.
* **Animations:** Uses **Motion** for fluid UI transitions and interactive scroll effects.
* **Unique Custom Cursor:** Includes an interactive custom cursor utilizing the CSS property **`mix-blend-mode: exclusion`** to create a modern, high-contrast visual blend with the content underneath.
* **Direct Contact:** Integrated contact form powered by **EmailJS/Browser** to enable direct communication without the need for a separate backend.

---

## Tech Stack

This project is built using the following modern frontend technologies:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React** with **Vite** | Provides a fast development environment and component-based architecture. |
| **Language** | **TypeScript** | Ensures code robustness, scalability, and better developer experience through static typing. |
| **Styling** | **Tailwind CSS** | Utility-first framework for rapid and precise styling and responsiveness. |
| **Animations** | **Motion** | Animation library for the web. |
| **Email Service** | **EmailJS/Browser** | Enables sending contact emails directly from the client-side. |
| **SVG Handling** | **Vite Plugin SVGR** | Transforms SVGs into manageable React components. |
| **Deployment** | **GitHub Pages** (`gh-pages`) | Hosting solution for the static application. |

---

## Getting Started Locally

Follow these steps to get a local copy of the project up and running for development.

### Prerequisites

You need to have **Node.js** (which includes npm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IntToLong/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables (Required for Contact Form)**
    You must set up a free **EmailJS** account and add your credentials to a file named **`.env`** in the root directory:
    ```env
    VITE_EMAILJS_SERVICE_ID="your_service_id"
    VITE_EMAILJS_TEMPLATE_ID="your_template_id"
    VITE_EMAILJS_PUBLIC_KEY="your_public_key"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **View the application:**
    Open your browser and navigate to the local address provided by Vite (typically `http://localhost:5173`).

---

## Deployment

The live version of this portfolio is hosted on **GitHub Pages** at: [https://IntToLong.github.io/portfolio/](https://IntToLong.github.io/portfolio/).

To build and deploy the latest changes:

1.  **Execute the deploy script:**
    ```bash
    npm run deploy
    ```
    This command automatically runs the build process and pushes the production-ready files from the `dist` folder to the `gh-pages` branch.

---

## Scripts Reference

A list of useful scripts defined in `package.json`:

* `npm run dev`: Starts the local development server.
* `npm run build`: Compiles TypeScript and bundles the project for production.
* `npm run lint`: Runs ESLint for code quality analysis.
* `npm run format`: Runs Prettier to ensure consistent code styling.
* `npm run deploy`: Builds the app and publishes it to GitHub Pages.
