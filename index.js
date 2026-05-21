import express from 'express';

import userRoutes from './Routes/users.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

