import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {isEmailValid} from "./Auth+utils";
import {useSignUpUser} from "../../hooks/user";
import AuthForm from "./AuthForm";
import useToIntroPage from "./hooks/useToIntroPage";

const SignUp = () => {
  const toIntroPage = useToIntroPage();
  const {mutate} = useSignUpUser();

  const handleSignUp = (email:string, password: string) => {
    mutate({email, password});
  }

  return (
    <AuthForm submitLabel={"회원가입"}
              handleSubmit={handleSignUp}
              cancelLabel={"취소"}
              handleCancel={toIntroPage}
    />
  )
}

export default SignUp