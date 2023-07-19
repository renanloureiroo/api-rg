type UserAllergyType = {
  userId: string;
  allergyId: string;
};

export interface ICreateUserAllergiesDTO {
  data: UserAllergyType[];
}
