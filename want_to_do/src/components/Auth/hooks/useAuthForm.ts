import React, {useState} from "react";
import {isEmailValid, isPasswordValid} from "../Auth+utils";

const useAuthForm = (
  _handleSubmit: (email: string, password: string) => void,
  _handleCancel: () => void
) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = ():boolean => {
    return isEmailValid(email) && isPasswordValid(password);
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("이메일과 패스워드를 정확히 입력해주세요.")
      return;
    }
    _handleSubmit(email, password);
  }

  const handleCancel = () => {
    _handleCancel();
  }

  return {
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    handleCancel,
  }
}

export default useAuthForm;