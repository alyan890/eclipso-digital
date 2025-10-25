# Agency.ai

A modern, responsive React agency website featuring animated navigation, dark/light theme toggle, and mobile sidebar support.

## Features

- **Animated Navbar:** Smooth entrance animation using Framer Motion.
- **Dark/Light Theme:** Toggle between dark and light modes with persistent state.
- **Responsive Design:** Mobile sidebar navigation and adaptive layouts.
- **Reusable Components:** Modular structure for easy maintenance and scalability.
- **Tailwind CSS:** Utility-first styling for rapid UI development.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/agency.ai.git
   cd agency.ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
  components/
    Navbar.jsx
    ThemeToggleBtn.jsx
    ...
  assets/
    assets.js
    ...
  App.jsx
  index.js
  ...
```

## Customization

- **Logo & Icons:** Replace images in `src/assets/` with your own branding.
- **Theme Colors:** Adjust Tailwind config or utility classes for your palette.
- **Navigation Links:** Edit `Navbar.jsx` to update or add new sections.

## Dependencies

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## License

This project is licensed under the MIT License.

---

**Made with ❤️ using React and Tailwind CSS**