export class User {
  id!: String;
  firstName: String;
  lastName: String;
  password: String;
  email!: String;

  constructor(firstName: String, lastName: String, password: String, email: String) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }
}
