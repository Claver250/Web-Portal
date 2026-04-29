# 🌐 Insighta Labs: Web Portal Interface

The **Insighta Labs Web Portal** is a modern, responsive dashboard interface designed for users to manage their secure profiles and interact with the Insighta Intelligence Engine. It serves as the primary web-based entry point for the **HNG Stage 3** multi-interface integration task.

---

## 🛠️ Features
* **Secure Web Auth:** Implements a seamless GitHub OAuth 2.0 integration.
* **Dynamic Dashboard:** Real-time data fetching from the Insighta Backend.
* **Identity Metadata Visualization:** Displays enriched user data including roles and system-assigned metadata.
* **Persistent Sessions:** Securely manages JWT (Access & Refresh) tokens via browser storage.
* **Version-Gated Communication:** All API interactions are strictly enforced with `X-API-Version` headers.

---

## 🏗️ Architecture Flow

The Web Portal acts as a "Consumer" of the Insighta REST API. 

1. **Authentication:** The portal redirects the user to the Backend OAuth route.
2. **Callback Handling:** Upon a successful GitHub login, the Backend redirects the user back to this portal with tokens embedded in the URL.
3. **Session Hydration:** The portal extracts the tokens, stores them in `localStorage`, and cleans the URL for a seamless UI experience.
4. **Data Fetching:** The portal makes a versioned GET request to the `/profile` endpoint to populate the user dashboard.

---

## 🚀 Getting Started

### 1. Prerequisites
* **Node.js** (v18 or higher)
* A browser (Chrome, Firefox, or Edge)
* A live **Insighta Labs Backend** URL.

### 2. Installation
Clone this specific repository and install the dependencies:
```bash
git clone <your-web-portal-repo-url>
cd insighta-labs-web
npm install
```

### 3. Development
Run the portal locally to test the interface:
```bash
npm start
```

### 4. Deployment
This portal is designed to be hosted on **Vercel** or **Netlify**. Ensure that your Backend's CORS settings allow the production URL of this portal.

---

## 🔌 API Integration Logic

To pass the system's security gate, the portal sends the mandatory version header with every request:

```javascript
// Example of a versioned request from the Dashboard
const fetchProfile = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/v1/auth/profile`, {
    headers: {
      'X-API-Version': '1',
      'Authorization': `Bearer ${accessToken}`
    }
  });
};
```

---

## 📂 Project Structure
* `src/App.js`: The central routing and token extraction logic.
* `src/components/Login.js`: The landing page and OAuth trigger.
* `src/components/Dashboard.js`: The authenticated view displaying enriched user intelligence.
* `package.json`: Project dependencies (React, Axios, etc.).

---