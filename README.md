# 🐝 URLBee - Smart URL Shortener

A modern, full-stack URL shortener built with React and Node.js. Create short, memorable links and track their performance with detailed analytics.

![URLBee Demo] [https://github.com/abhinavtee/URLBee](https://url-bee-abhinav-tripathis-projects-e66b0883.vercel.app/about)

## ✨ Features

- 🔗 **URL Shortening** - Convert long URLs into short, shareable links
- 👤 **User Authentication** - Secure login/register with JWT
- 📊 **Analytics Dashboard** - Track clicks, views, and performance
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 🚀 **Fast & Reliable** - Built for speed and scalability
- 📱 **Mobile Friendly** - Works perfectly on all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/urlbee.git
cd urlbee
```

### Backend Setup
```bash
cd BACKEND
npm install

# Create .env file
cp .env.example .env
# Add your environment variables:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

npm run dev
```

### Frontend Setup
```bash
cd FRONTEND
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000" > .env

npm run dev
```

## 🌍 Deployment

### Backend (Railway)
1. Push your code to GitHub
2. Connect Railway to your repository
3. Set environment variables
4. Deploy automatically

### Frontend (Vercel)
1. Connect Vercel to your GitHub repository
2. Set root directory to `FRONTEND`
3. Add environment variable: `VITE_API_URL`
4. Deploy with one click

## 📁 Project Structure

```
URLBEE/
├── BACKEND/
│   ├── src/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── app.js
│   └── package.json
├── FRONTEND/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/urlbee
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### URL Management
- `POST /api/create` - Create short URL (public)
- `POST /api/create/afterAuth` - Create short URL (authenticated)
- `GET /api/user/urls` - Get user's URLs
- `DELETE /api/create/:id` - Delete URL
- `GET /:shortCode` - Redirect to original URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhinav Tripathi*
- GitHub: [Abhinavtee]([https://github.com/abhinavtee])
- LinkedIn: [Abhinavte](https://www.linkedin.com/in/abhinavte/)
- Email: abhi9651.at@outlook.com
  
## 🙏 Acknowledgments

- Inspired by bit.ly and tinyurl
- Built with ❤️ and lots of ☕

---

⭐ **Star this repo if you found it helpful!** ⭐
