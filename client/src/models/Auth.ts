export interface AuthLogin {
  method: string;
  url: string;
  data: AuthLoginBody;
}

export interface AuthLoginBody {
  email: string;
  password: string;
}
export interface AuthRegister {
  method: string;
  url: string;
  data: AuthRegisterBody;
}

export interface AuthRegisterBody {
  name: string;
  email: string;
  password: string;
}
