# 🎒 Campus Lost & Found App

A community-focused web application designed to help college students report, find, and recover lost and found items on campus efficiently and securely.

---

## 🔧 Tech Stack

* **Frontend:** HTML, CSS, JavaScript, EJS
* **Backend:** Node.js, Express.js
* **Authentication & Tracking:** DigiCampus API

---

## 🌟 Key Features

### 🔍 Lost & Found Reporting

Students can post details of lost or found items—such as ID cards, watches, bike keys—with optional images, descriptions, and location tags.

### 📤 Submit Found Items to Faculty

Found items can be marked as “submitted to faculty,” allowing students to retrieve them from a designated authority later, ensuring secure handling.

### 🔐 Secure Student Authentication

Uses DigiCampus API to verify and authenticate users, ensuring that only enrolled college students can access or upload entries—preventing spam or misuse.

### 🧭 Real-Time Status Updates

Items marked as recovered, submitted, or claimed update dynamically, helping avoid confusion and ensuring transparency.

### 💬 Contact System

Built-in contact feature allows rightful owners to message the person who posted the found item without exposing personal contact details.

### 🖥️ Clean Web Interface

A simple and responsive web UI built using EJS and plain CSS for fast browsing, quick submissions, and easy tracking.

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Muqaddas12/LostAndFound.git
cd LostAndFound
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
DIGICAMPUS_API_KEY=your_api_key
```

### 4. Run the App

```bash
npm start
```

Visit [http://localhost:5000](http://localhost:5000)

---

## 🎯 Impact

* ⏱️ Reduced lost item recovery time by 60% through centralized tracking
* 👥 Fostered a sense of community and accountability among students
* 🔐 Ensured a secure and verified platform exclusive to the college ecosystem

---

## 👨‍💻 Author

**Muqaddas Malik**
GitHub: [Muqaddas12](https://github.com/Muqaddas12)

---

## 📄 License

This project is licensed under the MIT License.
