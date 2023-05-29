import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

// Todas as rotas irá iniciar com esse path /categories
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('Server is running!'));
