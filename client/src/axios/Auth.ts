import axios from "axios";
import { AuthLogin, AuthRegister, AuthRegisterBody } from "../models/Auth";
import { setAuthToken } from "../utils/controllers/setAuthController";

const base_url: string = String(process.env.REACT_SERVER_URL);

export const loginauth = async (email:string,password:string) => {
  const options: AuthLogin = {
    method: "POST",
    url: base_url+"/auth/login",
    body: {
        email:email,
        password:password
    }
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        if(response?.status==200)
        {
            setAuthToken(response?.data?.token)
        }
        return response?.status as Number;
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
};



export const signupauth = async (name:string,email:string,password:string) => {
  const options: AuthRegister = {
    method: "Post",
    url: base_url+"/auth/register",
    body:{
        name:name,
        email:email,
        password:password
    }
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        if(response?.status==200)
        {
            setAuthToken(response?.data?.token)
        }
        return response?.status as Number;
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
};
