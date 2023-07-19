type SocialType = 'FACEBOOK' | 'GOOGLE';

export interface ICreateAccountDTO {
  socialUserId: string;
  socialType: SocialType;
  email: string;
  name: string;
  birthday: Date;
  avatar?: string;

  userAllergies?: string[];
  userFoodProfiles?: string[];
}
