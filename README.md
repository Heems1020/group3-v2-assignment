# CISE Group3 Assignment - Full Setup Instructions

This project consists of two parts:

1. **Frontend**: Built with Next.js (React framework)
2. **Backend**: Built with NestJS, using MongoDB as the database

Follow these instructions to set up and run the project locally.

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/cloud/atlas) (MongoDB Atlas or a local MongoDB instance)

---

## Project Setup

### 1. Clone the Repository

**First, clone the repository from GitHub to your local machine:**
git clone https://github.com/your-username/CISE-group-3-.git

## 2. Backend Setup

**2.1. Install Backend Dependencies**
**Navigate to the backend/ folder and install the dependencies using npm:**
cd backend
npm install

2.2. Configure MongoDB for Backend
Create a .env file in the backend/ directory:
touch .env
Inside the .env file, add the following:
MONGODB_URI=mongodb+srv://mdd2557:group3@speed.docah.mongodb.net/?retryWrites=true&w=majority

2.3. Run the Backend
npm run start
