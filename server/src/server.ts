import express from 'express';
import sequelize from './database.js';
import allRoutes from './routes/index.js';
import { User } from './models/index.js';
import users from './dbusers.js';
const app = express();
const port = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.static('../../client/dist'));
app.use(express.json());

// Use the user routes
app.use(allRoutes);

sequelize.sync({force:true}).then(async () => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    await User.bulkCreate(users)
    .then(() => console.log('Users inserted'))
    .catch(err => console.error('Error inserting users:', err));
});

