import { inject, injectable } from 'tsyringe';
import { Allergy } from '../../entities/Allergy';
import { IAllergiesRepository } from '../../repositories/IAllergiesRepository';

@injectable()
class GetAllAllergiesUseCase {
  constructor(
    @inject('AllergiesRepository')
    private readonly allergiesRepository: IAllergiesRepository
  ) {}

  execute(): Promise<Allergy[]> {
    return this.allergiesRepository.getAll();
  }
}

export { GetAllAllergiesUseCase };
