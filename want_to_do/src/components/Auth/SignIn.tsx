import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSignInUser} from "../../hooks/user";
import {isEmailValid} from "./Auth+utils";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFromValid] = useState({email: false, password: false});
  const navigate = useNavigate();
  const { mutate } = useSignInUser();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSignIn = () => {
    mutate({email, password});
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsFromValid({...isFormValid, email: isEmailValid(e.target.value)});
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsFromValid({...isFormValid, password: e.target.value.length > 8});
  }

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <span className={`text-xl mb-4`}>로그인</span>
      <span>아이디</span>
      <input className={`bg-neutral-100`}
             type="text"
             value={email}
             onChange={handleEmailInput}
      />
      <span>비밀번호</span>
      <input className={`bg-neutral-100`}
             type="password"
             onChange={handlePasswordInput}
      />
      <button onClick={handleSignIn}
              disabled={!isFormValid.email || !isFormValid.password}>
        로그인
      </button>
      <button onClick={() => {navigate("/")}}>홈으로</button>
    </div>
  )
}

export default SignIn