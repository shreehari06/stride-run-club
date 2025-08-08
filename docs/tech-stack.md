# Stride Run Club PWA - Tech Stack & Architecture

## 🏗️ **Tech Stack**

### **Frontend**

- **Framework:** Vite + React + TypeScript
- **UI Library:** Chakra UI
- **Animations:** Framer Motion (included with Chakra)
- **Routing:** React Router
- **PWA:** vite-plugin-pwa

### **Backend**

- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Gmail login)
- **Storage:** Firebase Storage (profile pictures)
- **Development:** Firebase Emulators (no account needed)

### **Deployment**

- **Hosting:** Firebase Hosting (when ready)
- **Cost:** $0-25/month for 1000+ users

---

## 📱 **App Architecture**

### **Layout**

- **Navigation:** Bottom tab bar (5 tabs)
- **Interaction:** Swipeable pages with smooth animations
- **Theme:** Dark/light mode toggle built-in

### **Pages Structure**

```
1. Home - Recent activity, announcements
2. Events - Browse/register for runs, lake hopping, etc.
3. Chat - Group messaging per event
4. Leaderboard - User rankings and stats
5. Profile - User settings, picture, bio
```

### **User Roles**

- **Members:** Full app access
- **Admins:** Additional management views in same app
- **Guests:** Event registration without full login

---

## 🔐 **Data Structure**

Tentative Reference

### **Users Collection**

```typescript
{
  uid: string;
  email: string;
  name: string;
  phone?: string;
  bio?: string;
  profilePicture?: string;
  role: 'member' | 'admin';
  joinedAt: timestamp;
}
```

### **Events Collection**

```typescript
{
  id: string;
  title: string;
  description: string;
  date: timestamp;
  location: string;
  maxParticipants?: number;
  registrations: string[]; // user IDs
  createdBy: string; // admin ID
}
```

### **Chat Collection**

```typescript
{
  eventId: string;
  messages: [{
    userId: string;
    message: string;
    timestamp: timestamp;
  }]
}
```

---

## 🚀 **Development Workflow**

### **Local Development**

```bash
# Terminal 1: Start React app
npm run dev

# Terminal 2: Start Firebase emulators
firebase emulators:start

# Access:
# App: http://localhost:5173
# Firebase UI: http://localhost:4000
```

### **Key Features**

- **Offline Development:** No Firebase account needed
- **Real-time Updates:** Firestore live updates for chat
- **PWA Features:** Install on mobile, offline capability
- **Responsive Design:** Mobile-first with Chakra UI

---

## 📋 **Implementation Phases**

### **Phase 1: Core App (Week 1-2)**

- ✅ Vite + React + Chakra setup
- ✅ Bottom navigation + swipe
- ✅ Firebase emulator configuration
- ✅ Basic authentication flow

### **Phase 2: Features (Week 2-3)**

- ✅ Events listing and registration
- ✅ User profiles and pictures
- ✅ Real-time chat
- ✅ PWA configuration

### **Phase 3: Admin & Polish (Week 3-4)**

- ✅ Admin role-based views
- ✅ Event management
- ✅ Leaderboards
- ✅ Production deployment

---

## 💡 **Key Benefits**

- **Fast Development:** Modern tooling, great DX
- **Beautiful UI:** Professional look without designer
- **Mobile-First:** PWA provides native app feel
- **Scalable:** Firebase handles growth automatically
- **Cost-Effective:** Free development, cheap production
- **Maintainable:** Single codebase for all features

---

**Ready to build? Let's start with the project setup! 🚀**
