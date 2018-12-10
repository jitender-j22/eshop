export interface UserRegistration {
  Name: string;
  Email: string;
  Password: string;
}

export interface UserLogin {
  Email: string;
  Password: string;
}

export interface CurrentUser {
  Company: string;
  Email: string;
  Password: string;
  Title: string;
  Name: string;
  LName: string;
}
