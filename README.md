# TaskNest - Personal Productivity Management System

A comprehensive productivity web application designed to help users manage tasks, track study sessions, and maintain focus using proven time management techniques.

## 🚀 Features

### ✅ Task Management
- **Task Creation & Organization**
  - Add new tasks with descriptions
  - Mark tasks as complete
  - Delete unwanted tasks
  - Real-time task updates

### 🎨 Customization
- **Theme Support**
  - Multiple theme options for personalized experience
  - Dark and light mode variants
  - Persistent theme selection

### ⏱️ Time Management
- **Pomodoro Timer**
  - Built-in Pomodoro technique support (25-minute focus sessions)
  - Customizable work and break intervals
  - Audio alerts for session completion
  
- **General Timers**
  - Flexible timer options for various activities
  - Study session tracking
  - Break time management

### 📝 To-Do List
- Intuitive task listing interface
- Easy task prioritization
- Progress tracking

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js (optional)
- **Database**: MongoDB

## 📋 Prerequisites

Before running this application, ensure you have:

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- (Optional) Node.js v14 or higher for backend features
- (Optional) MongoDB for data persistence

## 🚀 Installation & Setup

### Quick Start (Static Version)

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tasknest
   ```

2. **Open the application:**
   - Simply open `index.html` in your web browser
   
3. **Access the app:**
   - Navigate to `http://localhost:8000` in your browser

### Full Stack Setup (With Backend)

1. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure MongoDB:**
   - Update database connection string in `config.js`
   - Ensure MongoDB is running locally or use MongoDB Atlas

3. **Start the backend server:**
   ```bash
   node server.js
   ```

4. **Launch the frontend:**
   - Open `index.html` in your browser or deploy to a web server

## 📱 Application Structure

### Page Components

- **Landing Page**: Welcome screen with page overview
- **Main Dashboard**: Central hub for all productivity features
- **Task Manager**: Interface for creating and managing tasks
- **Timer Interface**: Pomodoro and other timer controls
- **Settings Panel**: Theme selection and preferences

### Key Functionalities

**Task Management System**
- Create tasks with custom descriptions
- Mark tasks complete with visual feedback
- Remove completed or unwanted tasks
- Persistent storage across sessions

**Pomodoro Timer**
- 25-minute focused work sessions
- 5-minute short breaks
- 15-minute long breaks after 4 sessions
- Visual and audio notifications

**Theme Customization**
- Multiple color schemes
- User preference storage
- Instant theme switching

## 🔧 Configuration

### Customization Options
You can customize the following in `config.js` (if using backend):
```javascript
module.exports = {
  port: 3000,
  mongoURI: 'your-mongodb-connection-string',
  pomodoroDefaults: {
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15
  }
}
```

## 📊 Data Structure

### Task Object
```javascript
{
  id: "unique-id",
  title: "Task title",
  description: "Task description",
  completed: false,
  createdAt: "timestamp",
  completedAt: "timestamp"
}
```

## 🎯 Use Cases

- **Students**: Track assignments, use Pomodoro for study sessions
- **Professionals**: Manage daily tasks and project deadlines
- **Anyone**: Improve focus and productivity with time management

## 🚀 Deployment

### Deploy to Netlify/Vercel
```bash
# Build command (if needed)
npm run build

# Publish directory
dist/
```

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Deploy TaskNest"
git push origin main
```

Enable GitHub Pages in repository settings.

## 📝 Future Enhancements

- [ ] User authentication and accounts
- [ ] Task categories and tags
- [ ] Calendar integration
- [ ] Mobile app version
- [ ] Collaborative task lists
- [ ] Progress analytics and insights
- [ ] Cloud synchronization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👥 Author

Developed as a personal productivity tool

---

**Note**: For production deployment, ensure proper environment variables are configured and sensitive data is secured.
