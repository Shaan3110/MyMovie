import axios from "axios";
import { AuthLogin, AuthRegister } from "../models/Auth";
import setAuthToken from "../utils/controllers/setAuthController";

const baseUrl: string = String(process.env.REACT_APP_SERVER_URL);

export const loginauth = async (email: string, password: string) => {
//   console.log(baseUrl);
  const options: AuthLogin = {
    method: "post",
    url: `${baseUrl}auth/login`,
    data: {
      email,
      password,
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        if (response?.status === 200) {
          setAuthToken(response?.data?.token);
        }
        return response?.status as Number;
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (e) {
    // console.log(e);
  }
};

export const signupauth = async (
  name: string,
  email: string,
  password: string,
) => {
  const options: AuthRegister = {
    method: "post",
    url: `${baseUrl}auth/register`,
    data: {
      name,
      email,
      password,
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        if (response?.status === 200) {
          setAuthToken(response?.data?.token);
        }
        return response?.status as Number;
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (e) {
    // console.log(e);
  }
};
