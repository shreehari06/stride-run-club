# Stride Run Club PWA

A modern Progressive Web App for the Stride Run Club community in Bengaluru.

## 🚀 Features

- **📱 Mobile-First PWA** - Install on your phone like a native app
- **🔥 Firebase Integration** - Real-time chat, authentication, and storage
- **🎨 Beautiful UI** - Modern design with Chakra UI components
- **👆 Swipeable Navigation** - Smooth gesture-based page transitions
- **🌙 Dark Mode** - Automatic theme switching
- **⚡ Fast Development** - Hot reload with Vite

## 📱 App Structure

### Pages
1. **Home** - Recent activity and announcements
2. **Events** - Browse and register for runs and activities
3. **Chat** - Group messaging for events
4. **Leaderboard** - Runner rankings and statistics
5. **Profile** - User settings and personal stats

### User Roles
- **Members** - Full app access
- **Admins** - Additional management features
- **Guests** - Limited event registration

## 🛠 Tech Stack

- **Frontend:** Vite + React + TypeScript + Chakra UI
- **Backend:** Firebase (Firestore, Auth, Storage)
- **PWA:** Vite PWA Plugin
- **Development:** Firebase Emulators (no account needed)

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone and install dependencies
git clone <repository>
cd stride-app
npm install

# Start development server
npm run dev

# Start Firebase emulators (separate terminal)
npm run firebase

# Or run both together
npm run dev:full
```

### Access Points
- **App:** http://localhost:5173
- **Firebase Emulator UI:** http://localhost:4000

## 📂 Project Structure

```
stride-app/
├── docs/                    # Documentation
├── public/                  # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── BottomNavigation.tsx
│   │   └── SwipeablePages.tsx
│   ├── pages/              # App pages
│   │   ├── HomePage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── ChatPage.tsx
│   │   ├── LeaderboardPage.tsx
│   │   └── ProfilePage.tsx
│   ├── config/             # Configuration files
│   │   └── firebase.ts
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── firebase.json           # Firebase emulator config
├── vite.config.ts          # Vite configuration
└── package.json
```

## 🔧 Development

### Running Locally

```bash
# Development with hot reload
npm run dev

# Firebase emulators only
npm run firebase

# Both together (recommended)
npm run dev:full
```

### Building for Production

```bash
npm run build
npm run preview
```

### Features to Implement

#### Phase 1 (Core)
- [ ] Firebase Authentication (Gmail login)
- [ ] User profile management
- [ ] Event creation and registration
- [ ] Basic chat functionality

#### Phase 2 (Enhanced)
- [ ] Real-time notifications
- [ ] Image uploads (profile pictures)
- [ ] Event photos and media
- [ ] Advanced leaderboard features

#### Phase 3 (Advanced)
- [ ] Admin dashboard
- [ ] Analytics and insights
- [ ] Push notifications
- [ ] Offline support

## 🎨 Design System

Built with Chakra UI for consistency:
- **Primary Color:** Blue (#3182ce)
- **Typography:** System fonts for performance
- **Mobile-first:** Responsive design
- **Dark Mode:** Automatic theme switching

## 🔐 Firebase Setup

The app uses Firebase emulators for local development:
- **Auth Emulator:** localhost:9099
- **Firestore Emulator:** localhost:8080
- **Storage Emulator:** localhost:9199
- **UI Dashboard:** localhost:4000

No Firebase account needed for development!

## 📱 PWA Features

- **Installable** - Add to home screen
- **Offline capable** - Works without internet
- **App-like** - Full screen experience
- **Responsive** - Works on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ for the Stride Run Club community