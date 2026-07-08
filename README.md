# 3D Interactive Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Three.js. This project showcases my professional experience, skills, and projects through an immersive 3D interface.

## Features

- **3D Interactive Scene**: Engaging three-dimensional environment created with Three.js
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop and mobile devices
- **Dark Theme**: Professional dark interface with smooth animations and transitions
- **Multiple Sections**:
  - Hero section with 3D scene
  - About me
  - Professional experience
  - Technical skills
  - Projects showcase
  - Education and certifications
  - Contact information
- **Smooth Navigation**: Easy-to-use navigation with section scrolling
- **Performance Optimized**: Built with modern performance best practices
- **Custom Cursor**: Unique custom cursor interaction

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Routing**: TanStack Router
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion

## Installation

### Prerequisites
- Node.js 18+ or Bun
- Git

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Rohit18-06/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
bun install
# or if using npm
npm install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Development
```bash
bun run dev          # Start development server with hot reload
bun run build:dev    # Build in development mode
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Production
```bash
bun run build        # Create optimized production build
bun run preview      # Preview production build locally
```

## Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── Rohit_Oruganti_Resume.pdf
├── src/
│   ├── components/
│   │   ├── portfolio/        # Portfolio-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroScene.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── EducationAndCerts.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── ThemeProvider.tsx
│   │   └── ui/              # Reusable UI components (Radix UI based)
│   ├── data/                # Static data files
│   │   └── resume.ts
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and helpers
│   ├── routes/              # TanStack Router configuration
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── eslint.config.js
```

## Key Components

- **Hero.tsx**: Main landing section with 3D scene
- **HeroScene.tsx**: Three.js 3D scene setup and rendering
- **About.tsx**: Professional background and introduction
- **Experience.tsx**: Work experience timeline
- **Skills.tsx**: Technical skills display
- **Projects.tsx**: Showcase of notable projects
- **EducationAndCerts.tsx**: Education background and certifications
- **Contact.tsx**: Contact information and call-to-action
- **Navbar.tsx**: Navigation menu
- **CustomCursor.tsx**: Custom cursor implementation

## Future Improvements

- [ ] Add interactive project filtering
- [ ] Implement email contact form with backend integration
- [ ] Add dark/light theme toggle
- [ ] Performance optimization for 3D scene
- [ ] Blog section for technical articles
- [ ] Animation improvements and micro-interactions
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Progressive Web App (PWA) features
- [ ] Mobile-optimized 3D scene

## License

This project is open source and available under the MIT License.

## Author

**Rohitoruganti**

- GitHub: [@Rohit18-06](https://github.com/Rohit18-06)
- Email: orugantivenkatarohit2005@gmail.com

---

Feel free to explore the code, fork the repository, and use it as inspiration for your own portfolio!
