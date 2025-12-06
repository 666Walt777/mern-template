import express from 'express';
import dotenv from 'dotenv';
 
import cors from 'cors';
import   authRoutes from './routes/auth.routes.js';
import db from './db/db.js';  


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
db();

// Routes
app.use('/', authRoutes); 

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});     