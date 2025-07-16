export interface crendentialType {
  username: string;
  password: string;
}

export interface IinitialState {
  registerUsers: crendentialType[] | [];
}
export interface IuserForm {
  id: string;
  name: string;
  mobilenumber: string;
  email: string;
  location: string;
  gender: string;
  education: string;
}

export interface IallUsers {
  id: string;
  name: string;
  mobilenumber: string;
  email: string;
  location: string;
  gender: string;
  education: string;
}

export interface IinitialFormState {
  allUsers: IallUsers[] | [];
  userForm: IallUsers;
}
