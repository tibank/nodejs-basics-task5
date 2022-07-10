export interface IUserRegisterDto {
  firstName: String;
  lastName: String;
  password: String;
  email: String;
}

export interface IUserLoginDto {
  password: String;
  email: String;
}
