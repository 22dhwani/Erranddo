<h1 align="center">🧩 Erranddo — The Smart Service Marketplace</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-React.js-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-Node.js | Laravel-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Database-MongoDB-lightgrey?style=flat-square" />
</p>

> **Erranddo** is a full-stack, real-time **service marketplace platform** that connects customers and professionals through location-based search, instant messaging, and secure payment workflows.

---

## 🚀 Features

- 🗺️ **Smart Service Search** — Find professionals by location with **Google Maps API** and geospatial queries  
- 💬 **Real-Time Chat** — Event-driven architecture using **Kafka** and **Firebase** for seamless messaging  
- 💳 **Secure Payments** — Integrated with **Stripe** and **MongoDB** for credit-based transactions  
- 📈 **Analytics Dashboard** — Monitor leads, activity, and conversion data in real-time  
- 🖥️ **Responsive Design** — Built with **React.js**, **Redux**, and **Tailwind CSS** for a fluid UI across devices  
- ⚙️ **Scalable Architecture** — Microservices powered by **Node.js** and **Laravel**, ready for production workloads  
- 🔒 **Authentication & Security** — JWT, HTTPS, and Firebase auth for data protection  

---

## 🧠 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Frontend | React.js, Redux, Tailwind CSS, TypeScript |
| Backend | Node.js, Laravel, REST APIs, JSON |
| Realtime | Kafka, Firebase |
| Database | MongoDB, Firestore |
| Payments | Stripe API |
| Cloud & Deployment | AWS, Netlify |
| Dev Tools | Postman, GitHub Actions, Docker, Jest |

---

## ⚙️ System Architecture

```mermaid
graph TD;
    User --> UI[React.js Frontend]
    UI --> API[Node.js / Laravel Backend]
    API --> DB[(MongoDB)]
    API --> Kafka[(Kafka Stream)]
    API --> Firebase[(Realtime Chat)]
    API --> Stripe[(Secure Payments)]
    Admin[Analytics Dashboard] --> DB
