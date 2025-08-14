import express from 'express';
import cors from 'cors';
import setRoutes from './routes/courses';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});