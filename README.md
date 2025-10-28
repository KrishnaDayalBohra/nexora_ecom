# Nexora E-Com

A full-stack mock e-commerce shopping cart app built for the Vibe Commerce internship screening.  
It demonstrates product listing, cart management, checkout with user details, and a receipt flow — all using React (frontend) and Node.js + Express (backend).

---

## 🎥 Demo Video  
[Watch the demo here](https://www.loom.com/share/4b3c7b4f6d6d43d19837b64b9275d75b) — walkthrough includes product listing, cart flow, checkout, and receipt.

---

## 🖼 Screenshots  
*(Add your screenshots in `assets/` or `screenshots/` folder and update the paths below)*

| Home Page | Checkout | Receipt Modal |
|-----------|----------|--------------|
| ![Home]("C:\Users\bohra\OneDrive\Pictures\Screenshots\HomePage.png") | ![Checkout]("C:\Users\bohra\OneDrive\Pictures\Screenshots\Checkout2.png") | ![Receipt]("C:\Users\bohra\OneDrive\Pictures\Screenshots\Reciept.png") |

---

## ⚙️ Tech Stack  
**Frontend:** React, React Router, Context API, Custom CSS  
**Backend:** Node.js, Express.js  
**Database:** (Mock JSON in-memory)  
**APIs:** REST endpoints for products, cart, and checkout  

---

## 🧩 Features  
- 🛍 Browse a variety of products  
- ➕ Add one or more items to cart  
- 🗑 Remove items from cart  
- 💳 Checkout form with Name & Email  
- 🧾 Receipt modal showing name, total, and timestamp  
- 📱 Responsive design optimized for desktop & mobile  
- ✅ Fully functional backend with required endpoints

---

## 📁 Project Structure  

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

## 🧠 How It Works  
1. **Product Listing** — Frontend fetches products from `GET /api/products`  
2. **Cart Management** — Add or remove items via `POST /api/cart`, `DELETE /api/cart/:id`, and fetch via `GET /api/cart`  
3. **Checkout** — Form submission triggers `POST /api/checkout`, returns a mock receipt with total & timestamp  
4. **UI & Design** — All pages styled with simple, clean, responsive CSS; uses Context for state management  

---

## ⚡ Setup & Run Locally

### 1) Clone the repository  
```bash
git clone https://github.com/<your-username>/nexora-ecom.git
cd nexora-ecom

2) Setup Backend
'''bash
cd backend
npm install
npm start
Backend runs on http://localhost:5000

3) Setup Frontend
cd ../frontend
npm install
npm run dev
Frontend runs on http://localhost:5173 (or whichever Vite port is configured)

👨‍💻 Author

Krishna Dayal Bohra
Full-Stack Developer | React & Node
📧 bohrakrishna693@gmail.com 
🔗 https://www.linkedin.com/in/krishnadayalbohra/
