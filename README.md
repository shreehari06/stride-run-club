# Stride Landing

This is a [Next.js](https://nextjs.org) project designed to serve as the landing page for the Stride Run Club, Bengaluru.

## Features

### Announcement Service

Displays announcements dynamically using the `AnnouncementService`.

Run pipelines to automate adding or removing announcements -

- **Add Announcements**: Use the `add-announcement` pipeline to programmatically add new announcements.
- **Remove Announcements**: Use the `clean-announcements` pipeline to remove outdated announcements based on a configurable time period.

## Development

### Getting Started

To start the development server, run:

```bash
yarn install
yarn dev
```

### Project Structure

```
.
├── public/                 # Static assets
├── src/                    # Source code
│   ├── app/                # Application Pages
│   ├── components/         # Reusable UI components
│   ├── services/           # Business logic (e.g., AnnouncementService)
│   ├── data/               # Static JSON data
│   ├── fonts.ts            # Font configuration
│   ├── strings.ts          # Localized strings
│   ├── theme.ts            # Theme configuration
├── .next/                  # Build artifacts
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```
