# Fantasy Finance
App Description:
Fantasy Finance is a website with a focus of making investing both fun and easy. There are three main ways this is achieved. First, we make investing easy through learning tools powered by AI. Secondly, we make it fun through competitive groups (like fantasy football but for investing in the stock market). Lastly, we make investing social to connect the user to their friends and other users. The target users for Fantasy Finance are both people who are new to investing and people who want to make investing more fun and competitive. One of the key features of the website is the ability to compete in groups with other users. This competition allows for a variety of settings, such as having a draft (like fantasy football), limiting the stocks you can buy, making a stock only available to one person, etc. Outside of competition mode, the user can pursue their solo portfolio. Users will have credits in each portfolio and can use them to purchase stocks. If the user wants to learn about stocks, they can ask the chatbot any question or view the discover page.

Feature Pages (not a complete list):
- Home
- Discover
    - Stock Sector
- Solo:
    - Portfolio
    - Global Leaderboard
- League:
    - Home (Leaderboard)
    - Portfolio
    - Settings
- Profile
    - Friends




## General Structure:

fantasy-finance/
├── public/                    # Static assets served directly (favicon, images)
├── src/
│   ├── assets/                # Static assets processed by Vite (icons, images, global styles)
│   ├── components/            # Shared components used across multiple features (Button, Input, Card, Modal)
│   ├── constants/             # App-wide constants (config values)
│   ├── context/               # React Context providers for global state
│   ├── features/              # Feature-based modules (each feature is self-contained)
|   |   ├── ExampleFeature/             # A self-contained feature (e.g., "discover", "auth", "portfolio")
|   │   |   ├── pages/                  # Feature-specific pages shown via routes (e.g., DiscoverPage)
|   │   │   ├── components/             # Feature-specific ui bits
|   │   │   ├── hooks/                  # Feature-specific custom hooks (e.g., useStocks, useAuth)
|   │   │   ├── services/               # Feature-specific API calls or data logic
|   │   │   └── types.ts                # Feature-specific TypeScript types/interfaces
│   ├── hooks/                 # Shared custom React hooks used across features
│   ├── layouts/               # Layout wrappers with <Outlet> for nested routes
|   |   └── components/        # Layout-specific components (Sidebar, Header, Navigation)
│   ├── lib/                   # Third-party library configurations (like Supabase)
│   ├── pages/                 # Non-feature pages, like 404 page
│   ├── routes/                # Routing configuration and route guards
│   ├── types/                 # Shared TypeScript type definitions
│   ├── utils/                 # Shared helper functions (formatters, validators, calculations)
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # TypeScript declarations for Vite
└── .....                      # Config files, etc.








### More detailed structure example
#### (not final at all, just for reference):

fantasy-finance/
├── public/
├── src/
│   ├── assets/                # Static assets processed by Vite
│   │   ├── icons/
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── layouts/               # Layout wrappers with Outlet for nested routes
│   │   ├── MainLayout.tsx     # Sidebar/nav for logged-in users
│   │   ├── AuthLayout.tsx     # Minimal layout for login/register
│   │   └── EmptyLayout.tsx    # No chrome (for landing pages, etc.)
│   │
│   ├── components/            # Shared components used across multiple features
│   │   ├── ui/                # Generic UI components (Button, Input, Card, Modal)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── layout/            # Layout-specific components
│   │       ├── Sidebar.tsx
│   │       ├── Header.tsx
│   │       └── Navigation.tsx
│   │
│   ├── features/              # Feature-based modules
│   │   ├── home/
│   │   │   ├── pages/
│   │   │   │   └── HomePage.tsx
│   │   │   └── components/
│   │   │       └── PortfolioOverview.tsx
│   │   │
│   │   ├── discover/
│   │   │   ├── pages/
│   │   │   │   └── DiscoverPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── StockCard.tsx
│   │   │   │   └── ChatBot.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useStockSearch.ts
│   │   │   ├── services/
│   │   │   │   └── discoverService.ts
│   │   │   └── types.ts
│   │   │
│   │   ├── portfolio/
│   │   │   ├── pages/
│   │   │   │   ├── SoloPage.tsx
│   │   │   │   └── PortfolioDetailPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── PortfolioCard.tsx
│   │   │   │   ├── PortfolioStats.tsx
│   │   │   │   └── StockList.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── usePortfolio.ts
│   │   │   │   └── useStocks.ts
│   │   │   ├── services/
│   │   │   │   └── portfolioService.ts
│   │   │   └── types.ts
│   │   │
│   │   ├── leagues/
│   │   │   ├── pages/
│   │   │   │   ├── LeaguesPage.tsx
│   │   │   │   ├── LeagueDetailPage.tsx
│   │   │   │   └── CreateLeaguePage.tsx
│   │   │   ├── components/
│   │   │   │   ├── LeagueCard.tsx
│   │   │   │   ├── LeagueList.tsx
│   │   │   │   └── LeagueSettings.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useLeagues.ts
│   │   │   ├── services/
│   │   │   │   └── leagueService.ts
│   │   │   └── types.ts
│   │   │
│   │   └── auth/
│   │       ├── pages/
│   │       │   ├── LoginPage.tsx
│   │       │   └── RegisterPage.tsx
│   │       ├── components/
│   │       │   ├── LoginForm.tsx
│   │       │   └── RegisterForm.tsx
│   │       ├── hooks/
│   │       │   └── useAuth.ts
│   │       ├── services/
│   │       │   └── authService.ts
│   │       └── types.ts
│   │
│   ├── routes/                # Routing configuration
│   │   ├── AppRouter.tsx      # Main router with all route definitions
│   │   ├── ProtectedRoute.tsx # Auth guard for protected routes
│   │   └── routes.ts          # Route path constants
│   │
│   ├── lib/                   # Third-party configurations
│   │   ├── supabase.ts        # Supabase client
│   │   └── queryClient.ts     # React Query setup (if using)
│   │
│   ├── context/               # Global state providers
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── hooks/                 # Shared hooks across features
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── types/                 # Shared TypeScript types
│   │   ├── index.ts
│   │   ├── api.ts
│   │   └── database.ts        # Supabase generated types
│   │
│   ├── constants/             # App-wide constants
│   │   └── config.ts
│   │
│   ├── utils/                 # Shared utility functions
│   │   ├── formatters.ts      # Format currency, percentages, dates
│   │   ├── validators.ts      # Form validation helpers
│   │   └── calculations.ts    # Portfolio calculations
│   │
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── vite-env.d.ts
│
├── .env.example
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md