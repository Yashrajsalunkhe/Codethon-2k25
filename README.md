# 🚀 Codethon 2025

<div align="center">

![Codethon 2025](https://img.shields.io/badge/Codethon-2025-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, responsive web application for Codethon 2025 - The Ultimate Coding Competition**

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

Codethon 2025 is a comprehensive event management platform designed to showcase and manage one of the most anticipated coding competitions. This application provides an intuitive interface for participants to:

- Learn about the event and its rules
- Register for the competition
- View competition rounds and schedules
- Explore past event galleries
- Access FAQs and support

Built with modern web technologies, the platform ensures a seamless user experience across all devices with a focus on performance, accessibility, and visual appeal.

---

## ✨ Features

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Mode**: Full theme support with system preference detection
- **Responsive Layout**: Optimized for mobile, tablet, and desktop views
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🏆 Event Management
- **Live Countdown**: Real-time countdown to event start
- **Registration System**: Integrated registration with form validation
- **Event Calendar**: Sync events directly to your calendar
- **Round Information**: Detailed breakdown of competition rounds

### 🖼️ Content Display
- **Past Event Gallery**: Showcase of previous Codethon events
- **Institute Journey**: Timeline of the institution's achievements
- **FAQ Section**: Comprehensive answers to common questions
- **Rules & Guidelines**: Clear competition rules and regulations

### ⚡ Performance
- **Fast Load Times**: Optimized bundle size and lazy loading
- **SEO Optimized**: Meta tags and structured data for better discoverability
- **Progressive Enhancement**: Works even on slower connections

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript 5.5** - Type safety and better DX
- **Vite 5.4** - Fast build tool and dev server

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives
- **Tailwind Animate** - Animation utilities

### Routing & State
- **React Router DOM 6.26** - Client-side routing
- **TanStack Query 5.56** - Server state management
- **React Hook Form 7.53** - Form state management
- **Zod 3.23** - Schema validation

### UI Components & Libraries
- **Lucide React** - Icon library
- **Recharts** - Chart library
- **Embla Carousel** - Carousel/slider
- **date-fns** - Date utility library
- **Sonner** - Toast notifications
- **Vaul** - Drawer component

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher)
- **npm** (v9.0 or higher) or **bun** (v1.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Codethon-2k25.git
   cd Codethon-2k25
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using bun:
   ```bash
   bun install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
# or
bun run build
```

Preview the production build:

```bash
npm run preview
# or
bun run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
bun run lint
```

---

## 📁 Project Structure

```
Codethon-2k25/
├── public/                  # Static assets
│   ├── robots.txt          # SEO robots file
│   └── EventGallery/       # Event images
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Registration.tsx # Registration form
│   │   └── ...            # Other components
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── useAccessibility.ts
│   │   └── useScrollToTop.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Helper utilities
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── CollegeInfo.tsx # College information
│   │   └── NotFound.tsx   # 404 page
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies and scripts
```

---

## 🧩 Key Components

### Core Components

| Component | Description |
|-----------|-------------|
| `Header` | Navigation bar with theme toggle |
| `Hero` | Landing section with CTA |
| `CountdownTimer` | Live event countdown |
| `Registration` | Event registration form |
| `Rounds` | Competition round details |
| `Rules` | Competition rules and guidelines |
| `Benefits` | Event benefits showcase |
| `FAQ` | Frequently asked questions |
| `PastEventGallery` | Previous event photos |
| `InstituteJourney` | Timeline of achievements |
| `Footer` | Site footer with links |

### Utility Components

| Component | Description |
|-----------|-------------|
| `ThemeProvider` | Dark/light mode management |
| `LoadingScreen` | Loading state component |
| `BackToTop` | Scroll to top button |
| `Dock` | Floating action dock |

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### Environment Variables

Create a `.env` file in the root directory (if needed):

```env
VITE_API_URL=your_api_url
VITE_APP_TITLE=Codethon 2025
```

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Yashraj**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

**Project Link**: [https://github.com/yourusername/Codethon-2k25](https://github.com/yourusername/Codethon-2k25)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- All contributors who helped make this project better!

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by the Codethon Team

</div>