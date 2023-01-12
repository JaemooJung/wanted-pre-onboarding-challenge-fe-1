import React, {useEffect} from "react";
import {useSignInUser} from "../../hooks/user";
import AuthForm from "./AuthForm";
import useToIntroPage from "./hooks/useToIntroPage";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const toIntroPage = useToIntroPage();
  const { mutate } = useSignInUser();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSignIn = (email: string, password: string) => {
    mutate({email, password});
  }

  return (
      <AuthForm submitLabel={"로그인"}
                handleSubmit={handleSignIn}
                cancelLabel={"취소"}
                handleCancel={toIntroPage}
      />
  )
}

export default SignIn