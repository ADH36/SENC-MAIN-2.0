# SENC Main Website 2.0

A unified platform for all SENC products with centralized authentication (Master Login API).

## Features

- **Product Portfolio**: Browse all SENC products in one place
- **About Us**: Learn about the company, vision, mission, and team
- **Contact Us**: Get in touch with our team
- **Master Login API**: Single Sign-On (SSO) authentication system for cross-application login
- **User Dashboard**: Manage account and generate authentication tokens

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Frontend**: React with Vite and Tailwind CSS

## Project Structure

```
SENC-MAIN-2.0/
├── backend/               # Node.js Express API
│   ├── config/           # Database configuration
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Authentication middleware
│   ├── routes/           # API routes
│   └── server.js         # Entry point
├── frontend/             # React Vite application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # React context (Auth)
│   │   ├── pages/        # Page components
│   │   └── services/     # API services
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- MySQL Server

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your MySQL credentials and JWT secret.

5. Start the server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get current user profile (protected) |
| POST | `/api/auth/master-token` | Generate master token for SSO (protected) |
| POST | `/api/auth/verify-token` | Verify master token (for other apps) |
| POST | `/api/auth/revoke-token` | Revoke a master token (protected) |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:uuid` | Get single product |
| POST | `/api/products` | Create product (admin) |
| PUT | `/api/products/:uuid` | Update product (admin) |
| DELETE | `/api/products/:uuid` | Delete product (admin) |

### Contact

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages (admin) |
| PUT | `/api/contact/:id/read` | Mark message as read (admin) |

## Master Login API Usage

The Master Login API allows users to authenticate once and use their credentials across multiple SENC applications.

### For Client Applications

1. User generates a master token from their dashboard
2. Client app calls `/api/auth/verify-token` with the token
3. If valid, the API returns user details for creating a local session

### Example Token Verification

```javascript
const response = await fetch('https://senc-main.com/api/auth/verify-token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ token: masterToken })
});

const { valid, user } = await response.json();
if (valid) {
  // Create local session with user data
}
```

## License

ISC