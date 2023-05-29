import { Router } from 'express';

import { CategoriesRepository } from '../models/cars/repositories/CategoriresRepository';
import { CreateCategoryService } from '../models/cars/services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json(allCategories);
});

export { categoriesRoutes };
