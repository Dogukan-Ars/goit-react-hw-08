# 📱 Phonebook App

A modern, secure and full-featured contact management application with user authentication.

![Phonebook Preview](./public/images/preview.png)

## ✨ Screenshots

![Home Page](./public/images/homepage.png)
![Register Page](./public/images/register.png)
![Login Page](./public/images/login.png)
![Contacts Page](./public/images/contacts.png)

## ✨ Features

- **User Authentication** — Register, Login, Logout and protected routes
- **JWT Token Management** — Persistent login with Redux Persist
- **Full CRUD Operations** — Create, Read, Update and Delete contacts
- **Smart Search** — Search by both name and phone number
- **Duplicate Protection** — Prevents adding contacts with the same phone number
- **Modern UI/UX** — Clean design with modals and toast notifications
- **Responsive Design** — Works perfectly on mobile and desktop

## 🛠 Technologies

- **Frontend:** React 18, Vite
- **State Management:** Redux Toolkit, Redux Persist
- **Routing:** React Router v6
- **Styling:** CSS Modules
- **Notifications:** React Hot Toast
- **HTTP Client:** Axios
- **Backend:** GoIT Connections API

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dogukan-ars/goit-react-hw-08.git
   cd goit-react-hw-08
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the project**

   ```Bash
   npm run dev
   ```

4. **Open**
   ```
   http://localhost:5173
   ```

📋 Project Structure

```text
    src/
    ├── components/    # Reusable components
    ├── pages/              # Page components
    ├── redux/              # Redux store, slices and operations
    │ ├── auth/
    │ ├── contacts/
    │ └── filters/
    ├── main.jsx
    └── ...

```

## 🔑 Key Features Implemented

- Protected routes (PrivateRoute & RestrictedRoute)
- Token refresh on app load
- Optimistic updates with Redux
- Error handling and loading states
- Form validation
- Confirmation modals for delete action

## 🎯 Learning Outcomes

- Advanced Redux Toolkit usage (createAsyncThunk, createSelector)
- Authentication flow with JWT
- Protected routing patterns
- State persistence
- Modal management
- Professional React project architecture

## 🔗 Links

- **Live Demo:** Vercel Link
- **Repository:** ![GitHub](https://github.com/dogukan-ars/goit-react-hw-08)
