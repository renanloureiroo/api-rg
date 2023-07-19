type UserFoodProfileType = {
  userId: string;
  foodProfileId: string;
};

export interface ICreateUserFoodProfilesDTO {
  data: UserFoodProfileType[];
}
