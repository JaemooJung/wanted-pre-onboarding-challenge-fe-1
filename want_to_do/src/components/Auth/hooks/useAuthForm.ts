import React, {useState} from "react";
import {isEmailValid} from "../Auth+utils";

const useAuthForm = (
  _handleSubmit: (email: string, password: string) => void,
  _handleCancel: () => void
) => {
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
    _handleSubmit(email, password);
  }

  const handleCancel = () => {
    _handleCancel();
  }

  return {
    isFormValid,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    handleCancel,
  }
}

export default useAuthForm;