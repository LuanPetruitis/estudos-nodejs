import { CategoriesRepository } from '../../repositories/implementations/CategoriresRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
