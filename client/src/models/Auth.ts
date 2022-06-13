export interface AuthLogin {
  method: string;
  url: string;
  body: AuthLoginBody;
}

export interface AuthLoginBody {
    email: string;
    password: string;
}
export interface AuthRegister {
  method: string;
  url: string;
  body: AuthRegisterBody;
}

export interface AuthRegisterBody {
    name: string;
    email: string;
    password: string;
}
