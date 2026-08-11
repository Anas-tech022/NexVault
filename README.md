# 🔐 NexVault

> A modern, dark-themed credential manager designed to securely organize and manage website login credentials in one place.

NexVault is a simple and intuitive credential vault that allows users to save, search, view, copy, edit, and delete login credentials such as website URLs, usernames, and passwords.

## 🚀 Live Demo: https://my-passwordmanager.vercel.app

NexVault provides a clean, modern interface for adding, searching, viewing, copying, editing, and deleting website credentials.

---

## ✨ Features

- 🔐 Store website credentials in one place
- 🌐 Save website URLs
- 👤 Store usernames
- 🔑 Store passwords securely within the application
- 👁️ Toggle password visibility
- 🔎 Search saved credentials
- 📋 Copy URLs, usernames, and passwords quickly
- ✏️ Edit existing credential records
- 🗑️ Delete saved credentials
- 📱 Clean and responsive user interface
- 🌙 Modern dark-themed design
- ⚡ Simple and easy-to-use interface

---

## 🖥️ Preview

### NexVault Dashboard

The application provides a clean dashboard where users can add and manage their credentials.

```text
┌──────────────────────────────────────────────────────┐
│  <NexVault/>              🔎 Search Website...       │
│                                                      │
│              <Vaultix/>                              │
│       SECURE LOCAL CREDENTIAL LOCKER                 │
│                                                      │
│  Enter URL                                           │
│  Enter Username        Enter Password        👁      │
│                                                      │
│                 ➕ Add Credentials                   │
│                                                      │
│  VAULT RECORDS                                       │
│  ──────────────────────────────────────────────────  │
│  SITE       USERNAME       PASSWORD       ACTIONS    │
│                                                      │
│  Website    Username       ********       ✏️ 🗑️     │
└──────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

NexVault is built using modern frontend technologies:

⚛️ React — Component-based UI development
⚡ Vite — Fast development server and build tool
🎨 Tailwind CSS — Utility-first CSS framework for styling
🟨 JavaScript — Application logic and functionality
🌐 HTML5 — Application structure
📦 npm — Package and dependency management
▲ Vercel — Deployment and hosting

---

## 📁 Project Structure

```text
nexvault/
├── public/
│   ├── myicons/
│   │   ├── Copyimage.png
│   │   ├── Cross.png
│   │   ├── Eye.png
│   │   └── github.png
│   └── vault.png
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx
│   │   └── Navbar.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repo
git clone https://github.com/Anas-tech022/nexvault.git
cd nexvault

# 2. Install dependencies
npm install

# 3. Start the server
npm run dev

# 4. Open in your browser
http://localhost:5173
```

## 🔑 Core Functionality

### Add Credentials

Users can add a new credential by providing:

- Website URL
- Username
- Password

 # Clicking Add Credentials adds the record to the vault.

### Search Credentials

The search bar allows users to quickly find stored credentials based on the website or related information.

### Copy Credentials

Each credential provides copy actions so users can quickly copy:

- Website URL
- Username
- Password

 ### Show / Hide Password

Passwords are hidden by default and can be revealed using the visibility control.

### Edit Credentials

Existing credentials can be modified using the edit action.

### Delete Credentials

Users can remove unwanted credential records using the delete action.

---

## 🎨 UI Design

NexVault uses a modern dark interface focused on simplicity and readability.

### Design Highlights

- Dark UI
- Gold/yellow accent color
- Glassmorphism-inspired cards
- Rounded components
- Minimal navigation
- Clear typography
- Interactive buttons
- Responsive layout

---

## 🔒 Security Note

NexVault is a learning/development project and should not be considered a production-ready password manager unless strong encryption, authentication, secure storage, and proper security practices have been implemented.

Never store real passwords or sensitive credentials in an insecure development environment.

For a production password manager, credentials should be protected using appropriate encryption and secure key management.

---

## 🔮 Future Improvements

Some planned improvements for NexVault could include:

 - User authentication
 - Master password protection
 - End-to-end encryption
 - Encrypted database storage
 - Password generator
 - Password strength indicator
 - Import / export credentials
 - Categories and folders
 - Favorites
 - Password expiration reminders
 - Two-factor authentication
 - Automatic backup
 - Mobile-friendly improvements
 - Browser extension
 - Cloud synchronization

 ---

 ## 🤝 Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

**ANAS**

- GitHub: [@Anas-tech022](https://github.com/Anas-tech022)

---

## ⭐ Support

If you find NexVault useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  <b>🔐 NexVault — Store it. Seal it. Keep it safe.</b>
</p>
