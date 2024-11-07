import express from 'express';
import userRoutes from './routes/userRoutes';
import sequelize from './database';

const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

sequelize.sync({force:true}).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

