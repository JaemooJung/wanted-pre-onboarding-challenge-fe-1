import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSignInUser} from "../../hooks/user";
import AuthForm from "./AuthForm";

const SignIn = () => {

  const navigate = useNavigate();
  const { mutate } = useSignInUser();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignIn = (email: string, password: string) => {
    mutate({email, password});
  }

  const toIntro = () => {
    navigate("/");
  }

  return (
      <AuthForm submitLabel={"로그인"}
                handleSubmit={handleSignIn}
                cancelLabel={"취소"}
                handleCancel={toIntro}
      />
  )
}

export default SignIn