import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

// Todas as rotas irá iniciar com esse path /categories
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };
