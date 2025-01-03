export class User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  gender: string;
  location: string;

  constructor(fName: string, lName: string, age: number, email: string, gender: string, location: string) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.location = location;
  }
};
