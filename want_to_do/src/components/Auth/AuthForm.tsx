import React, {useState} from "react";
import {isEmailValid} from "./Auth+utils";

interface AuthFormProps {
  submitLabel: string;
  handleSubmit: (email: string, password: string) => void;
  cancelLabel: string;
  handleCancel: () => void;
}

const AuthForm = (props: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFromValid] = useState({email: false, password: false});

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsFromValid({...isFormValid, email: isEmailValid(e.target.value)});
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsFromValid({...isFormValid, password: e.target.value.length > 8});
  }

  const handleSubmit = () => {
    props.handleSubmit(email, password);
  }

  const handleCancel = () => {
    props.handleCancel();
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
      <button onClick={handleSubmit}
              disabled={!isFormValid.email || !isFormValid.password}>
        {props.submitLabel}
      </button>
      <button onClick={handleCancel}>
        {props.cancelLabel}
      </button>
    </div>
  )

}

export default AuthForm;