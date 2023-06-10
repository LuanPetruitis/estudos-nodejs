import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw Error('Specification already exists!');
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { ImportCategoryUseCase };
