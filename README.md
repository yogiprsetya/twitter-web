# TwitterWeb

A Twitter/X clone web application built with modern web technologies. This project is a monorepo (multiple projects in one repository) that includes both desktop and mobile versions of the application, plus a shared UI component library.

## What is this project?

This is a learning project that recreates the Twitter/X social media platform. It includes:

- **Desktop version** (`x-desktop`) - A full-featured web app for desktop browsers
- **Mobile version** (`x-mobile`) - A mobile-optimized version of the app
- **UI Library** (`ui`) - Reusable components shared between desktop and mobile apps

## Technologies Used

This project uses:

- **Next.js** - A React framework for building web applications
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - JavaScript with type checking for better code quality
- **Tailwind CSS** - A utility-first CSS framework for styling
- **Nx** - A tool for managing monorepos (multiple projects in one codebase)
- **Storybook** - A tool for building and testing UI components in isolation

## Prerequisites

Before you start, make sure you have these installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) - Package manager for JavaScript

To check if you have them installed, open your terminal and run:

```sh
node --version
npm --version
```

## Getting Started

### Step 1: Install Dependencies

First, you need to install all the required packages. Open your terminal in this project folder and run:

```sh
npm install
```

This will download all the necessary code libraries that the project needs.

### Step 2: Run the Development Server

To see the application in your browser, run:

```sh
nx dev x-desktop
```

This will start the desktop version. After a few seconds, you should see a message telling you the app is running (usually at `http://localhost:3000`).

Open that address in your web browser to see the application!

### Step 3: Stop the Server

When you're done, press `Ctrl + C` in your terminal to stop the development server.

## Available Commands

Here are some useful commands you can run:

### Run the Desktop App

```sh
nx dev x-desktop
```

Starts the desktop version in development mode. Changes you make will automatically appear in the browser.

### Run the Mobile App

```sh
nx dev x-mobile
```

Starts the mobile version in development mode.

### Build for Production

```sh
nx build x-desktop
```

Creates an optimized version of the app that's ready to deploy to a web server.

### View UI Components in Storybook

```sh
nx storybook ui
```

Opens Storybook, a tool where you can see and test all the UI components separately.

### Run Tests

```sh
nx test ui
```

Runs automated tests to make sure the code works correctly.

## Project Structure

Here's how the project is organized:

```
twitter-web/
├── packages/
│   ├── ui/              # Shared UI components (buttons, inputs, etc.)
│   ├── x-desktop/       # Desktop web application
│   └── x-mobile/        # Mobile web application
├── package.json         # Project configuration and dependencies
└── README.md           # This file
```

### What's in each package?

- **`ui`** - Contains reusable components like buttons, forms, and icons that both desktop and mobile apps use
- **`x-desktop`** - The main desktop application with features like feed, profile, and tweet composition
- **`x-mobile`** - The mobile version with a touch-friendly interface

## Learning Resources

If you're new to these technologies, here are some helpful resources:

- [Next.js Tutorial](https://nextjs.org/learn) - Learn how to build with Next.js
- [React Documentation](https://react.dev/) - Official React learning guide
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Learn TypeScript basics
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [Nx Documentation](https://nx.dev) - Learn about monorepos and Nx

## Need Help?

If you encounter any problems:

1. Make sure all dependencies are installed (`npm install`)
2. Check that you're using Node.js version 18 or higher
3. Try deleting `node_modules` folder and running `npm install` again
4. Check the error messages in your terminal - they usually tell you what's wrong

## Contributing

This is a learning project! Feel free to:

- Add new features
- Fix bugs
- Improve the design
- Experiment with the code

## License

MIT License - feel free to use this project for learning purposes.
