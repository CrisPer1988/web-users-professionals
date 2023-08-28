import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DataLoginUser } from "../utils/interfaces";
import { setIsLoggin } from "../store/slices/isloggin.slices"
import { useDispatch } from "react-redux";
import axiosInstance from "../utils/getConfig";


export const useSubmitLogin = () => {
   const navigate = useNavigate();
  const { reset } = useForm();
  const [handleError, sethandleError] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const submit = (data:DataLoginUser) => {
    //const url = "http://localhost:4600/api/v1/users/login/";

    axiosInstance
    //axios
      .post("/api/v1/users/login/", data)
      .then((res) => {
         dispatch(setIsLoggin(false));
        localStorage.setItem('isLoggin', JSON.stringify(false));
     
        localStorage.setItem("token", res.data.token);
        setName(res.data.user.name);
        setWelcome(true);
        setTimeout(() => {
          setWelcome(false);
         navigate("/professionals");
        }, 2500);

        reset();
      })
      .catch((err) => {
        sethandleError(true);
        setTimeout(() => {
          sethandleError(false);
        }, 2000);
        console.log(err);
      });


  };
  return {
    handleError,
    welcome,
    name,
    submit,
  };
};

export default useSubmitLogin