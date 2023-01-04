import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {isEmailValid} from "./Auth+utils";
import {useSignUpUser} from "../hooks/user";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFromValid] = useState({email: false, password: false});

  const navigate = useNavigate();
  const {mutate} = useSignUpUser();

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsFromValid({...isFormValid, email: isEmailValid(e.target.value)});
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsFromValid({...isFormValid, password: e.target.value.length > 8});
  }

  const handleSignUp = () => {
    mutate({email, password});
  }

  return (
    <div className={`flex flex-col content-center justify-center gap-2`}>
      <h1>Want-To-Do</h1>
      <span className={`text-xl mb-4`}>회원가입</span>
      <span>이메일</span>
      <input className={`bg-neutral-100`}
             type="email"
              value={email}
              onChange={handleEmailInput}
      />
      <span>비밀번호</span>
      <input className={`bg-neutral-100`}
              type="password"
              onChange={handlePasswordInput}
      />
      <button onClick={handleSignUp}
              disabled={!isFormValid.email || !isFormValid.password}
      >
        가입하기
      </button>
      <button onClick={() => {navigate("/")}}>홈으로</button>
    </div>
  )
}

export default SignUp