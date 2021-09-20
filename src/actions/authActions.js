import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { toast } from "react-toastify";
import { IS_AUTHENTICATED } from "./types";
import { api_url } from "../utils/api";
import { createContext } from "react";

export const userLogin = (user, history) => (dispatch) => {



  axios
    .post(api_url + "/api/admin/login", user)
    .then((res) => {
      if (res.data.error) return toast.error(res.data.error);
      if (res.data.success) {
        const { token, userRole} = res.data.data;
        console.log("role :",userRole)
        setAuthToken(token);
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userRole", userRole);

        dispatch({ type: IS_AUTHENTICATED, payload: true  , userRoleType : userRole });
        toast.success("Logged in successfully");
        if(userRole === 'teacher'){
          history.push("/layout");
        }
        else if(userRole === 'admin'){
          history.push("/layout");
        }
       
      }
    })
    .catch((err) => console.log(err));
};

