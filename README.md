# Personal Portfolio with Supabase Admin Panel

This is a full-stack **personal portfolio website** built using **React** with a **Supabase-powered backend**.  
In addition to showcasing projects and skills, it includes a **secure admin dashboard** for managing contact form messages.

---

##  Live Demo

- **Portfolio:** [https://<your-site-name>.netlify.app](https://gagana-portfolio.netlify.app/)  
- **Admin Login:** [https://<your-site-name>.netlify.app](https://gagana-portfolio.netlify.app/admin/login)  
- **Admin Messages:** [https://<your-site-name>.netlify.app](https://gagana-portfolio.netlify.app/admin/messages)  

>  Admin routes are protected and require authentication.

---

##  Features

###  Public Portfolio
- Responsive UI built with React & Bootstrap
- Sections for:
  - Home / Banner
  - Skills
  - Projects
  - Contact Form
- Smooth animations and modern layout

### Contact Form
- Users can submit messages from the portfolio
- Messages are stored securely in **Supabase PostgreSQL**
- No backend server required (serverless architecture)

###  Admin Panel (Protected)
- Admin authentication using **Supabase Auth**
- Secure login system (email & password)
- Protected routes using React Router
- Admin can view all contact messages
- Logout functionality included

---

## 🛠 Tech Stack

**Frontend**
- React (Create React App)
- React Router
- Bootstrap
- Animate.css

**Backend (Serverless)**
- Supabase
  - Authentication
  - PostgreSQL Database
  - Row Level Security (RLS)

**Deployment**
- Netlify (Frontend)
- Supabase (Backend)

---

## 🔒 Security & Privacy

- No passwords or secrets stored in frontend code
- Uses **Supabase public anon key** (safe by design)
- Admin access protected using Supabase Auth
- Database access controlled with **Row Level Security (RLS)**
- Environment variables managed securely in Netlify

---

## ⚙️ Environment Variables

This project uses **Create React App**, so environment variables must start with `REACT_APP_`.

Create a `.env` file locally:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
