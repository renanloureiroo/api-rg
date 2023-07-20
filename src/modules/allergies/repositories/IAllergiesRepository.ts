import { Allergy } from '../entities/Allergy';

interface IAllergiesRepository {
  getAll(): Promise<Allergy[]>;
}
export { IAllergiesRepository };
