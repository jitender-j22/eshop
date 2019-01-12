export interface UserRegistration {
  Name: string;
  Email: string;
  Password: string;
}

export interface UserLogin {
  Email: string;
  Password: string;
}

// export interface CurrentUser {
//   Company: string;
//   Email: string;
//   Password: string;
//   Title: string;
//   Name: string;
//   LName: string;
// }

export interface CurrentUser {
  company: string;
  email: string;
  password: string;
  title: string;
  name: string;
  lname: string;
}
