# 🛒 Nexora E-Com

A **full-stack mock e-commerce shopping cart** built as part of the **Vibe Commerce Internship Assignment**.  
This project demonstrates seamless integration of **React (frontend)** and **Node.js + Express (backend)** — featuring product listing, cart management, checkout flow, and receipt generation.

---

## 🎥 Demo Video  
▶️ [Watch the full demo on Loom](https://www.loom.com/share/4b3c7b4f6d6d43d19837b64b9275d75b)

The demo includes:
- Product listing & cart updates  
- Quantity and total calculations  
- Checkout form submission  
- Mock receipt modal with user name, total, and timestamp  

---

## 🖼 Screenshots  

| 🏠 Home Page | 🛍 Checkout | 🧾 Receipt Modal |
|:-------------:|:------------:|:----------------:|
| ![Home](https://github.com/user-attachments/assets/32d8bce1-882c-4ce9-bdff-5f0d4be8026b) | ![Checkout](https://github.com/user-attachments/assets/361b795c-814f-42ff-ab13-264a3c363a28) | ![Receipt](https://github.com/user-attachments/assets/b4961c73-0c67-4ba3-88f6-68cc42f134ab) |

---

## ⚙️ Tech Stack  

**Frontend:** React, React Router, Context API, Vite, Custom CSS  
**Backend:** Node.js, Express.js  
**Database:** In-memory mock data (JSON)  
**API Pattern:** REST (Products, Cart, Checkout)  
**Version Control:** Git & GitHub  

---

## 🚀 Features  

- 🛍 Product browsing with price & details  
- ➕ Add / 🗑 Remove items from cart  
- 🔢 Real-time total calculation  
- 💳 Checkout form with Name & Email  
- 🧾 Receipt modal showing total & timestamp  
- 📱 Fully responsive layout for desktop & mobile  
- 🧠 Context-based global state management  
- ⚡ RESTful backend API with proper routes  

---

## 📁 Folder Structure  

nexora-ecom/
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ └── data/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── styles/
│ │ └── App.jsx
│ └── public/
└── README.md

---

## ⚡ Setup & Run (Single Command Guide)

Follow these simple steps to run both backend and frontend locally 👇  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/KrishnaDayalBohra/nexora_ecom.git
cd nexora_ecom

# 2️⃣ Setup and start the backend server
cd backend
npm install
npm start
# Backend will start on http://localhost:5000

# 3️⃣ Open a new terminal and start the frontend
cd ../frontend
npm install
npm run dev
# Frontend will start on http://localhost:5173

✅ Your app should now be live with full product listing, add/remove cart functionality, checkout, and receipt modal.

🧠 How It Works

Product Listing →

GET /api/products returns mock items (id, name, price).

Cart Management →

POST /api/cart adds an item to cart

DELETE /api/cart/:id removes an item

GET /api/cart retrieves current cart and total

Checkout Flow →

POST /api/checkout accepts { cartItems, name, email }

Returns mock receipt with name, total, and timestamp

👨‍💻 Author

Krishna Dayal Bohra
Full-Stack Developer | React + Node.js

📧 bohrakrishna693@gmail.com
🔗 https://www.linkedin.com/in/krishnadayalbohra/


🌟 Acknowledgment

Built as part of the Vibe Commerce Internship Coding Assignment.
Demonstrates full-stack development, REST APIs, responsive design, and real-time cart management.
