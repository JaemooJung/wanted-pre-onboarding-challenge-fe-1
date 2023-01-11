import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {isEmailValid} from "./Auth+utils";
import {useSignUpUser} from "../../hooks/user";
import AuthForm from "./AuthForm";

const SignUp = () => {
  const navigate = useNavigate();
  const {mutate} = useSignUpUser();

  const handleSignUp = (email:string, password: string) => {
    mutate({email, password});
  }

  const toIntro = () => {
    navigate("/");
  }

  return (
    <AuthForm submitLabel={"회원가입"}
              handleSubmit={handleSignUp}
              cancelLabel={"취소"}
              handleCancel={toIntro}
    />
  )
}

export default SignUp