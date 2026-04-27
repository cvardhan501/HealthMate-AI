# 🩺 HealthMate AI

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://healthmate-ai-zndt.onrender.com)

HealthMate AI is a full-stack web application that provides intelligent, safety-aware health guidance based on user-reported symptoms. It combines rule-based logic with real-world medical considerations such as age, allergies, and existing conditions to deliver responsible and structured recommendations.

---

## 🚀 Key Features

- **Symptom Analysis Engine**  
  Interprets both keywords and natural language inputs (e.g., “My eyes are hurting after using laptop”).

- **Medicine Recommendation System**  
  Suggests commonly used over-the-counter medicines with real brand references.

- **Safety-Aware Filtering**  
  Filters medicines based on:
  - Age (child, adult, elderly)
  - Allergies
  - Existing medical conditions

- **Severity Classification**  
  Categorizes conditions into **Mild / Moderate / Severe** for better decision-making.

- **Emergency Detection**  
  Identifies critical symptoms (e.g., chest pain, breathing difficulty) and triggers alerts.

- **Home Care Guidance**  
  Provides practical care suggestions alongside medical advice.

- **Responsive & Animated UI**  
  Clean interface with smooth animations, optimized for both mobile and desktop.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Deployment:** Render  

---

## 📂 Project Structure


backend/
├── public/
│ ├── index.html
│ ├── HealthMate-AI.css
│ └── HealthMate-AI.js
├── server.js
├── package.json


---

## ⚙️ Local Setup

```bash
cd backend
npm install
npm start

Open in browser:
http://localhost:3000

🧪 Sample Inputs
My eyes are hurting after using laptop
I have fever and headache
stomach pain and vomiting
cold and cough
chest pain and breathing problem
⚠️ Disclaimer

This application is intended for educational and informational purposes only.
It does not replace professional medical advice, diagnosis, or treatment.
Users are strongly advised to consult a qualified healthcare professional before taking any medication.

👨‍💻 Author

C Vishnu Vardhan
B.Tech – Computer Science and Engineering (AI & ML)
Amity University Bengaluru

